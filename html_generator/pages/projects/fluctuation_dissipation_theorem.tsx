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
      <h3>Linear response theory</h3>
      <p>In the canonical ensemble at equilibrium, with a constant Hamiltonian operator, the Von Neuman entropy is maximized with the density matrix</p>
      <MakeMathDisplay tex={"\\rho_0 = \\dfrac{e^{-\\frac{\\hat{H}_0}{k_B T}}}{\\text{Tr}\\bigg(e^{-\\frac{\\hat{H}_0}{k_B T}}\\bigg)} = \\dfrac{e^{-\\frac{\\hat{H}_0}{k_B T}}}{Z} = \\dfrac{e^{-\\beta \\hat{H}_S}}{Z}"} />
      <p>Next, starting at time <MakeMath tex={"t_F"} /> we add a linear force field on one of the observables. This modifies the Hamiltonian to</p>
      <MakeMathDisplay tex={"\\hat{H}_S(t) = \\hat{H}_0 + A(t)F(t)"} />
      <p>where</p>
      <MakeMathDisplay tex={"F(t) = 0 \\text{ if } t \\le t_F"} />
      <p>then</p>
      <MakeMathDisplay tex={"= \\rho_I(t_0) - \\frac{i}{\\hbar}\\int_{t_0}^t \\hat{H}_{1, I}(t') \\rho_I(t_0) -  \\rho_I(t_0) \\hat{H}_{1, I}(t') dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <p>At <MakeMath tex={"t_0 = t_F"} /> the system is still in equilibrium so </p>
      <MakeMathDisplay tex={"= \\rho_I(t_0) - \\frac{i}{\\hbar}\\int_{t_F}^t \\hat{H}_{1, I}(t') \\rho_I(t_F) -  \\rho_I(t_F) \\hat{H}_{1, I}(t') dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho_I(t_0) - \\frac{i}{\\hbar}\\int_{t_F}^t \\hat{H}_{1, I}(t') \\dfrac{e^{-\\beta \\hat{H}_S}}{Z} - \\dfrac{e^{-\\beta\\hat{H}_S}}{Z} \\hat{H}_{1, I}(t') dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <MakeMathDisplay tex={"= \\rho_I(t_0) - \\frac{1}{Z}\\frac{i}{\\hbar}\\int_{t_F}^t \\hat{H}_{1, I}(t') e^{-\\beta\\hat{H}_S} - e^{-\\beta\\hat{H}_S} \\hat{H}_{1, I}(t') dt' + \\mathcal{O}\\Big(\\hat{H}_{1, I}^2\\Big)"} />
      <h4>Stuff</h4>
      <p>From the fundamental theorem of calculus as long as the derivative exists then</p>
      <MakeMathDisplay tex={"\\int_a^b \\dfrac{\\partial f(x)}{\\partial x} dx = f(a)-f(b)"} />
      <p>If we let <MakeMath tex={"f(\\lambda) = \\frac{1}{Z} \\Big( e^{-(\\beta - \\lambda) \\hat{H}_S)}\\hat{H}_{1, I}(t') e^{-\\lambda\\hat{H}_S} \\Big)"} /> </p>
      <p>then</p>
      <MakeMathDisplay tex={"\\frac{1}{Z} \\int_0^\\beta \\dfrac{\\partial}{\\partial \\lambda} \\Big( e^{-(\\beta - \\lambda) \\hat{H}_S}\\hat{H}_{1, I}(t') e^{-\\lambda\\hat{H}_S} \\Big)d\\lambda = \\frac{1}{Z} \\hat{H}_{1, I}(t') e^{-\\beta\\hat{H}_S} - e^{-\\beta\\hat{H}_S} \\hat{H}_{1, I}(t')"} />
      <p>Then apply the product rule</p>
      <MakeMathDisplay tex={"= \\frac{1}{Z} \\int_0^\\beta e^{-(\\beta - \\lambda) \\hat{H}_S}\\hat{H}_S\\hat{H}_{1, I}(t') e^{-\\lambda\\hat{H}_S} -  e^{-(\\beta - \\lambda) \\hat{H}_S} \\hat{H}_{1, I}(t') \\hat{H}_S e^{-\\lambda\\hat{H}_S} d\\lambda "} />
      <p>factor out some stuff</p>
      <MakeMathDisplay tex={"= \\frac{e^{-\\beta \\hat{H}_S}}{Z} \\int_0^\\beta e^{\\lambda\\hat{H}_S}\\hat{H}_S\\hat{H}_{1, I}(t') e^{-\\lambda\\hat{H}_S} -  e^{-(\\beta - \\lambda) \\hat{H}_S} \\hat{H}_{1, I}(t') \\hat{H}_S e^{-\\lambda\\hat{H}_S} d\\lambda "} />
      <MakeMathDisplay tex={"= \\rho_S \\int_0^\\beta e^{\\lambda\\hat{H}_S} \\Bigg(\\hat{H}_S\\hat{H}_{1, I}(t') - \\hat{H}_{1, I}(t') \\hat{H}_S \\Bigg) e^{-\\lambda\\hat{H}_S} d\\lambda "} />
      <h3>TODO prove the heisenbert picture observable evolution</h3>
      <MakeMathDisplay tex={"\\frac{d}{dt} A_H(t) = \\frac{i}{\\hbar} (H_H(t)A_H(t) - A_H(t)H_H(t)) + \\Big(\\frac{\\partial A}{\\partial t}\\Big)_H"} />
      <p>With no direct dependence on time then</p>
      <MakeMathDisplay tex={"-i\\hbar\\frac{d}{dt} A_H(t) = H_H(t)A_H(t) - A_H(t)H_H(t)"} />
      <MakeMathDisplay tex={"= \\rho_S \\int_0^\\beta e^{\\lambda\\hat{H}_S} \\frac{d}{dt} H_{1, I} e^{-\\lambda\\hat{H}_S} d\\lambda "} />
      <h4>imaginary time or something?</h4>
      <MakeMathDisplay tex={"= \\rho_S \\int_0^\\beta \\frac{d}{dt} H_{1, I}(t + i\\lambda) d\\lambda "} />
    </Wrapper>
  );
}

export default FluctuationDissipationTheorem;
