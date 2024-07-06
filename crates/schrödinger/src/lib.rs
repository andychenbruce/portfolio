use std::f64::consts::TAU;

//https://www.astro.utoronto.ca/~mahajan/notebooks/quantum_tunnelling.html
use wasm_bindgen::prelude::*;

const NUM_BUCKETS: usize = 180;
const BUCKET_SIZE: f64 = 1.0;
const H_BAR: f64 = 1.0;

#[derive(Debug, Copy, Clone)]
struct Complex {
    real: f64,
    imag: f64,
}

impl Complex {
    fn new(real: f64, imag: f64) -> Self {
        Complex { real, imag }
    }

    fn exp(&self) -> Self {
        //e^(a+ib) = e^a * e^(ib) = e^a * (cos(b) + i*sin(b))

        let real_scale = self.real.exp();
        let imag_real = self.imag.cos();
        let imag_imag = self.imag.sin();

        Complex {
            real: imag_real,
            imag: imag_imag,
        } * real_scale
    }

    fn magnitude(&self) -> f64 {
        (self.real * self.real) + (self.imag * self.imag)
    }
}

impl std::ops::Mul<f64> for Complex {
    type Output = Self;

    fn mul(self, rhs: f64) -> Self::Output {
        Complex {
            real: self.real * rhs,
            imag: self.imag * rhs,
        }
    }
}

impl std::ops::Mul<Complex> for Complex {
    type Output = Self;

    fn mul(self, rhs: Complex) -> Self::Output {
        Complex {
            real: (self.real * rhs.real) - (self.imag * rhs.imag),
            imag: (self.imag * rhs.real) + (self.real * rhs.imag),
        }
    }
}

impl std::ops::Mul<Complex> for f64 {
    type Output = Complex;

    fn mul(self, rhs: Complex) -> Self::Output {
        Complex {
            real: rhs.real * self,
            imag: rhs.imag * self,
        }
    }
}

impl std::ops::Add<Complex> for Complex {
    type Output = Self;

    fn add(self, rhs: Complex) -> Self::Output {
        Complex {
            real: self.real + rhs.real,
            imag: self.imag + rhs.imag,
        }
    }
}

#[derive(Clone)]
struct Globals {
    canvas: web_sys::HtmlCanvasElement,
    context: web_sys::CanvasRenderingContext2d,
    wave: std::sync::Arc<std::sync::Mutex<[Complex; NUM_BUCKETS]>>,
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
            1000 / 10,
        )
        .unwrap();

    std::mem::forget(poo); //mem leak
}

fn tick(old_wave: &mut [Complex; NUM_BUCKETS]) {
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
        let prob = wave[i].real;
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
        let prob = wave[i].imag;
        globals.context.line_to(
            (i as f64) * width_per_bucket,
            (0.5*(height as f64)) - (prob * (height as f64)),
        );
    }
    globals.context.stroke();

    globals.context.set_stroke_style(&"black".to_owned().into());
    globals.context.begin_path();
    globals.context.move_to(0.0, 0.0);
    for i in 0..NUM_BUCKETS {
        let prob = wave[i].magnitude();
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

fn make_initial_wave() -> [Complex; NUM_BUCKETS] {
    let sigma_squared: f64 = 25.0;
    let x_0 = (BUCKET_SIZE * (NUM_BUCKETS as f64)) / 2.0;
    let p_0 = 1.0;
    let at_point = |bucket: usize| {
        let x = (bucket as f64) * BUCKET_SIZE;

        let normalization = (1.0 / (TAU * sigma_squared)).sqrt().sqrt();
        let exponent_real = -((x - x_0) * (x - x_0)) / (4.0 * sigma_squared);
        let exponent_imag = p_0 * x;

        let exponent = Complex::new(exponent_real, exponent_imag);

        exponent.exp() * normalization
    };

    (0..NUM_BUCKETS)
        .map(at_point)
        .collect::<Vec<_>>()
        .try_into()
        .unwrap()
}

fn make_next_wave(curr_wave: &[Complex; NUM_BUCKETS]) -> [Complex; NUM_BUCKETS] {
    let dt = 1.0;

    let new_wave = curr_wave
        .into_iter()
        .enumerate()
        .map(|(index, curr)| {
            let prev = if index == 0 {
                None
            } else {
                curr_wave.get(index - 1)
            };
            let next = curr_wave.get(index + 1);

            let second_deriv_dx = if prev.is_none() {
                (*curr * -2.0) + *next.unwrap()
            } else if next.is_none() {
                *prev.unwrap() + (*curr * -2.0)
            } else {
                *prev.unwrap() + (*curr * -2.0) + *next.unwrap()
            } * (1.0 / (BUCKET_SIZE * BUCKET_SIZE));

            let kinetic_energy = (-0.5)  * second_deriv_dx;

            let potential_energy = Complex {
                real: 0.0,
                imag: 0.0,
            } * *curr;

            let hamiltonian = kinetic_energy + potential_energy;

            let deriv_dt = Complex {
                real: 0.0,
                imag: -1.0,
            } * hamiltonian;
                
            let new = *curr + (deriv_dt * dt);

            return new;
        })
        .collect::<Vec<_>>()
        .try_into()
        .unwrap();

    return new_wave;
}

#[wasm_bindgen]
pub fn set_panic_hook() {
    console_error_panic_hook::set_once();
}


fn calc_wave_area(wave: &[Complex; NUM_BUCKETS]){

    let sum: f64 = wave.iter().map(|x| x.magnitude() * BUCKET_SIZE).sum();

    web_sys::console::log_1(&format!("area: {:?}", sum).into());
        
}
