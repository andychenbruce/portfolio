use andy_webgl_utils::matrix_to_vec;
use cgmath::Zero;
use cgmath::{InnerSpace, MetricSpace, SquareMatrix};
use orbit_camera::MouseState;
use std::mem;
use wasm_bindgen::prelude::*;
const TRIANGLE_FRAGS: bool = true;

const MASS: f64 =  1.66e-21; // 1000000x mass of hydrogen in kg
const K_B: f64 = 1.380649e-23;
const ITERS: u32 = 2;
const NUM_SPHERE_TRIANGLES: i32 = 20 * (4_i32.pow(ITERS));
const BALL_RADIUS: f32 = 0.05;
const NUM_BALLS: usize = 300;
const HEIGHT_PER_BALL: f64 = 5.0;

const NUM_BUCKETS: usize = 40;
const BUCKET_PER_VELOCITY: f32 = 0.15;

const REALLY_SMALL: f64 = 0.00001;

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
    graph_canvas_context: web_sys::CanvasRenderingContext2d,
    graph_canvas: web_sys::HtmlCanvasElement,
    temp_text: web_sys::HtmlParagraphElement,
    energy_real_text: web_sys::HtmlParagraphElement,
}

impl orbit_camera::MouseStateGlobals for Globals {
    fn get_mouse_state(&self) -> std::sync::Arc<std::sync::Mutex<MouseState>> {
        self.mouse.clone()
    }
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
    graph_canvas_context: web_sys::CanvasRenderingContext2d,
    graph_canvas: web_sys::HtmlCanvasElement,
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

    let temp_text = web_sys::window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("temperature_indicator")
        .unwrap()
        .dyn_into::<web_sys::HtmlParagraphElement>()
        .unwrap();
    let energy_real_text = web_sys::window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("energy_indicator")
        .unwrap()
        .dyn_into::<web_sys::HtmlParagraphElement>()
        .unwrap();

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
        graph_canvas_context,
        graph_canvas,
        temp_text,
        energy_real_text,
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

    let graph_canvas = web_sys::window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("graph_canvas")
        .unwrap()
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .unwrap();

    let graph_context: web_sys::CanvasRenderingContext2d = graph_canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into()
        .unwrap();
    graph_context.set_fill_style(&"red".to_owned().into());
    graph_context.set_stroke_style(&"blue".to_owned().into());
    graph_context.set_line_width(3.0);

