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
	  <hr />
	  <p>Now take the fourier transform</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = -\\frac{1}{k_B T} \\int_{\\infty}^{-\\infty} (-i\\omega) e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t) A(t_a)]dt"} />
	  <p>integrate by parts</p>
	  <MakeMathDisplay tex={"\\Big( e^{i\\omega\\infty} \\mathbb{E}_0 [B(\\infty) A(t_a)] - e^{-i\\omega\\infty} \\mathbb{E}_0 [B(-\\infty) A(t_a)]\\Big)+\\frac{i\\omega}{k_B T} \\int_{\\infty}^{-\\infty} e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t) A(t_a)]dt"} />
	  <p>and hope the bounradies aren't a problem idk</p>
	  <MakeMathDisplay tex={"\\frac{i \\omega}{k_B T} \\int_{\\infty}^{-\\infty} e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t) A(t_a)]dt"} />
	  <p>uhh</p>
	  <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = \\frac{\\omega}{k_B T} \\text{Re}\\bigg[\\int_{\\infty}^{-\\infty} e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [B(t) A(t_a)]dt\\bigg]"} />
	  <p>Then do the flip thing (wrong)</p>
	  <MakeMathDisplay tex={"\\text{Im}[\\chi_{AA}(\\omega)] = \\frac{\\omega}{k_B T} \\bigg(\\int_{\\infty}^{-\\infty} e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [A(t) A(t_a)]dt + \\int_{\\infty}^{-\\infty} e^{-i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [A(t) A(t_a)]dt\\bigg)"} />
	  <p>then get</p>
	  <MakeMathDisplay tex={"\\int_{\\infty}^{-\\infty} e^{i\\omega t} \\frac{d}{dt}\\mathbb{E}_0 [A(t) A(t_a)]dt = \\frac{2 k_B T}{\\omega}\\text{Im}[\\chi_{AA}(\\omega)]"} />

	  
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
	  <p>The time evolution operator</p>
	  <MakeMathDisplay tex={"\\mathcal{U}(t_a, t_b)\\hat{A} = e^{(t_b-t_a)\\frac{i}{\\hbar}\\hat{H}_0} \\hat{A} e^{(t_b-t_a)\\frac{-i}{\\hbar}\\hat{H}_0}"} />
	  <p>Next we consider imaginary time</p>
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t) \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}B(t)e^{\\frac{\\hat{H}_0}{k_B T}} e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(B(t - \\frac{i\\hbar}{k_B T}) e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A}\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <p>Then cycle the trace again</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(t) = \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg)"} />
	  <p>fourier transform</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\int_{-\\infty}^{\\infty} e^{i\\omega t} \\frac{i}{\\hbar}\\Bigg(\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg) - \\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg) \\Bigg) dt"} />

	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{i}{\\hbar}\\Bigg(\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t - \\frac{i\\hbar}{k_B T})\\bigg)dt - \\int_{-\\infty}^{\\infty} e^{i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg)dt \\Bigg)"} />
	  <p>And we can remove the phase shift in the first term</p>
	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{i}{\\hbar}\\Bigg(e^{\\frac{\\hbar\\omega}{k_B T}}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t)\\bigg)dt - \\int_{-\\infty}^{\\infty} e^{i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\hat{A}B(t)\\bigg)dt \\Bigg)"} />

	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{i}{\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}} \\hat{A} B(t)\\bigg)dt"} />

	  <MakeMathDisplay tex={"\\chi_{AB}(\\omega) = \\frac{i}{\\hbar}\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt"} />

	</div>
      </div>

      <h3>Imaginary part</h3>
      <div className="flexOuter">
	<div className="flexInner1">
          <h4>Classical</h4>

	</div>
	<div className="flexInner1">
          <h4>Quantum</h4>
	  <p>Taking just the imaginary part of anything is</p>
	  <MakeMathDisplay tex={"\\text{Im}[f] = \\frac{f - f^*}{2i}"} />
	  <p>so</p>
	  <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = \\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt\\bigg) - \\bigg(\\frac{-1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[B^\\dagger(t)\\hat{A}^\\dagger\\bigg]dt\\bigg)\\Bigg)"} />
	  <p>And observables are Hermetian</p>
	  <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = \\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} B(t)\\bigg]dt\\bigg) - \\bigg(\\frac{-1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[B(t)\\hat{A}\\bigg]dt\\bigg)\\Bigg)"} />
	  <p>Let A=B</p>
	  <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = \\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) - \\bigg(\\frac{-1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[A(t)\\hat{A}\\bigg]dt\\bigg)\\Bigg)"} />
	  <p>And at equilibrium shifting the time shouldn't matter <MakeMath tex={"\\mathbb{E}_0[A(t)A(t_a)] = \\mathbb{E}_0[A(t_a)A(2t_a-t)]"} /></p>
	  <MakeMathDisplay tex={"\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) - \\bigg(\\frac{-1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{-i\\omega t}\\mathbb{E}_0\\bigg[A(t_a)\\hat{A}(2t_a -t)\\bigg]dt\\bigg)\\Bigg)"} />
	  <p>Then shift and negative the integral</p>
	  <MakeMathDisplay tex={"\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big) \\Bigg(\\bigg(\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt\\bigg) - \\bigg(\\frac{-1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[A(t_a)\\hat{A}(t)\\bigg]dt\\bigg)\\Bigg)"} />
	  <MakeMathDisplay tex={"\\Big(e^{\\frac{\\hbar\\omega}{k_B T}}-1\\Big)\\frac{1}{2\\hbar}\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt"} />
	  <p>And we get</p>
	  <MakeMathDisplay tex={"\\int_{-\\infty}^{\\infty} e^{i\\omega t}\\mathbb{E}_0\\bigg[\\hat{A} A(t)\\bigg]dt = \\frac{2\\hbar}{e^{\\frac{\\hbar\\omega}{k_B T}}-1} \\text{Im}[\\chi_A(\\omega)]"} />
	  <p>The first part is called the spectral density so</p>
	  <MakeMathDisplay tex={"S(\\omega) = \\frac{2\\hbar}{e^{\\frac{\\hbar\\omega}{k_B T}}-1} \\text{Im}[\\chi_A(\\omega)]"} />
	</div>
      </div>

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
