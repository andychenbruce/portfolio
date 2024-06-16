import init from "./wasm/mandelbrot.js";
import {andy_main, set_panic_hook} from "./wasm/mandelbrot.js";

await init().then(() => {
    set_panic_hook();
});

andy_main();
