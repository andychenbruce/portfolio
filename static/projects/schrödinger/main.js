import init from "./wasm/schrödinger.js";
import {andy_main, set_panic_hook} from "./wasm/schrödinger.js";

await init().then(() => {
    set_panic_hook();
});

andy_main();
