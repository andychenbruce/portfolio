import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <h2>Classical Hamiltonian Mechanics</h2>
      <p>Start with the definition of action <MakeMath tex={"S"}/> across some path <MakeMath tex={"\\vec{x}(t)"}/> where <MakeMath tex={"\\mathcal{L}(\\vec{x}, \\dot{\\vec{x}})"}/> is the Lagrangian density.</p>
      <MakeMathDisplay tex={"S(\\vec{x}) = \\int_{t_a}^{t_b} \\mathcal{L}\\Big(\\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big) dt"} />
      <p>From the principle of least action the path should be a minimum, so the variational derivative should be zero given an perturbation <MakeMath tex={"\\delta \\vec{x}(t)"} /> that preserves the same start and end points so <MakeMath tex={"\\delta \\vec{x}(t_a) = 0, \\delta \\vec{x}(t_b) = 0"}/></p>
      <MakeMathDisplay tex={"\\lim_{\\epsilon \\rightarrow 0} \\frac{S(\\vec{x} + \\epsilon \\delta \\vec{x}) - S(\\vec{x})}{\\epsilon} = 0"} />
      <MakeMathDisplay tex={"\\lim_{\\epsilon \\rightarrow 0} \\frac{1}{\\epsilon} \\int_{t_a}^{t_b} \\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}, \\frac{d\\vec{x}(t)}{dt} + \\epsilon \\frac{d\\delta \\vec{x}}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big) dt = 0"} />
      <p>Assume we can swap the derivative and integral.</p>
      <MakeMathDisplay tex={"\\int_{t_a}^{t_b} \\lim_{\\epsilon \\rightarrow 0} \\frac{\\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt} + \\epsilon \\frac{d\\delta \\vec{x}(t)}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big)}{\\epsilon} dt = 0"} />
      <p>Create a dummy value.</p>
      <MakeMathDisplay tex={"\\int_{t_a}^{t_b} \\lim_{\\epsilon \\rightarrow 0} \\frac{\\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt} + \\epsilon \\frac{d\\delta \\vec{x}(t)}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big) + \\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big)}{\\epsilon} dt = 0"} />
      <MakeMathDisplay tex={"\\int_{t_a}^{t_b} \\lim_{\\epsilon \\rightarrow 0} \\frac{\\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt} + \\epsilon \\frac{d\\delta \\vec{x}(t)}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big)}{\\epsilon} + \\frac{\\mathcal{L}\\Big(\\vec{x}(t) + \\epsilon \\delta \\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big) - \\mathcal{L}\\Big(\\vec{x}(t), \\frac{d\\vec{x}(t)}{dt}\\Big)}{\\epsilon} dt = 0"} />
      <p>See these are just definitions for partial derivaitves (gradients).</p>
      <MakeMathDisplay tex={"\\int_{t_a}^{t_b} \\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\dot{\\vec{x}}} \\cdot \\frac{d\\delta \\vec{x}(t)}{dt} + \\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\vec{x}} \\cdot \\delta \\vec{x}(t) dt = 0"} />
      <p>Integrate by parts on left side.</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t_b), \\frac{\\partial \\vec{x}(t_b)}{dt}\\Big)}{\\partial \\dot{\\vec{x}}} \\cdot \\delta \\vec{x}(t_b) - \\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t_a), \\frac{\\partial \\vec{x}(t_a)}{dt}\\Big)}{d \\dot{\\vec{x}}} \\cdot \\delta \\vec{x}(t_a) + \\int_{t_a}^{t_b} - \\bigg( \\frac{d}{d t}\\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\dot{\\vec{x}}}\\bigg) \\cdot \\delta \\vec{x}(t) + \\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\vec{x}} \\cdot \\delta \\vec{x}(t) dt = 0"} />
      <p>Remember <MakeMath tex={"\\delta \\vec{x}(t_a), \\delta \\vec{x}(t_b) = 0"}/>.</p>
      <MakeMathDisplay tex={"\\int_{t_a}^{t_b} \\Bigg( \\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\vec{x}} - \\bigg( \\frac{d}{d t}\\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{d \\dot{\\vec{x}}}\\bigg) \\Bigg) \\cdot \\delta \\vec{x}(t) dt = 0"} />
      <p>Since this must be true for arbitrary <MakeMath tex={"\\delta \\vec{x}"} /></p>
      <MakeMathDisplay tex={"\\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{\\partial \\vec{x}} - \\bigg( \\frac{d}{d t}\\frac{\\partial \\mathcal{L}\\Big(\\vec{x}(t), \\frac{\\partial \\vec{x}(t)}{dt}\\Big)}{d \\dot{\\vec{x}}}\\bigg) = \\vec{0}"} />
      <p>which is the Euler Lagrange equation. Next we define a Hamiltonian <MakeMath tex={"\\mathcal{H}(\\vec{x}, \\vec{q}) = \\dot{\\vec{x}}\\cdot \\vec{q} - \\mathcal{L}(\\vec{x}, \\dot{\\vec{x}})"} /> where <MakeMath tex={"\\vec{q} = \\frac{\\partial \\mathcal{L}(\\vec{x}, \\dot{\\vec{x}})}{\\partial \\dot{\\vec{x}}}"} />, usually interpreted as momentum.</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial \\vec{x}} = -\\frac{\\mathcal{L}(\\vec{x}, \\dot{\\vec{x}})}{\\vec{x}} = -\\frac{d}{d t}\\frac{\\partial \\mathcal{L}(\\vec{x}, \\dot{\\vec{x}})}{\\dot{\\vec{x}}} = -\\dot{\\vec{q}}"} />
      <p>So we get Hamiltons equations.</p>
      <MakeMathDisplay tex={"\\dot{\\vec{x}} = \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial \\vec{q}}"} />
      <MakeMathDisplay tex={"\\dot{\\vec{q}} = -\\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial \\vec{x}}"} />
      <h2>Classical Microcanonical Ensemble</h2>
      <p>We start with some probability distribution in the phase space of the Hamiltonian <MakeMath tex={"\\mathcal{H}(\\vec{x}, \\vec{q})"} />.</p>
      <MakeMathDisplay tex={"p(\\vec{x}, \\vec{q}, t) = ???"} />
      <p>The probability distribution evolves by the continuity equation.</p>
      <MakeMathDisplay tex={"\\frac{\\partial p(\\vec{x}, \\vec{q}, t)}{\\partial t} = \\nabla \\cdot (p\\vec{v})"} />
      <p>Here <MakeMath tex={"\\vec{v} = \\langle \\dot{x}_1, \\dot{x}_2, \\dots, \\dot{x}_N, \\dot{q}_1, \\dot{q}_2, \\dots, \\dot{q}_N \\rangle"} /></p>
      <p>In equilibrium the probability distribution at every point in phase space shouldn't change.</p>
      <MakeMathDisplay tex={"\\nabla \\cdot (p\\vec{v}) = 0"} />
      <MakeMathDisplay tex={"\\sum_{i=1}^{2N} \\frac{\\partial p(\\vec{x}, \\vec{q})\\vec{v}_i}{\\partial a_i} = 0"} />
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\frac{\\partial p(\\vec{x}, \\vec{q})\\dot{x}_i}{\\partial x_i} + \\frac{\\partial p(\\vec{x}, \\vec{q})\\dot{q}_i}{\\partial q_i} = 0"} />
      <p>Simple chain rule.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p(\\vec{x}, \\vec{q})\\frac{\\partial\\dot{x}_i}{\\partial x_i} + \\dot{x}_i\\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial x_i} + p(\\vec{x}, \\vec{q}) \\frac{\\partial \\dot{q}_i}{\\partial q_i} + \\dot{q}_i \\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial q_i} = 0"} />
      <p>Substitute in Hamiltons equations.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p(\\vec{x}, \\vec{q})\\frac{\\partial\\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial x_i \\partial q_i} + \\dot{x}_i\\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial x_i} - p(\\vec{x}, \\vec{q}) \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial x_i \\partial q_i} + \\dot{q}_i \\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial q_i} = 0"} />
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\dot{x}_i\\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial x_i} + \\dot{q}_i \\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial q_i} = 0"} />
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial q_i}\\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial x_i} - \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial x_i}\\frac{\\partial p(\\vec{x}, \\vec{q})}{\\partial q_i} = 0"} />
      <p>Next, we say that the probability distribution is a function only of the total energy, so <MakeMath tex={"p(\\vec{x}, \\vec{q}, t_0) = f(\\mathcal{H}(\\vec{x}, \\vec{q}))"} />. This means that <MakeMath tex={"\\frac{\\partial p(\\vec{x}, \\vec{q}, t_0)}{\\partial a_i} = \\frac{\\partial f(\\mathcal{H}(\\vec{x}, \\vec{q}))}{\\partial \\mathcal{H}} \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial a_i}"} /></p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\frac{\\partial f(\\mathcal{H})}{\\partial \\mathcal{H}}\\bigg(\\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial x_i}\\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial q_i} - \\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial x_i}\\frac{\\partial \\mathcal{H}(\\vec{x}, \\vec{q})}{\\partial q_i} \\bigg) = 0"} />
      <p>That assumption creates a solution to the continuity equation. Now in the microcanonical ensemble (NVE) we say the total energy is known, so the only possibility for <MakeMath tex={"f"} /> is a uniform distribution over the selected energy level.</p>
      <MakeMathDisplay tex={"p(\\vec{x}, \\vec{q}) = \\frac{\\delta(\\mathcal{H}(\\vec{x}, \\vec{q}) - E)}{\\int_V \\delta(\\mathcal{H}(\\vec{x}', \\vec{q}') - E) d\\vec{x}' d\\vec{q}'}"} />
      <p>This equation is the principle of equal a priori for the equilibrium in a closed system.</p>

      <h2>Classical Canonical Ensemble</h2>
      <p>Define the number of states accessable by a system with <MakeMath tex={"N"} /> degrees of freedom at energy <MakeMath tex={"E"}/> to be the below.</p>
      <MakeMathDisplay tex={"\\Omega(E) = \\frac{1}{h^N} \\int_V \\delta(\\mathcal{H}(\\vec{x}, \\vec{q}) - E) d\\vec{x} d\\vec{q}"} />
      <p>Next split the degrees of freedom into the "bath" and "system". Let the degrees of freedom for the bath be <MakeMath tex={"r_{\\text{bath}} = \\langle x_{M+1}, \\dots, x_N, q_{M+1}, \\dots, q_N \\rangle"} /> and the degrees of freedom for the system <MakeMath tex={"r_{\\text{sys}} = \\langle x_1, \\dots, x_M,, q_1, \\dots, q_M \\rangle"} />.</p>
      <p>In the Canonical ensemble the combined energy of the bath and system should be constant. The combination of the two makes a microcanonical ensemble.</p>
      <MakeMathDisplay tex={"\\mathcal{H}_{\\text{total}}(r_{\\text{bath}}, r_{\\text{sys}}) = \\mathcal{H}_{\\text{bath}}(r_{\\text{bath}}) + \\mathcal{H}_{\\text{sys}}(r_{\\text{sys}}) + \\mathcal{H}_{\\text{coupling}}(r_{\\text{bath}}, r_{\\text{sys}})"} />
      <p>The total accessable states with an energy should be the total number combined number of states the bath and system can be in that sum to that energy.</p>
      <MakeMathDisplay tex={"\\Omega_{\\text{total}}(E_{\\text{total}}) = \\frac{1}{h^M}\\int_V \\Omega_{\\text{bath}}(E_{\\text{total}} - \\mathcal{H}_{\\text{sys}}(r_{\\text{sys}})) dr_{\\text{sys}}"} />
      <p>And in the microcanonical ensemble all microstates <MakeMath tex={"(r_\\text{bath}, r_\\text{sys})"} /> with the correct energy have an equal probability density.</p>
      <MakeMathDisplay tex={"p(r_\\text{bath}, r_\\text{sys}) = \\frac{1}{\\Omega_{\\text{total}}(E_{\\text{total}})} \\frac{1}{h^N} \\delta \\Big(E_\\text{total} - (\\mathcal{H}_\\text{sys}(r_\\text{sys}) + \\mathcal{H}_\\text{bath}(r_\\text{bath}))\\Big)"} />
      <p>We can calculate the probability density of just the microstate for the system.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys}) = \\int_V p(r_\\text{bath}, r_\\text{sys}) dr_\\text{bath}"} />
      <MakeMathDisplay tex={"= \\int_V \\frac{1}{\\Omega_{\\text{total}}(E_{\\text{total}})} \\frac{1}{h^N} \\delta\\Big(E_\\text{total} - (\\mathcal{H}_\\text{sys}(r_\\text{sys}) + \\mathcal{H}_\\text{bath}(r_\\text{bath}))\\Big) dr_\\text{bath}"} />
      <MakeMathDisplay tex={"= \\frac{\\Omega_\\text{bath}(E_\\text{total} - \\mathcal{H}_\\text{sys}(r_\\text{sys}))}{h^M \\Omega_{\\text{total}}(E_{\\text{total}})}"} />
      <p>Take the natural log of both sides</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= \\ln(\\frac{\\Omega_\\text{bath}(E_\\text{total} - \\mathcal{H}_\\text{sys}(r_\\text{sys}))}{h^M\\Omega_{\\text{total}}(E_{\\text{total}})})"} />
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= \\ln(\\Omega_\\text{bath}(E_\\text{total} - \\mathcal{H}_\\text{sys}(r_\\text{sys}))) - \\ln(h^M \\Omega_{\\text{total}}(E_{\\text{total}}))"} />
      <p>Then we expand the logarithm to its Taylor series.</p>
      <MakeMathDisplay tex={"f(x+c)= f(x) + \\frac{df(x)}{dx}c + \\frac{1}{2}\\frac{d^2f(x)}{dx^2}c^2 + \\frac{1}{6}\\frac{d^3f(x)}{dx^3}c^3 + \\cdots "} />
      <p>We set <MakeMath tex={"f(x) = \\ln(\\Omega_\\text{bath}(x))"} />, <MakeMath tex={"x = E_\\text{total}"} />, and <MakeMath tex={"c = -\\mathcal{H}_\\text{sys}(r_{\\text{sys}})"} /> we get the following expression.</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys})) = \\ln(\\Omega_\\text{bath}(E_\\text{total})) - \\frac{d\\ln(\\Omega_\\text{bath}(E_\\text{total}))}{dE_\\text{total}}\\mathcal{H}_\\text{sys}(r_\\text{sys})"} />
      <MakeMathDisplay tex={"+ \\frac{1}{2}\\frac{d^2\\ln(\\Omega_\\text{bath}(E_\\text{total}))}{dE_\\text{total}^2}\\mathcal{H}_\\text{sys}(r_\\text{sys})^2 - \\frac{1}{6}\\frac{d^3\\ln(\\Omega_\\text{bath}(E_\\text{total}))}{dE_\\text{total}^3}\\mathcal{H}_\\text{sys}(r_\\text{sys})^3 + \\cdots"} />
      <MakeMathDisplay tex={"\\cdots - \\ln(h^M\\Omega_{\\text{total}}(E_{\\text{total}}))"} />
      <p>In the limit that <MakeMath tex={"E_\\text{total}"} /> approaches <MakeMath tex={"E_\\text{bath}"} /> so that <MakeMath tex={"E_\\text{system}"} /> becomes small in comparison, the bath becomes a microcanonical ensemble and the entropy of the bath <MakeMath tex={"S_\\text{bath} (E_\\text{total}) = S_\\text{bath} (E_\\text{bath}) = k_B\\ln(\\Omega_\\text{bath}(E_\\text{bath}))"} /></p>
      <MakeMathDisplay tex={"= \\ln(\\Omega_\\text{bath}(E_\\text{bath})) - \\frac{1}{k_B}\\frac{dS_\\text{bath}(E_\\text{bath})}{dE_\\text{bath}}\\mathcal{H}_\\text{sys}(r_\\text{sys}) + \\frac{1}{2k_B}\\frac{d^2S_\\text{bath}(E_\\text{bath})}{dE_\\text{bath}^2}\\mathcal{H}_\\text{sys}(r_\\text{sys})^2"} />
      <MakeMathDisplay tex={"- \\frac{1}{6k_B}\\frac{d^3S_\\text{bath}(E_\\text{bath})}{dE_\\text{bath}^3}\\mathcal{H}_\\text{sys}(r_\\text{sys})^3 + \\cdots - \\ln(h^M \\Omega_{\\text{total}}(E_{\\text{total}}))"} />
      <p>And by definition <MakeMath tex={"\\frac{1}{T_\\text{bath}} = \\frac{dS_\\text{bath}(E)}{dE}"} />.</p>
      <MakeMathDisplay tex={"= \\ln(\\Omega_\\text{bath}(E_\\text{bath})) - \\frac{1}{k_B T_\\text{bath}}\\mathcal{H}_\\text{sys}(r_\\text{sys}) + \\frac{1}{2k_B T_\\text{bath}}\\frac{dT_\\text{bath}}{dE_\\text{bath}^2}\\mathcal{H}_\\text{sys}(r_\\text{sys})^2"} />
      <MakeMathDisplay tex={"- \\frac{1}{6k_B T_\\text{bath}}\\frac{d^2T_\\text{bath}}{dE_\\text{bath}^2}\\mathcal{H}_\\text{sys}(r_\\text{sys})^3 + \\cdots - \\ln(h^M \\Omega_{\\text{total}}(E_{\\text{total}}))"} />
      <p>Then if we assume the heat capacity of the bath is infinite so that <MakeMath tex={"\\frac{dT_\\text{bath}}{dE_\\text{bath}} = 0"} /> we can remove the extra terms.</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys})) = - \\frac{1}{k_B T_\\text{bath}}\\mathcal{H}_\\text{sys}(r_\\text{sys}) + \\ln \\Big(\\frac{\\Omega_\\text{bath}(E_\\text{bath})}{h^M\\Omega_{\\text{total}}(E_{\\text{total}})} \\Big)"} />
      <p>Then exponentiate both sides.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys})= \\frac{e^{-\\frac{\\mathcal{H}_\\text{sys}(r_\\text{sys})}{k_B T_\\text{bath}}}}{\\Big(\\frac{h^M\\Omega_\\text{total}(E_\\text{total})}{\\Omega_{\\text{bath}}(E_{\\text{bath}})} \\Big)}"} />
      <p>And the denominator is just a normalizing factor so the final expression is below.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys}) = \\frac{e^{-\\frac{\\mathcal{H}_\\text{sys}(r_\\text{sys})}{k_B T_\\text{bath}}}} {\\displaystyle \\int_V e^{-\\frac{\\mathcal{H}_\\text{sys}(r\'_\\text{sys})}{k_B T_\\text{bath}}} dr\'_\\text{sys} }"} />

      <h2>Quantum Microcanonical Ensemble</h2>
      <p>We assume a time evolution of a system of the Schrodinger equation for some Hamiltonian operator.</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\Psi(\\vec{x}, t)}{\\partial t} = -\\frac{i}{\\hbar}\\hat{H}\\Psi(\\vec{x}, t)"} />
      <p>To measure an observable when the stat is known is</p>
      <MakeMathDisplay tex={"A = \\langle \\Psi | \\hat{A} | \\Psi \\rangle "} />
      <p>but if there is a probability distrubition over some states then it is below.</p>
      <MakeMathDisplay tex={"= \\langle A \\rangle = \\sum_i p_i \\langle \\Psi_i | \\hat{A} | \\Psi_i \\rangle "} />
      <p>If we have an orthanormal basis <MakeMath tex={"n"} /> so that <MakeMath tex={"\\sum_k | n_k \\rangle \\langle n_k | = I"}/> we can insert it into the equation.</p>
      <MakeMathDisplay tex={"= \\sum_i p_i \\langle \\Psi_i | \\hat{A} \\bigg( \\sum_k | n_k \\rangle \\langle n_k | \\bigg) | \\Psi_i \\rangle "} />
      <MakeMathDisplay tex={"= \\sum_k \\sum_i p_i \\langle \\Psi_i | \\hat{A} | n_k \\rangle \\langle n_k | \\Psi_i \\rangle "} />
      <MakeMathDisplay tex={"= \\sum_k \\sum_i p_i \\langle n_k | \\Psi_i \\rangle \\langle \\Psi_i | \\hat{A} | n_k \\rangle "} />
      <MakeMathDisplay tex={"= \\sum_k  \\langle n_k | \\bigg( \\sum_i p_i | \\Psi_i \\rangle \\langle \\Psi_i | \\hat{A} \\bigg) | n_k \\rangle "} />
      <MakeMathDisplay tex={"= \\text{Tr}\\bigg( \\sum_i p_i | \\Psi_i \\rangle \\langle \\Psi_i | \\hat{A} \\bigg) "} />
      <p>If we define an operator</p>
      <MakeMathDisplay tex={"\\rho = \\sum_i p_i | \\Psi_i \\rangle \\langle \\Psi_i |"} />
      <p>then the expected value of any observable is</p>
      <MakeMathDisplay tex={"\\langle A \\rangle = \\text{Tr}\\big( \\rho \\hat{A} \\big) "} />
      <p>Next we find the time evolution of <MakeMath tex={"\\rho"} />.</p>
      <MakeMathDisplay tex={"\\frac{d \\rho}{dt} = \\sum_i p_i \\frac{d \\Big(| \\Psi_i \\rangle \\langle \\Psi_i |\\Big)}{dt} = \\sum_i p_i \\bigg( \\frac{d| \\Psi_i \\rangle}{dt} \\langle \\Psi_i | + | \\Psi_i \\rangle \\frac{d \\langle \\Psi_i |}{dt} \\bigg)"} />
      <p>Then substitute the Schrodinger equation</p>
      <MakeMathDisplay tex={" = \\sum_i p_i \\bigg( -\\frac{i}{\\hbar}\\hat{H}| \\Psi_i \\rangle \\langle \\Psi_i | + | \\Psi_i \\rangle \\langle \\Psi_i | \\frac{i}{\\hbar}\\hat{H} \\bigg)"} />
      <MakeMathDisplay tex={" = - \\frac{i}{\\hbar} \\sum_i p_i \\bigg(\\hat{H}| \\Psi_i \\rangle \\langle \\Psi_i | - | \\Psi_i \\rangle \\langle \\Psi_i |\\hat{H} \\bigg)"} />
      <MakeMathDisplay tex={" = - \\frac{i}{\\hbar} \\bigg(\\hat{H} \\rho - \\rho \\hat{H} \\bigg)"} />
      <p>So it must be that for equilibrium they commute</p>
      <MakeMathDisplay tex={"\\hat{H} \\rho = \\rho \\hat{H}"} />
      <p>Similar to the classical case, if we have the <MakeMath tex={"p_i"} /> be only a function of the energy for each eigenvector of the Hamiltonian, the system will be in equilibrium. Since observables are Hermetian, an orthogonal eigenbases must exist. Each operator will be defined in the eigenbasis.</p>
      <MakeMathDisplay tex={"\\hat{H} = \\sum_a E_a | n_a \\rangle \\langle n_a|"} />
      <MakeMathDisplay tex={"\\rho = \\sum_a p(E_a) | n_a \\rangle \\langle n_a|"} />
      <p>We can show they commute</p>
      <MakeMathDisplay tex={"\\hat{H}\\rho = \\sum_a E_a | n_a \\rangle \\langle n_a| \\sum_b p(E_b) | n_b \\rangle \\langle n_b|"} />
      <MakeMathDisplay tex={"= \\sum_a \\sum_b E_a p(E_b) | n_a \\rangle \\langle n_a| | n_b \\rangle \\langle n_b|"} />
      <MakeMathDisplay tex={"= \\sum_a \\sum_b  p(E_b) | n_a \\rangle \\langle n_a| E_a | n_b \\rangle \\langle n_b|"} />
      <MakeMathDisplay tex={"= \\sum_a p(E_a) | n_a \\rangle \\langle n_a| \\sum_b E_b | n_b \\rangle \\langle n_b|"} />
      <MakeMathDisplay tex={"\\rho\\hat{H}"} />
      <p>So the quantum microcanonical ensemble must have a density matrix of the form</p>
      <MakeMathDisplay tex={"\\rho = \\sum_a p(E_a) | n_a \\rangle \\langle n_a|"} />
      <p>where the <MakeMath tex={"n"} />'s are eigenvectors of the Hamiltonian. Since the energy is known, it must be a uniform distribution over all eigenstates with that energy</p>
      <MakeMathDisplay tex={"\\rho = \\sum_a | n_a \\rangle \\langle n_a|"} />
      <h2>Quantum Cannonical Ensemble</h2>
      <p>TODO</p>
    </Wrapper>
  );
}

export default DeltaGcode;
