import React from 'react';
import {Tex} from 'react-tex';

import Wrapper from '../../wrapper.js';

function Project2Body(props) {

  let new_head = (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />);

  return (
    <Wrapper head={new_head} {...props}>
      <div id="dvMain">
	  <div id="dvSmallButtons" className="dvB"></div>
	  <div id="dvLargeButtons" className="dvB"></div>
	  <canvas id="canvas" width="800" height="800" onContextMenu={(event) => event.preventDefault()}></canvas>
	</div>
	<hr className="clearLeft" />
<br/>
Interactive, try to drag, rotate and zoom. Allowed since it uses Web Assembly.
<br/>
<br/>
This simulation is extremely simple. Each ball has a constant acceleration in a vector that goes downwards relative to the camera for gravity, and each time frame, if a ball is touching another ball apply an elastic collision according to <a href="https://www.sjsu.edu/faculty/watkins/collision.htm">this website</a>.
<br/>
<br/>
I was origionally going to add surface tention by simulating the intermolecular-forces between the particles to see if it would look better, but the problem there is that each ball acts like a molecule and not a percentage of the water and basically as if it was on a microscopic scale, not macroscpic where the IMF's are usually neglegable. A link to the actual IMF simulation is found on the home page, but it doesn't look as good as this simulation.
<br/>
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
	  arguments: ["-tab", "23", "-smallButtons" ]
  };` }} >
    </script>
    <script src="/wasm/readfile.js"></script>
    <script src="/wasm/buttons.js"></script>
				      <script src="/wasm/index.js"></script>
				      
    </Wrapper>
  );
};

export default Project2Body;

