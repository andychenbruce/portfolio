import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function TimeEvolutionOperators({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <div className="center-headers">
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>In classical mechanics we will use Hamiltonian dynamics relating the time evolution of real vectors of position and momentum <MakeMath tex={"\\vec{q}, \\vec{p}"} />.</p>
	    <MakeMathDisplay tex={"\\frac{d q_i}{d t} = \\frac{\\partial H(\\vec{q}, \\vec{p}, t)}{\\partial p_i}"} />
	    <MakeMathDisplay tex={"\\frac{d p_i}{d t} = -\\frac{\\partial H(\\vec{q}, \\vec{p}, t)}{\\partial p_i}"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>In quantum mechanics we use Schrodinger's equation that relates the time evolution of a vector in a Hilbert space for a Hamiltonian operator.</p>
	    <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\psi(\\vec{x}, t) = -\\frac{i}{\\hbar} \\hat{H}(t) \\psi(\\vec{x}, t)"} />
	  </div>
	</div>
	<h2>Time evolution of state</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h2>Classical</h2>
	    <p>Define an operator for the derivative of the state vector of positions and mometum.</p>
            <MakeMathDisplay tex={"k(t)(\\langle \\vec{q}(t), \\vec{p}(t) \\rangle) = \\frac{d\\langle\\vec{q}(t), \\vec{p}(t)\\rangle}{dt} = \\Big\\langle \\frac{\\partial H(t)}{\\partial p_i}, \\dots, \\frac{\\partial H(t)}{\\partial q_i} \\Big\\rangle"} />
	    <p>An evolution for a small change in <MakeMath tex={"\\Delta t"} /> of the state vector can be approximated as</p>
	    <MakeMathDisplay tex={"\\langle\\vec{q}(t + \\Delta t), \\vec{p}(t + \\Delta t)\\rangle = \\langle\\vec{q}(t), \\vec{p}(t)\\rangle + \\Big(\\int_t^{t + \\Delta t} k(t') dt'\\Big)(\\langle\\vec{q}(t), \\vec{p}(t)\\rangle)"} />
	    <MakeMathDisplay tex={"= \\Big(1 + \\int_t^{t + \\Delta t} k(t') dt'\\Big)(\\langle\\vec{q}(t), \\vec{p}(t)\\rangle)"} />
	    <p>so in the limit of many evolutions it should become exact.</p>
	    <MakeMathDisplay tex={"\\langle\\vec{q}(t + \\Delta t), \\vec{p}(t + \\Delta t)\\rangle = \\lim_{n \\rightarrow \\infty}\\Big(1 + \\frac{1}{n}\\int_t^{t + \\Delta t} k(t') dt'\\Big)^n(\\langle\\vec{q}(t), \\vec{p}(t)\\rangle)"} />
	    <p>Call this operator exponentiation.</p>
	    <MakeMathDisplay tex={"\\langle\\vec{q}(t + \\Delta t), \\vec{p}(t + \\Delta t)\\rangle = e^{\\int_t^{t + \\Delta t} k(t') dt'}(\\langle\\vec{q}(t), \\vec{p}(t)\\rangle)"} />
	    <p>Define this as the "time evolution operator"</p>
	    <MakeMathDisplay tex={"\\mathcal{M}(t_a, t_b) = e^{\\int_{t_a}^{t_b} k(t') dt'}"} />
	    <p>so that it evolves a state from time <MakeMath tex={"t_a"} /> to <MakeMath tex={"t_b"} />.</p>
	    <MakeMathDisplay tex={"\\langle\\vec{q}(t_b), \\vec{p}(t_b)\\rangle = \\mathcal{M}(t_a, t_b)\\langle\\vec{q}(t_a), \\vec{p}(t_a)\\rangle"} />
	  </div>
	  <div className="flexInner1">
            <h2>Quantum</h2>
            <p>An evolution for a small change in time <MakeMath tex={"\\Delta t"} /> can be approximated as</p>
	    <MakeMathDisplay tex={"\\psi(t + \\Delta t) \\approx \\psi(t) + \\Big(\\int_{t}^{t + \\Delta t} -\\frac{i}{\\hbar}\\hat{H}(t') dt'\\Big) \\psi(t) "} />
	    <MakeMathDisplay tex={"= \\Big(1 + \\int_{t}^{t + \\Delta t} -\\frac{i}{\\hbar} \\hat{H}(t') dt'\\Big) \\psi(t) "} />
	    <p>so in the limit of many evolutions it should become exact.</p>
	    <MakeMathDisplay tex={"\\psi(t + \\Delta t) = \\lim_{n \\rightarrow \\infty} \\Big(1 + \\frac{1}{n}\\int_{t}^{t + \\Delta t} -\\frac{i}{\\hbar}\\hat{H}(t') dt'\\Big)^n \\psi(t) "} />
	    <p>Call this operator exponentiation.</p>
	    <MakeMathDisplay tex={"\\psi(t + \\Delta t) = e^{-\\frac{i}{\\hbar}\\int_{t}^{t + \\Delta t} \\hat{H}(t') dt'} \\psi(t) "} />
	    <p>Define this as the "time evolution operator"</p>
	    <MakeMathDisplay tex={"\\mathcal{M}(t_a, t_b) = e^{-\\frac{i}{\\hbar}\\int_{t_a}^{t_b} \\hat{H}(t') dt'\\Big)}"} />
	    <p>so that it evolves a state from time <MakeMath tex={"t_a"} /> to <MakeMath tex={"t_b"} />.</p>
	    <MakeMathDisplay tex={"\\psi(t_b) = \\mathcal{M}(t_a, t_b)\\psi(t_a)"} />
	  </div>
	</div>
	<h2>Operator exponentiation</h2>
	<p>Operator exponentiation can be also defined like below.</p>
	<MakeMathDisplay tex={"e^{\\mathcal{O}} = \\lim_{n \\rightarrow \\infty} \\sum_{k=0}^n \\frac{\\mathcal{O}^k}{k!}"} />
	<h2>Observables</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>Observables functions of the position and momentum.</p>
	    <MakeMathDisplay tex={"\\hat{A}(\\vec{q}, \\vec{p}) \\in \\mathbb{R}^n \\times \\mathbb{R}^n \\rightarrow \\mathbb{R}"} />
	    <p>They are measured by applying giving the function it's arguments</p>
	    <MakeMathDisplay tex={"A(t) = \\hat{A}(\\vec{q}(t), \\vec{p}(t))"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>Observables are self-adjoint operators on the Hilbert space.</p>
	    <MakeMathDisplay tex={"\\hat{A} \\in \\mathcal{H} \\rightarrow \\mathcal{H}"} />
	    <MakeMathDisplay tex={"\\hat{A} = \\hat{A}^\\dagger"} />
	    <p>They are measured by applying the state vector to both sides</p>
	    <MakeMathDisplay tex={"A(t) = \\langle \\psi(t) | \\hat{A} | \\psi(t) \\rangle "} />
	  </div>
	</div>
      
	<h2>Heisenberg Picture</h2>
	<p>Instead of measuring observables by applying a modified state, instead change how the function measures it with time, while the state stays constant. We define <MakeMath tex={"\\hat{A}_H"} /> to the below.</p>
      
	<div className="flexOuter">
	  <div className="flexInner1">
	    <h3>Classical</h3>
            <MakeMathDisplay tex={"A(t) = \\hat{A}_H(t)(\\vec{q}(t_0), \\vec{p}(t_0))"} />
	    <MakeMathDisplay tex={"\\hat{A}_H(t)= \\hat{A}\\mathcal{M}(t_0, t)"} />
	  </div>
	  <div className="flexInner1">
	    <h3>Quantum</h3>
            <MakeMathDisplay tex={"A(t) = \\langle \\psi(t_0) | \\hat{A}_H(t) | \\psi(t_0) \\rangle"} />
	    <MakeMathDisplay tex={"\\hat{A}_H(t)= \\mathcal{M}^\\dagger(t_0, t)\\hat{A}\\mathcal{M}(t_0, t)"} />
	  </div>
	</div>

	<h2>Time evolution of observables</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
	    <p>Using the chain rule we get</p>
            <MakeMathDisplay tex={"\\frac{d A}{dt}(t) = \\Big(\\sum_i \\frac{\\partial \\hat{A}}{\\partial q_i} \\frac{d q_i}{dt} + \\frac{\\partial \\hat{A}}{\\partial p_i} \\frac{d p_i}{dt}\\Big)(\\vec{q}(t), \\vec{p}(t))"} />
	    <p>then we can substitute in for the left side the Heisenberg picture and the right side the equations of motion for the time derivatives.</p>
	    <MakeMathDisplay tex={"\\bigg( \\frac{d \\hat{A}_H}{dt}(t)\\bigg)(\\vec{q}(t_0), \\vec{p}(t_0)) = \\Big(\\sum_i \\frac{\\partial \\hat{A}}{\\partial q_i} \\frac{\\partial H}{\\partial p_i} - \\frac{\\partial \\hat{A}}{\\partial p_i} \\frac{\\partial H}{\\partial q_i}\\Big)(\\vec{q}(t), \\vec{p}(t))"} />
	    <p>The time evolution of the Heisenberg observable is the Heisenberg version of the right side's operator.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = \\Big(\\sum_i \\frac{\\partial \\hat{A}}{\\partial q_i} \\frac{\\partial H}{\\partial p_i} - \\frac{\\partial \\hat{A}}{\\partial p_i} \\frac{\\partial H}{\\partial q_i}\\Big)_H(t)"} />
	    <p>Then we expand the definition of the Heisenberg observable.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = \\Big(\\sum_i \\frac{\\partial \\hat{A}}{\\partial q_i} \\frac{\\partial H}{\\partial p_i} - \\frac{\\partial \\hat{A}}{\\partial p_i} \\frac{\\partial H}{\\partial q_i}\\Big)\\mathcal{M}(t_0, t)"} />
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = \\sum_i \\frac{\\partial \\hat{A}_H}{\\partial q_i} \\frac{\\partial H_H}{\\partial p_i} - \\frac{\\partial \\hat{A}_H}{\\partial p_i} \\frac{\\partial H_H}{\\partial q_i}"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>Using the chain rule we get</p>
	    <MakeMathDisplay tex={"\\frac{d A(t)}{dt} = \\Big\\langle \\frac{d \\psi}{dt}(t) \\Big| \\hat{A} | \\psi(t) \\rangle + \\langle \\psi(t) | \\hat{A} \\Big| \\frac{d\\psi}{dt}(t) \\Big\\rangle "} />
	    <p>then we can substitute in for the right side the equations of motion for the time derivatives.</p>
	    <MakeMathDisplay tex={"\\langle \\psi(t) | \\Big(\\frac{i}{\\hbar}\\hat{H}^\\dagger \\Big) \\hat{A} | \\psi(t) \\rangle + \\langle \\psi(t) | \\hat{A}  \\Big(-\\frac{i}{\\hbar}\\hat{H}\\Big) |\\psi(t)\\rangle "} />
	    <p>Remember that <MakeMath tex={"\\hat{H}"} /> is self adjoint by definition of an observable.</p>
	    <MakeMathDisplay tex={"= \\langle \\psi(t) | \\Big(\\frac{i}{\\hbar}\\hat{H} \\Big) \\hat{A} | \\psi(t) \\rangle + \\langle \\psi(t) | \\hat{A}  \\Big(-\\frac{i}{\\hbar}\\hat{H}\\Big) |\\psi(t)\\rangle "} />
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar} \\langle \\psi(t) | \\hat{A}\\hat{H} - \\hat{H}\\hat{A} |\\psi(t)\\rangle "} />
	    <p>The measured time evolution of the Heisenberg picture is equal to this equation.</p>
	    <MakeMathDisplay tex={"\\langle \\psi(t_0) | \\frac{d\\hat{A}_H}{dt}(t)|\\psi(t_0)\\rangle = -\\frac{i}{\\hbar} \\langle \\psi(t) | \\hat{A}\\hat{H} - \\hat{H}\\hat{A} |\\psi(t)\\rangle "} />
	    <p>The time evolution of the Heisenberg observable is the Heisenberg version of the right side's operator.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = -\\frac{i}{h}\\Big(\\hat{A}\\hat{H}-\\hat{H}\\hat{A}\\Big)_H(t)"} />
	    <p>Then we can expand the definition of the Heisenberg operator.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = -\\frac{i}{h}\\mathcal{M}^\\dagger(t_0, t)\\Big(\\hat{A}\\hat{H}-\\hat{H}\\hat{A}\\Big)\\mathcal{M}(t_0, t)"} />
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = -\\frac{i}{h}\\Big(\\mathcal{M}^\\dagger(t_0, t)\\hat{A}\\hat{H}\\mathcal{M}(t_0, t)-\\mathcal{M}^\\dagger(t_0, t)\\hat{H}\\hat{A}\\mathcal{M}(t_0, t)\\Big)"} />
	    <p>And since the time evolution is just an exponentiation of an observable it is also an observable, and thus self adjoint, so <MakeMath tex={"\\mathcal{M}^\\dagger\\mathcal{M} = 1"} />, and we can insert them as an identity.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = -\\frac{i}{h}\\Big(\\mathcal{M}^\\dagger(t_0, t)\\hat{A}\\mathcal{M}^\\dagger(t_0, t)\\mathcal{M}(t_0, t)\\hat{H}\\mathcal{M}(t_0, t)-\\mathcal{M}^\\dagger(t_0, t)\\hat{H}\\mathcal{M}^\\dagger(t_0, t)\\mathcal{M}(t_0, t)\\hat{A}\\mathcal{M}(t_0, t)\\Big)"} />
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = -\\frac{i}{h}\\Big(\\hat{A}_H\\hat{H}_H-\\hat{H}_H\\hat{A}_H\\Big)"} />
	  </div>
	</div>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Possion Bracket</h3>
	    <p>If we define a Possion bracket for two observables</p>
	    <MakeMathDisplay tex={"\\{\\hat{A}, \\hat{B}\\} = \\sum_i \\frac{\\partial \\hat{A}}{\\partial q_i} \\frac{\\partial \\hat{B}}{\\partial p_i} - \\frac{\\partial \\hat{A}}{\\partial p_i} \\frac{\\partial \\hat{B}}{\\partial q_i}"} />
	    <p>then we can see</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = \\{\\hat{A}_H(t), H_H(t)\\}"} />
	  </div>
	  <div className="flexInner1">
            <h3>Commutator Bracket</h3>
            <p>If we define a Commutator bracket for two observables</p>
	    <MakeMathDisplay tex={"[\\hat{A}, \\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A}"} />
	    <p>then we can see</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt} = -\\frac{i}{\\hbar}[\\hat{A}_H(t), H_H(t)]"} />
	  </div>
	</div>
	<h2>Liouville operator</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
	    <p>Define an operator on observables.</p>
	    <MakeMathDisplay tex={"\\mathcal{L}(t) = \\{\\cdot, H_H(t)\\}_H"} />
	    <p>When the operator is applied to a Heisenberg picture observable it should give the derivative.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt}(t) = \\mathcal{L}(t)\\hat{A}_H"} />
	  </div>
	  <div className="flexInner1">
	    <h3>Classical</h3>
            <p>Define an operator on observables.</p>
	    <MakeMathDisplay tex={"\\mathcal{L}(t) = -\\frac{i}{\\hbar} [\\cdot, H_H(t)]"} />
	    <p>When the operator is applied to a Heisenberg picture observable it should give the derivative.</p>
	    <MakeMathDisplay tex={"\\frac{d \\hat{A}_H}{dt} = \\mathcal{L}(t)\\hat{A}_H"} />
	  </div>
	</div>
	<hr/>
	<h2>Time evolution operator</h2>
	<p>The time evolution can be approximated as</p>
	<MakeMathDisplay tex={"\\hat{A}_H(t + \\Delta t) \\approx \\hat{A}_H(t) + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big) \\hat{A}_H(t) = \\bigg(1 + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big) \\bigg) \\hat{A}_H(t)"} />
	<p>making it be exact in the limit.</p>
	<MakeMathDisplay tex={"\\hat{A}_H(t + \\Delta t) = \\lim_{n \\rightarrow \\infty} \\Big(1 + \\Big( \\int_t^{t + \\Delta t}\\mathcal{L}(t') dt' \\Big)\\frac{1}{n} \\Big)^n \\hat{A}_h(t)"} />
	<p>The limit becomes exact.</p>
	<MakeMathDisplay tex={"\\hat{A}_H(t + \\Delta t) = e^{\\int_t^{t+\\Delta t} \\mathcal{L}(t') dt'} \\hat{A}_H(t)"} />
	<p>Use this to define a time evolution operator on observables.</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}(t') dt'}"} />
	<p>Such that when applied will transform an observable from <MakeMath tex={"t_a"} /> to <MakeMath tex={"t_b"} />.</p>
	<MakeMathDisplay tex={"\\hat{A}_H(t_b) = \\mathcal{U}(t_a, t_b) \\hat{A}_H(t_a)"} />
      </div>
    </Wrapper>
  );
}

export default TimeEvolutionOperators;
