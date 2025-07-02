import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function FluctuationDissipationTheorem({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>We previously derived the <a href="../time_evolution">time evolution operators</a> for both Hamiltonian and Schrodinger equations.</p>
      <h2>Time evolution operator as a Volterra series</h2>
      <p>An observable <MakeMath tex={"A"} /> in classical or quantum mechanics will evolve by the time evolution operator</p>
      <MakeMathDisplay tex={"A(t_b) = \\mathcal{U}(t_a, t_b)A(t_a)"} />
      <p>where</p>
      <MakeMathDisplay tex={"\\frac{dA(t)}{dt} = \\mathcal{L}(t)A"} />
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}(t') dt'}"} />
      <p>Now if we substitute back into the derivative</p>
      <MakeMathDisplay tex={"\\frac{d}{dt} (\\mathcal{U}(t_a, t)A(t_a)) = \\mathcal{L}(t)\\mathcal{U}(t_a, t)A(t_a)"} />
      <p>Integrate both sides</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)A(t_a) - \\mathcal{U}(t_a, t_a)A(t_a) = \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t)A(t_a) dt"} />
      <p>And <MakeMath tex={"\\mathcal{U}(t_a, t_a)"} /> is just 1.</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)A(t_a) = A(t_a) + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t)A(t_a) dt"} />
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)A(t_a) = \\bigg( 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t) dt \\bigg) A(t_a)"} />
      <p>And since it works for arbitrary observable the operators on both sides must be equal</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)\\mathcal{U}(t_a, t) dt"} />
      <h3>Expanding the Volterra series</h3>
      <p>If we keep substituting into itself, on iteration zero</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1"} />
      <p>then on iteration 1</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt"} />
      <p>then on iteration 2</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2"} />
      <p>then on iteration 3</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2 + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\int_{t_a}^{t_2} \\mathcal{L}(t_1)\\mathcal{L}(t_2)\\mathcal{L}(t_3)dt_1dt_2dt_3"} />
      <p>And so on, and assume it converges it should be a solution</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\mathcal{L}(t_1)\\mathcal{L}(t_2)dt_1dt_2 + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} \\int_{t_a}^{t_2} \\mathcal{L}(t_1)\\mathcal{L}(t_2)\\mathcal{L}(t_3)dt_1dt_2dt_3 + \\dots"} />
      <p>For syntax we will group all the higher order terms</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}(t)dt + \\mathcal{O}(\\mathcal{L}^2)"} />
      
      <h3>Interation picture</h3>
      <p>If the Hamiltonian has a time independent and a time dependent part</p>
      <MakeMathDisplay tex={"H(t) = H_0 + H_1(t)"} />
      <div className="flexOuter">
	<div className="flexInner1">
          <h4>Classical</h4>
          <p>The Liouville operator is just the Possion bracket so</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = \\{\\cdot, H(t)\\} = \\{\\cdot, H_0 + H_1(t)\\}"} />
	  <p>And the Possion bracket distributes over addition</p>
	  <MakeMathDisplay tex={"\\{\\cdot, H(t)\\} = \\{\\cdot, H_0\\} + \\{\\cdot, H_1(t)\\}"} />
	  <p>so it can be written as the addition of two Liouville operators</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = \\mathcal{L}_0 + \\mathcal{L}_1(t)"} />
	</div>
	<div className="flexInner1">
          <h4>Quantum</h4>
          <p>The Liouville operator is just the commutator bracket so</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = -\\frac{i}{\\hbar}[\\cdot, H(t)] = -\\frac{i}{\\hbar}[\\cdot, H_0 + H_1(t)]"} />
	  <p>And the commutator bracket distributes over addition</p>
	  <MakeMathDisplay tex={"-\\frac{i}{\\hbar}[\\cdot, H(t)] = -\\frac{i}{\\hbar}[\\cdot, H_0] + -\\frac{i}{\\hbar}[\\cdot, H_1(t)]"} />
	  <p>so it can be written as the addition of two Liouville operators</p>
	  <MakeMathDisplay tex={"\\mathcal{L}(t) = \\mathcal{L}_0 + \\mathcal{L}_1(t)"} />
	</div>
      </div>
      <p>Then the time evolution operator becomes</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}(t') dt'} = e^{\\int_{t_a}^{t_b} \\mathcal{L}_0 + \\mathcal{L}_1(t') dt'} = e^{\\int_{t_a}^{t_b} + \\mathcal{L}_1(t') dt' + (t_b - t_a)\\mathcal{L}_0}"} />
      <p>So the time evolution operator can be split into two. If we define an interaction persepctive of an observable, where it "un-evolves" the time independent part of the Hamiltonian as</p>
      <MakeMathDisplay tex={"A_I(t) = e^{-(t - t_a)\\mathcal{L}_0}A(t)"} />
      <p>Then to find a Liouville operator of this</p>
      <MakeMathDisplay tex={"\\frac{dA_I}{dt} = \\frac{d}{dt} \\Big(e^{-(t - t_a)\\mathcal{L}_0}A(t) \\Big)"} />
      <p>Simple chain rule</p>
      <MakeMathDisplay tex={"=\\Big( e^{-(t - t_a)\\mathcal{L}_0}(-\\mathcal{L}_0)A(t) \\Big) + \\Big(e^{-(t - t_a)\\mathcal{L}_0}\\frac{d}{dt}A(t) \\Big)"} />
      <p>Substitute the regular Liouville operator</p>
      <MakeMathDisplay tex={"=\\Big( e^{-(t - t_a)\\mathcal{L}_0}(-\\mathcal{L}_0)A(t) \\Big) + \\Big(e^{-(t - t_a)\\mathcal{L}_0}\\mathcal{L}A(t) \\Big)"} />
      <p>And split it in two</p>
      <MakeMathDisplay tex={"=\\Big( e^{-(t - t_a)\\mathcal{L}_0}(-\\mathcal{L}_0)A(t) \\Big) + \\Big(e^{-(t - t_a)\\mathcal{L}_0}\\Big(\\mathcal{L}_0 + \\mathcal{L}_1(t)\\Big)A(t) \\Big)"} />
      <p>Cancel</p>
      <MakeMathDisplay tex={"= e^{-(t - t_a)\\mathcal{L}_0}\\mathcal{L}_1(t)A(t)"} />
      <p>And then insert an identity since negatives in an exponent multiply to 1.</p>
      <MakeMathDisplay tex={"= e^{-(t - t_a)\\mathcal{L}_0}\\mathcal{L}_1(t)e^{(t - t_a)\\mathcal{L}_0} e^{-(t - t_a)\\mathcal{L}_0}A(t)"} />
      <MakeMathDisplay tex={"= e^{-(t - t_a)\\mathcal{L}_0}\\mathcal{L}_1(t)e^{(t - t_a)\\mathcal{L}_0} A_I(t)"} />
      <p>And let</p>
      <MakeMathDisplay tex={"\\mathcal{L}_{I}(t) = e^{-(t - t_a)\\mathcal{L}_0}\\mathcal{L}_1(t)e^{(t - t_a)\\mathcal{L}_0}"} />
      <p>So then</p>
      <MakeMathDisplay tex={"\\frac{dA_I}{dt} = \\mathcal{L}_IA_I(t)"} />
      <p>And the interaction picture time evolution operator is just</p>
      <MakeMathDisplay tex={"\\mathcal{U}_I(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\mathcal{L}_I(t') dt'}"} />
      <p>where</p>
      <MakeMathDisplay tex={"A_I(t_a, t_b) = \\mathcal{U}_I(t_a, t_b)A_I(t_a)"} />
      <p>And the Volterra series would look like</p>
      <MakeMathDisplay tex={"\\mathcal{U}_I(t_a, t_b) = 1 + \\int_{t_a}^{t_b} \\mathcal{L}_I(t) \\mathcal{U}_I(t_a, t)dt"} />
      <MakeMathDisplay tex={"\\mathcal{U}_I(t_a, t_b) = 1 + \\int_{t_a}^{t_b} e^{-(t - t_a)\\mathcal{L}_0} \\mathcal{L}_1(t) e^{(t - t_a)\\mathcal{L}_0} \\mathcal{U}_I(t_a, t)dt"} />
      <p>And since</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0} \\mathcal{U}_I(t_a, t_b)"} />
      <p>we can write it as</p>
      <MakeMathDisplay tex={"\\mathcal{U}_I(t_a, t_b) = 1 + \\int_{t_a}^{t_b} e^{-(t - t_a)\\mathcal{L}_0} \\mathcal{L}_1(t) \\mathcal{U}(t_a, t)dt"} />
      <p>Then</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0}\\mathcal{U}_I(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0} + \\int_{t_a}^{t_b} e^{(t_b - t_a)\\mathcal{L}_0} e^{-(t - t_a)\\mathcal{L}_0} \\mathcal{L}_1(t) \\mathcal{U}(t_a, t)dt"} />
      <MakeMathDisplay tex={"= e^{(t_b - t_a)\\mathcal{L}_0} + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0} \\mathcal{L}_1(t) \\mathcal{U}(t_a, t)dt"} />
      <p>And doing the same iteration technique on the Volterra series</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0}"} />
      <p>then another</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0} + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0} \\mathcal{L}_1(t) e^{(t - t_a)\\mathcal{L}_0}dt"} />
      <p>then another</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0} + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0} \\mathcal{L}_1(t) e^{(t - t_a)\\mathcal{L}_0}dt + \\int_{t_a}^{t_b} \\int_{t_a}^{t_1} e^{(t_b - t_1)\\mathcal{L}_0} \\mathcal{L}_1(t_1) e^{(t_1 - t_2)\\mathcal{L}_0} \\mathcal{L}_1(t_2) e^{(t_2 - t_a)\\mathcal{L}_0} dt_2 dt_1 + \\dots"} />
      <p>And group the higher order terms</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b) = e^{(t_b - t_a)\\mathcal{L}_0} + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0} \\mathcal{L}_1(t) e^{(t - t_a)\\mathcal{L}_0}dt + \\mathcal{O}\\bigg( \\Big( e^{(t_b - t_a)\\mathcal{L}_0}\\mathcal{L}_1\\Big)^2 \\bigg)"} />
      <h3>Linear response</h3>
      <p>Consider a closed system where the Hamiltonian is time independent, and is then perturbed by a force along some observable</p>
      <MakeMathDisplay tex={"H(t) = H_0 - h(t)B"} />
      <p>Here <MakeMathDisplay tex={"H_1(t) = - h(t)B(t)"} /> so</p>
      
      <div className="flexOuter">
	<div className="flexInner1">
          <h4>Classical</h4>
          <p>Here <MakeMath tex={"\\mathcal{L}_1(t)"} /> is </p>
	  <MakeMathDisplay tex={"\\mathcal{L}_1(t) = \\{ \\cdot, -h(t)B(t)\\} = -h(t)\\{ \\cdot, B(t)\\}"} />
	  <p>So let's define</p>
	  <MakeMathDisplay tex={"\\mathcal{L}_B(t) = \\{ \\cdot, B(t)\\}"} />
	  <p>So that</p>
	  <MakeMathDisplay tex={"\\mathcal{L}_1(t) = -h(t)\\mathcal{L}_B(t)"} />
	</div>
	<div className="flexInner1">
          <h4>Quantum</h4>
          <p>Here <MakeMath tex={"\\mathcal{L}_1(t)"} /> is </p>
	  <MakeMathDisplay tex={"\\mathcal{L}_1(t) = -\\frac{i}{\\hbar} [ \\cdot, -h(t)\\hat{B}(t)] = -h(t)\\Big(-\\frac{i}{\\hbar}[ \\cdot, \\hat{B}(t) ]\\Big)"} />
	  <p>So let's define</p>
	  <MakeMathDisplay tex={"\\mathcal{L}_B(t) = -\\frac{i}{\\hbar} [\\cdot, B(t)]"} />
	  <p>So that</p>
	  <MakeMathDisplay tex={"\\mathcal{L}_1(t) = -h(t)\\mathcal{L}_B(t)"} />
	</div>
      </div>
      <p>So we get</p>
      <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)A(t_a) = e^{(t_b - t_a)\\mathcal{L}_0}A(t_a) + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) e^{(t - t_a)\\mathcal{L}_0} A(t_a)dt + \\mathcal{O}(h^2)"} />
      <MakeMathDisplay tex={"A(t_b) = A_0(t_b) + \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) A_0(t)dt + \\mathcal{O}(h^2)"} />
      <p>Where <MakeMath tex={"A_0(t)"} /> is the observable if there was no force</p>
      <MakeMathDisplay tex={"A(t_b) - A_0(t_b) = \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) A_0(t)dt + \\mathcal{O}(h^2)"} />
      <h3>Expected value of observable at equilibium</h3>
      <div className="flexOuter">
	<div className="flexInner1">
          <h4>Classical</h4>
          <p>If we have a probability distribution <MakeMath tex={"\\rho(t, \\vec{q}, \\vec{p})"} /> over the phase space we can find the expected value of an observable by</p>
	  <MakeMathDisplay tex={"\\mathbb{E}[A](t) = \\int_V A(\\vec{q}, \\vec{p})\\rho(t, \\vec{q}, \\vec{p}) d\\vec{q} d\\vec{p}"} />
	  <p>And the probability distribution evolves like any other observable</p>
	  <MakeMathDisplay tex={"\\rho(t_b) - \\rho_0(t_b) = \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) \\rho_0(t)dt + \\mathcal{O}(h^2)"} />
	  <p>Let the perturbation of an observable from the force be</p>
	  <MakeMathDisplay tex={"\\mathbb{E}[A](t) - \\mathbb{E}_0[A](t) = \\int_V \\rho(t_b) A d\\vec{q} d\\vec{p} - \\int_V \\rho_0(t_b) A d\\vec{q} d\\vec{p}"} />
	  <MakeMathDisplay tex={" = \\int_V \\Big(\\rho(t_b) - \\rho_0(t_b)\\Big) A d\\vec{q} d\\vec{p} + \\mathcal{O}(h^2)"} />
	  <MakeMathDisplay tex={" = \\int_V \\Bigg(\\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) \\rho_0(t)dt\\Bigg) A d\\vec{q} d\\vec{p} + \\mathcal{O}(h^2)"} />
	  <p>and move the integrals around</p>
	  <MakeMathDisplay tex={" = -\\int_{t_a}^{t_b} h(t) \\int_V \\Bigg(e^{(t_b - t)\\mathcal{L}_0}\\mathcal{L}_B(t)\\rho_0(t)\\Bigg) A d\\vec{q} d\\vec{p} dt + \\mathcal{O}(h^2)"} />
	  <p>Call the factor with first order of <MakeMath tex={"h"}/> the linear response function</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(t) = -\\int_V \\Bigg(e^{(t_b - t)\\mathcal{L}_0}\\mathcal{L}_B(t)\\rho_0(t)\\Bigg) A d\\vec{q} d\\vec{p}"} />
	  <p>so its like</p>
	  <MakeMathDisplay tex={" = -\\int_V \\bigg(e^{(t_b - t)\\mathcal{L}_0}  \\sum_i \\frac{\\partial p(t_a)}{\\partial q_i} \\frac{\\partial B(t)}{\\partial p_i} - \\frac{\\partial p(t_a)}{\\partial p_i} \\frac{\\partial B(t)}{\\partial q_i} \\bigg) A d\\vec{p} d\\vec{q}"} />
	  <p>Now if we assume at time <MakeMath tex={"t_a"} /> is at equilibrium so that <MakeMath tex={"p(t_a, \\vec{q}, \\vec{p}) = \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z}"} /> we get</p>
	  <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V e^{(t_b - t)\\mathcal{L}_0} \\Bigg( \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z} \\bigg( \\sum_i \\frac{\\partial H_0}{\\partial q_i} \\frac{\\partial B(t)}{\\partial p_i} - \\frac{\\partial H_0}{\\partial p_i} \\frac{\\partial B(t)}{\\partial q_i} \\bigg) \\Bigg) A d\\vec{p} d\\vec{q}"} />
	  <p>The time evolution operator distributes over multiplication</p>
	  <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\Bigg( e^{(t_b - t)\\mathcal{L}_0}\\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z}  \\Bigg) \\Bigg(e^{(t_b - t)\\mathcal{L}_0}\\bigg( \\sum_i \\frac{\\partial H_0}{\\partial q_i} \\frac{\\partial B(t)}{\\partial p_i} - \\frac{\\partial H_0}{\\partial p_i} \\frac{\\partial B(t)}{\\partial q_i} \\bigg) \\Bigg) A d\\vec{p} d\\vec{q}"} />
	  <p>And it can be see that both <MakeMath tex={"p_0, H_0"} /> are stationary under the time evolution (and <MakeMath tex={"B"} /> is a function of the integrated time so it isn't affected).</p>
	  <MakeMathDisplay tex={" = \\frac{1}{k_B T}\\int_V \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z} \\bigg( \\sum_i \\frac{\\partial H_0}{\\partial q_i} \\frac{\\partial B(t)}{\\partial p_i} - \\frac{\\partial H_0}{\\partial p_i} \\frac{\\partial B(t)}{\\partial q_i} \\bigg) A d\\vec{p} d\\vec{q}"} />
	  <p>Swap the Possion brackets making it negatived</p>
	  <MakeMathDisplay tex={" = -\\frac{1}{k_B T}\\int_V \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z} \\bigg( \\sum_i \\frac{\\partial H_0}{\\partial p_i} \\frac{\\partial B(t)}{\\partial q_i} - \\frac{\\partial H_0}{\\partial q_i} \\frac{\\partial B(t)}{\\partial p_i} \\bigg) A d\\vec{p} d\\vec{q}"} />
	  <MakeMathDisplay tex={" = -\\frac{1}{k_B T}\\int_V \\frac{e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}}}{Z} \\bigg( \\mathcal{L}_0 B(t) \\bigg) A d\\vec{p} d\\vec{q}"} />
	  <p>And this is just the expected value at equilibrium</p>
	  <MakeMathDisplay tex={" = -\\frac{1}{k_B T}\\mathbb{E}_0 [( \\mathcal{L}_0 B(t) ) A(t_a)]"} />
	  <MakeMathDisplay tex={" = -\\frac{1}{k_B T}\\mathbb{E}_0 [\\frac{d B(t)}{dt} A(t_a)]"} />
	  <p>So</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(t) = -\\frac{1}{k_B T} \\frac{d}{dt}\\mathbb{E}_0 [B(t) A(t_a)]"} />
	</div>
	<div className="flexInner1">
          <h4>Quantum</h4>
          <p>If we have a density matrix <MakeMath tex={"\\rho(t)"} /> over the phase space we can find the expected value of an observable by</p>
	  <MakeMathDisplay tex={"\\mathbb{E}[A](t_b) = \\text{Tr}(\\rho(t_b) \\hat{A})"} />
	  <p>Looking for the time evoltuion of the density matrix it will evolve like any other observable</p>
	  <MakeMathDisplay tex={"\\rho(t_b) = \\mathcal{U}(t_a, t_b) \\rho(t_a)"} />

	  <p>And making a difference</p>
	  <MakeMathDisplay tex={"\\rho(t_b) - \\rho_0(t_b) = \\int_{t_a}^{t_b} e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big) \\rho_0(t)dt + \\mathcal{O}(h^2)"} />
	  <p>So</p>
	  <MakeMathDisplay tex={"\\mathbb{E}[A](t_b) - \\mathbb{E}_0[A](t_b) = \\text{Tr}(\\rho(t_b) \\hat{A}) - \\text{Tr}(\\rho_0(t_b) \\hat{A})"} />
	  <MakeMathDisplay tex={" = \\text{Tr}((\\rho(t_b) - \\rho_0(t_b)) \\hat{A})"} />
	  <MakeMathDisplay tex={" = \\text{Tr}\\bigg(\\int_{t_a}^{t_b} \\bigg(e^{(t_b - t)\\mathcal{L}_0}\\Big(-h(t) \\mathcal{L}_B(t)\\Big)  \\rho_0(t) \\bigg) \\hat{A} dt \\bigg) + \\mathcal{O}(h^2)"} />
	  <MakeMathDisplay tex={" = -\\text{Tr}\\bigg(\\int_{t_a}^{t_b} h(t) \\bigg(e^{(t_b - t)\\mathcal{L}_0}\\mathcal{L}_B(t) \\rho_0(t) \\bigg) \\hat{A} dt \\bigg) + \\mathcal{O}(h^2)"} />
	  <MakeMathDisplay tex={" = -\\int_{t_a}^{t_b} h(t) \\text{Tr}\\bigg(\\bigg(e^{(t_b - t)\\mathcal{L}_0}\\mathcal{L}_B(t) \\rho_0(t) \\bigg) \\hat{A}\\bigg) dt  + \\mathcal{O}(h^2)"} />
	  <p>Call the is first order term the linear response function</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(t) = -\\text{Tr}\\bigg(\\bigg(e^{(t_b - t)\\mathcal{L}_0}\\mathcal{L}_B(t) \\rho_0(t) \\bigg) \\hat{A} \\bigg)"} />
	  <p>Then expand</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(t) = \\text{Tr}\\bigg(\\frac{i}{\\hbar}\\bigg(e^{(t_b - t)\\mathcal{L}_0}\\Big( \\rho_0(t)B(t) - B(t)\\rho_0(t)\\Big) \\bigg) \\hat{A} \\bigg)"} />
	  <p>Assume equilibrium</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\text{Tr}\\bigg(\\bigg(e^{(t_b - t)\\mathcal{L}_0}\\Big( e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) - B(t)e^{-\\frac{\\hat{H}_0}{k_B T}}\\Big) \\bigg) \\hat{A}\\bigg)"} />
	  <p>And remember B is really a constant so the time evolution operator doesn't affect it</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\text{Tr}\\bigg(\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) - B(t)e^{-\\frac{\\hat{H}_0}{k_B T}}\\bigg) \\hat{A}\\bigg)"} />
	  <p>split</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) \\hat{A}\\bigg) - \\text{Tr}\\bigg(B(t)e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}\\bigg) \\Bigg)"} />
	  <p>and remember the cycle property of traces, and cycle the second one</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}[A, B(t)]\\bigg)"} />
	  <hr />
	  <p>Next we consider imaginary time</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <p>Since the time evolution operator in a closed system is <MakeMath tex={"\\mathcal{U}_0(t_a, t_b) = e^{(t_b - t_a)\\Big(-\\frac{i}{\\hbar}\\Big) H_0}"} /> we can say the density matrix is actually</p>
	  <MakeMathDisplay tex={"e^{-\\frac{\\hat{H}_0}{k_B T}} = \\mathcal{U}(0, -\\frac{i\\hbar}{k_B T})"} />
	  <p>so then</p>

	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(B(t-\\frac{i\\hbar}{k_B T}) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  
	</div>
      </div>
      
      
      <hr/>
      <h1>Quantum Version</h1>
      <p>Start with the Schrödinger equation for some arbitrary Hamiltonian.</p>
      <MakeMathDisplay tex={"i\\hbar \\frac{\\partial}{\\partial t} \\Psi(t) = \\hat{H}(t) \\Psi(t)"} />
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\Psi(t) = -\\frac{i}{\\hbar} \\hat{H}(t) \\Psi(t)"} />
      <p>Then we can write a closed form expression for any evolution given a point in time <MakeMath tex={"t_0"} />.</p>
      <MakeMathDisplay tex={"\\Psi(t) = \\mathcal{T} e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}(t') dt'} \\Psi(t_0)"} />
      <p>The <MakeMath tex={"\\mathcal{T}"}/> is the time ordering operator, an "operator" (which as far as I know is not actually an operator) that makes sure the order of multiplication of the Hamiltonians is in order in any Volterra series expansion of the exponential.</p>
      <p>If we define a new operator called the "time evolution operator", <MakeMath tex={"\\hat{U}(t, t_0) = \\mathcal{T} e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}(t') dt'}"} />, then we can have the below equation.</p>
      <MakeMathDisplay tex={"\\Psi(t) = \\hat{U}(t, t_0)\\Psi(t_0)"} />
      <h2>Schrödinger picture</h2>
      <p>If we represent <MakeMath tex={"\\Psi"} /> as a Hilbert space with conjugate symmetric inner product <MakeMath tex={"\\langle \\cdot , \\cdot \\rangle "} /> then any observable <MakeMath tex={"\\hat{A}"} /> (where observables are defined to be self-adjoint operators where <MakeMath tex={"\\langle \\hat{A}x , y \\rangle = \\langle x , \\hat{A}y \\rangle"} />) can be measured by the below equation.</p>
      <MakeMathDisplay tex={"A(t) = \\langle \\Psi(t) | \\hat{A} | \\Psi(t) \\rangle"} />
      <p>This expression for getting the values of observables is called the Schrödinger picture, where the <MakeMath tex={"\\Psi"} />'s evolve with time and the operator <MakeMath tex={"\\hat{A}"} /> stays the same.</p>
      <h2>Heisenberg picture</h2>
      <p>Another option is the Heisenberg picture where the <MakeMath tex={"\\hat{A}(t)"} />'s evolve with time while the <MakeMath tex={"\\Psi"} />'s stay constant. If we let <MakeMath tex={"\\hat{A}_S"} /> be the obervable in the Schrödinger picture and <MakeMath tex={"\\hat{U}_S"} /> be the same with the time evolution operator then</p>
      <MakeMathDisplay tex={"\\langle \\Psi(t) | \\hat{A}_S | \\Psi(t) \\rangle = \\langle \\Psi(t_0) | \\hat{U}_S^\\dagger(t, t_0) \\hat{A}_S \\hat{U}_S(t, t_0) | \\Psi(t) \\rangle = \\langle \\Psi(t_0) | \\hat{A}_H(t) | \\Psi(t_0) \\rangle"} />
      <p>where <MakeMath tex={"\\hat{A}_H(t)"} /> is the observable operator in the Heisenberg picture while <MakeMath tex={"\\Psi(t_0)"} /> stays constant.</p>
      <MakeMathDisplay tex={"\\hat{A}_H = \\hat{U}_S^\\dagger(t, t_0) \\hat{A}_S \\hat{U}_S(t, t_0)"} />
      <p>And observables are measured like this.</p>
      <MakeMathDisplay tex={"\\langle \\Psi(t_0) | \\hat{A}_H(t) | \\Psi(t_0) \\rangle"} />
      <h2>Interaction picture</h2>
      <p>You can also do a combination of the two. If you split the Hamiltonian into a time dependent and time independent part.</p>
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 + \\hat{H}_1(t)"} />
      <p>Then you can set the state vectors to</p>
      <MakeMathDisplay tex={"\\Psi_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} />
      <p>and observables become</p>
      <MakeMathDisplay tex={"\\hat{A}_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{A}_S e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} />
      <table className="border_table">
	<caption>
		   Quantum mechanics pictures
	</caption>
	<thead>
	  <tr>
	    <th scope="col">Object</th>
	    <th scope="col">Schrödinger</th>
	    <th scope="col">Heisenberg</th>
	    <th scope="col">Interaction</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <th scope="row">State vector</th>
	    <td><MakeMath tex={"\\Psi_S(t) = \\hat{U}_S(t, t_0) \\Psi_S(t_0)"} /></td>
	    <td><MakeMath tex={"\\Psi_S(t_0)"} /></td>
	    <td><MakeMath tex={"\\Psi_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} /></td>
	  </tr>
	  <tr>
	    <th scope="row">Observables</th>
	    <td><MakeMath tex={"\\hat{A}_S"} /></td>
	    <td><MakeMath tex={"\\hat{A}_H(t) = \\hat{U}^\\dagger_S(t, t_0)\\hat{A}_S(t)\\hat{U}_S(t, t_0)"} /></td>
	    <td><MakeMath tex={"\\hat{A}_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{A}_S(t) e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} /></td>
	  </tr>
	  <tr>
	    <th scope="row">Measurement</th>
	    <td><MakeMath tex={"A(t) = \\langle \\Psi_S(t) | \\hat{A}_S | \\Psi_S(t) \\rangle"} /></td>
	    <td><MakeMath tex={"A(t) = \\langle \\Psi_S(t_0) | \\hat{A}_H(t) | \\Psi_S(t_0) \\rangle"} /></td>
	    <td><MakeMath tex={"A(t) = \\langle \\Psi_I(t) | \\hat{A}_I(t) | \\Psi_I(t) \\rangle"} /></td>
	  </tr>
	</tbody>
      </table>
      <h2>Deriving the Dyson Series</h2>
      <p>Starting with the interaction picture</p>
      <MakeMathDisplay tex={"\\Psi_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} />
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 + \\hat{H}_1(t)"} />
      <p>and take the time derivative.</p>
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t}\\Psi_I(t) = \\frac{\\partial}{\\partial t} e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} />
      <p>Chain rule</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar} \\hat{H}_0 e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t) + e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\frac{\\partial}{\\partial t} \\Psi_S(t)"} />
      <p>Simplify the left term.</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar} \\hat{H}_0 \\Psi_I(t) + e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\frac{\\partial}{\\partial t} \\Psi_S(t)"} />
      <p>Substitute in the right term with the Schrödinger equation.</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar} \\hat{H}_0 \\Psi_I(t) + e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\frac{-i}{\\hbar}\\hat{H}_S \\Psi_S(t)"} />
      <p>Factor</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Big( \\hat{H}_0 \\Psi_I(t) - e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_S \\Psi_S(t)\\Big)"} />
      <p>Substitute the split Hamiltonian</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Big( \\hat{H}_0 \\Psi_I(t) - e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\big(\\hat{H}_0 + \\hat{H}_1\\big) \\Psi_S(t)\\Big)"} />
      <p>An operator always commutes with its own exponent</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Big( \\hat{H}_0 \\Psi_I(t) - \\hat{H}_0e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t) - e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 \\Psi_S(t)\\Big)"} />
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Big( \\hat{H}_0 \\Psi_I(t) - \\hat{H}_0 \\Psi_I(t) - e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 \\Psi_S(t)\\Big)"} />
      <p>Cancel those terms</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 \\Psi_S(t)"} />
      <p>And <MakeMath tex={"e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} /> is always just the identity operator so we can put it between the Hamiltonian and the state vector.</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar}e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 \\Big( e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Big) \\Psi_S(t)"} />
      <p>Then we can move the parenthesis to this</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar} \\Big(e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Big) e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} />
      <p>And simplify the state vector</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar} \\Big(e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Big) \\Psi_I(t)"} />
      <p>And the time dependent part of the Hamiltonian operator just transforms like any other operator in the interaction picture so</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar} \\hat{H}_{1, I} \\Psi_I(t)"} />
      <p>So we get something similar to the Schrödinger equation in the interaction picture.</p>
      <MakeMathDisplay tex={"i \\hbar \\frac{\\partial}{\\partial t} \\Psi_I(t)= \\hat{H}_{1, I} \\Psi_I(t)"} />
      <h3>Expression time evolution as a Dyson series</h3>
      <p>Then if we make a time evolution operator but in the interaction picture state vectors</p>
      <MakeMathDisplay tex={"\\Psi_I(t)= \\hat{U}_{I}(t, t_0) \\Psi_I(t_0)"} />
      <p>If we substitute that into the other equation then </p>
      <MakeMathDisplay tex={"\\frac{ \\partial}{\\partial t} U_I(t, t_0)\\Psi_I(t_0)= -\\frac{i}{\\hbar} \\hat{H}_{1, I}(t) U_I(t, t_0)\\Psi_I(t_0)"} />
      <p>Then it must be that</p>
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} U_I(t, t_0)= -\\frac{i}{\\hbar} \\hat{H}_{1, I}(t) U_I(t, t_0)"} />
      <p>Then we can integrate it</p>
      <MakeMathDisplay tex={"U_I(t, t_0)= U_I(t_0, t_0) - \\int_{t_0}^{t} \\frac{i}{\\hbar} \\hat{H}_{1, I}(t') U_I(t', t_0)dt'"} />
      <p>And <MakeMath tex={"U_I(t_0, t_0)"} /> should just be 1 so</p>
      <MakeMathDisplay tex={"U_I(t, t_0) = 1 - \\frac{i}{\\hbar} \\int_{t_0}^{t} \\hat{H}_{1, I}(t') U_I(t', t_0)dt'"} />
      <p>This expression can be expanded by into a Volterra series iteratively similar to a taylor series. For the zeroth order</p>
      <MakeMathDisplay tex={"U_{I, 0}(t, t_0) = 1"} />
      <p>then put it back in to get</p>
      <MakeMathDisplay tex={"U_{I, 1}(t, t_0) = 1 - \\frac{i}{\\hbar} \\int_{t_0}^{t} \\hat{H}_{1, I}(t') dt'"} />
      <p>and iterate again</p>
      <MakeMathDisplay tex={"U_{I, 2}(t, t_0) = 1 - \\frac{i}{\\hbar} \\int_{t_0}^{t} \\hat{H}_{1, I}(t') dt' - \\frac{1}{\\hbar} \\int_{t_0}^{t} \\int_{t_0}^{t'} \\hat{H}_{1, I}(t'') dt''dt' "} />
      <p>This generailizes to</p>
      <MakeMathDisplay tex={"U_{I, N}(t, t_0) = 1 + \\sum_{n=1}^{N} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}_{1, I}(t') \\cdots \\hat{H}_{1, I}(t^n)dt^n \\cdots dt"} />
      <p>And the convergence is the actual solution</p>
      <MakeMathDisplay tex={"U_I(t, t_0) = 1 + \\lim_{N \\rightarrow \\infty} \\sum_{n=1}^{N} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}_{1, I}(t') \\cdots \\hat{H}_{1, I}(t^n)dt^n \\cdots dt"} />
      <p>Which is equal to the matrix exponentiation with the time ordering operator from before</p>
      <MakeMathDisplay tex={"U_I(t, t_0) = \\mathcal{T}e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}_{1, I}(t') dt'}"} />
      
      <h2>Evolution of the density matrix.</h2>
      <p>A statistical mechanical ensemble is represented by a density matrix defined as below</p>
      <MakeMathDisplay tex={"\\rho = \\sum_i p_i |\\Psi_i \\rangle \\langle \\Psi_i |"} />
      <p>The expected value of an observable in an ensemble can be measured by</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A] = \\sum_i p_i \\langle \\Psi_i | \\hat{A} |\\Psi_i \\rangle = \\text{Tr}\\Big( \\hat{A} \\sum_i p_i |\\Psi_i \\rangle \\langle \\Psi_i | \\Big) = \\text{Tr}(\\hat{A} \\rho)"} />
      <p>We can substitute the state vectors to write the density matrix like</p>
      <MakeMathDisplay tex={"\\rho(t) = \\sum_i p_i U(t, t_0) |\\Psi_i(t_0) \\rangle \\langle \\Psi_i(t_0) | U^\\dagger(t, t_0) = U(t, t_0) \\rho(t_0) U^\\dagger(t, t_0)"} />
      <p>Then if we replace the time evolution operator with the Dyson series</p>
      <MakeMathDisplay tex={"= \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg) \\rho(t_0) \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg)^\\dagger"} />
      <p>Multiply the density matrix inside the left sum</p>
      <MakeMathDisplay tex={"= \\Bigg( \\rho(t_0) + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n) \\rho(t_0) dt^n \\cdots dt \\Bigg) \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg)^\\dagger"} />
      <p>After expanding yields a first order term with many higher order. Collect the higher order terms together.</p>
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)\\Big(- \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t')  dt' \\Big)^\\dagger+ \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)\\Big(-\\frac{i}{\\hbar}\\Big)^\\dagger\\int_{t_0}^t \\hat{H}^\\dagger(t')  dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <p>Remember since the Hamiltonian is self-adjoint that <MakeMath tex={"\\hat{H} = \\hat{H}^\\dagger"} />.</p>
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)\\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t')  dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t') dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <h2>Deriving the linear response function</h2>
      <p>From the dyson series of the time evolution operator:</p>
      <MakeMathDisplay tex={"U_I(t, t_0) = 1 - \\frac{i}{\\hbar} \\int_{t_0}^{t} \\hat{H}_{1, I}(t')  dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <p>Then</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = \\text{Tr}\\Big(\\rho(t)\\hat{A}\\Big) - \\text{Tr}\\Big(\\rho(t_0)\\hat{A}\\Big) = \\text{Tr}\\Big(\\rho(t)\\hat{A} - \\rho(t_0)\\hat{A}\\Big)"} />
      <p>subsitute</p>
      <MakeMathDisplay tex={"= \\text{Tr}\\Bigg(\\rho(t_0)\\hat{A} - \\frac{i}{\\hbar}\\int_{t_0}^t \\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A} - \\rho(t_0)\\hat{A} \\Bigg)"} />
      <MakeMathDisplay tex={"= \\text{Tr} \\Big( - \\frac{i}{\\hbar}\\int_{t_0}^t \\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} dt' \\Big) + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\bigg(\\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} \\Bigg) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\Big(\\hat{H}(t') \\rho(t_0) \\hat{A} \\Big) -  \\text{Tr} \\Big( \\rho(t_0) \\hat{H}(t') \\hat{A} \\Big) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>And traces are have the circular property, so <MakeMath tex={"\\text{Tr}(ABC) = \\text{Tr}(BCA) = \\text{Tr}(CAB)"} />.</p>
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\Big(\\rho(t_0) \\hat{A} \\hat{H}(t') \\Big) -  \\text{Tr} \\Big( \\rho(t_0) \\hat{H}(t') \\hat{A} \\Big) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\bigg(\\rho(t_0) \\Big( \\hat{A} \\hat{H}(t') - \\hat{H}(t') \\hat{A} \\Big) \\bigg) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>So a final expression of </p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] =  - \\frac{i}{\\hbar}\\int_{t_0}^t \\mathbb{E}_0\\Big[ \\hat{A} \\hat{H}(t') - \\hat{H}(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>Condider a linear force applied to a constant Hamiltonian across one of the directions of an observable starting at time <MakeMath tex={"t_0"} />, so</p>
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 - F(t)\\hat{B}_S(t)"} />
      <p>Then if we use the interaction picture and set</p>
      <MakeMathDisplay tex={"H_1 = -F(t)\\hat{B}_S(t)"} />
      <p>Then</p>
      <MakeMathDisplay tex={"H_{1, I}(t) = e^{\\frac{i}{\\hbar} \\hat{H}_1 (t)} \\hat{H}_1(t) e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} />
      <MakeMathDisplay tex={" = -e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\big(F(t)\\hat{B}_S(t)\\big) e^{-\\frac{i}{\\hbar} \\hat{H}_0(t - t_0)}"} />
      <p>And <MakeMath tex={"F"} /> is just a scalar so you can move the operators</p>
      <MakeMathDisplay tex={" = -F(t) \\Big(e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}\\hat{B}_S(t) e^{-\\frac{i}{\\hbar} \\hat{H}_0(t - t_0)}\\Big)"} />
      <MakeMathDisplay tex={" = -F(t) \\hat{B}_I(t)"} />
      <p>Now we start with the difference in expected value of an operator</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t \\mathbb{E}_0\\Big[ \\hat{A}_I F(t')\\hat{B}_I(t') - F(t')\\hat{B}_I(t') \\hat{A}_I\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\mathbb{E}_0\\Big[ \\hat{A}_I\\hat{B}_I(t') - \\hat{B}_I(t') \\hat{A}_I\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>We define this term to be the "linear response function" of <MakeMath tex={"A"} /> to a perturbation along <MakeMath tex={"B"} /></p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{B}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\chi_{AB}(t - t') dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{B}^2\\Big)\\hat{A}\\Big)"} />
      <p>where</p>
      <MakeMathDisplay tex={"\\chi(t - t') = - \\frac{i}{\\hbar} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big]"} />
      <p>We can take the fourier transform of it</p>
      <MakeMathDisplay tex={"\\chi(\\omega) = \\int_{-\\infty}^\\infty e^{i\\omega t} \\chi(t) dt = -\\frac{i}{\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt"} />
      <p>And the linear response function must be zero at negative times so the future can't affect the past so the integral can start at zero.</p>
      <MakeMathDisplay tex={"= -\\frac{i}{\\hbar} \\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt"} />
      <p>To find the imaginary part of any value we can do</p>
      <MakeMathDisplay tex={"\\text{Im}[f] = \\frac{f - f^*}{2i}"} />
      <MakeMathDisplay tex={"\\text{Im}[\\chi(\\omega)] = -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]^* dt \\Bigg)"} />
      <MakeMathDisplay tex={"= -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{B}^\\dagger(t')\\hat{A}^\\dagger(t_0) - \\hat{A}^\\dagger(t_0)\\hat{B}^\\dagger(t')\\Big] dt \\Bigg)"} />
      <p>And once agan observables are by definition their own hermetion conjugate</p>
      <MakeMathDisplay tex={"= -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{B}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{B}(t')\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={"= -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt + \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t')\\hat{A}(t_0)\\Big] dt \\Bigg)"} />
      <p>And if we make <MakeMath tex={"A = B"} /></p>
      <MakeMathDisplay tex={"= -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt + \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t')\\hat{A}(t_0)\\Big] dt \\Bigg)"} />
      <p>And assuming the autocorrelation should be the same under time reversal</p>
      <MakeMathDisplay tex={"\\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t')\\hat{A}(t_0) \\Big] = \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{A}(-t') + \\hat{A}(-t')\\hat{A}(t_0) \\Big]"} />
      <p>Then</p>
      <MakeMathDisplay tex={"\\text{Im}[\\chi(\\omega)] = -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt + \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{A}(-t') - \\hat{A}(-t')\\hat{A}(t_0)\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={" = -\\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt + \\int_{-\\infty}^0 e^{i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t')\\hat{A}(t_0)\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={" = -\\frac{1}{2\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt"} />
      
      <h2>Quantum cannonical ensemble</h2>
      <p>At equilibrium the cannonical ensemble should maximize the Von Neumann entropy. This is given by the quantum Boltzmann distribution, if it has a constant Harmiltonian. Assume that the Hamilitoian is constnat before time <MakeMath tex={"t_0"} /></p>
      <MakeMathDisplay tex={"\\rho(t_0) = \\frac{e^{-\\beta \\hat{H}_0}}{\\text{Tr}(e^{-\\beta \\hat{H}_0})} = \\frac{e^{-\\beta \\hat{H}_0}}{Z}"} />
      <p>So with a constant Hamiltonian at equilibrium we can write</p>
      <MakeMathDisplay tex={"\\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t')\\Big] = \\text{Tr}\\bigg(\\rho(t_0)\\Big( \\hat{A}(t_0)\\hat{A}(t') \\Big) \\bigg) = \\frac{1}{Z}\\text{Tr}\\bigg(e^{-\\beta \\hat{H}_0}\\Big( \\hat{A}(t_0)\\hat{A}(t') \\Big) \\bigg)"} />
      <p>cycle the trace</p>
      <MakeMathDisplay tex={"= \\frac{1}{Z}\\text{Tr}\\bigg(\\Big(\\hat{A}(t')e^{-\\beta \\hat{H}_0} \\hat{A}(t_0) \\Big) \\bigg)"} />
      <MakeMathDisplay tex={"= \\frac{1}{Z}\\text{Tr}\\bigg(\\Big(e^{-\\beta \\hat{H}_0}e^{\\beta \\hat{H}_0}\\hat{A}(t')e^{-\\beta \\hat{H}_0} \\hat{A}(t_0) \\Big) \\bigg)"} />
      <h3>Imaginary time</h3>
      <p>This is equivelent to moving in imaginary time</p>
      <MakeMathDisplay tex={"= \\frac{1}{Z}\\text{Tr}\\bigg(\\Big(e^{-\\beta \\hat{H}_0}\\hat{A}(t' - i \\hbar \\beta) \\hat{A}(t_0) \\Big) \\bigg)"} />
      <MakeMathDisplay tex={"= \\mathbb{E}_0\\Big[\\hat{A}(t' - i \\hbar \\beta)\\hat{A}(t_0)\\Big]"} />
      <p>Taking the fourier transform</p>
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[\\hat{A}(t' - i \\hbar \\beta) \\hat{A}(t_0)\\Big]dt = e^{- \\beta \\hbar \\omega} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[\\hat{A}(t')\\hat{A}(t_0) \\Big]dt"} />
      <p>So this gives the formula</p>
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[\\hat{A}(t_0)\\hat{A}(t') \\Big]dt = e^{- \\beta \\hbar \\omega} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[\\hat{A}(t')\\hat{A}(t_0) \\Big]dt"} />
      <p>then substitute</p>
      <MakeMathDisplay tex={"\\text{Im}[\\chi(\\omega)] = -\\frac{1}{2\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} (1 - e^{\\beta \\hbar \\omega})\\mathbb{E}_0\\Big[ \\hat{A}(t_0) \\hat{A}(t')\\Big]dt"} />
      <MakeMathDisplay tex={"= \\frac{1}{2\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} (e^{\\beta \\hbar \\omega} - 1 )\\mathbb{E}_0\\Big[ \\hat{A}(t_0) \\hat{A}(t')\\Big]dt"} />
      <p>So this means</p>
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t')\\Big]dt = \\frac{2\\hbar}{e^{\\beta \\hbar \\omega} - 1}\\text{Im}[\\chi(\\omega)]"} />
      <MakeMathDisplay tex={"S(\\omega) = \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt = 2\\hbar\\Big(\\frac{1}{e^{\\beta \\hbar \\omega} - 1} + 1\\Big)\\text{Im}[\\chi(\\omega)]"} />
      <p>Where <MakeMath tex={"S(\\omega)"} /> is the Fourier transform of the time shifted autocorrelation of the observable.</p>
      <h3>Classical limit</h3>
      <p>If we negative the frequency</p>
      <MakeMathDisplay tex={"S'(\\omega) = S(-\\omega) = \\int_{-\\infty}^\\infty e^{-i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt = 2\\hbar\\Big(\\frac{1}{e^{-\\beta \\hbar \\omega} - 1} + 1\\Big)\\text{Im}[\\chi(-\\omega)]"} />
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
    </Wrapper>
  );
}

export default FluctuationDissipationTheorem;
