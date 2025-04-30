import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function FluctuationDissipationTheorem({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>Start with the Schrödinger equation for some arbitrary Hamiltonian.</p>
      <MakeMathDisplay tex={"i\\hbar \\frac{\\partial}{\\partial t} \\Psi(t) = \\hat{H}(t) \\Psi(t)"} />
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} \\Psi(t) = -\\frac{i}{\\hbar} \\hat{H}(t) \\Psi(t)"} />
      <p>Then we can write a closed form expression for any evolution given a point in time <MakeMath tex={"t_0"} />.</p>
      <MakeMathDisplay tex={"\\Psi(t) = \\mathcal{T} e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}(t') dt'} \\Psi(t_0)"} />
      <p>The <MakeMath tex={"\\mathcal{T}"}/> is the time ordering operator, an "operator" (which as far as I know is not actually an operator) that makes sure the order of multiplication of the Hamiltonians is in order in any Volterra series expansion of the exponential.</p>
      <p>If we define a new operator called the "time evolution operator", <MakeMath tex={"\\hat{U}(t, t_0) = \\mathcal{T} e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}(t') dt'}"} />, then we can have the below equation.</p>
      <MakeMathDisplay tex={"\\Psi(t) = \\hat{U}(t, t_0)\\Psi(t_0)"} />
      <h2>Schrödinger picture</h2>
      <p>If we represent <MakeMath tex={"\\Psi"} /> as a Hilbert space with conjugate symmetric inner product <MakeMath tex={"\\langle \\cdot , \\cdot \\rangle "} /> then any observable <MakeMath tex={"\\hat{A}(t)"} /> (where observables are defined to be self-adjoint operator, <MakeMath tex={"\\langle \\hat{A}x , y \\rangle = \\langle x , \\hat{A}y \\rangle"} />) can be measured by the below equation.</p>
      <MakeMathDisplay tex={"A(t) = \\langle \\Psi(t) | \\hat{A}(t) | \\Psi(t) \\rangle"} />
      <p>This expression for getting the values of observables is called the Schrödinger picture, where the <MakeMath tex={"\\Psi"} />'s evolve with time and the operator <MakeMath tex={"\\hat{A}"} /> stays the same.</p>
      <h2>Heisenberg picture</h2>
      <p>Another option is the Heisenberg picture where the <MakeMath tex={"\\hat{A}(t)"} />'s explicitly evolve with time. If we let <MakeMath tex={"\\hat{A}_S(t)"} /> be the obervable in the Schrödinger picture and <MakeMath tex={"\\hat{U}_S"} /> be the same with the time evolution operator then</p>
      <MakeMathDisplay tex={"\\langle \\Psi(t) | \\hat{A}_S(t) | \\Psi(t) \\rangle = \\langle \\Psi(t_0) | \\hat{U}_S^\\dagger(t, t_0) \\hat{A}_S(t) \\hat{U}_S(t, t_0) | \\Psi(t) \\rangle = \\langle \\Psi(t_0) | \\hat{A}_H(t) | \\Psi(t_0) \\rangle"} />
      <p>where <MakeMath tex={"\\hat{A}_H(t)"} /> is the observable operator in the Heisenberg picture while <MakeMath tex={"\\Psi(t_0)"} /> stays constant.</p>
      <MakeMathDisplay tex={"\\hat{A}_H = \\hat{U}_S^\\dagger(t, t_0) \\hat{A}_S(t) \\hat{U}_S(t, t_0)"} />
      <p>And observables are measured like this.</p>
      <MakeMathDisplay tex={"\\langle \\Psi(t_0) | \\hat{A}_H(t) | \\Psi(t_0) \\rangle"} />
      <h2>Interaction picture</h2>
      <p>You can also do a combination of the two. If you split the Hamiltonian into a time dependent and time independent part</p>
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 + \\hat{H}_1(t)"} />
      <p>then you can set the state vectors to</p>
      <MakeMathDisplay tex={"\\Psi_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t)"} />
      <p>then observables become</p>
      <MakeMathDisplay tex={"\\hat{A}_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{A}_S(t) e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} />
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
	    <td><MakeMath tex={"\\hat{A}_S(t)"} /></td>
	    <td><MakeMath tex={"\\hat{A}_H(t) = \\hat{U}^\\dagger_S(t, t_0)\\hat{A}(t)\\hat{U}_S(t, t_0)"} /></td>
	    <td><MakeMath tex={"\\hat{A}_I(t) = e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{A}_S(t) e^{-\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)}"} /></td>
	  </tr>
	  <tr>
	    <th scope="row">Measurement</th>
	    <td><MakeMath tex={"A(t) = \\langle \\Psi_S(t) | \\hat{A}_S(t) | \\Psi_S(t) \\rangle"} /></td>
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
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar}\\Big( \\hat{H}_0 \\Psi_I(t) - \\hat{H}_0e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\Psi_S(t) + e^{\\frac{i}{\\hbar} \\hat{H}_0 (t - t_0)} \\hat{H}_1 \\Psi_S(t)\\Big)"} />
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
      <h3>kinda-boring stuff</h3>
      <p>Then if we make a time evolution operator but in the interaction picture state vectors</p>
      <MakeMathDisplay tex={"\\Psi_I(t)= \\hat{U}_{I}(t, t_0) \\Psi_I(t_0)"} />
      <p>If we substitute that into the other equation then </p>
      <MakeMathDisplay tex={"\\frac{\\partial}{\\partial t} U_I(t, t_0)\\Psi_I(t)= -\\frac{i}{\\hbar} \\hat{H}_{1, I}(t) U_I(t, t_0)\\Psi_I(t_0)"} />
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
      <MakeMathDisplay tex={"U_I(t, t_0) = \\mathcal{T}e^{-\\frac{i}{\\hbar} \\int_{t_0}^t \\hat{H}_I(t') dt'}"} />
      
      <h2>Evolution of the density matrix.</h2>
      <p>In an ensemble the density matrix is defined by a probability of being multiple states</p>
      
      <MakeMathDisplay tex={"\\rho = \\sum_i p_i |\\Psi_i \\rangle \\langle \\Psi_i |"} />
      <p>The expected value of an observable can be measurd by</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A] = \\sum_i p_i \\langle \\Psi_i | \\hat{A} |\\Psi_i \\rangle = \\text{Tr}\\Big( \\hat{A} \\sum_i p_i |\\Psi_i \\rangle \\langle \\Psi_i | \\Big) = \\text{Tr}(\\hat{A} \\rho)"} />
      <p>We can write the density matrix also like</p>
      <MakeMathDisplay tex={"\\rho(t) = \\sum_i p_i U(t, t_0) |\\Psi_i(t_0) \\rangle \\langle \\Psi_i(t_0) | U^\\dagger(t, t_0) = U(t, t_0) \\rho(t_0) U^\\dagger(t, t_0)"} />
      <p>Then if we replace the time evolution operator with the Dyson series</p>
      <MakeMathDisplay tex={"= \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg) \\rho(t_0) \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg)^\\dagger"} />
      <p>Multiply the density matrix inside the sum</p>
      <MakeMathDisplay tex={"= \\Bigg( \\rho(t_0) + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n) \\rho(t_0) dt^n \\cdots dt \\Bigg) \\Bigg( 1 + \\sum_{n=1}^{\\infty} \\Big( -\\frac{i}{\\hbar} \\Big)^n \\int_{t_0}^{t} \\cdots \\int_{t^{n-2}}^{t^{n-1}} \\hat{H}(t') \\cdots \\hat{H}(t^n)dt^n \\cdots dt \\Bigg)^\\dagger"} />
      <p>This expression expands to some crazy long expression, so we will only keep track of the first order integral.</p>
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)(- \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t')  dt')^\\dagger+ \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)(-\\frac{i}{\\hbar})^\\dagger\\int_{t_0}^t \\hat{H}^\\dagger(t')  dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <p>Remember since the Hamiltonian is self-adjoint that <MakeMath tex={"\\hat{H} = \\hat{H}^\\dagger"} />.</p>
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) dt' + \\rho(t_0)\\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t')  dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t') dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)"} />
      <h2>Deriving the linear response function</h2>
      <p>We only focus on the first order of the evolution operator</p>
      <MakeMathDisplay tex={"U_I(t, t_0) = 1 - \\frac{i}{\\hbar} \\int_{t_0}^{t} \\hat{H}_{1, I}(t') \\cdots dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <p>Then</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = \\text{Tr}(\\rho(t)\\hat{A}) - \\text{Tr}(\\rho(t_0)\\hat{A}) = \\text{Tr}(\\rho(t)\\hat{A} - \\rho(t_0)\\hat{A})"} />
      <p>subsittute</p>
      <MakeMathDisplay tex={"= \\text{Tr}(\\rho(t_0)\\hat{A} - \\frac{i}{\\hbar}\\int_{t_0}^t \\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} dt' + \\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A} - \\rho(t_0)\\hat{A})"} />
      <MakeMathDisplay tex={"= \\text{Tr} \\Big( - \\frac{i}{\\hbar}\\int_{t_0}^t \\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} dt' \\Big) + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\bigg(\\Big(\\hat{H}(t') \\rho(t_0) -  \\rho(t_0) \\hat{H}(t')\\Big) \\hat{A} \\Bigg) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\Big(\\hat{H}(t') \\rho(t_0) \\hat{A} \\Big) -  \\text{Tr} \\Big( \\rho(t_0) \\hat{H}(t') \\hat{A} \\Big) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>And traces are have the circular property, so <MakeMath tex={"\\text{Tr}(ABC) = \\text{Tr}(BCA) = \\text{Tr}(CAB)"} />.</p>
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\Big(\\rho(t_0) \\hat{A} \\hat{H}(t') \\Big) -  \\text{Tr} \\Big( \\rho(t_0) \\hat{H}(t') \\hat{A} \\Big) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"=  - \\frac{i}{\\hbar}\\int_{t_0}^t \\text{Tr} \\bigg(\\rho(t_0) \\Big( \\hat{A} \\hat{H}(t') - \\hat{H}(t') \\hat{A} \\Big) \\bigg) dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>So a final expression of </p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] =  - \\frac{i}{\\hbar}\\int_{t_0}^t \\mathbb{E}_0\\Big[ \\hat{A} \\hat{H}(t') - \\hat{H}(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>Condider a linear force applied to the the Hamiltonian across one of the directions of an observable starting at time <MakeMath tex={"t_0"} />, so</p>
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 - F(t)\\hat{B}(t)"} />
      <p>then</p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t \\mathbb{E}_0\\Big[ \\hat{A} (F(t')B(t') - F(t')B(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{H}^2\\Big)\\hat{A}\\Big)"} />
      <p>We define this term to be the "linear response function" of <MakeMath tex={"A"} /> to a perturbation along <MakeMath tex={"B"} /></p>
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{B}^2\\Big)\\hat{A}\\Big)"} />
      <MakeMathDisplay tex={"\\mathbb{E}[A(t)] - \\mathbb{E}[A(t_0)] = - \\frac{i}{\\hbar}\\int_{t_0}^t F(t') \\chi_{AB}(t - t') dt' + \\text{Tr}\\Big(\\mathcal{O}\\Big(\\hat{B}^2\\Big)\\hat{A}\\Big)"} />
      <p>where</p>
      <MakeMathDisplay tex={"\\chi(t - t') = - \\frac{i}{\\hbar} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big]"} />
      <p>We can take the fourier transform of it</p>
      <MakeMathDisplay tex={"\\chi(\\omega) = \\int_{-\\infty}^\\infty e^{i\\omega t} \\chi(t) dt = \\frac{i}{\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt"} />
      <p>And the linear response function must be zero at negative times so the future can't affect the past so the integral can start at zero.</p>
      <MakeMathDisplay tex={"= \\frac{i}{\\hbar} \\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}\\hat{B}(t') - \\hat{B}(t') \\hat{A}\\Big] dt"} />
      <p>To find the imaginary part of any value we can do</p>
      <MakeMathDisplay tex={"\\text{Im}[f] = \\frac{f - f^*}{2i}"} />
      <MakeMathDisplay tex={"\\text{Im}[\\chi(\\omega)] = \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]^* dt \\Bigg)"} />
      <MakeMathDisplay tex={"= \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{B}^\\dagger(t')\\hat{A}^\\dagger(t_0) - \\hat{A}^\\dagger(t_0)\\hat{B}^\\dagger(t')\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={"= \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{B}^\\dagger(t')\\hat{A}^\\dagger(t_0) - \\hat{A}^\\dagger(t_0)\\hat{B}^\\dagger(t')\\Big] dt \\Bigg)"} />
      <p>And once agan observables are by definition their own hermetion conjugate</p>
      <MakeMathDisplay tex={"= \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{B}(t') - \\hat{B}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{B}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{B}(t')\\Big] dt \\Bigg)"} />
      <p>And if we make <MakeMath tex={"A = B"} /></p>
      <MakeMathDisplay tex={"= \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{A}(t')\\Big] dt \\Bigg)"} />
      <p>And since in the average the Hamiltonian is constant then </p>
      <MakeMathDisplay tex={"\\Big[ \\hat{A}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{A}(t')\\Big] = \\Big[ \\hat{A}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{A}(-t')\\Big]"} />
      <MakeMathDisplay tex={"\\text{Im}[\\chi(\\omega)] = \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt - \\int_{0}^\\infty e^{-i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(-t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{A}(-t')\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={" = \\frac{1}{2\\hbar} \\Bigg(\\int_{0}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt - \\int_{-\\infty}^0 e^{i\\omega t} \\mathbb{E}\\Big[ \\hat{A}(t')\\hat{A}(t_0) - \\hat{A}(t_0)\\hat{A}(t')\\Big] dt \\Bigg)"} />
      <MakeMathDisplay tex={" = \\frac{1}{2\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t_0)\\hat{A}(t') - \\hat{A}(t') \\hat{A}(t_0)\\Big]dt"} />
      
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
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[\\hat{A}(t' - i \\hbar \\beta) \\hat{A}(t_0)\\Big]dt = \\int_{-\\infty}^\\infty e^{i\\omega t} e^{- i \\hbar \\beta} \\mathbb{E}_0\\Big[\\hat{A}(t')\\hat{A}(t_0) \\Big]dt"} />
      <p>then substitute</p>
      <MakeMathDisplay tex={" = \\frac{1}{2\\hbar} \\int_{-\\infty}^\\infty e^{i\\omega t} (1 + e^{-i \\beta \\omega})\\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt"} />
      <p>We end with an expression of</p>
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt = \\frac{2\\hbar}{1 + e^{-i \\beta \\omega}}\\text{Im}[\\chi]"} />
      <p>for large temepratrues</p>
      <MakeMathDisplay tex={"\\int_{-\\infty}^\\infty e^{i\\omega t} \\mathbb{E}_0\\Big[ \\hat{A}(t')\\hat{A}(t_0)\\Big]dt \\approx \\frac{2k_B T}{\\omega}\\text{Im}[\\chi]"} />
    </Wrapper>
  );
}

export default FluctuationDissipationTheorem;
