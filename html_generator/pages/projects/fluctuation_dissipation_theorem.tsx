import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function FluctuationDissipationTheorem({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <div className="center-headers">
	<p>We previously derived the <a href="../time_evolution">time evolution operators</a> for both Hamiltonian and Schrodinger equations.</p>
	<h2>Time evolution operator as a Volterra series</h2>
	<p>A Heisenberg observable <MakeMath tex={"\\hat{A}_H"} /> in classical or quantum mechanics will evolve by the time evolution operator</p>
	<MakeMathDisplay tex={"\\hat{A}_H(t_b) = \\mathcal{U}(t_a, t_b)\\hat{A}_H(t_a)"} />
	<p>where the derivative is the Liouville operator, and the time evolution operator is the operator exponentiation of the integrated Liouville operator.</p>
	<MakeMathDisplay tex={"\\frac{d\\hat{A}_H(t)}{dt} = \\mathcal{L}(t)\\hat{A}_H"} />
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}(t') dt'}"} />
	<p>Now if we substitute back into the derivative</p>
	<MakeMathDisplay tex={"\\frac{d}{dt} (\\mathcal{U}(t_a, t)\\hat{A}_H(t_a)) = \\mathcal{L}(t)\\mathcal{U}(t_a, t)\\hat{A}_H(t_a)"} />
	<p>then integrate both sides</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)\\hat{A}_H(t_a) - \\mathcal{U}(t_a, t_a)\\hat{A}_H(t_a) = \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t)\\hat{A}_H(t_a) dt"} />
	<p>replacing <MakeMath tex={"\\mathcal{U}(t_a, t_a)"} /> with 1</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)\\hat{A}_H(t_a) = \\hat{A}_H(t_a) + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t)\\hat{A}_H(t_a) dt"} />
	<p>we get the following relation.</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)\\hat{A}_H(t_a) = \\bigg( 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t) dt \\bigg) \\hat{A}_H(t_a)"} />
	<p>And since it should hold for arbitrary observable, the operators on both sides of the equation must be equal.</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t) dt"} />
	
	<h2>Expanding the Volterra series</h2>
	<p>If we keep substituting into itself, on iteration 0:</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1"} />
	<p>On iteration 1:</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt"} />
	<p>Then on iteration 2:</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2"} />
	<p>Then on iteration 3:</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2 + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\int_{t_a}^{t_2} \\mathcal{L}(t_1)\\mathcal{L}(t_2)\\mathcal{L}(t_3)dt_1dt_2dt_3"} />
	<p>And so on. If we assume it converges the limit should be a solution</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2 + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\int_{t_a}^{t_2} \\mathcal{L}(t_1)\\mathcal{L}(t_2)\\mathcal{L}(t_3)dt_1dt_2dt_3 + \\dots"} />
	<p>Just for syntax we will group all the higher order terms.</p>
	<MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\mathcal{O}(\\mathcal{L}^2)"} />

	<h2>Time evolution of probability</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>If we have a probability distribution <MakeMath tex={"\\rho(t, \\vec{q}, \\vec{p})"} /> over the phase space we can find the expected value of an observable by</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t) = \\int_V A(\\vec{q}, \\vec{p})\\rho(t, \\vec{q}, \\vec{p}) d\\vec{q} d\\vec{p}"} />
	    <p>And the probability distribution flows according the the continuity equation</p>
	    <MakeMathDisplay tex={"\\frac{d\\rho}{dt}(t, \\vec{x}(t)) = -\\nabla_x \\cdot \\Big( \\frac{d \\vec{x}}{dt} \\rho\\Big)"} />
	    <p>where the state vector <MakeMath tex={"\\vec{x} = \\langle q_1, q_2, \\dots, p_1, p_2, \\dots \\rangle"} /> so we can split it up and say the below.</p>
	    <MakeMathDisplay tex={"\\frac{d\\rho}{dt}(t, \\vec{q}(t), \\vec{p}(t)) = -\\nabla_q \\cdot \\Big( \\frac{d \\vec{q}}{dt} \\rho\\Big) -\\nabla_p \\cdot \\Big( \\frac{d \\vec{p}}{dt} \\rho\\Big)"} />
	    <p>Use the chain rule</p>
	    <MakeMathDisplay tex={"= -\\sum_k\\Big(\\frac{\\partial \\rho}{\\partial q_k}\\frac{d q_k}{dt} + \\rho \\frac{\\partial}{\\partial q_k}\\frac{d q_k}{dt}\\Big) -\\sum_k\\Big(\\frac{\\partial \\rho}{\\partial p_k}\\frac{d p_k}{dt} + \\rho \\frac{\\partial}{\\partial p_k}\\frac{d p_k}{dt}\\Big)"} />
	    <p>then substitue in Hamiltons equations.</p>
	    <MakeMathDisplay tex={"= -\\sum_k\\Big(\\frac{\\partial \\rho}{\\partial q_k}\\frac{\\partial H}{\\partial p_k} + \\rho \\frac{\\partial^2 H}{\\partial q_k \\partial p_k}\\Big) - \\sum_k\\Big(-\\frac{\\partial \\rho}{\\partial p_k}\\frac{\\partial H}{\\partial q_k} - \\rho \\frac{\\partial^2 H}{\\partial p_k \\partial q_k}\\Big)"} />
	    <p>Cancel those two terms.</p>
	    <MakeMathDisplay tex={"= -\\sum_k\\Big(\\frac{\\partial \\rho}{\\partial q_k}\\frac{\\partial H}{\\partial p_k} -\\frac{\\partial \\rho}{\\partial p_k}\\frac{\\partial H}{\\partial q_k}\\Big)"} />
	    <p>It's just the Possion bracket</p>
	    <MakeMathDisplay tex={"= \\{H, \\rho\\}"} />
	    <p>Define an operator that does this</p>
	    <MakeMathDisplay tex={"= \\mathcal{K}(t)\\rho(t)"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>If we have a density matrix <MakeMath tex={"\\rho(t)"} /> over the phase space we can find the expected value of an observable by</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t) = \\text{Tr}(\\rho(t) \\hat{A})"} />
	    <p>where the density matrix is defined below.</p>
	    <MakeMathDisplay tex={"\\rho(t) = \\sum_k p_k | \\psi_k(t) \\rangle \\langle \\psi_k(t) |"} />
	    <p>If we take the derivative of the density matrix we use the chain rule</p>
	    <MakeMathDisplay tex={"\\frac{d\\rho(t)}{dt} = \\sum_k p_k \\frac{d}{dt}\\Big(| \\psi_k(t) \\rangle \\langle \\psi_k(t)|\\Big) = \\sum_k p_k \\Big( | \\frac{d\\psi_k(t)}{dt} \\rangle \\langle \\psi_k(t)| + | \\psi_k(t) \\rangle \\langle \\frac{d\\psi_k(t)}{dt} | \\Big)"} />
	    <p>and substituting in Schrodingers equation we get</p>
	    <MakeMathDisplay tex={"= \\sum_k p_k \\Big( -\\frac{i}{\\hbar} \\hat{H}(t)| \\psi_k(t) \\rangle \\langle \\psi_k(t)| + | \\psi_k(t) \\rangle \\langle \\psi_k(t) | \\frac{i}{\\hbar} \\hat{H}^{\\dagger}(t) \\Big)"} />
	    <p>and the Hamiltonian is its on Hermetian so</p>
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}\\Big( \\hat{H}(t)\\rho(t) = \\rho(t)\\hat{H}(t) \\Big)"} />
	    <p>It's just the commutator bracket</p>
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}[\\hat{H}(t), \\rho(t)]"} />
	    <p>Define an operator that does this</p>
	    <MakeMathDisplay tex={"= \\mathcal{K}(t)\\rho(t)"} />
	  </div>
	</div>
	<hr/>
	<p>Since the derivative of the probability is</p>
	<MakeMathDisplay tex={"\\frac{d \\rho}{dt} = \\mathcal{K}(t)\\rho(t)"} />
	<p>Make a time evolution operator as the  exponentiation</p>
	<MakeMathDisplay tex={"\\rho(t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{K}(t')dt'}\\rho(t_a) = \\mathcal{P}(t_a, t_b)\\rho(t_a)"} />
	
	<h2>Interation picture</h2>
	<p>In the interaction picture we split the Hamiltonian into time independent and a time dependent part.</p>
	<MakeMathDisplay tex={"H = H_0 + H_1(t)"} />
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>Define an interaction picture version.</p>
	    <MakeMathDisplay tex={"\\mathcal{K}(t) = \\{H(t), \\cdot\\}"} />
	    <MakeMathDisplay tex={"= \\{H_0(t) + H_1(t), \\cdot\\}"} />
	    <p>The Possion bracket distributes over addition.</p>
	    <MakeMathDisplay tex={"= \\{H_0, \\cdot \\} + \\{H_1(t), \\cdot \\}"} />
	    <p>Then define 2 new operators for each term</p>
	    <MakeMathDisplay tex={"= \\mathcal{K}_0 + \\mathcal{K}_1(t)"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>Define an interaction picture Liouville operator.</p>
	    <MakeMathDisplay tex={"\\mathcal{K}(t) = -\\frac{i}{\\hbar}[H(t), \\cdot]"} />
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}[H_0 + H_1(t), \\cdot]"} />
	    <p>The commutator bracket distributes over addition.</p>
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}[H_0, \\cdot]-\\frac{i}{\\hbar}[H_1(t), \\cdot]"} />
	    <p>Then define 2 new operators for each term</p>
	    <MakeMathDisplay tex={"= \\mathcal{K}_0 + \\mathcal{K}_1(t)"} />
	  </div>
	</div>
	<MakeMathDisplay tex={"\\mathcal{P}_0(t_a, t_b) = e^{(t_b - t_a) \\mathcal{K}_0}"} />
	<MakeMathDisplay tex={"\\mathcal{P}_1(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{K}_1(t') dt'}"} />
	<MakeMathDisplay tex={"\\mathcal{K}_{1, I}(t) = e^{-(t - t_a) \\mathcal{K}_0} \\mathcal{K}_1(t) e^{(t - t_a)\\mathcal{L}_0}"} />
	<MakeMathDisplay tex={"\\mathcal{P}_{1, I}(t) = e^{\\int_{t_a}^{t_b} \\mathcal{K}_{1, I}(t') dt'}"} />
	<p>and can prove with showing starting condition is the same and derivative is the same</p>
	<MakeMathDisplay tex={"\\mathcal{P}(t_a, t_b) = \\mathcal{P}_0(t_a, t_b)\\mathcal{P}_{1, I}(t_a, t_b)"} />
	<p>We can do a Volterra series it as</p>
	<MakeMathDisplay tex={"\\mathcal{P}_{1, I}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{K}_{1, I}(t)\\mathcal{P}_{1, I}(t_a, t))dt"} />
	<p>and expand it</p>
	<MakeMathDisplay tex={" = 1 + \\int_{t_a}^{t_b} \\mathcal{K}_{1, I}(t)dt + \\mathcal{O}(\\mathcal{K}_{1, I}^2)"} />
	<p>Then</p>
	<MakeMathDisplay tex={"\\mathcal{P}(t_a, t_b) = \\mathcal{P}_0(t_a, t_b) + \\int_{t_a}^{t_b} \\mathcal{P}_0(t_a, t_b)\\mathcal{K}_{1, I}(t)dt + \\mathcal{O}(\\mathcal{K}_{1, I}^2)"} />
	<MakeMathDisplay tex={"= \\mathcal{P}_0(t_a, t_b) + \\int_{t_a}^{t_b} e^{(t_b - t_a) \\mathcal{K}_0} e^{-(t - t_a)\\mathcal{K}_0}\\mathcal{K}_1(t) e^{(t - t_a)\\mathcal{K}_0}dt + \\mathcal{O}(\\mathcal{K}_{1, I}^2)"} />
	<MakeMathDisplay tex={"= \\mathcal{P}_0(t_a, t_b) + \\int_{t_a}^{t_b} e^{(t_b - t) \\mathcal{K}_0} \\mathcal{K}_1(t) e^{(t - t_a)\\mathcal{K}_0}dt + \\mathcal{O}(\\mathcal{K}_{1, I}^2)"} />
	<MakeMathDisplay tex={"= \\mathcal{P}_0(t_a, t_b) + \\int_{t_a}^{t_b} \\mathcal{P}_0(t, t_b) \\mathcal{K}_1(t) \\mathcal{P}_0(t_a, t)dt + \\mathcal{O}(\\mathcal{K}_{1, I}^2)"} />
	<hr />
	<h2>Linear response</h2>
	<p>Consider a closed system where the Hamiltonian is time independent, and is then perturbed by a force along some observable</p>
	<MakeMathDisplay tex={"H(t) = H_0 - h(t)\\hat{B}"} />
	<p>Here <MakeMathDisplay tex={"H_1(t) = - h(t)\\hat{B}"} /> so</p>
      
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>Here <MakeMath tex={"\\mathcal{K}_1(t)"} /> is </p>
	    <MakeMathDisplay tex={"\\mathcal{K}_1(t) = \\{-h(t)\\hat{B}, \\cdot\\} = -h(t)\\{\\hat{B}, \\cdot\\}"} />
	    <p>So let's define</p>
	    <MakeMathDisplay tex={"\\mathcal{K}_B = \\{\\hat{B}, \\cdot\\}"} />
	    <p>So that</p>
	    <MakeMathDisplay tex={"\\mathcal{K}_1(t) = -h(t)\\mathcal{K}_B"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
            <p>Here <MakeMath tex={"\\mathcal{L}_1(t)"} /> is </p>
	    <MakeMathDisplay tex={"\\mathcal{K}_1(t) = -\\frac{i}{\\hbar}[-h(t)\\hat{B}, \\cdot] = -h(t)\\Big(-\\frac{i}{\\hbar}[\\hat{B}, \\cdot]\\Big)"} />
	    <p>So let's define</p>
	    <MakeMathDisplay tex={"\\mathcal{K}_B(t) = -\\frac{i}{\\hbar} [\\hat{B}(t), \\cdot]"} />
	    <p>So that</p>
	    <MakeMathDisplay tex={"\\mathcal{K}_1(t) = -h(t)\\mathcal{K}_B(t)"} />
	  </div>
	</div>
	<p>So we get</p>
	<MakeMathDisplay tex={"\\mathcal{P}(t_a, t_b) = \\mathcal{P}_0(t_a, t_b) + \\int_{t_a}^{t_b} \\mathcal{P}_0(t, t_b) \\Big(-h(t) \\mathcal{K}_B\\Big) \\mathcal{P}_0(t_a, t) + \\mathcal{O}(h^2)"} />
	<p>And we find that</p>
	<MakeMathDisplay tex={"\\rho(t_b) - \\rho_0(t_b) = \\int_{t_a}^{t_b} \\mathcal{P}_0(t, t_b) \\Big(-h(t) \\mathcal{K}_B\\Big) \\mathcal{P}_0(t_a, t)\\rho(t_a) + \\mathcal{O}(h^2)"} />

	<h2>Expected value of observable at equilibium</h2>
	<p>Assume that at time <MakeMath tex={"t_a"} /> there was no perturbation and the system is in thermal equilibrium. For all <MakeMath tex={"t \\le t_a"} /> the probability distribution is at some equilibrium distribution <MakeMath tex={"\\rho(t) = \\rho_0"} /> and there was no force <MakeMath tex={"h(t) = 0"} />.</p>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h3>Classical</h3>
            <p>If we have a probability distribution <MakeMath tex={"\\rho(t, \\vec{q}, \\vec{p})"} /> over the phase space we can find the expected value of an observable by</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t) = \\int_V A(\\vec{q}, \\vec{p})\\rho(t, \\vec{q}, \\vec{p}) d\\vec{q} d\\vec{p}"} />
	    <p>The difference in expected values is</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t_b) - \\mathbb{E}_0[A](t_b) = \\int_V \\rho(t_b) A d\\vec{q} d\\vec{p} - \\int_V \\rho_0(t_b) A d\\vec{q} d\\vec{p}"} />
	    <MakeMathDisplay tex={" = \\int_V \\Big(\\rho(t_b) - \\rho_0(t_b)\\Big) A d\\vec{q} d\\vec{p}"} />
	    <p>Then put in the Volterra series</p>
	    <MakeMathDisplay tex={" = \\int_V \\bigg(\\int_{t_a}^{t_b} \\mathcal{P}_0(t, t_b)\\Big(-h(t) \\mathcal{K}_B\\Big) \\mathcal{P}_0(t_a, t)\\rho(t_a)dt\\bigg) A d\\vec{q} d\\vec{p} + \\mathcal{O}(h^2)"} />
	    <p>and move the integrals around</p>
	    <MakeMathDisplay tex={" = \\int_{t_a}^{t_b} h(t) \\int_V -\\Bigg(\\mathcal{P}_0(t, t_b) \\mathcal{K}_B\\mathcal{P}_0(t_a, t)\\rho(t_a)\\Bigg) A d\\vec{q} d\\vec{p} dt + \\mathcal{O}(h^2)"} />
	    <p>Call the factor with first order of <MakeMath tex={"h"}/> the linear response function</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t - t_b) = -\\int_V \\Bigg(\\mathcal{P}_0(t, t_b)\\mathcal{K}_B \\mathcal{P}_0(t_a, t)\\rho(t_a)\\Bigg) A d\\vec{q} d\\vec{p}"} />
	    <p>put in the equilbrium distribution <MakeMath tex={"\\rho(t_a) = \\rho_0(\\vec{q}, \\vec{p}) = \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z}"} /></p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t - t_b) = -\\int_V \\Bigg(\\mathcal{P}_0(t, t_b)\\mathcal{K}_B \\mathcal{P}_0(t_a, t)\\rho_0\\Bigg) A d\\vec{q} d\\vec{p}"} />
	    <p>And by definition the distribution shouldn't evolve under the unberturbed Hamiltonian (you can prove this).</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t - t_b) = -\\int_V \\Bigg(\\mathcal{P}_0(t, t_b)\\mathcal{K}_B\\rho_0\\Bigg) A d\\vec{q} d\\vec{p}"} />
	    <p>so its like</p>
	    <MakeMathDisplay tex={" = -\\int_V \\bigg(\\mathcal{P}_0(t, t_b) \\sum_i \\frac{\\partial B}{\\partial q_i} \\frac{\\partial \\rho_0}{\\partial p_i} - \\frac{\\partial B}{\\partial p_i} \\frac{\\partial \\rho_0)}{\\partial q_i} \\bigg) A d\\vec{p} d\\vec{q}"} />
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\mathcal{P}_0(t, t_b) \\Bigg( \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z} \\bigg( \\sum_i \\frac{\\partial B}{\\partial q_i} \\frac{\\partial H_0}{\\partial p_i} - \\frac{\\partial B}{\\partial p_i} \\frac{\\partial H_0}{\\partial q_i} \\bigg) \\Bigg) A d\\vec{p} d\\vec{q}"} />
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\mathcal{P}_0(t, t_b) \\Bigg( \\rho_0 \\mathcal{L}_0 B \\bigg) \\Bigg) A d\\vec{p} d\\vec{q}"} />
	    <p>where <MakeMath tex={"\\mathcal{L}_0 = \\{\\cdot, H_0\\}"} /> is a Liouville operator for only the equilibrium Hamiltonian. The time evolution operator distributes over multiplication.</p>
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\Bigg(\\mathcal{P}_0(t, t_b) \\rho_0\\Bigg) \\Bigg(\\mathcal{P}_0(t, t_b) \\mathcal{L}_0 B \\Bigg) A d\\vec{p} d\\vec{q}"} />
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\rho_0 \\mathcal{P}_0(t, t_b)\\Big( \\mathcal{L}_0 B \\Big) A d\\vec{p} d\\vec{q}"} />
	    <p>And since <MakeMath tex={"\\mathcal{K}_0(t) = -\\mathcal{L}_0(t)"} />, and operators commute with their own exponent:</p>
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\rho_0 \\Big( \\mathcal{L}_0 e^{-(t_b - t)\\mathcal{L}_0} B \\Big) A d\\vec{p} d\\vec{q}"} />
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\rho_0 \\Big( \\dot{B}_0(t - t_b) \\Big) A d\\vec{p} d\\vec{q}"} />
	    <p>Where <MakeMath tex={"\\dot{B}"} /> is time shifted to measure <MakeMath tex={"t - t_b"} /> in the future. And this is just the expected value at equilibrium</p>
	    <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\mathbb{E}_0 [\\dot{B}(t_a + t - t_b)A(t_a)]"} />
	    <p>So</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t - t_b) = \\frac{1}{k_B T} \\frac{d}{dt}\\mathbb{E}_0 [B(t_a + t - t_b) A(t_a)]"} />
	    <MakeMathDisplay tex={"\\chi_{AB}(t) = \\frac{1}{k_B T} \\frac{d}{dt}\\mathbb{E}_0 [B(t_a + t) A(t_a)]"} />
	  </div>
	  <div className="flexInner1">
            <h3>Quantum</h3>
      	    <p>So the expected value is</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t) = \\text{Tr}\\Big(\\rho(t)\\hat{A}\\Big)"} />
	    <p>And the difference is</p>
	    <MakeMathDisplay tex={"\\mathbb{E}[A](t_b) - \\mathbb{E}_0[A](t_b) = \\text{Tr}(\\rho(t_b) \\hat{A}) - \\text{Tr}(\\rho_0(t_b) \\hat{A})"} />
	    <MakeMathDisplay tex={" = \\text{Tr}((\\rho(t_b) - \\rho_0(t_b)) \\hat{A})"} />
	    <p>Put the volterra series in there</p>
	    <MakeMathDisplay tex={" = \\text{Tr}\\bigg(\\int_{t_a}^{t_b} \\bigg(\\mathcal{P}_0(t, t_b)\\Big(-h(t) \\mathcal{K}_B\\Big)  \\mathcal{P}_0(t_a, t) \\rho(t_a) \\bigg) \\hat{A} dt \\bigg) + \\mathcal{O}(h^2)"} />
	    <p>Move some stuff around</p>
	    <MakeMathDisplay tex={" = -\\int_{t_a}^{t_b} h(t) \\text{Tr}\\bigg(\\mathcal{P}_0(t, t_b) \\mathcal{K}_B(t) \\mathcal{P}_0(t_a, t) \\rho(t_a) \\bigg) \\hat{A}\\bigg) dt  + \\mathcal{O}(h^2)"} />
	    <p>Call this first order term the linear response function</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t-t_b) = -\\text{Tr}\\bigg(\\bigg(\\mathcal{P}_0(t, t_b) \\mathcal{K}_B(t) \\mathcal{P}_0(t_a, t) \\rho(t_a) \\bigg) \\hat{A} \\bigg)"} />
	    <p>Assume equilibrium at <MakeMath tex={"t_a"} /> and put in the equilbium density matrix <MakeMath tex={"\\rho_0 = \\frac{e^{-\\frac{\\hat{H}_0}{k_B T}}}{Z}"} />.</p>
	    <MakeMathDisplay tex={" = -\\text{Tr}\\bigg(\\bigg(\\mathcal{P}_0(t, t_b) \\mathcal{K}_B(t) \\mathcal{P}_0(t_a, t) \\rho_0 \\bigg) \\hat{A} \\bigg)"} />
	    <p>And you can check that it doesn't change in time from the equilbrium Hamiltonian</p>
	    <MakeMathDisplay tex={" = -\\text{Tr}\\bigg(\\bigg(\\mathcal{P}_0(t, t_b) \\mathcal{K}_B(t) \\rho_0 \\bigg) \\hat{A} \\bigg)"} />
	    <p>Then expand</p>
	    <MakeMathDisplay tex={"= \\text{Tr}\\bigg(\\frac{i}{\\hbar}\\bigg(\\mathcal{P}_0(t, t_b) \\Big( \\rho_0 B - B \\rho_0\\Big) \\bigg) \\hat{A} \\bigg)"} />
	    <p>and because <MakeMath tex={"\\mathcal{K}(t) = -\\mathcal{L}(t)"} /> </p>
	    <MakeMathDisplay tex={"= \\text{Tr}\\bigg(\\frac{i}{\\hbar}\\bigg(\\rho_0 B(t-t_b) - B(t-t_b) \\rho_0 \\bigg) \\hat{A} \\bigg)"} />
	    <p>split</p>
	    <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t-t_b) \\hat{A}\\bigg) - \\text{Tr}\\bigg(B(t-t_b)e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}\\bigg) \\Bigg)"} />
	    <p>and remember the cycle property of traces, and cycle the second one</p>
	    <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t - t_b) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t - t_b)\\bigg) \\Bigg)"} />
	    <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}[A, B(t - t_b)]\\bigg)"} />
	    <p>so</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t-t_b) = -\\frac{i}{\\hbar}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}[A(t_a), B(t_a + t - t_b)]\\bigg)"} />
	    <MakeMathDisplay tex={"\\chi_{AB}(t) = -\\frac{i}{\\hbar}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}[A(t_a), B(t_a + t)]\\bigg)"} />
	    <MakeMathDisplay tex={"\\chi_{AB}(t) = -\\frac{i}{\\hbar}\\mathbb{E}_0\\Big[[A(t_a), B(t_a + t)]\\Big]"} />
	    <p>This is the Kubo formula</p>
	    <hr />
	    <p>The time evolution operator</p>
	    <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)\\hat{A} = e^{(t_b-t_a)\\frac{i}{\\hbar}\\hat{H}_0} \\hat{A} e^{(t_b-t_a)\\frac{-i}{\\hbar}\\hat{H}_0}"} />
	    <p>Next we consider imaginary time</p>
	    <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	    <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t)e^{\\frac{\\hat{H}_0}{k_B T}} e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	    <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(B(t - \\frac{i\\hbar}{k_B T}) e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	    <p>Then cycle the trace again</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(t) = \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	    <p>fourier transform (linear response must be zero for negative times so the integral can start at zero)</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\int_0^{\\infty} e^{-i\\omega t} \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg) dt"} />

	    <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{i}{\\hbar}\\Bigg(\\int_0^{\\infty} e^{-i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg)dt - \\int_0^{\\infty} e^{-i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg)dt \\Bigg)"} />
	    <p>And we can remove the phase shift in the first term</p>
	    <MakeMathDisplay tex={" = \\frac{i}{\\hbar}\\Bigg(e^{\\frac{\\hbar\\omega}{k_B T}}\\int_0^{\\infty} e^{-i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t)\\bigg)dt - \\int_0^{\\infty} e^{-i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg)dt \\Bigg)"} />

	    <MakeMathDisplay tex={" = \\frac{i}{\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\int_0^{\\infty} e^{-i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t)\\bigg)dt"} />

	    <MakeMathDisplay tex={" = \\frac{i}{\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt"} />

	  </div>
	</div>

	<h2>Imaginary part</h2>
	<div className="flexOuter">
	  <div className="flexInner1">
            <h4>Classical</h4>
	    <p>Now take the fourier transform</p>
	    <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{1}{k_B T} \\int_{-\\infty}^{\\infty} e^{-i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t_a + t) A(t_a)]dt"} />
	    <p>It shouldn't work for negative values so</p>
	    <MakeMathDisplay tex={"= \\frac{1}{k_B T} \\int_0^{\\infty} e^{-i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t_a + t) A(t_a)]dt"} />
	    <p>integrate by parts</p>
	    <MakeMathDisplay tex={"\\frac{1}{k_B T}\\Big( e^{-i\\omega\\infty} \\mathbb{E}_0 [B(t_a+\\infty) A(t_a)] - e^0 \\mathbb{E}_0 [B(t_a) A(t_a)]\\Big)+\\frac{1}{k_B T} \\int_{0}^{\\infty} \\Big(\\frac{d}{dt}e^{-i\\omega t}\\Big) \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt"} />
	    <p>In the limit to infinity they should become uncorrelated</p>
	    <MakeMathDisplay tex={"-\\frac{1}{k_B T}\\mathbb{E}_0 [B(t_a) A(t_a)]\\Big)+\\frac{1}{k_B T} \\int_{0}^{\\infty} \\Big(\\frac{d}{dt}e^{-i\\omega t}\\Big) \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt"} />
	    <MakeMathDisplay tex={"-\\frac{1}{k_B T}\\mathbb{E}_0 [B(t_a) A(t_a)]\\Big)-\\frac{i\\omega}{k_B T} \\int_{0}^{\\infty} e^{-i\\omega t} \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt"} />
	    <p>taking just the imaginary part</p>
	    <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = -\\frac{\\omega}{k_B T} \\text{Re}\\bigg[\\int_0^{\\infty} e^{-i\\omega t} \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt\\bigg]"} />
	    <p>Taking just the real part of anything is</p>
	    <MakeMathDisplay tex={"\\text{Re}[f] = \\frac{f + f^*}{2}"} />
	    <p>So doing that gives</p>
	    <MakeMathDisplay tex={" = -\\frac{\\omega}{2 k_B T} \\bigg(\\int_0^{\\infty} e^{-i\\omega t} \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt + \\int_0^{\\infty} e^{i\\omega t} \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt\\bigg)"} />
	    <MakeMathDisplay tex={" = -\\frac{\\omega}{2 k_B T} \\bigg(\\int_0^{\\infty} e^{-i\\omega t} \\mathbb{E}_0 [B(t_a + t) A(t_a)]dt + \\int_{-\\infty}^0 e^{-i\\omega t} \\mathbb{E}_0 [B(t_a - t) A(t_a)]dt\\bigg)"} />
	    <p>And if <MakeMath tex={"A = B"} /> then</p>
	    <MakeMathDisplay tex={" = -\\frac{\\omega}{2 k_B T} \\bigg(\\int_0^{\\infty} e^{-i\\omega t} \\mathbb{E}_0 [A(t_a + t) A(t_a)]dt + \\int_{-\\infty}^0 e^{-i\\omega t} \\mathbb{E}_0 [A(t_a-t) A(t_a)]dt\\bigg)"} />
	    <p>And at equlibrium it's time invariant so you can shift both the offsets in the right integral by <MakeMath tex={"t"} />.</p>
	    <MakeMathDisplay tex={" = -\\frac{\\omega}{2 k_B T} \\bigg(\\int_0^{\\infty} e^{i\\omega t} \\mathbb{E}_0 [A(t_a + t) A(t_a)]dt + \\int_{-\\infty}^0 e^{i\\omega t} \\mathbb{E}_0 [A(t_a) A(t_a+t)]dt\\bigg)"} />
	    <MakeMathDisplay tex={" = -\\frac{\\omega}{2 k_B T} \\int_{-\\infty}^{\\infty} e^{i\\omega t} \\mathbb{E}_0 [A(t_a + t) A(t_a)]dt"} />
	    <p>So we get a final formulat relating the spectral density to the linear respones function.</p>	    
	    <MakeMathDisplay tex={"\\int_{-\\infty}^{\\infty} e^{i\\omega t} \\mathbb{E}_0 [A(t_a + t) A(t_a)]dt = -\\frac{2 k_B T}{\\omega}\\text{Im}[\\chi_{AA}(\\omega)]"} />
	  </div>
	  <div className="flexInner1">
            <h4>Quantum</h4>
	    <p>Taking just the imaginary part of anything is</p>
	    <MakeMathDisplay tex={"\\text{Im}[f] = \\frac{f - f^*}{2i}"} />
	    <p>so</p>
	    <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = \\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt\\bigg) - \\bigg(-\\int_0^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[B^\\dagger(t)\\hat{A}^\\dagger\\bigg]dt\\bigg)\\Bigg)"} />
	    <p>And observables are Hermetian</p>
	    <MakeMathDisplay tex={" = \\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt\\bigg) + \\bigg(\\int_0^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[B(t)\\hat{A}\\bigg]dt\\bigg)\\Bigg)"} />
	    <p>Let A=B</p>
	    <MakeMathDisplay tex={"\\text{Im}[\\chi_{AA}(\\omega)] = \\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) + \\bigg(\\int_0^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[A(t)\\hat{A}\\bigg]dt\\bigg)\\Bigg)"} />
	    <MakeMathDisplay tex={" = \\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) + \\bigg(\\int_{-\\infty}^0 e^{-i\\omega t}\\mathbb{E}_0\\bigg[A(-t)\\hat{A}\\bigg]dt\\bigg)\\Bigg)"} />
	    <p>And at equilibrium shifting the time shouldn't matter <MakeMath tex={"\\mathbb{E}_0[A(t_a - t)A(t_a)] = \\mathbb{E}_0[A(t_a)A(t_a+t)]"} /></p>
	    <MakeMathDisplay tex={" = \\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\int_0^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) + \\bigg(\\int_{-\\infty}^0 e^{-i\\omega t}\\mathbb{E}_0\\bigg[A\\hat{A}(t)\\bigg]dt\\bigg)\\Bigg)"} />
	    <p>Then combined makes</p>
	    <MakeMathDisplay tex={"\\frac{1}{2\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt"} />
	    <p>And we get</p>
	    <MakeMathDisplay tex={"\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt = \\frac{2\\hbar}{e^{\\frac{\\hbar\\omega}{k_B T}}-1} \\text{Im}[\\chi_A(\\omega)]"} />
	    
	  </div>
	</div>

	<h3>Classical limit</h3>
	<p>If we negative the frequency</p>
	<MakeMathDisplay tex={"S'(\\omega) = S(-\\omega) = \\int_{-\\infty}^\\infty e^{-i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt = 2\\hbar\\Big(\\frac{1}{e^{\\beta \\hbar \\omega} - 1} + 1\\Big)\\text{Im}[\\chi(-\\omega)]"} />
	<p>And since <MakeMath tex={"\\chi"} /> is a real function the Imaginary component is an odd function</p>
	<MakeMathDisplay tex={"= -2\\hbar\\Big(\\frac{1}{e^{-\\beta \\hbar \\omega} - 1} + 1\\Big)\\text{Im}[\\chi(\\omega)]"} />
	<MakeMathDisplay tex={"= 2\\hbar\\Big(\\frac{e^{\\beta \\hbar \\omega}}{e^{\\beta \\hbar \\omega} - 1} - 1\\Big)\\text{Im}[\\chi(\\omega)]"} />
	<MakeMathDisplay tex={"= 2\\hbar\\frac{1}{e^{\\beta \\hbar \\omega} - 1}\\text{Im}[\\chi(\\omega)]"} />
	<p>So in the quantum version unlike the classical version <MakeMath tex={"S(\\omega) \\neq S(-\\omega)"} />, the spectral density isn't the same when frequency is negated. To fix this we can average the two.</p>
	<MakeMathDisplay tex={"\\frac{S(\\omega) + S(-\\omega)}{2} = 2\\hbar \\Big(\\frac{1}{e^{\\beta \\hbar \\omega} - 1} + \\frac{1}{2}\\Big) \\text{Im}[\\chi(\\omega)]"} />
	<MakeMathDisplay tex={"= \\hbar \\Big(\\frac{2}{e^{\\beta \\hbar \\omega} - 1} + 1\\Big) \\text{Im}[\\chi(\\omega)]"} />
	<MakeMathDisplay tex={"= \\hbar \\frac{e^{\\beta \\hbar \\omega} + 1}{e^{\\beta \\hbar \\omega} - 1} \\text{Im}[\\chi(\\omega)]"} />
	<MakeMathDisplay tex={"= \\hbar \\frac{e^{\\frac{\\beta \\hbar \\omega}{2}} + e^{-\\frac{\\beta \\hbar \\omega}{2}}}{e^{\\frac{\\beta \\hbar \\omega}{2}} - e^{-\\frac{\\beta \\hbar \\omega}{2}}} \\text{Im}[\\chi(\\omega)]"} />
	<p>And thats just the formula for hyperbolic cotangent</p>
	<MakeMathDisplay tex={"= \\hbar \\coth(\\frac{\\beta \\hbar \\omega}{2}) \\text{Im}[\\chi(\\omega)]"} />
	<p>for large temepratrues</p>
	<MakeMathDisplay tex={"\\lim_{\\hbar \\rightarrow 0} \\hbar \\coth(\\frac{\\beta \\hbar \\omega}{2}) = \\frac{2}{\\beta \\omega}"} />
	<p>so</p>
	<MakeMathDisplay tex={"\\lim_{\\hbar \\rightarrow 0} \\frac{S(\\omega) + S(-\\omega)}{2} = \\frac{2}{\\beta\\omega} \\text{Im}[\\chi(\\omega)]"} />
	<p>And this recovers the classical version in the classical limit</p>
	<MakeMathDisplay tex={"\\lim_{\\hbar \\rightarrow 0} \\frac{S(\\omega) + S(-\\omega)}{2} = \\frac{2k_B T}{\\omega} \\text{Im}[\\chi(\\omega)]"} />
      </div>
    </Wrapper>
  );
}

export default FluctuationDissipationTheorem;
