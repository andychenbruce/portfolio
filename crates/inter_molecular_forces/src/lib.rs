use andy_webgl_utils::matrix_to_vec;
use wasm_bindgen::prelude::*;

use cgmath::{InnerSpace, MetricSpace, SquareMatrix};
const TRIANGLE_FRAGS: bool = true;

const ITERS: u32 = 2;
const NUM_SPHERE_TRIANGLES: i32 = 20 * (4_i32.pow(ITERS));
const BALL_RADIUS: f32 = 0.03;
const NUM_BALLS: usize = 600;

const POTENTIAL_ZERO: f32 = 2.5 * BALL_RADIUS;
const EPSILON: f32 = 0.0001;

const NUM_BUCKETS: usize = 40;
const BUCKET_PER_VELOCITY: f32 = 0.15;

#[repr(u32)]
#[derive(Copy, Clone)]
enum FragEnum {
    Floor = 0,
    Black = 1,
    White = 2,
    Red = 3,
    Green = 4,
    Blue = 5,
    Cyan = 6,
    Magenta = 7,
    Yellow = 8,
}

struct MouseState {
    mouse_down: bool,
    mouse_drag_pos_prev: Option<(i32, i32)>,
    mouse_drag_pos: Option<(i32, i32)>,
}

#[derive(Debug)]
struct Ball {
    pos: cgmath::Vector3<f32>,
    vel: cgmath::Vector3<f32>,
}

#[derive(Clone)]
struct Globals {
    last_tick_time: std::sync::Arc<std::sync::Mutex<u64>>,
    context: web_sys::WebGl2RenderingContext,
    camera_matrix_location: web_sys::WebGlUniformLocation,
    model_matrix_location: web_sys::WebGlUniformLocation,
    light_pos_location: web_sys::WebGlUniformLocation,
    frag_enum_location: web_sys::WebGlUniformLocation,
    mouse: std::sync::Arc<std::sync::Mutex<MouseState>>,
    camera_rotate_matrix: std::sync::Arc<std::sync::Mutex<cgmath::Matrix4<f32>>>,
    camera_offset_matrix: cgmath::Matrix4<f32>,
    sphere_verts_start: i32,
    balls: std::sync::Arc<std::sync::Mutex<[Ball; NUM_BALLS]>>,
}

fn make_random_vec() -> cgmath::Vector3<f32> {
    cgmath::Vector3::new(
        ((2.0 * js_sys::Math::random()) - 1.0) as f32,
        ((2.0 * js_sys::Math::random()) - 1.0) as f32,
        ((2.0 * js_sys::Math::random()) - 1.0) as f32,
    )
}

fn make_globals(
    context: web_sys::WebGl2RenderingContext,
    program: web_sys::WebGlProgram,
    sphere_verts_start: i32,
    balls: std::sync::Arc<std::sync::Mutex<[Ball; NUM_BALLS]>>,
) -> Globals {
    let camera_rotate_matrix =
        std::sync::Arc::new(std::sync::Mutex::new(cgmath::Matrix4::identity()));
    let perspective_matrix: cgmath::Matrix4<f32> = cgmath::Matrix4::from(cgmath::PerspectiveFov {
        fovy: cgmath::Rad(1.3),
        aspect: 1.0,
        near: 0.001,
        far: 10.0,
    });
    let perspective_matrix_location = context
        .get_uniform_location(&program, "perspectiveMatrix")
        .unwrap();
    context.uniform_matrix4fv_with_f32_array(
        Some(&perspective_matrix_location),
        false,
        &matrix_to_vec(perspective_matrix),
    );
    let model_matrix_location = context
        .get_uniform_location(&program, "modelMatrix")
        .unwrap();
    let camera_matrix_location = context
        .get_uniform_location(&program, "cameraMatrix")
        .unwrap();
    let frag_enum_location = context.get_uniform_location(&program, "fragEnum").unwrap();
    let light_pos_location = context.get_uniform_location(&program, "lightPos").unwrap();
    let mouse = std::sync::Arc::new(std::sync::Mutex::new(MouseState {
        mouse_down: false,
        mouse_drag_pos_prev: Some((0, 0)),
        mouse_drag_pos: Some((0, 0)),
    }));

    Globals {
        context,
        last_tick_time: std::sync::Arc::new(std::sync::Mutex::new(0)),
        model_matrix_location,
        camera_matrix_location,
        frag_enum_location,
        light_pos_location,
        mouse,
        camera_rotate_matrix,
        camera_offset_matrix: cgmath::Matrix4::from_translation(cgmath::Vector3 {
            x: 0.0,
            y: 0.0,
            z: -3.0,
        }),
        sphere_verts_start,
        balls,
    }
}

