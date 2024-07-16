import init from "./wasm/inter_molecular_forces.js";
import {andy_main, set_panic_hook} from "./wasm/inter_molecular_forces.js";

await init().then(() => {
    set_panic_hook();
});

andy_main();