    let balls = std::sync::Arc::new(std::sync::Mutex::new(
        (0..NUM_BALLS)
            .map(|_| Ball {
                pos: make_random_vec(),
                vel: cgmath::Vector3::new(1.0, 1.0, 1.0),
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
                orbit_camera::andy_mousedown_callback as fn(Globals, web_sys::Event),
            ),
            (
                "mouseup",
                orbit_camera::andy_mouseup_callback as fn(Globals, web_sys::Event),
            ),
            (
                "mousemove",
                orbit_camera::andy_mousemove_callback as fn(Globals, web_sys::Event),
            ),
        ],
        |context, program| {
            make_globals(
                context,
                program,
                sphere_verts_start,
                graph_context,
                graph_canvas,
                balls.clone(),
            )
        },
        [0.7, 0.85, 1.0, 1.0],
    );

    let energy_slider = std::sync::Arc::new(std::sync::Mutex::new(
        web_sys::window()
            .unwrap()
            .document()
            .unwrap()
            .get_element_by_id("energySlider")
            .unwrap()
            .dyn_into::<web_sys::HtmlInputElement>()
            .unwrap(),
    ));
    let energy_target_text = web_sys::window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("energy_indicator_target")
        .unwrap()
        .dyn_into::<web_sys::HtmlParagraphElement>()
        .unwrap();

    let for_closure = energy_slider.clone();
    let for_closure_balls = balls.clone();
    let change_energy_callback = Closure::wrap(Box::new(move |_: web_sys::Event| {
        let value_str = for_closure.lock().unwrap().value();
        let energy = value_str.parse::<f64>().unwrap() * 10e-21;
        energy_target_text.set_inner_text(&format!("slider energy: {:?}", energy));
        let mut balls = for_closure_balls.lock().unwrap();
        let total_energy: f64 = balls
            .iter()
            .map(|ball| 0.5 * MASS * (ball.vel.magnitude2() as f64))
            .sum();

        let energy_to_add = energy - total_energy;
        if energy_to_add > 0.0 {
            let ball_0_magnitude2 = balls[0].vel.magnitude2() as f64;
            //E = mv^2
            //dE = mv'^2 - mv^2
            //dE + mv^2 = mv'^2
            //(dE/m) + vn^2 = v'^2
            //sqrt((dE/m) + v^2) = v'
            let new_magnitude = ((energy_to_add / MASS) + ball_0_magnitude2).sqrt();
            if ball_0_magnitude2 > REALLY_SMALL {
                balls[0].vel = balls[0].vel.normalize() * (new_magnitude as f32);
            } else {
                balls[0].vel = cgmath::Vector3 {
                    x: ((3.0 as f32).sqrt()) * (new_magnitude as f32),
                    y: ((3.0 as f32).sqrt()) * (new_magnitude as f32),
                    z: ((3.0 as f32).sqrt()) * (new_magnitude as f32),
                };
            }
        } else {
            let mut energy_left_to_remove = -energy_to_add;
            for ball in balls.iter_mut() {
                let ball_energy = 0.5 * MASS * (ball.vel.magnitude2() as f64);
                if ball_energy < energy_left_to_remove {
                    ball.vel = cgmath::Vector3::<f32>::zero();
                    energy_left_to_remove -= ball_energy;
                } else {
                    //E = mv^2
                    //dE = mv^2 - mv'^2
                    //mv'^2 = mv^2 - dE
                    //v'^2 = v^2 - (dE/m)
                    //v' = sqrt(v^2 - (dE/m))
                    let new_mag =
                        ((ball.vel.magnitude2() as f64) - (energy_left_to_remove / MASS)).sqrt();
                    ball.vel = ball.vel.normalize() * (new_mag as f32);

                    break;
                }
            }
        }
    }) as Box<dyn FnMut(_)>);

    energy_slider
        .lock()
        .unwrap()
        .set_oninput(Some(change_energy_callback.as_ref().dyn_ref().unwrap()));
    mem::forget(change_energy_callback); //mem leak

    let tick_closure = Closure::wrap(Box::new(move || {
        let mut thing = balls.lock().unwrap();
        tick(thing.as_mut());
    }) as Box<dyn FnMut()>);
    web_sys::window()
        .unwrap()
        .set_interval_with_callback_and_timeout_and_arguments_0(
            tick_closure.as_ref().dyn_ref().unwrap(),
            1000 / 60,
        )
        .unwrap();

    std::mem::forget(tick_closure); //mem leak
}

fn tick(balls: &mut [Ball]) {
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

    globals.graph_canvas_context.clear_rect(
        0.0,
        0.0,
        globals.graph_canvas.width().into(),
        globals.graph_canvas.height().into(),
    );

    let total_energy: f64 = balls
        .iter()
        .map(|ball| 0.5 * MASS * (ball.vel.magnitude2() as f64))
        .sum();

    let k_b_temp = total_energy / ((((3 * NUM_BALLS) as f64) / 2.0) - 1.0);
    globals
        .temp_text
        .set_text_content(Some(&format!("{}", k_b_temp / K_B)));
    globals
        .energy_real_text
        .set_text_content(Some(&format!("real energy{:?}", total_energy)));

    let canvas_height: f64 = globals.graph_canvas.height().into();

    let width: f64 = (globals.graph_canvas.width() as f64) / (NUM_BUCKETS as f64);
    for (i, num) in buckets.into_iter().enumerate() {
        globals.graph_canvas_context.fill_rect(
            width * (i as f64),
            canvas_height,
            width,
            -HEIGHT_PER_BALL * (num as f64),
        );
    }

    globals.graph_canvas_context.begin_path();
    globals.graph_canvas_context.move_to(0.0, 0.0);
    for i in 0..buckets.len() {
        let s = (i as f64) * (BUCKET_PER_VELOCITY as f64);
        let pdf = (MASS / k_b_temp).powi(3).sqrt()
            * 2.0
            * (1.0 / std::f64::consts::TAU.sqrt())
            * s.powi(2)
            * ((-MASS * s * s) / (2.0 * k_b_temp)).exp()
            * (BUCKET_PER_VELOCITY as f64);
        globals.graph_canvas_context.line_to(
            width * (i as f64),
            canvas_height - (pdf * (NUM_BALLS as f64) * HEIGHT_PER_BALL),
        );
    }
    globals.graph_canvas_context.stroke();
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
