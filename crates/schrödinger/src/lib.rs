use std::f32::consts::TAU;

//https://www.astro.utoronto.ca/~mahajan/notebooks/quantum_tunnelling.html
use wasm_bindgen::prelude::*;

type Complex = nalgebra::Complex<f32>;
type AndyMatrix = nalgebra::SMatrix<Complex, NUM_BUCKETS, NUM_BUCKETS>;
type AndyVector = nalgebra::SVector<Complex, NUM_BUCKETS>;
const NUM_BUCKETS: usize = 40;
const BUCKET_SIZE: f32 = 1.0;
const H_BAR: f32 = 1.0;

#[derive(Clone)]
struct Globals {
    canvas: web_sys::HtmlCanvasElement,
    context: web_sys::CanvasRenderingContext2d,
    wave: std::sync::Arc<std::sync::Mutex<AndyVector>>,
}

#[wasm_bindgen]
pub fn andy_main() {
    let canvas = web_sys::window()
        .unwrap()
        .document()
        .unwrap()
        .get_element_by_id("andy_canvas")
        .unwrap()
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .unwrap();

    let canvas_context: web_sys::CanvasRenderingContext2d = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into()
        .unwrap();
    canvas_context.set_stroke_style(&"blue".to_owned().into());
    canvas_context.set_line_width(3.0);

    let f = std::rc::Rc::new(std::cell::RefCell::new(None));
    let g = f.clone();

    let globals = Globals {
        canvas,
        context: canvas_context,
        wave: std::sync::Arc::new(std::sync::Mutex::new(make_initial_wave())),
    };
    let wave = globals.wave.clone();

    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        draw(globals.clone());
        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<dyn FnMut()>));

    request_animation_frame(g.borrow().as_ref().unwrap());

    let poo = Closure::wrap(Box::new(move || {
        let mut stuff = wave.lock().unwrap();
        tick(&mut stuff);
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

fn tick(old_wave: &mut AndyVector) {
    calc_wave_area(old_wave);
    *old_wave = make_next_wave(old_wave);
}

fn draw(globals: Globals) {
    globals.context.clear_rect(
        0.0,
        0.0,
        globals.canvas.width().into(),
        globals.canvas.height().into(),
    );

    let width_per_bucket = (globals.canvas.width() as f64) / (NUM_BUCKETS as f64);
    let height = globals.canvas.height();

    let wave = globals.wave.lock().unwrap();

    globals.context.set_stroke_style(&"red".to_owned().into());
    globals.context.begin_path();
    globals.context.move_to(0.0, 0.0);
    for i in 0..NUM_BUCKETS {
        let prob = wave[i].re as f64;
        globals.context.line_to(
            (i as f64) * width_per_bucket,
            (0.5 * (height as f64)) - (prob * (height as f64)),
        );
    }
    globals.context.stroke();

    globals.context.set_stroke_style(&"blue".to_owned().into());
    globals.context.begin_path();
    globals.context.move_to(0.0, 0.0);
    for i in 0..NUM_BUCKETS {
        let prob = wave[i].im as f64;
        globals.context.line_to(
            (i as f64) * width_per_bucket,
            (0.5 * (height as f64)) - (prob * (height as f64)),
        );
    }
    globals.context.stroke();

    globals.context.set_stroke_style(&"black".to_owned().into());
    globals.context.begin_path();
    globals.context.move_to(0.0, 0.0);
    for i in 0..NUM_BUCKETS {
        let prob = wave[i].norm() as f64;
        globals.context.line_to(
            (i as f64) * width_per_bucket,
            (0.5 * (height as f64)) - (prob * (height as f64)),
        );
    }
    globals.context.stroke();
}

fn request_animation_frame(f: &Closure<dyn FnMut()>) -> i32 {
    web_sys::window()
        .unwrap()
        .request_animation_frame(f.as_ref().dyn_ref().unwrap())
        .unwrap()
}

fn make_initial_wave() -> AndyVector {
    let sigma_squared: f32 = 25.0;
    let x_0 = (BUCKET_SIZE * (NUM_BUCKETS as f32)) / 2.0;
    let p_0 = 1.0;
    let at_point = |bucket: usize| {
        let x = (bucket as f32) * BUCKET_SIZE;

        let normalization = (1.0 / (TAU * sigma_squared)).sqrt().sqrt();
        let exponent_real = -((x - x_0) * (x - x_0)) / (4.0 * sigma_squared);
        let exponent_imag = p_0 * x;

        let exponent = Complex::new(exponent_real, exponent_imag);

        exponent.exp() * normalization
    };

    TryInto::<[Complex; NUM_BUCKETS]>::try_into((0..NUM_BUCKETS)
        .map(at_point)
        .collect::<Vec<_>>())
        .unwrap()
        .into()
}

fn make_next_wave(curr_wave: &AndyVector) -> AndyVector {
    let dt = 1.0;
    let mut mat = std::boxed::Box::new(AndyMatrix::zeros());

    for i in 0..NUM_BUCKETS {
        if i != 0 {
            *mat.index_mut((i, i - 1)) = Complex::new(1.0, 0.0);
        }
        *mat.index_mut((i, i)) = Complex::new(-2.0, 0.0);
        if i != NUM_BUCKETS - 1 {
            *mat.index_mut((i, i + 1)) = Complex::new(1.0, 0.0);
        }
    }

    *mat *= Complex::new(1.0 / (BUCKET_SIZE * BUCKET_SIZE), 0.0);

    web_sys::console::log_1(&"bruhbruh".into());
    *mat = *mat * (Complex::i() * dt);
    web_sys::console::log_1(&"multing".into());
    mat = std::boxed::Box::new(mat.exp());
    web_sys::console::log_1(&"kkkk".into());
    
    let new_wave = std::boxed::Box::new(*mat * curr_wave);

    return *new_wave;
}

#[wasm_bindgen]
pub fn set_panic_hook() {
    console_error_panic_hook::set_once();
}

fn calc_wave_area(wave: &AndyVector) {
    let sum: f32 = wave.iter().map(|x| x.norm() * BUCKET_SIZE).sum();

    web_sys::console::log_1(&format!("mm area: {:?}", sum).into());
}
