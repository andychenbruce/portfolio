import init from "./wasm/maxwell_boltzman_distribution.js";
import {andy_main, set_panic_hook} from "./wasm/maxwell_boltzman_distribution.js";

await init().then(() => {
    set_panic_hook();
});

andy_main();
