import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";


import Wrapper from "../../wrapper.js";

function Schrödinger({title}: {title: string}) {
  let new_head = (
    <>
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
      <hr/>
      <p>The time dependent schrodingers equation is:</p>
      <MakeMathDisplay 
        tex={
	  "\\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\frac{i}{\\hbar}\\hat{H}\\psi(x, t)"
	}
      />
      <p>
	   If this is implemented as simple as possible with Euler's method, it will usually be inaccurate and cause the waveform to explode due to integration errors. Simulating the equation will require a more accurate method.
      </p>
      <hr />
      <p>The iterative simulation will approximate <MakeMath tex={"\\psi"}/> as a finite dimensional vector, so it should approximate <MakeMath tex={"\\hat{H}"} /> a matrix.</p>
      <MakeMathDisplay tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\dfrac{i}{\\hbar}\\hat{H}\\psi(x, t)"} />
      <p>Assuming the Hamiltonian is constant, integrating gets</p>
      <MakeMathDisplay tex={"\\psi (x, t+\\Delta t) = e^{-\\frac{i}{\\hbar}\\hat{H}\\Delta t}\\psi(x, t)"} />
      <p>The Hamiltonian operator is equal to <MakeMath tex={"\\hat{H} = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2}{\\partial x ^2} + V(x)"} />.</p>
      <p>The second derivative can be calculated by:</p>
      <MakeMathDisplay tex={"\\lim_{h \\rightarrow 0}\\dfrac{\\dfrac{df(x+h)}{dx} - \\dfrac{df(x)}{dx}}{h}"} />
      <MakeMathDisplay tex={"\\lim_{h \\rightarrow 0}\\dfrac{\\dfrac{f(x+h)-f(x)}{h} - \\dfrac{f(x)-f(x-h)}{h}}{h}"} />
      <MakeMathDisplay tex={"\\lim_{h \\rightarrow 0}\\dfrac{(f(x+h)-f(x)) - (f(x)-f(x-h))}{h^2}"} />
      <MakeMathDisplay tex={"\\lim_{h \\rightarrow 0}\\dfrac{f(x+h)-2f(x)+f(x-h)}{h^2}"} />
      <p>We can approximate this with a finite difference.</p>
      <MakeMathDisplay tex={"\\dfrac{f(x+\\Delta x)-2f(x)+f(x-\\Delta x)}{\\Delta x^2}"} />
      <p>So for each position of <MakeMath tex={"-\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2}{\\partial x ^2}"} /> we can make a matrix below. We assume no repeating boundary conditions (equivelent to a discrete sine transform).</p>
      <MakeMathDisplay tex={`-\\dfrac{\\hbar^2}{2m}\\dfrac{1}{\\Delta x^2}
\\begin{bmatrix}
-1 &  1 &    &    & \\\\
1  & -2 &  1 &    & \\\\
&    & \\ddots &   & \\\\
&   &   1 & -2 & 1 \\\\
&   &     & 1 & -1
\\end{bmatrix}
	    `} />
      <p>Then for the <MakeMath tex={"V(x)"}/> part, it is just a value at each point:</p>
      <MakeMathDisplay tex={`
\\begin{bmatrix}
V(0)&    &         &      & \\\\
&V(1)&         &      & \\\\
&    & \\ddots &      & \\\\
&    &         &V(n-1)& \\\\
&    &         &     &V(n)
\\end{bmatrix}
	    `} />
      <p>So <MakeMath tex={"\\hat{H}"}/> is just the sum of those two matricies</p>
      <MakeMathDisplay tex={`\\hat{H} = -\\dfrac{\\hbar^2}{2m}\\dfrac{1}{\\Delta x^2}
\\begin{bmatrix}
-1 &  1 &    &    & \\\\
1  & -2 &  1 &    & \\\\
&    & \\ddots &   & \\\\
&   &   1 & -2 & 1 \\\\
&   &     & 1 & -1
\\end{bmatrix} + 
\\begin{bmatrix}
V(0)&    &         &      & \\\\
&V(1)&         &      & \\\\
&    & \\ddots &      & \\\\
&    &         &V(n-1)& \\\\
&    &         &     &V(n)
\\end{bmatrix}
	    `} />
      <p>And then each discrete step of the simulation will go through a certain change in time</p>
      <MakeMathDisplay tex={"\\psi_{t+1} = e^{-\\frac{i}{\\hbar}\\hat{H}\\Delta t}\\psi_t"} />
      <hr/>
    </Wrapper>
  );
}

export default Schrödinger;
