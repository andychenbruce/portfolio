use andy_webgl_utils::matrix_to_vec;
use cgmath::SquareMatrix;
use wasm_bindgen::prelude::*;
use web_sys::Event;

const SQUARE_VERTS: &[f32] = &[
    -1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0,
];

struct MouseState {
    mouse_drag_pos_prev: Option<(f32, f32)>,
    mouse_down: bool,
}

#[derive(Clone)]
struct Globals {
    context: web_sys::WebGl2RenderingContext,
    camera_matrix_location: web_sys::WebGlUniformLocation,
    model_matrix_location: web_sys::WebGlUniformLocation,
    mouse: std::sync::Arc<std::sync::Mutex<MouseState>>,
    camera_matrix: std::sync::Arc<std::sync::Mutex<cgmath::Matrix4<f32>>>,
    model_offset_matrix: std::sync::Arc<std::sync::Mutex<cgmath::Matrix4<f32>>>,
    zoom_amount: std::sync::Arc<std::sync::Mutex<f32>>,
}

fn make_globals(
    context: web_sys::WebGl2RenderingContext,
    program: web_sys::WebGlProgram,
) -> Globals {
    let perspective_matrix: cgmath::Matrix4<f32> = cgmath::Matrix4::from(cgmath::Ortho {
        left: -1.0,
        right: 1.0,
        bottom: -1.0,
        top: 1.0,
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
    let camera_matrix_location = context
        .get_uniform_location(&program, "cameraMatrix")
        .unwrap();
    let model_matrix_location = context
        .get_uniform_location(&program, "modelMatrix")
        .unwrap();
    let mouse = std::sync::Arc::new(std::sync::Mutex::new(MouseState {
        mouse_down: false,
        mouse_drag_pos_prev: None,
    }));
    Globals {
        context,
        camera_matrix_location,
        model_matrix_location,
        mouse,
        zoom_amount: std::sync::Arc::new(std::sync::Mutex::new(1.0)),
        camera_matrix: std::sync::Arc::new(std::sync::Mutex::new(
            cgmath::Matrix4::from_translation(cgmath::Vector3 {
                x: 0.0,
                y: 0.0,
                z: -3.0,
            }),
        )),
        model_offset_matrix: std::sync::Arc::new(
            std::sync::Mutex::new(cgmath::Matrix4::identity()),
        ),
    }
}
#[wasm_bindgen]
pub fn andy_main() {
    let (_context, _program) = andy_webgl_utils::setup_canvas(
        "andy_canvas",
        andy_webgl_utils::ShaderProg {
            vert_shader_source: include_str!("./shaders_source/vertex.glsl"),
            frag_shader_source: include_str!("./shaders_source/frag.glsl"),
            verts: SQUARE_VERTS,
            vertex_attrib_name: "position",
            draw_func: draw,
        },
        vec![
            ("mousedown", andy_mousedown_callback as fn(Globals, Event)),
            ("mouseup", andy_mouseup_callback as fn(Globals, Event)),
            ("mousemove", andy_mousemove_callback as fn(Globals, Event)),
            ("wheel", andy_mouse_scroll_callback),
        ],
        make_globals,
    );
}

fn andy_mousedown_callback(globals: Globals, _e: web_sys::Event) {
    let mut mouse = globals.mouse.lock().unwrap();
    mouse.mouse_down = true;
    mouse.mouse_drag_pos_prev = None;
}
fn andy_mouseup_callback(globals: Globals, _e: web_sys::Event) {
    globals.mouse.lock().unwrap().mouse_down = false;
}
fn andy_mousemove_callback(globals: Globals, e: web_sys::Event) {
    let mouse_event: web_sys::MouseEvent = e.dyn_into().unwrap();

    let mut mouse_state = globals.mouse.lock().unwrap();
    if mouse_state.mouse_down {
        let mut model_offset_matrix = globals.model_offset_matrix.lock().unwrap();

        let zoom_amount = *globals.zoom_amount.lock().unwrap();

        let new_x = (mouse_event.x() as f32 / 400.0) / zoom_amount;
        let new_y = (mouse_event.y() as f32 / 400.0) / zoom_amount;

        if let Some((old_x, old_y)) = mouse_state.mouse_drag_pos_prev {
            let dx = new_x - old_x;
            let dy = new_y - old_y;
            *model_offset_matrix =
                cgmath::Matrix4::from_translation(cgmath::Vector3::new(dx, -dy, 0.0))
                    * *model_offset_matrix;
        }

        mouse_state.mouse_drag_pos_prev = Some((new_x, new_y));
    }
}

fn andy_mouse_scroll_callback(globals: Globals, e: web_sys::Event) {
    e.prevent_default();

    let wheel_event: web_sys::WheelEvent = e.dyn_into().unwrap();
    let scroll_amount = (wheel_event.delta_y() / 400.0) as f32;
    let mut zoom_amount = globals.zoom_amount.lock().unwrap();
    *zoom_amount *= 2.0_f32.powf(scroll_amount);
}

fn draw(globals: Globals) {
    globals
        .context
        .clear(web_sys::WebGl2RenderingContext::COLOR_BUFFER_BIT);

    globals.context.uniform_matrix4fv_with_f32_array(
        Some(&globals.camera_matrix_location),
        false,
        &matrix_to_vec(*globals.camera_matrix.lock().unwrap()),
    );

    globals.context.uniform_matrix4fv_with_f32_array(
        Some(&globals.model_matrix_location),
        false,
        &matrix_to_vec(
            cgmath::Matrix4::from_scale(*globals.zoom_amount.lock().unwrap())
                * *globals.model_offset_matrix.lock().unwrap(),
        ),
    );

    draw_square(&globals);
}

fn draw_square(globals: &Globals) {
    globals
        .context
        .draw_arrays(web_sys::WebGl2RenderingContext::TRIANGLES, 0, 6);
}
