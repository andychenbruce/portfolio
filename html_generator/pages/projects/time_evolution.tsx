import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function TimeEvolutionOperators({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <div className="flexOuter">
	<div className="flexInner1">
          <h2>Classical</h2>
          <p>Starting with Hamiltonian dynamics with position and momentum <MakeMath tex={"\\vec{q}, \\vec{p}"} />.</p>
	  <MakeMathDisplay tex={"\\frac{d q_i}{d t} = \\frac{\\partial H(\\vec{q}, \\vec{p}, t)}{\\partial p_i}"} />
	  <MakeMathDisplay tex={"\\frac{d p_i}{d t} = -\\frac{\\partial H(\\vec{q}, \\vec{p}, t)}{\\partial p_i}"} />
									      
	</div>
	<div className="flexInner1">
          <h2>Quantum</h2>
          <p>We have Schrodinger's equation for a Hamiltonian operator over a Hilbert space.</p>
	  <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\psi(\\vec{x}, t) = -\\frac{i}{\\hbar} \\hat{H}(t) \\psi(\\vec{x}, t)"} />
	</div>
      </div>
    
      <div className="flexOuter">
	<div className="flexInner1">
          <h3>Observables</h3>
          <p>Observables are just functions of the position and momentum.</p>
	  <MakeMathDisplay tex={"A(\\vec{q}(t), \\vec{p}(t)): \\mathbb{R}^n \\times \\mathbb{R}^n \\rightarrow \\mathbb{R}"} />
	</div>
	<div className="flexInner1">
          <h3>Observables</h3>
          <p>Observables are self-adjoint operators</p>
	  <MakeMathDisplay tex={"A(\\psi(t)) = \\langle \\psi | \\hat{A} | \\psi \\rangle "} />
	</div>
      </div>

      <div className="flexOuter">
	<div className="flexInner1">
          <h3>Time evolution of observables</h3>
	  <p>Using basic chain rule</p>
          <MakeMathDisplay tex={"\\frac{d A}{dt} = \\sum_i \\frac{\\partial A}{\\partial q_i} \\frac{d q_i}{dt} + \\frac{\\partial A}{\\partial p_i} \\frac{d p_i}{dt}"} />
	  <p>Then substitute</p>
	  <MakeMathDisplay tex={"\\frac{d A}{dt} = \\sum_i \\frac{\\partial A}{\\partial q_i} \\frac{\\partial H}{\\partial p_i} - \\frac{\\partial A}{\\partial p_i} \\frac{\\partial H}{\\partial q_i}"} />
	</div>
	<div className="flexInner1">
          <h3>Time evolution of observables</h3>
          <p>Using basic chain rule</p>
	  <MakeMathDisplay tex={"\\frac{d A(\\psi(t))}{dt} = \\Big\\langle \\frac{d \\psi}{dt} \\Big| \\hat{A} | \\psi \\rangle + \\langle \\psi | \\hat{A} \\Big| \\frac{d\\psi}{dt} \\Big\\rangle "} />
	  <p>Then substitute</p>
	  <MakeMathDisplay tex={"\\frac{d A(\\psi(t))}{dt} = \\langle \\psi | \\Big(\\frac{i}{\\hbar}\\hat{H}^\\dagger \\Big) \\hat{A} | \\psi \\rangle + \\langle \\psi | \\hat{A}  \\Big(-\\frac{i}{\\hbar}\\hat{H}\\Big) |\\psi\\rangle "} />
	  <p>And <MakeMath tex={"\\hat{H}"} /> is self adjoint by definition of an observable</p>
	  <MakeMathDisplay tex={"= \\langle \\psi | \\Big(\\frac{i}{\\hbar}\\hat{H} \\Big) \\hat{A} | \\psi \\rangle + \\langle \\psi | \\hat{A}  \\Big(-\\frac{i}{\\hbar}\\hat{H}\\Big) |\\psi\\rangle "} />
	  <MakeMathDisplay tex={"=  \\langle \\psi | \\Big(-\\frac{i}{\\hbar}\\Big)\\Big( \\hat{A}\\hat{H} - \\hat{H}\\hat{A} \\Big) |\\psi\\rangle "} />
	  <p>And we set the derivative of the operator to the operator inside the derivative (Heisenberg picture)</p>
	  <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}= - \\frac{i}{\\hbar} \\Big( \\hat{A}_H\\hat{H} - \\hat{H}\\hat{A}_H \\Big)"} />
	  <p>So that</p>
	  <MakeMathDisplay tex={"A(t) = \\langle \\psi(t_0) | \\hat{A}_H(t) | \\psi(t_0) \\rangle"} />
	</div>
      </div>
      <div className="flexOuter">
	<div className="flexInner1">
          <h3>Possion Bracket</h3>
	  <p>If we define a Possion bracket for two observables</p>
	  <MakeMathDisplay tex={"\\{A, B\\} = \\sum_i \\frac{\\partial A}{\\partial q_i} \\frac{\\partial B}{\\partial p_i} - \\frac{\\partial A}{\\partial p_i} \\frac{\\partial B}{\\partial q_i}"} />
	  <p>then we can see</p>
	  <MakeMathDisplay tex={"\\frac{d A}{dt} = \\{A, H\\}"} />
	</div>
	<div className="flexInner1">
          <h3>Commutator Bracket</h3>
          <p>If we define a Commutator bracket for two observables</p>
	  <MakeMathDisplay tex={"[\\hat{A}, \\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A}"} />
	  <p>then we can see</p>
	  <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt} = -\\frac{i}{\\hbar}[\\hat{A}_H, H]"} />
	</div>
      </div>
      <div className="flexOuter">
	<div className="flexInner1">
          <h3>Liouville operator</h3>
	  <p>Define an operator on observables</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = \\{\\cdot, H(t)\\}"} />
	  <p>so that</p>
	  <MakeMathDisplay tex={"\\frac{d A}{dt} = \\mathcal{L}A"} />
	</div>
	<div className="flexInner1">
	  <h3>Liouville operator</h3>
          <p>Define an operator on observables</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = -\\frac{i}{\\hbar} [\\cdot, H(t)]"} />
	  <p>so that</p>
	  <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt} = \\mathcal{L}\\hat{A}_H"} />
	</div>
      </div>
      <hr/>
      <h3>Time evolution operator (generalized to both classical and quantum)</h3>
      <p>Time evolution can be split into many small slices</p>
      <MakeMathDisplay tex={"A(t + \\Delta t) \\approx A(t) + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big) A = \\bigg(1 + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big) \\bigg) A"} />
      <p>Then it should be exact in the limit</p>
      <MakeMathDisplay tex={"A(t + \\Delta t) = \\lim_{n \\rightarrow \\infty} \\Big(1 + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big)\\frac{1}{n} \\Big)^n A"} />
      <p>Which becomes</p>
      <MakeMathDisplay tex={"A(t + \\Delta t) = e^{\\int_t^{t+\\Delta t} \\mathcal{L}(t') dt'} A"} />
      <p>Where operator exponentiation can be also defined like</p>
      <MakeMathDisplay tex={"e^{\\mathcal{O}} = \\lim_{n \\rightarrow \\infty} \\sum_{k=0}^n \\frac{\\mathcal{O}^k}{k!}"} />
      <p>Then define a time evolution operator</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}(t') dt'}"} />
      <p>Such that</p>
      <MakeMathDisplay tex={"A(t_b) = \\mathcal{U}(t_a, t_b) A(t_a)"} />
    </Wrapper>
  );
}

export default TimeEvolutionOperators;
