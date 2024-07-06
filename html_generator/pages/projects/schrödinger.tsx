import React from "react";
import {MakeMath} from "../../render_math.js";


import Wrapper from "../../wrapper.js";

function Schrödinger({title}: {title: string}) {
  let new_head = (
    <>
      <link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
	integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
	crossOrigin="anonymous"
      />
      <script type="module" src="./main.js"></script>
    </>
  );

  return (
    <Wrapper head={new_head} title={title}>
      <canvas
        id="andy_canvas"
        width="800"
        height="800"
      ></canvas>
      <hr className="clearLeft" />
      <h2>test</h2>
      <p>
	bruhbruh
      </p>
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default Schrödinger;