fn make_cage_verts() -> Vec<f32> {
    let floor: Vec<f32> = vec![
        -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0,
        -1.0, -1.0,
    ];

    let one_side_bar = [
        cgmath::Vector4::new(0.0, -1.0, -1.0, 1.0),
        cgmath::Vector4::new(0.0, 1.0, -1.0, 1.0),
        cgmath::Vector4::new(-0.5, -1.0, -1.0, 1.0),
        cgmath::Vector4::new(-0.5, 1.0, -1.0, 1.0),
        cgmath::Vector4::new(0.5, -1.0, -1.0, 1.0),
        cgmath::Vector4::new(0.5, 1.0, -1.0, 1.0),
        cgmath::Vector4::new(1.0, -1.0, -1.0, 1.0),
        cgmath::Vector4::new(1.0, 1.0, -1.0, 1.0),
        cgmath::Vector4::new(-1.0, 0.0, -1.0, 1.0),
        cgmath::Vector4::new(1.0, 0.0, -1.0, 1.0),
        cgmath::Vector4::new(-1.0, -0.5, -1.0, 1.0),
        cgmath::Vector4::new(1.0, -0.5, -1.0, 1.0),
        cgmath::Vector4::new(-1.0, 0.5, -1.0, 1.0),
        cgmath::Vector4::new(1.0, 0.5, -1.0, 1.0),
        cgmath::Vector4::new(-1.0, 1.0, -1.0, 1.0),
        cgmath::Vector4::new(1.0, 1.0, -1.0, 1.0),
    ];

    let mut bars: Vec<cgmath::Vector4<f32>> = vec![];

    for (cos, sin) in [(1.0, 0.0), (0.0, 1.0), (-1.0, 0.0), (0.0, -1.0)] {
        bars.extend(one_side_bar.iter().map(|v| {
            cgmath::Vector4::new(v.x * cos + v.z * -sin, v.y, v.x * sin + v.z * cos, 1.0)
        }));
    }

    bars.extend(
        one_side_bar
            .iter()
            .map(|v| cgmath::Vector4::new(v.x, -v.z, v.y, 1.0)),
    );

    let mut all = vec![];

    all.extend(floor);
    all.extend(bars.into_iter().flat_map(|v| [v.x, v.y, v.z]));

    all
}

#[wasm_bindgen]
pub fn andy_main() {
    let mut verts: Vec<f32> = make_cage_verts();
    let mut sphere_verts = generate_sphere_util::generate_verticies();
    for _ in 0..2 {
        sphere_verts = generate_sphere_util::sphere_recurse_verts(sphere_verts);
    }
    let sphere_verts_start: i32 = (verts.len() / 3).try_into().unwrap();
    verts.extend(
        sphere_verts
            .iter()
            .flat_map(|t| t.iter().flat_map(|v| [v.x, v.y, v.z]).collect::<Vec<f32>>())
            .collect::<Vec<f32>>(),
    );

    let balls = std::sync::Arc::new(std::sync::Mutex::new(
        (0..NUM_BALLS)
            .map(|_| Ball {
                pos: make_random_vec(),
                vel: cgmath::Vector3::new(0.0, 0.0, 0.0),
            })
            .collect::<Vec<Ball>>()
            .try_into()
            .unwrap(),
    ));

    let (_context, _program) = andy_webgl_utils::setup_canvas(
        "andy_canvas",
        andy_webgl_utils::ShaderProg {
            vert_shader_source: include_str!("./shaders_source/vertex.glsl"),
            frag_shader_source: include_str!("./shaders_source/frag.glsl"),
            verts: &verts,
            vertex_attrib_name: "position",
            draw_func: move |globals: Globals| draw(globals),
        },
        vec![
            (
                "mousedown",
                andy_mousedown_callback as fn(Globals, web_sys::Event),
            ),
            ("mouseup", andy_mouseup_callback),
            ("mousemove", andy_mousemove_callback),
        ],
        |context, program| make_globals(context, program, sphere_verts_start, balls.clone()),
        [0.7, 0.85, 1.0, 1.0],
    );

    let poo = Closure::wrap(Box::new(move || {
        let mut thing = balls.lock().unwrap();
        tick(thing.as_mut());
    }) as Box<dyn FnMut()>);

    web_sys::window()
        .unwrap()
        .set_interval_with_callback_and_timeout_and_arguments_0(
            poo.as_ref().dyn_ref().unwrap(),
            1000 / 60,
        )
        .unwrap();

    std::mem::forget(poo); //mem leak
}

