import React from "react";

import Wrapper from "../../wrapper.js";
import { AndyCodeBlock } from "../../include_code.js";

function Fire({title}: {title: string}) {
  let new_heads = (
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_heads} title={title}>
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

      <p>
        To draw the flame, we create a series of circles that rise, expand, and
        diminish in opacity.
      </p>
      <p>
        To minimize the number of fragments, each circle is represented as a
        "billboard" rather than a sphere. A billboard is a flat sprite that is
        rotated in 3D space to always face the viewer.
      </p>
      <hr className="clearLeft" />
      <p>
        To implement the billboard, I take the transformation matrix, and
        reverse the rotation while leaving any scaling or translation. This is
        done by removing the scaling and translation, and then inverting the
        matrix, and multiplying that inverted matrix back to the original
        tranformation matrix. The code is listed below.
      </p>
      <AndyCodeBlock
        source_path="static/projects/fire/drawBillboard.cpp"
        language="cpp"
      />

      <hr className="clearLeft" />
      <p>Here is the rest of the code to draw the flame.</p>
      <AndyCodeBlock
        source_path="static/projects/fire/main.cpp"
        language="cpp"
      />

      <hr className="clearLeft" />
      <p>Here is the fragment shader that runs on the GPU.</p>
      <AndyCodeBlock
        source_path="static/projects/fire/shader.frag"
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
  [ 0, 'r', 'Run' ],
  [ 0, 'S', 'Pause' ],
	];
	var Module = {
	  canvas: document.getElementById("canvas"),
	  arguments: ["-tab", "29", "-smallButtons" ]
	};`,
        }}
      />

      <script></script>
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default Fire;
