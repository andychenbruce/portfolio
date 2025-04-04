import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function NavierStokes({title}: {title: string}) {
  return (
    <Wrapper title={title}>
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
      <h2>Tap and drag to add turbulence to the simulation.</h2>
      <p>
        <a href="https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations">
          Wikipeida
        </a>{" "}
        says that the Navier-Stokes equation is
      </p>
      <MakeMathDisplay
        tex={
          "\\rho\\dfrac{D\\mathbf{u}}{Dt} = -\\nabla p + \\nabla \\cdotp \\mathbf{ \\tau } + \\rho \\mathbf{g}"
        }
      />
      <p>where</p>
      <br />
      <p>
        <MakeMath tex={"\\rho"} /> is density
        <br />
	<MakeMath tex={"\\mathbf{u}"} /> is the velocity vector
	<br />
	<MakeMath tex={"p"} /> is the pressure
	<br />
	<MakeMath tex={"\\mathbf{\\tau}"} /> is the stress tensor
	<br />
	<MakeMath tex={"g"} /> is any other acceleration
	<br />
      </p>
      <MakeMath tex={"\\nabla"} /> is the gradient, equal to{" "}
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y}, {\\partial \\over \\partial z}, ...)"
        }
      />{" "}
      for however many dimensions. This simulation is only 2 dimensional  so in this case it is just{" "}
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y})"
        }
      />
      .
      <br />
      <MakeMath tex={"{\\nabla \\cdotp}"} /> is the divergence and is the
      dot product of the gradient with the vector so it is equal to to
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y}, {\\partial \\over \\partial z} ...) \\cdotp (F_x, F_y, F_z, ...) = {\\partial F_x\\over \\partial x} + {\\partial F_y\\over \\partial y} + {\\partial F_z\\over \\partial z}, ..."
        }
      />{" "}
      for however many dimensions. In 2 dimentions it's
      <MakeMath
        tex={
          "{\\partial F_x\\over \\partial x} + {\\partial F_y\\over \\partial y}"
        }
      />
      .
      <br />
      <MakeMath tex={"D\\mathbf{} \\over Dt"} /> is the material derivative which
      is{" "}
      <MakeMath
        tex={
          "{\\partial  \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla"
        }
      />
      , which measures how much material will change measured at a point moving with the fluid.
      <br />
      Here it is taking the matieral derivative of the velocity, or saying how much a particles velocity will change as it flows through the fluid.
      <br />
      <MakeMathDisplay
          tex={
            "{D\\mathbf{u} \\over Dt} = {\\partial\\mathbf{u} \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla \\mathbf{u}"
          }
	/>
      <p>so the origional equation becomes</p>
      <MakeMathDisplay
        tex={
          "\\rho({\\partial\\mathbf{u} \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla \\mathbf{u}) = -\\nabla p + \\nabla \\cdotp \\mathbf{ \\tau } + \\rho \\mathbf{g}"
        }
      />
      <MakeMathDisplay
        tex={
          "{\\partial\\mathbf{u} \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla \\mathbf{u} = - \\frac{1}{\\rho} \\nabla p + \\frac{1}{\\rho} \\nabla \\cdotp \\mathbf{ \\tau } + \\mathbf{g}"
        }
      />
      <MakeMath tex={"\\mathbf{\\tau}"} /> doesn't matter here since it is the stress tensor used for viscosity and when the shape of the box is changing size and volume, but both of those are ignored, and we can also don't have any external forces like gravity or electromagnetism so we can ignore <MakeMath tex={"\\mathbf{g}"} />.
      <br />
      <MakeMathDisplay
        tex={
          "{\\partial\\mathbf{u} \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla \\mathbf{u} = - \\frac{1}{\\rho} \\nabla p"
        }
      />
      <MakeMathDisplay
        tex={
          "{\\partial\\mathbf{u} \\over \\partial t} = - \\mathbf{u} \\cdotp \\nabla \\mathbf{u} - \\frac{1}{\\rho} \\nabla p"
        }
      />
      <MakeMathDisplay
          tex={
            "{\\partial\\mathbf{u} \\over \\partial t} = - \\mathbf{u} \\cdotp ({\\partial \\mathbf{u} \\over \\partial x}, {\\partial \\mathbf{u} \\over \\partial y}) - \\frac{1}{\\rho} \\nabla p"
          }
        />
      <MakeMathDisplay
	tex={
          "{\\partial\\mathbf{u} \\over \\partial t} = - \\mathbf{u}_x {\\partial \\mathbf{u} \\over \\partial x} - \\mathbf{u}_y {\\partial \\mathbf{u} \\over \\partial y} - \\frac{1}{\\rho} \\nabla p"
        }
      />
      Then expanding the vector
      <MakeMathDisplay tex={`
\\begin{bmatrix}
{\\partial\\mathbf{u}_x \\over \\partial t} \\\\
{\\partial\\mathbf{u}_y \\over \\partial t}
\\end{bmatrix} = 
-\\begin{bmatrix}
\\mathbf{u}_x{\\partial\\mathbf{u}_x \\over \\partial x} \\\\
\\mathbf{u}_x{\\partial\\mathbf{u}_y \\over \\partial x}
\\end{bmatrix}
-\\begin{bmatrix}
\\mathbf{u}_y{\\partial\\mathbf{u}_x \\over \\partial y} \\\\
\\mathbf{u}_y{\\partial\\mathbf{u}_y \\over \\partial y}
\\end{bmatrix}
-\\frac{1}{\\rho}
\\begin{bmatrix}
{\\partial p \\over \\partial x} \\\\
{\\partial p \\over \\partial y}
\\end{bmatrix}
	    `} />
      <MakeMathDisplay tex={`
\\begin{bmatrix}
{\\partial\\mathbf{u}_x \\over \\partial t} \\\\
{\\partial\\mathbf{u}_y \\over \\partial t}
\\end{bmatrix} = 
-\\begin{bmatrix}
\\mathbf{u}_x{\\partial\\mathbf{u}_x \\over \\partial x} + \\mathbf{u}_y{\\partial\\mathbf{u}_x \\over \\partial y} + \\frac{1}{\\rho} {\\partial p \\over \\partial x}\\\\
\\mathbf{u}_x{\\partial\\mathbf{u}_y \\over \\partial x} + \\mathbf{u}_y{\\partial\\mathbf{u}_y \\over \\partial y} + \\frac{1}{\\rho} {\\partial p \\over \\partial y}
\\end{bmatrix}
`} />
      <p>Applying the finite distance method:</p>
      <MakeMathDisplay tex={`{\\partial f(x) \\over \\partial x} \\approx \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}`} />
      <p>onto <MakeMath tex={`{\\partial \\mathbf{u}_x \\over \\partial t}`} /> makes:</p>
      <MakeMathDisplay tex={`
\\begin{split}
\\frac{\\mathbf{u}_x(x, y, t + \\Delta t) - \\mathbf{u}_x(x, y, t)}{\\Delta t} = 
&-\\mathbf{u}_x(x, y, t) \\frac{\\mathbf{u}_x(x + \\epsilon, y, t) - \\mathbf{u}_x(x - \\epsilon, y, t)}{2 \\epsilon} \\\\
&-\\mathbf{u}_y(x, y, t) \\frac{\\mathbf{u}_x(x, y + \\epsilon, t) - \\mathbf{u}_x(x, y - \\epsilon, t)}{2 \\epsilon} \\\\
&-\\frac{1}{\\rho} \\frac{p(x + \\epsilon, y, t) - p(x - \\epsilon, y, t)}{2 \\epsilon}
\\end{split}`} />
      <p>Then isolate <MakeMath tex={`\\mathbf{u}_x(x, y, t + \\Delta t)`} />:</p>
      <MakeMathDisplay tex={`
\\begin{split}
\\mathbf{u}_x(x, y, t + \\Delta t) = &\\mathbf{u}_x(x, y, t)\\\\
&-\\Delta t \\mathbf{u}_x(x, y, t) \\frac{\\mathbf{u}_x(x + \\epsilon, y, t) - \\mathbf{u}_x(x - \\epsilon, y, t)}{2 \\epsilon} \\\\
&-\\Delta t \\mathbf{u}_y(x, y, t) \\frac{\\mathbf{u}_x(x, y + \\epsilon, t) - \\mathbf{u}_x(x, y - \\epsilon, t)}{2 \\epsilon} \\\\
&-\\Delta t \\frac{1}{\\rho} \\frac{p(x + \\epsilon, y, t) - p(x - \\epsilon, y, t)}{2 \\epsilon}
\\end{split}`} />
      <br />
      The first 3 terms are just the advected velocity, because its equal to <MakeMath tex={`\\mathbf{u}_x - \\Delta t \\mathbf{u} \\cdotp \\nabla\\mathbf{u}_x`} />. Make a new variable <MakeMath tex={`a(x, y, t)`} /> for the first 3 terms, the advected velocity.
      <MakeMathDisplay tex={`
\\begin{split}
\\mathbf{u}_x(x, y, t + \\Delta t) = &a_x(x, y, t)\\\\
&-\\Delta t \\frac{1}{\\rho} \\frac{p(x + \\epsilon, y, t) - p(x - \\epsilon, y, t)}{2 \\epsilon}
\\end{split}`} />
      In incompressable fluids, density is constant so <MakeMath tex={"\\rho"} /> is a constant.
      If <MakeMath tex={"\\rho"} /> is constant then <MakeMath tex={"{d\\rho \\over dt} = 0"} /> so the conservation of mass equation:
      <MakeMathDisplay
        tex={
          "{d\\rho \\over dt} + \\nabla \\cdotp (\\rho \\mathbf{u}) = 0"
        }
      />
      <p>becomes</p>
      <MakeMathDisplay tex={"\\nabla \\cdotp (\\rho \\mathbf{u}) = 0"} />
      <p>and since <MakeMath tex={"\\rho"} /> is a constant it can be divided out</p>
      <MakeMathDisplay tex={"\\nabla \\cdotp \\mathbf{u} = 0"} />
      <p>One point can't have 2 neighboring points both pulling from it or else that means it is going in 2 directions and creating new mass, or if a cell has 2 neighbors going into it mass is deleted since density can't change, so the divergence of the velocity at every point must equal zero.</p>
      <br />
      So the solution must also have zero divergence
      <MakeMathDisplay tex={"{\\partial \\mathbf{u}_x \\over \\partial x} + {\\partial \\mathbf{u}_y \\over \\partial y} = 0"} />
      <p>Then also apply the finite difference method</p>
      <MakeMathDisplay tex={`
\\begin{split}
0 = &{\\mathbf{u}_x(x + \\epsilon, y, t + \\Delta t) - \\mathbf{u}_x(x - \\epsilon, y, t + \\Delta t) \\over 2 \\epsilon} \\\\
    &{\\mathbf{u}_y(x, y + \\epsilon, t + \\Delta t) - \\mathbf{u}_y(x, y - \\epsilon, t + \\Delta t) \\over 2 \\epsilon}
\\end{split}`} />
      We can substitute the previous equation for the 2 derivatives.
      <br/>
      <MakeMathDisplay tex={`
\\begin{split}
0 = \\frac{1}{2\\epsilon}\\Bigg( & \\bigg( a_x(x + \\epsilon, y, t) - \\Delta t \\frac{1}{\\rho} \\frac{p(x + 2\\epsilon, y, t) - p(x, y, t)}{2 \\epsilon} \\bigg) \\\\
                               - & \\bigg( a_x(x - \\epsilon, y, t) - \\Delta t \\frac{1}{\\rho} \\frac{p(x, y, t) - p(x - 2\\epsilon, y, t)}{2 \\epsilon} \\bigg) \\\\
                               + & \\bigg( a_y(x, y + \\epsilon, t) - \\Delta t \\frac{1}{\\rho} \\frac{p(x, y + 2\\epsilon, t) - p(x, y, t)}{2 \\epsilon} \\bigg) \\\\
                               - & \\bigg( a_y(x, y - \\epsilon, t) - \\Delta t \\frac{1}{\\rho} \\frac{p(x, y, t) - p(x, y - 2\\epsilon, t)}{2 \\epsilon} \\bigg) \\Bigg)
\\end{split}`} />
      Then move the knows and unknowns to the left and right sides.
      <MakeMathDisplay tex={`
\\begin{split}
  & a_x(x + \\epsilon, y, t) - a_x(x - \\epsilon, y, t) \\\\
+ & a_y(x, y + \\epsilon, t) - a_y(x, y - \\epsilon, t)
\\end{split} =
\\begin{split}
-\\Bigg( - & \\Delta t \\frac{1}{\\rho} \\frac{p(x + 2\\epsilon, y, t) - p(x, y, t)}{2 \\epsilon} \\bigg) \\\\
         + & \\Delta t \\frac{1}{\\rho} \\frac{p(x, y, t) - p(x - 2\\epsilon, y, t)}{2 \\epsilon} \\bigg) \\\\
         - & \\Delta t \\frac{1}{\\rho} \\frac{p(x, y + 2\\epsilon, t) - p(x, y, t)}{2 \\epsilon} \\bigg) \\\\
         + & \\Delta t \\frac{1}{\\rho} \\frac{p(x, y, t) - p(x, y - 2\\epsilon, t)}{2 \\epsilon} \\bigg) \\Bigg)
\\end{split}`}
	/>
      Then simplify
      <MakeMathDisplay tex={`
\\begin{split}
  & a_x(x + \\epsilon, y, t) - a_x(x - \\epsilon, y, t) \\\\
+ & a_y(x, y + \\epsilon, t) - a_y(x, y - \\epsilon, t)
\\end{split} =
-\\frac{\\Delta t}{2\\epsilon \\rho}
\\begin{pmatrix}
  4p(x, y, t) \\\\
- p(x + 2\\epsilon, y, t) - p(x - 2\\epsilon, y, t)) \\\\
- p(x, y + 2\\epsilon, t) - p(x, y - 2\\epsilon, t))
\\end{pmatrix}`}
      />
      In the code this systems of equations could be solved with a massive matrix with each voxel as a variable and have very perfect calculations, or just do it iteratevly and approximate with an iterative solver. This code uses the <a href="https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method">Gauss Seidel</a> method.
      Set <MakeMath tex={"-\\frac{\\Delta t}{2\\epsilon \\rho} b(x, y, t)"} /> to the left hand side of the equation.
      
      <MakeMathDisplay
        tex={
          "p(x, y) = \\dfrac{p(x+\\epsilon, y) + p(x-\\epsilon, y) + p(x, y+\\epsilon) + p(x, y-\\epsilon) - b(x, y)}{4}"
        }
      />
      <br />
      <p>And with that system of equations iterate by setting the initial guess for every point <MakeMath tex={"p^0(x, y) = 0"} />. Then iterate with</p>
      <MakeMathDisplay
          tex={
            "p_{n+1}(x, y) = \\dfrac{p_n(x+\\epsilon, y) + p_n(x-\\epsilon, y) + p_n(x, y+\\epsilon) + p_n(x, y-\\epsilon) - b(x, y)}{4}"
          }
	/>
      <p>After the divergence is cleared, the velocities just need to move both the
      color, themselves, and any other values in the direction they are
	   pointing.</p>
      <br />
      In code this is optimised by pulling instead from behind instead of
      pushing out in front because the end point of the velicity will be
      inbetween 4 squares and writing values is almost always more expensive
      than reading values, so instead it will read the 4 values of the squares
      if the velocity vector was rotated 180 degrees or muliplied by -1, linear
      interpolate the expected value at the sub-voxel position, then write it
      into only one square saving time and making the simulation faster at about
      the same accuracy as the intuitive method.
      <br />
      <br />
      Now the hardest part is done, but there is still diffusion where quares
      take the average values of their neighbors over time this is modeled by
      <br />
      <MakeMathDisplay
          tex={
            "c_{n+1}(x, y) = c_n(x, y) + k*\\big(\\dfrac{a_n(x-\\epsilon, y) + c_{n+1}(x+\\epsilon, y) + a_{n+1}(x, y-\\epsilon) + a_{n+1}(x, y+\\epsilon)}{4} - c_n(x, y)\\big)"
          }
        />
      between the new and the current attrubute,
      <MakeMath tex={"a"} /> and the percent it goes towards it in that time
      tick,
      <MakeMath tex={"k"} />
      <br />
      this is again a system of equations that can easily be solved with the
      Gauss-Seidel method
      <br />
      <br />
      For boundaries and walls, the velocity in that voxel must be both 0 in the
      y and x direction, so when divergence clearing is calculated it will make
      the velocity near only be able to flow parrallel to obsticles and the
      boundary. Since the divergence clearing isn't perfect it doesn't make
      velocity exacly parralel so some fluid leaks off the edge or into walls,
      so a script should iterate through every voxel and make the x velocity 0
      if there are obstacles or boundaries to the left or right, and y velocity
      0 if there are up or down, exept a more computationally efficient way is
      to just set the voxels which are considered boundaries to have a x and y
      velocity of 0, then the divergence clearing will automatically make flow
      parralel to them
      <br />
      <br />
      For the numerical implementation of derivatives it is just
      <br />
      <MakeMath
        tex={"{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x) \\over h}"}
      />
      <br />
      <br />
      which can also be
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-0) \\over h-(-0)}"
        }
      />
      <br />
      <br />
      then to
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-h) \\over h-(-h)}"
        }
      />
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-h) \\over 2h}"
        }
      />
      <br />
      <br />
      and in code form with the voxels where the position must be integers the
      most accurate would be would be
      <br />
      <MakeMath tex={"{df(x) \\over dx} = {f(x+\\epsilon)-f(x-\\epsilon) \\over 2}"} />
      <br />
      <br />
      <br />
      used sources:
      <br />
      https://jamie-wong.com/2016/08/05/webgl-fluid-simulation/
      <br />
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
	  arguments: ["-tab", "26", "-smallButtons" ]
		  };`,
        }}
      ></script>
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default NavierStokes;
