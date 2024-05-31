import React from "react";
import { Tex } from "react-tex";

import { AndyCodeBlock } from "../../include_code.js";
import Wrapper from "../../wrapper.js";

function DeltaGcode(props) {
  let new_heads = (
    <>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
        crossOrigin="anonymous"
      />
    </>
  );

  return (
    <Wrapper head={new_heads} {...props}>
      <div id="dvMain">
        <div id="dvSmallButtons" className="dvB"></div>
        <div id="dvLargeButtons" className="dvB"></div>
        <canvas
          id="canvas"
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
      <Tex texContent={"z_0 = 0+0i"} />
      <br />
      <Tex texContent={"z_{n+1} = z_n^2 + c"} />
      <br />
      <Tex texContent={"c"} /> is the starting point which is a complex number
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
        source_path="static/projects/mandelbrot/mandelbrot.frag"
        language="c"
      />
      <hr className="clearLeft" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      var g = {};
      g.smallButtons = true;
      g.buttonArray = [
	  [ 0, 'R', 'Reset' ],
      ];
      var Module = {
	  canvas: document.getElementById("canvas"),
	  arguments: ["-tab", "3", "-smallButtons" ]
	    };`,
        }}
      ></script>
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default DeltaGcode;
