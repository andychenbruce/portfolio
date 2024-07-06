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
      <p>The time dependent schrodingers equation is:</p>
      <div style={{ textAlign: "center", margin: "1em" }}>
        <MakeMath
          tex={
	    "i \\hbar \\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial^2 \\psi(x, t)}{\\partial x ^2} + V(x)\\psi(x, t)"
	  }
        />
      </div>
      <p>Divide both sides by <MakeMath tex={"i\\hbar"}/> and then we have a way to do it iteratevely</p>

      <div style={{ textAlign: "center", margin: "1em" }}>
        <MakeMath
          tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = \\dfrac{-\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial^2 \\psi(x, t)}{\\partial x ^2} + V(x)\\psi(x, t)}{i \\hbar}"}
        />
      </div>
      <p>and <MakeMath tex={"\\dfrac{1}{i} = -i"}/> so</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
        <MakeMath
          tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = i\\dfrac{\\hbar}{2m} \\dfrac{\\partial^2 \\psi(x, t)}{\\partial x ^2} + \\dfrac{-i}{\\hbar}V(x)\\psi(x, t)"}
        />
      </div>
      <p>
	If this is implemented as simple as possible with Euler's method, it will usually be inaccurate and cause the wave to blow up. Simulating the equation will require a more accurate method.
      </p>
      <hr />
      <p>First convert the equation to use the Hamiltonian, which is equal to the sum of the kinetic energy and potential energy.</p>
      <p> A classical wave will look like </p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\psi(x, t) = e^{i(kx - \\omega t)}"}/>
      </div>
      <p><MakeMath tex={"k = \\dfrac{\\tau}{\\lambda}"} /> is the wave vector, the radians per distance, and  <MakeMath tex={"\\lambda"} /> is the wave length of the wave.</p>
      <p><MakeMath tex={"\\omega = \\tau v"} /> is the angular velocity.</p>
      <p>By definition of <MakeMath tex={"h"} />, the momentum of a wave is <MakeMath tex={"p = \\dfrac{h}{\\lambda} = \\hbar k"} /> </p>
      <p>Then:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial \\psi(x, t)}{\\partial x} = ike^{i(kx - \\omega t)} = ik\\psi(x, t)"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2} = i^2k^2e^{i(kx - \\omega t)} = -k^2\\psi(x, t)"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2} = -\\dfrac{p^2}{\\hbar^2}\\psi(x, t)"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"p^2 \\psi(x, t) = -\\hbar^2 \\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2}"}/>
      </div>
      <p>Calculating kinetic energy is <MakeMath tex={"K = \\frac{1}{2}mv^2 = \\dfrac{p^2}{2m}"}/>, so:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"2mK(x, t)\\psi(x, t) = -\\hbar^2 \\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2}"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"K(x, t)\\psi(x, t) = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2}"}/>
      </div>
      <p>And the Hamiltonian is <MakeMath tex={"H = K + V"}/>.</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"H = K + V"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"H(x, t)\\psi(x, t) = K(x, t)\\psi(x, t) + V(x)\\psi(x, t)"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"H(x, t)\\psi(x, t) = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2} + V(x)\\psi(x, t)"}/>
      </div>
      <p>And that is the same as the original equation so</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"H(x, t)\\psi(x, t) = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2 \\psi(x, t)}{\\partial x ^2} + V(x)\\psi(x, t) = i \\hbar \\dfrac{\\partial \\psi (x, t)}{\\partial t}"}/>
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"i \\hbar \\dfrac{\\partial \\psi (x, t)}{\\partial t} = H(x, t)\\psi(x, t)"} />
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\dfrac{i}{\\hbar}H(x, t)\\psi(x, t)"} />
      </div>
      <p>And we can replace the Hamiltonian at a point with the Hamiltonian operator <MakeMath tex={"\\hat{H}"} /></p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\dfrac{i}{\\hbar}\\hat{H}\\psi(x, t)"} />
      </div>
      <hr/>
      <p>For the computer simulation we will represent <MakeMath tex={"\\psi"}/> as a vector, so if we can make the <MakeMath tex={"\\hat{H}"} /> a matrix then we can approximate the differential equation using matrix exponentiation.</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\dfrac{\\partial \\psi (x, t)}{\\partial t} = -\\dfrac{i}{\\hbar}\\hat{H}\\psi(x, t)"} />
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\psi (x, t) = e^{-\\frac{i}{\\hbar}\\hat{H}t}\\psi(x, 0)"} />
      </div>
      <p>The Hamiltonian operator is equal to <MakeMath tex={"\\hat{H} = -\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2}{\\partial x ^2} + V(x)"} />.</p>
      <p>The second derivative can be calculated by:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	<MakeMath tex={"\\lim_{h \\rightarrow 0}\\dfrac{\\dfrac{df(x+h)}{dx} - \\dfrac{df(x)}{dx}}{h}"} />
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={"\\lim_{h \\rightarrow 0}\\dfrac{\\dfrac{f(x+h)-f(x)}{h} - \\dfrac{f(x)-f(x-h)}{h}}{h}"} />
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={"\\lim_{h \\rightarrow 0}\\dfrac{(f(x+h)-f(x)) - (f(x)-f(x-h))}{h^2}"} />
      </div>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={"\\lim_{h \\rightarrow 0}\\dfrac{f(x+h)-2f(x)+f(x-h)}{h^2}"} />
      </div>
      <p>When converted to discrete form:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={"\\dfrac{f(x+\\Delta x)-2f(x)+f(x-\\Delta x)}{\\Delta x^2}"} />
      </div>
      <p>And for each position of <MakeMath tex={"-\\dfrac{\\hbar^2}{2m} \\dfrac{\\partial ^2}{\\partial x ^2}"} /> we can make a matrix like:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={`-\\dfrac{\\hbar^2}{2m}\\dfrac{1}{\\Delta x^2}
\\begin{bmatrix}
-2 &  1 &    &    & \\\\
1  & -2 &  1 &    & \\\\
   &    & \\ddots &   & \\\\
   &   &   1 & -2 & 1 \\\\
   &   &     & 1 & -2
\\end{bmatrix}
	    `} />
      </div>
      <p>Then for the <MakeMath tex={"V(x)"}/> part, it is just a value at each point:</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={`
\\begin{bmatrix}
V(0)&    &         &      & \\\\
    &V(1)&         &      & \\\\
    &    & \\ddots &      & \\\\
    &    &         &V(n-1)& \\\\
    &    &         &     &V(n)
\\end{bmatrix}
	    `} />
      </div>
      <p>So <MakeMath tex={"\\hat{H}"}/> is just the sum of those two matricies</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={`\\hat{H} = -\\dfrac{\\hbar^2}{2m}\\dfrac{1}{\\Delta x^2}
\\begin{bmatrix}
-2 &  1 &    &    & \\\\
1  & -2 &  1 &    & \\\\
   &    & \\ddots &   & \\\\
   &   &   1 & -2 & 1 \\\\
   &   &     & 1 & -2
\\end{bmatrix} + 
\\begin{bmatrix}
V(0)&    &         &      & \\\\
    &V(1)&         &      & \\\\
    &    & \\ddots &      & \\\\
    &    &         &V(n-1)& \\\\
    &    &         &     &V(n)
\\end{bmatrix}
	    `} />
      </div>
      <p>And then each discrete step of the simulation will go through a certain change in time</p>
      <div style={{ textAlign: "center", margin: "1em"}}>
	    <MakeMath tex={"\\psi_{t+1} = e^{-\\frac{i}{\\hbar}\\hat{H}\\Delta t}\\psi_t"} />
      </div>
      <p>This method is more accurate but more computationally complex, since the matrix will have to be the same size as the size of vector <MakeMath tex={"\\psi"} /> making this algorithm <MakeMath tex={"\\in O(n^2)"} /> of the number of elements in the vector.</p>
      
      <hr/>
      <p>
	I used this <a href="https://peverati.github.io/pchem2/Schrodinger.html">link</a> for the explanation of the derivation and this <a href="https://www.astro.utoronto.ca/~mahajan/notebooks/quantum_tunnelling.html">link</a> for explaining how to simulate it using the Hamiltonian.
      </p>
        <hr className="clearLeft" />
    </Wrapper>
  );
}

export default Schrödinger;
