import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function FluctuationDissipationTheorem({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <h1>Classical Version</h1>
      <p>Starting with Hamiltonian dynamics we see that a probability distribution over the phase space with a Hamiltonian <MakeMath tex={"H(t)"} /> evolves like</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho(p, q, t)}{\\partial t} = \\sum_i \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho}{\\partial x_i} - \\frac{\\partial \\rho}{\\partial q_i}\\frac{\\partial H}{\\partial x_i}"} />
      <p>Call this the time evolution operator of the probability distribution</p>
      <MakeMathDisplay tex={"G\\rho = \\sum_i \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho}{\\partial x_i} - \\frac{\\partial \\rho}{\\partial q_i}\\frac{\\partial H}{\\partial x_i}"} />
      <p>So that we have</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = \\hat{G} \\rho"} />
      <p>This yields the solution using operator exponentiation</p>
      <MakeMathDisplay tex={"\\rho(t_b) = e^{\\int_{t_a}^{t_b}\\hat{G}(t)} \\rho(t_a)"} />
      <p>Then make this into a new operator</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = e^{\\int_{t_a}^{t_b}\\hat{G}(t)}"} />
      <p>So that</p>
      <MakeMathDisplay tex={"\\rho(t_b) = \\hat{M}(t_a, t_b)\\rho(t_a)"} />
      <p>And if we substitute back into the time evolution of the probability distribution</p>
      <MakeMathDisplay tex={"\\frac{\\partial }{\\partial t} \\Big( \\hat{M}(t_a, t) \\rho(t_a) \\Big) = \\hat{G}(t) \\hat{M}(t_a, t) \\rho(t_a)"} />
      <p>Integrating both sides get</p>
      <MakeMathDisplay tex={" (\\hat{M}(t_a, t_b) \\rho(t_a) - \\hat{M}(t_a, t_a) \\rho(t_a) = \\int_{t_a}^{t_b}\\hat{G}(t) \\hat{M}(t_a, t) \\rho(t_a) dt"} />
      <p>And <MakeMath tex={"\\hat{M}(t_a, t_a) = 1"} /> so</p>
      <MakeMathDisplay tex={" (\\hat{M}(t_a, t_b) - 1 ) \\rho(t_a) = \\int_{t_a}^{t_b}\\hat{G}(t) \\hat{M}(t_a, t) \\rho(t_a) dt"} />
      <p>And since it should be valid for every posible probablility distribution the operators should be equal</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) =  1+ \\int_{t_a}^{t_b}\\hat{G}(t) \\hat{M}(t_a, t) dt"} />
      <p>This can be expanded into a Volterra series. Start with</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = 1"} />
      <p>Then substitute it back</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = 1 + \\int_{t_a}^{t_b}\\hat{G}(t) dt"} />
      <p>Then again</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = 1 + \\int_{t_a}^{t_b}\\hat{G}(t) dt + \\int_{t_a}^{t_b}\\int_{t_a}^{t_b}\\hat{G}(t) \\hat{G}(t) dt_0 dt_1"} />
      <p>And the convergence goes to</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = 1 + \\lim_{N \\rightarrow \\infty} \\sum_{n=1}^N \\int_{t_a}^{t_b}\\cdots \\int_{t_a}^{t_b}\\hat{G}(t_1) \\dots \\hat{G}(t_n) dt_1 \\dots dt_n"} />
      <p>And for now just explicitly keep track of the first order terms</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = 1 + \\int_{t_a}^{t_b}\\hat{G}(t) dt + \\mathcal{O}(\\hat{G}^2)"} />
      <h2>Interaction picture</h2>
      <p>Assume the system is in equilibrium with Hamiltonian <MakeMath tex={"H_0"} /> but then a time dependent perturbation is added</p>
      <MakeMathDisplay tex={"H(t, \\vec{p}, \\vec{q}) = H_0(\\vec{p}, \\vec{q}) + H_1(\\vec{p}, \\vec{q}, t)"} />
      <p>Then the new time evolution becomes</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = \\hat{G}_0 \\rho + \\hat{G}_1 \\rho = (\\hat{G}_0 + \\hat{G}_1) \\rho"} />
      <p>And the new time evolution operator is</p>
      <MakeMathDisplay tex={"\\hat{M}(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\hat{G}_0 + \\hat{G}_1(t) dt}"} />
      <p>Lets define an interaction picture version of the probability distribution and its time evolution</p>
      <MakeMathDisplay tex={"\\rho_I(t) = e^{-\\hat{G}_0 (t - t_a)} \\rho(t)"} />

      <p>to find the time evolution operator</p>
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\rho_I(t) = \\frac{\\partial}{\\partial t} \\Big( e^{-\\hat{G}_0 (t - t_a)} \\rho(t) \\Big)"} />
      <p>chain rule</p>
      <MakeMathDisplay tex={"= -e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_0 \\rho(t) + e^{-\\hat{G}_0 (t - t_a)} \\frac{\\partial}{\\partial t} \\rho(t)"} />
      
      <MakeMathDisplay tex={"= -e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_0 \\rho(t) + e^{-\\hat{G}_0 (t - t_a)} (\\hat{G}_0 + \\hat{G}_1(t)) \\rho(t)"} />
      <MakeMathDisplay tex={"= e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_1(t) \\rho(t)"} />
      <p>insert the identity</p>
      <MakeMathDisplay tex={"= e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_1(t) e^{\\hat{G}_0 (t - t_a)} e^{-\\hat{G}_0 (t - t_a)} \\rho(t)"} />
      <MakeMathDisplay tex={"= e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_1(t) e^{\\hat{G}_0 (t - t_a)} \\rho_I(t)"} />
      <p>So we can make a interaction picture operator</p>
      <MakeMathDisplay tex={"\\hat{G}_{I, 1}= e^{-\\hat{G}_0 (t - t_a)} \\hat{G}_1(t) e^{\\hat{G}_0 (t - t_a)}"} />
      <p>and then</p>
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\rho_I(t) = \\hat{G}_{I, 1} \\rho_I(t))"} />
      <MakeMathDisplay tex={"\\hat{M}_I(t_a, t_b) = e^{\\int_{t_a}^{t_b} \\hat{G}_1(t) dt}"} />
      <p>that acts on the interaction picture probability distrubion</p>
      <MakeMathDisplay tex={"\\rho_I(t) = M_I(t_a, t) \\rho_I(t_a)"} />
      <p>And using the same thing with the Volterra series expansion</p>
      <MakeMathDisplay tex={"\\hat{M}_I(t_a, t_b) = 1 + \\int_{t_a}^{t_b}\\hat{G}_I(t) dt + \\mathcal{O}(\\hat{G_I}^2)"} />
      <h2>Linear response</h2>
      <p>Consider a closed system where the Hamiltonian is time independent, and is perturbed by a force along some observable</p>
      <MakeMathDisplay tex={"H(t) = H_0 - h(t)B(\\vec{p}, \\vec{q})"} />
      <p>Here <MakeMathDisplay tex={"H_1(t) = - h(t)B(\\vec{p}, \\vec{q})"} /> so</p>
      <MakeMathDisplay tex={"\\hat{M}_I(t_a, t_b) = 1 + \\int_{t_a}^{t_b}\\hat{G}_I(t) dt + \\mathcal{O}(\\hat{G_I}^2)"} />
      <p>then</p>
      <MakeMathDisplay tex={"\\rho_I(t_b) = \\hat{M}_I(t_a, t_b)\\rho_I(t_a) = \\rho_I(t_a) + \\int_{t_a}^{t_b}\\hat{G}_I(t) \\rho_I(t_a) dt + \\mathcal{O}(\\hat{G_I}^2)"} />
      <p>and finding <MakeMath tex={"\\hat{G}_I"} /> gives</p>
      
      <MakeMathDisplay tex={"\\rho_I(t_b) = \\hat{M}_I(t_a, t_b)\\rho_I(t_a) = \\rho_I(t_a) + \\int_{t_a}^{t_b}h(t)\\hat{G}_{I, B}(t) \\rho_I(t_a) dt + \\mathcal{O}(h^2)"} />
      <p>where</p>
      <MakeMathDisplay tex={"G_{I, B} \\rho_I = \\sum_i \\frac{\\partial B}{\\partial q_i}\\frac{\\partial \\rho_I}{\\partial x_i} - \\frac{\\partial \\rho_I}{\\partial q_i}\\frac{\\partial B}{\\partial x_i}"} />
      <p>Next find the change in an observable between times</p>
      <MakeMathDisplay tex={"\\langle A_I(t) \\rangle = \\int_{V^N} p(\\vec{x}, \\vec{p}) A(\\vec{x}, \\vec{p}) d\\vec{x} d \\vec{p}"} />
      <p>So then</p>
      <MakeMathDisplay tex={"\\langle A_I(t_b) \\rangle - \\langle A_I(t_a) \\rangle = \\int_{t_a}^{t_b}h(t) \\int_{V^N} \\bigg( \\hat{G}_{I, B}(t) \\rho_I(t_a) \\bigg)(\\vec{p}, \\vec{q}) A_I(\\vec{p}, \\vec{q}) d\\vec{p} d\\vec{q} dt + \\mathcal{O}(h^2)"} />
      <p>Call this part the linear reponse function for the observable's <MakeMath tex={"A, B"} />.</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\int_{V^N} \\bigg( \\hat{G}_{I, B}(t) \\rho_I(t_a) \\bigg)(\\vec{p}, \\vec{q}) A_I(\\vec{p}, \\vec{q}) d\\vec{p} d\\vec{q}"} />
      <p>Do some stuff</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\int_{V^N} \\bigg( \\sum_i \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial \\rho_I(t_a)}{\\partial x_i} - \\frac{\\partial \\rho_I(t_a)}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} \\bigg) A_I(\\vec{p}, \\vec{q}) d\\vec{p} d\\vec{q}"} />
      <p>Assume <MakeMath tex={"t_a"} /> is at equilibrium so the interaction picture isn't changing (by definition of equilibrium the probability distirubion isn't changing)</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\int_{V^N} \\bigg( \\sum_i \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial \\rho_I(t_a)}{\\partial x_i} - \\frac{\\partial \\rho_I(t_a)}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} \\bigg) A(t_a) d\\vec{p} d\\vec{q}"} />
      <p>Then do divergence theorem and assume boundary conditions are zero</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\int_{V^N} \\bigg( \\sum_i \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial A(t_a)}{\\partial x_i} - \\frac{\\partial A(t_a)}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} \\bigg) \\rho_I(t_a) d\\vec{p} d\\vec{q}"} />
      <p>and at equilibrium is just </p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\int_{V^N} \\bigg( \\sum_i \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial A(t_a)}{\\partial x_i} - \\frac{\\partial A(t_a)}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} \\bigg) e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}} d\\vec{p} d\\vec{q}"} />
      <p>Which is just the equilibrium distribution of the autorrelation</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = \\langle \\sum_i \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial A(t_a)}{\\partial x_i} - \\frac{\\partial A(t_a)}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} \\bigg)\\rangle_0"} />
      <p>If we go back and integrate by parts and assume boundary conditions and stuff for each side of the minus for A we get</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = -\\frac{1}{k_B T}\\int_{V^N} A(t_a) \\bigg( \\sum_i \\frac{\\partial H_0}{\\partial q_i}\\frac{\\partial B(t)}{\\partial x_i} - \\frac{\\partial B(t)}{\\partial q_i}\\frac{\\partial H_0}{\\partial x_i} \\bigg) e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}} d\\vec{p} d\\vec{q}"} />
      <p>and thats just time evolution of operators so</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = -\\frac{1}{k_B T} \\int_{V^N} A(t_a) \\frac{\\partial B(t)}{\\partial t} e^{-\\frac{H_0(\\vec{q}, \\vec{p})}{k_B T}} d\\vec{p} d\\vec{q}"} />
      <p>so its like</p>
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = -\\frac{1}{k_B T} \\langle A(t_a) \\frac{\\partial B(t)}{\\partial t} \\rangle_0"} />
      <MakeMathDisplay tex={"\\chi_{AB}(t_a, t) = -\\frac{1}{k_B T}\\frac{\\partial}{\\partial t}  \\langle A(t_a) B(t) \\rangle_0"} />
      <p>Then if you assume the correlation is symmetric then fourier transform both sides and you get the thing</p>
      <MakeMathDisplay tex={"\\text{Im}[\\chi_{AB}(\\omega)] = -\\frac{\\omega}{2 k_B T} C(\\omega)"} />
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
