import React from 'react';
import {Tex} from 'react-tex';

import Wrapper from '../../wrapper.js';
import {AndyCodeBlock} from '../../include_code.js';

function Boltzman(props) {

  let new_head = (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />);

  return (
    <Wrapper head={new_head} {...props}>
      <div id="dvMain">
	  <div id="dvSmallButtons" className="dvB"></div>
	  <div id="dvLargeButtons" className="dvB"></div>
	  <canvas id="canvas" width="800" height="800" onContextMenu={(event) => event.preventDefault()}></canvas>
	</div>
	<hr className="clearLeft" />
	<p>For a point light source the amount of light hitting a surface is based on the cosine of the angle between the normal vector to the surface and the vector to the light source. For diffusion surfaces the brighness is almsot exacly linear interpolation between ambient and fully illuminated using the cosine of the angle.</p>

	<p>the cosine of the angle can be calculated by the dot product definition</p>
	<Tex texContent={"cos(\\theta) = {\\vec{n}\\cdotp\\vec{l} \\over |\\vec{n}||\\vec{l}|}"} />
<br/>
then if
<br/>
<Tex texContent={"a"} /> = ambient multiplier (no light)
<br/>
<Tex texContent={"f"} /> = full illumination multiplier (full light)
<br/>
<br/>
then the diffuse color would be about
<br/>
diffuse color = <Tex texContent={"color_{diffuse}"} /> = (r', g', b') = (r, g, b)*lerp(<Tex texContent={"a"} />, <Tex texContent={"b"} />, <Tex texContent={"cos(\\theta)"} />)
<br/>
where the "lerp" is equivelent to
<br/>
<Tex texContent={"a + (b - a)cos(\\theta)"} />
<br/>
<br/>
when implemented a problem where when <Tex texContent={"cos(\\theta)"} /> is negative makes it so past 180 degrees away from the light can make negative brightness which doesn't make sense, so <Tex texContent={"cos(\\theta)"} /> must be clamped between 0 and 1, or basically if it is below 0 set it to 0.
<br/>
<br/>
<Tex texContent={"\\vec{l}"} /> is easy to calculate, it would just be the light position minus the point at which is being colored in (final minus initial)
<br/>
<br/>
<Tex texContent={"\\vec{n}"} />, the normal vector, depends on the shape of the object, but for spheres it is really easy as it is just the difference between the point and the center of the sphere since a spheres surface is always tangent to the center so the normal vector is just straight out
<br/>
<br/>
For specular light it is based on the angle between the reflected vector from the camera and the light source, assuming the light source is a point.
<br/>
<br/>
the reflected vector would be the reflection of <Tex texContent={"\\vec{l}"} /> and <Tex texContent={"\\vec{n}"} />, where the equation for reflection is <Tex texContent={"l_{ref} = l-{2l\\cdotp n \\over |n|^2}n"} />, then to find <Tex texContent={"cos(\\theta_{ref})"} /> just use the same dot product proof, then also clamp it between 0 and 1 again so that it avoid negative values
<br/>
<br/>
the actual color value is based on a power of <Tex texContent={"cos(\\theta_{ref})"} />, the power being the shinyness
<br/>
specular factor = <Tex texContent={"f = cos(\\theta_{ref})^s"} />, where <Tex texContent={"s"} /> is shinyness, and then the actual color is lerp(<Tex texContent={"color_{diffuse}"} />, <Tex texContent={"color_{light}"} />, <Tex texContent={"f"} />), which is the equivelent of
<br/>
final color = <Tex texContent={"f*color_{light} + (1-f)*color_{diffuse}"} />
<br/>
this means that when <Tex texContent={"f"} /> is big or when <Tex texContent={"cos(\\theta_{ref})"} /> is near, meaning the angle is small the color is close to the light since it is reflecting into the camrea, and when <Tex texContent={"cos(\\theta_{ref})"} /> is small or the angle is big the sphere returns to its regular diffuse color
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<hr className="clearLeft" />
      <script dangerouslySetInnerHTML= {{ __html: `
      var g = {};
      g.smallButtons = true;
      g.buttonArray = [
	  [ 0, 'R', 'Reset' ],
	  [ 0, 'f', 'Frags' ],
	  [ 0, 'w', 'Wires' ],
      ];
      var Module = {
	  canvas: document.getElementById("canvas"),
	  arguments: ["-tab", "12", "-smallButtons" ]
      };` }} >
    </script>
    <script src="/wasm/readfile.js"></script>
    <script src="/wasm/buttons.js"></script>
    <script src="/wasm/index.js"></script>
      </Wrapper>
  );
};

export default Boltzman;