fn andy_mousedown_callback(globals: Globals, _e: web_sys::Event) {
    let mut mouse = globals.mouse.lock().unwrap();
    mouse.mouse_drag_pos_prev = None;
    mouse.mouse_drag_pos = None;
    mouse.mouse_down = true;
}
fn andy_mouseup_callback(globals: Globals, _e: web_sys::Event) {
    globals.mouse.lock().unwrap().mouse_down = false;
}
fn andy_mousemove_callback(globals: Globals, e: web_sys::Event) {
    let mouse_event: web_sys::MouseEvent = e.dyn_into().unwrap();
    let mut mouse_state = globals.mouse.lock().unwrap();
    if mouse_state.mouse_down {
        mouse_state.mouse_drag_pos_prev = mouse_state.mouse_drag_pos;
        mouse_state.mouse_drag_pos = Some((mouse_event.x(), mouse_event.y()));
    }
}

fn tick(balls: &mut [Ball]) {
    for ball1 in 0..NUM_BALLS {
        for ball2 in (ball1 + 1)..NUM_BALLS {
            let pos_diff = balls[ball2].pos - balls[ball1].pos;

            let dist = pos_diff.magnitude();
            if dist > 2.0 * BALL_RADIUS {
                let dir = pos_diff.normalize();

                let acceleration = 4.0
                    * EPSILON
                    * (-12.0 * ((POTENTIAL_ZERO / dist).powi(13) / POTENTIAL_ZERO)
                        + 6.0 * ((POTENTIAL_ZERO / dist).powi(7) / POTENTIAL_ZERO));

                balls[ball1].vel += acceleration * dir.normalize();
                balls[ball2].vel -= acceleration * dir.normalize();
            }
        }
    }

    for ball in balls.iter_mut() {
        ball.vel *= 0.995; //idk "friction"
    }

    for i in 0..NUM_BALLS {
        for j in (i + 1)..NUM_BALLS {
            let dist = balls[i].pos.distance(balls[j].pos);
            if dist < 2.0 * BALL_RADIUS {
                //https://www.sjsu.edu/faculty/watkins/collision.htm
                let pos_diff_norm = (balls[i].pos - balls[j].pos).normalize();
                let vel_diff = balls[i].vel - balls[j].vel;
                let vel_change = cgmath::dot(pos_diff_norm, vel_diff);
                if vel_change < 0.0 {
                    balls[i].vel -= vel_change * pos_diff_norm;
                    balls[j].vel += vel_change * pos_diff_norm;
                }
            }
        }
    }

    for ball in balls.iter_mut() {
        for direction in [
            (ball.pos.x, &mut ball.vel.x),
            (ball.pos.y, &mut ball.vel.y),
            (ball.pos.z, &mut ball.vel.z),
        ] {
            if (direction.0 + BALL_RADIUS) >= 1.0 && (*direction.1 > 0.0) {
                *direction.1 *= -1.0;
            }
            if (direction.0 - BALL_RADIUS <= -1.0) && (*direction.1 < 0.0) {
                *direction.1 *= -1.0;
            }
        }
    }

    for ball in balls.iter_mut() {
        ball.pos += 0.01 * ball.vel;
    }
}

