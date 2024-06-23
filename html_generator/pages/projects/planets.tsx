import React from "react";

import { AndyCodeBlock } from "../../include_code.js";
import Wrapper from "../../wrapper.js";

function Planets({title}: {title: string}) {
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
      <canvas id="imgCanvas" width="2048" height="1024"></canvas>
      The problem here is given a point on a sphere map it to a 2x1 texture. The
      texture is an equirectangular since the x and y values linearly correlate
      to the longitude and latitude.
      <br />
      <br />
      First normalize the position on the sphere so it is a unit sphere which
      saves some math later on. To find the latitude in radians it is based off
      arcsin of the y value divided by the length of the vector, which is 1
      since it is normalised, so the value is arsin(y/1) which is just
      arcsin(y). This technically gives the value between -PI/2 and PI/2.
      Dividing by PI scales it to -0.5 to 0.5, so adding it from 0.5 scales it
      between 0 and 1. The only prolem is that 0.5+(asin(y)/PI) is upside down
      since in GLSL the texture sampler uses 0,0 as the top left corner not
      bottom right, so to flip it do 1-0.5-(asin(y)/PI), which just becomes
      0.5-(asin(y)/PI).
      <br />
      <br />
      The longitude is more complicated. Finding the angle around the y axis can
      be accomplished by the built in atan2 function which automatically finds
      the correct quatrant since x and z are passed in seperately, so it can
      look at their signs. Atan2(x, z) will give the angle around between -PI
      and PI covering the whole circle instead of 0 to 2PI, but this doesn't
      really matter because OpenGl wrapps the texutres around so if the x or y
      value go off the range of 0-1 it just repeats an infinite grid. This works
      for longitude but not latitude since for latitude it must also be flipped
      since the north pole doesn't come out the south pole when crossing. Going
      ahead and dividing by 2PI scales it, but the texture I used is flipped so
      I make it negative. The end equation is -(atan2(z, x)/(2PI)).
      <AndyCodeBlock
        source_path="static/projects/planets/shader.vert"
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
      [ 0, 'f', 'Frags' ],
      [ 0, 'w', 'Wires' ],
      ];
      var Module = {
      canvas: document.getElementById("canvas"),
      arguments: ["-tab", "1", "-smallButtons" ]
      };`,
        }}
      ></script>
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default Planets;
