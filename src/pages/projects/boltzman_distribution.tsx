import React from 'react';
import {Tex} from 'react-tex';

import Wrapper from '../../wrapper.js';

function Boltzman(props) {

  let new_head = (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />);

  return (
    <Wrapper head={new_head} {...props}>
      <div id="dvMain">
	  <div id="dvSmallButtons" className="dvB"></div>
	  <div id="dvLargeButtons" className="dvB"></div>
	  <canvas id="canvas" width="800" height="800" onContextMenu={(event) => event.preventDefault()} ></canvas>
													 </div>
      <hr className="clearLeft" />
      <h2>Thermodynamics simulation from AP chem</h2>
      <p> When atoms or molecules bounce they are basically exchange velocity equivelent to an elastic collision </p>
	  <br/>
	    <p>I got the equation for 3d elastic collissions of spheres from <a href="https://www.sjsu.edu/faculty/watkins/collision.htm">here</a>, I don't really understand the proof other than the mass, momentum, and energy conservation equations but I implemented the vector math and it works. There is also a similar equation from this <a href="https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional">wikipedia page</a> on 2d elastic collissions, but because they just use vectors as a whole and not their individual compnents, applying the same equation to 3d also works perfectly, intentional or not. I only use the first one because it's proof is based of thermodynamics and kinetic energy but they are probably the exact same equation just in different form.</p>
	      <br/>
      <br/>

      <p>The <a href="https://en.wikipedia.org/wiki/Maxwell%E2%80%93Boltzmann_distribution#Distribution_function">equation</a> for the maxwell boltzman distribution is</p>
       <div style={{textAlign: "center"}}>
	 <Tex texContent={"f(v) = {({m \\over 2\\pi kT})^{3/2}}4\\pi v^2e^{-{{mv^2} \\over {2kT}}}"} />
	 </div>
		    <br/>
	 where
	 <br/>
      <Tex texContent={"f(v)"} /> is the probability
      <br/>
      <Tex texContent={"v"} /> is the velocity
      <br/>
      <Tex texContent={"m"} /> is the mass
      <br/>
      <Tex texContent={"k"} /> is the boltzmann constant
      <br/>
      <Tex texContent={"T"} /> is the temperature
      <br/>
	  <p>the blue graph isn't actually exactly the correct equation for this system since the units didn't convert nicely when I did it. It is also graphed poorly since it is in the fragment shader but when displayed is scaled in the y direction 8 times so it looks stretched, but it would be really hard to fix for not much extra readability and it already seems to fit the bar graph pretty well.</p>
      <br/>
	  <p>the bar graph starts form a velocity of zero and each bucket is 1/700 distance units per 1/30th of a second since it does one physics tick per frame which is 1/30th of a second. The units of velocity are quite small since one unit of distance is one square on the cage, or see it as the floor is 4x4 units</p>
      <br/>
	  <p>basically just shows the maxwell botzman distribution as an emergent propery</p>
      <hr className="clearLeft" />
      <script dangerouslySetInnerHTML= {{ __html: `
            var g = {};
      g.smallButtons = true;
      g.buttonArray = [
	  [ 0, 'R', 'Reset' ],
	  [ 0, 'r', 'Run' ],
	  [ 0, 'S', 'Pause' ],
	  [ 0, 'c', 'Cage' ],
	  [ 0, 'z', 'Floor' ],
      ];
      var Module = {
	  canvas: document.getElementById("canvas"),
	  arguments: ["-tab", "17", "-smallButtons" ]
      };`
      }} />
    
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
};

export default Boltzman;

