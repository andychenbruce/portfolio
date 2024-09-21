use wasm_bindgen::prelude::*;

pub struct MouseState {
    pub mouse_down: bool,
    pub mouse_drag_pos_prev: Option<(i32, i32)>,
    pub mouse_drag_pos: Option<(i32, i32)>,
}

pub trait MouseStateGlobals {
    fn get_mouse_state(&self) -> std::sync::Arc<std::sync::Mutex<MouseState>>;
}

pub fn andy_mousemove_callback<G: MouseStateGlobals>(globals: G, e: web_sys::Event) {
    let mouse_event: web_sys::MouseEvent = e.dyn_into().unwrap();
    let mouse_state = globals.get_mouse_state();
    let mut mouse_state = mouse_state.lock().unwrap();
    if mouse_state.mouse_down {
        mouse_state.mouse_drag_pos_prev = mouse_state.mouse_drag_pos;
        mouse_state.mouse_drag_pos = Some((mouse_event.x(), mouse_event.y()));
    }
}

pub fn andy_mouseup_callback<G: MouseStateGlobals>(globals: G, _e: web_sys::Event) {
    globals.get_mouse_state().lock().unwrap().mouse_down = false;
}

pub fn andy_mousedown_callback<G: MouseStateGlobals>(globals: G, _e: web_sys::Event) {
    let mouse_state = globals.get_mouse_state();
    let mut mouse_state = mouse_state.lock().unwrap();
    mouse_state.mouse_drag_pos_prev = None;
    mouse_state.mouse_drag_pos = None;
    mouse_state.mouse_down = true;
}
