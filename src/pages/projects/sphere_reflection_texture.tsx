import React from "react";
import { Tex } from "react-tex";

import Wrapper from "../../wrapper.js";
import { AndyCodeBlock } from "../../include_code.js";

function Boltzman(props) {
  let new_head = (
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_head} {...props}>
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
      <canvas id="imgCanvas" width="900" height="900"></canvas>

      <p>
        For this project, I load several images into the GPU video memory and
        apply them as textures to 3D surfaces. Then I compute ray traces from
        the sphere to the displayed images to create reflections.
      </p>

      <p>
        You can use your mouse and drag to rotate the 3D image, or use the
        scroll wheel to zoom in or out.
      </p>

      <p>
        The code samples listed below are the application code I wrote in C++,
        and the fragment shader code I wrote in GLSL.
      </p>

      <hr className="clearLeft" />
      <AndyCodeBlock
        source_path="static/projects/sphere_reflection_texture/shader.vert"
        language="c"
      />

      <hr className="clearLeft" />
      <AndyCodeBlock
        source_path="static/projects/sphere_reflection_texture/shader.frag"
        language="c"
      />

      <hr className="clearLeft" />

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
      arguments: ["-tab", "10", "-smallButtons" ]
      };`,
        }}
      />
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default Boltzman;
