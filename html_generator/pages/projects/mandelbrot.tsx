import React from "react";
import {MakeMath} from "../../render_math.js";

import { AndyCodeBlock } from "../../include_code.js";
import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  let new_heads = (
    <>
      <link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
	integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
	crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
      />
      <script type="module" src="./main.js"></script>
    </>
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <div id="dvMain">
        <canvas
          id="andy_canvas"
          width="800"
          height="800"
          onContextMenu={(event) => event.preventDefault()}
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <h1>Try mouse drag and drop, zoom, on the image</h1>
      <p>
        As you move the image, it is dynamically regenerated using the massive
        parallelism of your computer's{" "}
        <a href="https://en.wikipedia.org/wiki/Graphics_processing_unit">GPU</a>
        . using the <a href="https://en.wikipedia.org/wiki/OpenGL">OpenGL</a>{" "}
        library. A GPU in a typical computer has thousands of core processors.
      </p>
      <br />
      <br />
      <h3>
        A point is in the{" "}
        <a href="https://en.wikipedia.org/wiki/Mandelbrot_set">
          Mandelbrot Set
        </a>{" "}
        if z diverges when repetatively calculated, where:
      </h3>
      <MakeMath tex={"z_0 = 0+0i"} />
      <br />
      <MakeMath tex={"z_{n+1} = z_n^2 + c"} />
      <br />
      <MakeMath tex={"c"} /> is the starting point which is a complex number
      <br />
      <br />
      <br />
      <p>
        In the mandelbrot each point is calculated independently. This makes it
        perfect for drawing in parallel by the GPU since each pixel can be
        independantly calculated in the fragment shader, written in{" "}
        <a href="https://en.wikipedia.org/wiki/OpenGL_Shading_Language">GLSL</a>
        :
      </p>
      <AndyCodeBlock
        source_path="crates/mandelbrot/src/shaders_source/frag.glsl"
        language="c"
      />
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default DeltaGcode;