fn draw(globals: Globals) {
    globals
        .context
        .clear(web_sys::WebGl2RenderingContext::COLOR_BUFFER_BIT);

    let current_time_milis = js_sys::Date::new_0().get_time() as u64;
    let mut old_time = globals.last_tick_time.lock().unwrap();
    *old_time = current_time_milis;
    //let diff = current_time_milis - *old_time;

    if let Some((vx, vy)) = {
        let mouse = globals.mouse.lock().unwrap();
        if let (Some((oldx, oldy)), Some((newx, newy))) =
            (mouse.mouse_drag_pos_prev, mouse.mouse_drag_pos)
        {
            Some((newx - oldx, -(newy - oldy))) //negate the y since up is negative on the canvas
        } else {
            None
        }
    } {
        let mut camera_rotate_matrix = globals.camera_rotate_matrix.lock().unwrap();
        let move_direction_vector = cgmath::Vector4 {
            x: vx as f32,
            y: vy as f32,
            z: 0.0,
            w: 1.0,
        };
        let forward_vector = cgmath::Vector4 {
            x: 0.0,
            y: 0.0,
            z: 1.0,
            w: 1.0,
        };
        let cross = forward_vector
            .truncate()
            .cross(move_direction_vector.truncate());
        if length(cross) != 0.0 {
            *camera_rotate_matrix = cgmath::Matrix4::from_axis_angle(
                cross.normalize(),
                cgmath::Rad(length(cross) / 200.0),
            ) * (*camera_rotate_matrix);
        }
        globals.context.uniform_matrix4fv_with_f32_array(
            Some(&globals.camera_matrix_location),
            false,
            &matrix_to_vec(globals.camera_offset_matrix * *camera_rotate_matrix),
        );
    }

    let light_pos = cgmath::Vector3::new(0.0, 5.0, 0.0);

    globals.context.uniform3f(
        Some(&globals.light_pos_location),
        light_pos.x,
        light_pos.y,
        light_pos.z,
    );

    let light_mat = cgmath::Matrix4::from_translation(light_pos) * cgmath::Matrix4::from_scale(0.2);
    draw_triangles_frags(
        &globals,
        light_mat,
        FragEnum::White,
        globals.sphere_verts_start,
        NUM_SPHERE_TRIANGLES,
    );
    draw_cage(&globals, cgmath::Matrix4::identity());

    let colors = [
        FragEnum::Red,
        FragEnum::Green,
        FragEnum::Blue,
        FragEnum::Cyan,
        FragEnum::Magenta,
        FragEnum::Yellow,
    ];

    let balls = globals.balls.lock().unwrap();

    for (i, ball) in balls.iter().enumerate() {
        let model_matrix =
            cgmath::Matrix4::from_translation(ball.pos) * cgmath::Matrix4::from_scale(BALL_RADIUS);
        draw_triangles_frags(
            &globals,
            model_matrix,
            colors[i % colors.len()],
            globals.sphere_verts_start,
            NUM_SPHERE_TRIANGLES,
        );
    }

    let mut buckets: [usize; NUM_BUCKETS] = [0; NUM_BUCKETS];

    for ball in balls.iter() {
        let velocity = ball.vel.magnitude();

        let bucket_num: usize = (velocity / BUCKET_PER_VELOCITY).floor() as usize;

        if bucket_num < buckets.len() {
            buckets[bucket_num] += 1;
        }
    }
}

fn length(vec: cgmath::Vector3<f32>) -> f32 {
    let len_squared: f32 = (vec.x * vec.x) + (vec.y * vec.y) + (vec.z * vec.z);

    len_squared.sqrt()
}
fn draw_cage(globals: &Globals, model_mat: cgmath::Matrix4<f32>) {
    globals.context.uniform_matrix4fv_with_f32_array(
        Some(&globals.model_matrix_location),
        false,
        &matrix_to_vec(model_mat),
    );
    globals
        .context
        .uniform1ui(Some(&globals.frag_enum_location), FragEnum::Floor as u32);
    globals
        .context
        .draw_arrays(web_sys::WebGl2RenderingContext::TRIANGLES, 0, 6);
    globals
        .context
        .uniform1ui(Some(&globals.frag_enum_location), FragEnum::Black as u32);
    globals
        .context
        .draw_arrays(web_sys::WebGl2RenderingContext::LINES, 6, 80);
}
fn draw_triangles_frags(
    globals: &Globals,
    model_mat: cgmath::Matrix4<f32>,
    frag_enum: FragEnum,
    start: i32,
    count: i32,
) {
    globals.context.uniform_matrix4fv_with_f32_array(
        Some(&globals.model_matrix_location),
        false,
        &matrix_to_vec(model_mat),
    );
    if TRIANGLE_FRAGS {
        globals
            .context
            .uniform1ui(Some(&globals.frag_enum_location), frag_enum as u32);
        globals
            .context
            .draw_arrays(web_sys::WebGl2RenderingContext::TRIANGLES, start, count * 3);
    }
}
