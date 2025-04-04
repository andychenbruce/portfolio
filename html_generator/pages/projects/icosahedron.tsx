import React from "react";

import Wrapper from "../../wrapper.js";
import {MakeMathDisplay, MakeMath} from "../../render_math.js";
import { AndyCodeBlock } from "../../include_code.js";

function Icosahedron({title}: {title: string}) {
  let new_head = (
    <>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
      />
      <script type="module" src="./main.js"></script>
    </>
  );

  
  return (
    <Wrapper head={new_head} title={title}>
      <div  className="centeredDiv">
	<canvas width="600" height="600" id="big_canvas"></canvas>
      </div>
      <hr />
      <div>
        <p >
          First, we draw three orthogonal golden rectangles centered on the origin. A golden rectangle has the ratio of its edge lengths equal to the golden ratio.
	  <br />
	  <div className="centeredDiv">
            <svg width="580" height="350" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="white"/>
              <rect width="485.4101961" height="300" x="0" y="50" style={{
	        fill: "rgb(255,255,127)",
 	      }}/>
              <line x1="185.4101961" y1="50" x2="185.4101961" y2="350" style={{
		stroke: "black",
		strokeWidth: 2
	      }} />
              <text x="240" y="40" style={{
		fill: "black",
		fontSize: "200%"
	      }}>A1</text>
              <text x="500" y="200" style={{
		fill: "black",
		fontSize: "200%"
	      }}>B1</text>
              <text x="130" y="210" style={{
		fill: "black",
		fontSize: "150%"
	      }}>A2</text>
              <text x="70" y="330" style={{
		fill: "black",
		fontSize: "150%"
	      }}>B2</text>
            </svg>
          </div>
	  <br/>
	  And the ratio can be solved by:
	  <MakeMathDisplay tex={"\\dfrac{A_1}{B_1} = \\dfrac{A_2}{B_2}, B_1 = A_2, A_1 = A_2 + B_2"} />
	  <MakeMathDisplay tex={"\\dfrac{A_2 + B_2}{A_2} = \\dfrac{A_2}{B_2}"} />
	  <MakeMathDisplay tex={"1 + \\dfrac{B_2}{A_2} = \\dfrac{A_2}{B_2}"} />
	  <MakeMathDisplay tex={"\\dfrac{A_2^2}{B_2^2} - \\dfrac{A_2}{B_2} - 1 = 0"} />
	  <MakeMathDisplay tex={"x^2 - x - 1 = 0"} />
	  Then use the quadratic equation
	  <MakeMathDisplay tex={"x = \\dfrac{1 + \\sqrt{5}}{2}"} />
          Then arrange them like this:
        </p>
	<div  className="centeredDiv">
	  <canvas width="400" height="400" id="small_canvas0" />
	</div>
	<br/>
	<hr />
	<p>
          Then connect the corners of the golden rectangles to their 5 neighbors. Each triplet of adjacent points can form a triangle.
	</p>
	<div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas1"></canvas>
	</div>
        <hr />
	<p>
          Then add a triangle face to each adjacent triplet of corners. Now we have a 20 face icosahedron.
	  </p>
        <div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas2"></canvas>
	</div>
	<hr />
	<p>
          Then split each triangle into 4, and normalize all the corners to be the same distance away. Since each face is now 4 faces, there are now 80 faces.
	</p>
        <div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas3"></canvas>
	</div>
        <hr />
	<p>
	  Do it again to get 320 faces.
        </p>
	<div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas4"></canvas>
	</div>
        <hr />
	<p>
	  Then again to get 1280 faces. Now it looks like a sphere.
	</p>
	<div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas5"></canvas>
	</div>
        <hr />
	<p>
	  Then we can remove the rectangles and fill in the faces of thetriangles.
	</p>
	<div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas6"></canvas>
        </div>
        <hr />
	<p>
	  To light and modify the shader we can diffusive the light linearly on the cosine of the angle between the light and the normal vector for the surface.
	</p>
	<div className="centeredDiv">
          <svg width="580" height="350" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="white"/>
	    <circle cx="300" cy="500" r="300" style={{
	      fill: "rgb(255,0,0)",
 	    }}/>
	    <line x1="0" y1="0" x2="300" y2="200" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <line x1="600" y1="0" x2="300" y2="200" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <line x1="300" y1="200" x2="300" y2="50" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <circle cx="0" cy="0" r="50" style={{
	      fill: "rgb(230,210,0)",
 	    }}/>
	    <path d="M 270 180
            A 36.05551275463989 36.05551275463989 0 0 1 300 163.9444872453601" style={{
	      stroke: "black",
	      strokeWidth: 2,
	      fill: "transparent"
	    }} />
	    <text x="265" y="150" style={{
	      fill: "black",
	    }}>θ</text>
          </svg>
        </div>
	<p>
	  For any point on the sphere <MakeMath tex={"p"} /> with normal vector <MakeMath tex={"\\vec{v}"} />, and any point light source at position <MakeMath tex={"l"} /> the new color can be calculated from the base color by:
	</p>
	<br/>
	<MakeMathDisplay tex={"\\cos(\\theta) = \\frac{(p-l) \\cdot \\vec{v}}{|p-l| |\\vec{v}|}"} />
	<br/>
	<MakeMathDisplay tex={"\\langle r', g', b' \\rangle = \\langle r, g, b \\rangle \\times \\text{lerp} (A, B, \\cos(\\text{clamp}(\\theta, 0, 1)))"} />
	<br/>
	<p>
	  Where <MakeMath tex={"A"} /> is the ambient brightness, and <MakeMath tex={"B"} /> is the brightness of the light. <MakeMath tex={"\\text{lerp}"} /> just means linear interpolation, and <MakeMath tex={"\\text{clamp}"} /> will just keep the value of the cosine from going negative.
	</p>
	<div  className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas7"></canvas>
	</div>
        <hr />
        <p>
	  Then also add a spectral effect, based on the angle between the reflected light and the camera position.
	</p>
	<div className="centeredDiv">
          <svg width="580" height="350" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="white"/>
	    <circle cx="300" cy="500" r="300" style={{
	      fill: "rgb(255,0,0)",
 	    }}/>
	    <line x1="0" y1="0" x2="300" y2="200" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <line x1="600" y1="0" x2="300" y2="200" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <line x1="300" y1="200" x2="300" y2="50" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <circle cx="0" cy="0" r="50" style={{
	      fill: "rgb(230,210,0)",
 	    }}/>
	    <path d="
	    M 325.4950975679639 174.5049024320361 
            A 36.05551275463989 36.05551275463989 0 0 1 330 180" style={{
	      stroke: "black",
	      strokeWidth: 2,
	      fill: "transparent"
	    }} />
	    <rect x="435" y="40" width="30" height="20" style={{
	      transformBox: "fill-box",
	      transformOrigin: "center",
	      transform: "rotate(135deg)"
	    }}/>
	    <line x1="300" y1="200" x2="450" y2="50" style={{
	      stroke: "black",
	      strokeWidth: 2
	    }} />
	    <path d="M -25,-50 25,-50 0,0 z" style={{
	      transform: "translate(450px, 50px) scale(0.5, 0.5)rotate(225deg)"
	    }}/>
	    <text x="365" y="150" style={{
	      fill: "black",
	    }}>θ</text>
          </svg>
        </div>
	<p>Given the point <MakeMath tex={"p"} />, the light source position <MakeMath tex={"l"} />, the camera position <MakeMath tex={"c"} />, and the normal vector <MakeMath tex={"\\vec{v}"} /> the intensity of a spectral effect can be calculated:</p>
	<p>First reflect the incoming light vector <MakeMath tex={"l-p"} /> across the normal vector:</p>
	<br/>
	<MakeMathDisplay tex={"\\vec{k} = \\dfrac{2 \\vec{v} \\cdot (l-p)}{|(l-p)|}(l-p)"} />
	<br/>
	<p>Then find the cosine between the incoming light and the camera direction</p>
	<br/>
	<MakeMathDisplay tex={"\\cos(\\theta) = \\dfrac{\\vec{k} \\cdot (p-c)}{|\\vec{k}||(p-c)|}"} />
	<br/>
	<p>Then the spectral factor can be calculated by exponentiating the cosine</p>
	<br/>
	<MakeMathDisplay tex={"t(\\theta) = \\cos(\\theta)^{\\text{shinyness}}"} />
	<br/>
	<p>Then the final color can be calculated by interpolating between the balls diffuse color and the lights color</p>
	<br/>
	<MakeMathDisplay tex={"\\langle r'', g'', b'' \\rangle = \\text{lerp}(\\langle r', g', b' \\rangle, \\langle l_r, l_g, l_b \\rangle, t(\\theta))"} />
	<br/>
	<div className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas8"></canvas>
        </div>
        <hr />
	<p>
          Now we turn off the wireframe.
	</p>
	<div className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas9"></canvas>
        </div>
        <hr />
        <p>
          Then we can add a beach ball as the base color.
	</p>
	<div className="centeredDiv">
          <canvas width="400" height="400" id="small_canvas10"></canvas>
        </div>
	<hr />
	<p>The fragment shader can be found here:</p>
	<AndyCodeBlock
	  source_path="crates/icosahedron/src/shaders_source/frag.glsl"
          language="c"
	/>
      </div>
    </Wrapper>
  );
}

export default Icosahedron;
