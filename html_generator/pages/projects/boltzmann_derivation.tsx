import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <h2>Derivation of the Boltzmann Distribution by Maximizing Entropy</h2>
      <p>Assume there are <MakeMath tex={"N"} /> discrete states the system can be in: <MakeMath tex={"X = \\{ x_1 \\dots x_N \\}"} />. Let <MakeMath tex={"p_i = P(X = x_i)"} /> sampling the state over an indefinite time period, and <MakeMath tex={"E_i"} /> be the energy in state <MakeMath tex={"x_i"} />. The system will have 2 contraints, the probabilities must add to 1, and the average energy, the internal energy, should equal <MakeMath tex={"U"} />.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i = 1"} />
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i E_i = U"} />
      <p>We will assume that <MakeMath tex={"S"} /> should be maximized.</p>
      <MakeMathDisplay tex={"S(p) = - k_B \\sum_{i=1}^{N} p_i \\ln(p_i)"} />
      <p>We want to find the probability distribution <MakeMath tex={"p = {p_1 \\dots p_n}"} /> that maximizes <MakeMath tex={"S"} />, while following the 2 constraints.</p>
      <MakeMathDisplay tex={"p_{\\text{max}} = \\text{argmax}_P S(p)"} />
      <p>We can solve this system of equations with a Lagrange multiplier. First rewrite the 2 constraints like:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i - 1 = 0"} />
      <p>and</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i E_i - U = 0"} />
      <p>Then make the Lagrange multiplier equation</p>
      <MakeMathDisplay tex={"L(p, \\lambda_1, \\lambda_2) =  -k_B \\sum_{i=1}^{N} p_i \\ln(p_i) + \\lambda_1 \\Big(\\sum_{i=1}^{N} p_i - 1\\Big) + \\lambda_2 \\Big(\\sum_{i=1}^{N} p_i E_i - U\\Big)"} />
      <p>At the maximum the derivative with respect to any <MakeMath tex={"p_i"} /> should be zero.</p>
      <MakeMathDisplay tex={"\\dfrac{\\partial L(p, \\lambda_1, \\lambda_2)}{\\partial p_i} = - k_B \\Big(\\ln(p_i) - p_i \\frac{1}{p_i}\\Big) + \\lambda_1  + \\lambda_2 E_i"} />
      <p>Set the derivative to zero.</p>
      <MakeMathDisplay tex={"0 = - k_B \\Big(\\ln(p_i) - p_i \\frac{1}{p_i}\\Big) + \\lambda_1  + \\lambda_2 E_i"} />
      <p>Then Solve for <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\ln(p_i) = \\frac{-k_B + \\lambda_1  + \\lambda_2 E_i}{k_B}"} />
      <p>Exponentiate both sides</p>
      <MakeMathDisplay tex={"p_i = e^{\\frac{- k_B + \\lambda_1  + \\lambda_2 E_i}{k_B}}"} />
      <p>Then split the exponent.</p>
      <MakeMathDisplay tex={"p_i = e^{-1 + \\frac{\\lambda_1}{k_B}}e^{\\frac{\\lambda_2 E_i}{k_B}}"} />
      <hr/>
      <p>Now we have to solve for the 2 multipliers. Start with the first constraint:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i = 1"} />
      <p>And substitute <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} e^{- 1 + \\frac{\\lambda_1}{k_B}} e^{\\frac{\\lambda_2 E_i}{k_B}} = 1"} />
      <p>The first term is independent of <MakeMath tex={"i"} /> so it can be moved out of the sum.</p>
      <MakeMathDisplay tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}} \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 E_i}{k_B}} = 1"} />
      <p>Then divide both sides by the sum.</p>
      <MakeMathDisplay tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}}  = \\frac{1}{ \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 E_i}{k_B}}}"} />
      <p>Now <MakeMath tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}}"} /> can be substituted.</p>
      <MakeMathDisplay tex={"p_i = \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 E_i}{k_B}}}"} />
      <hr/>
      <p>Next solve to solve for <MakeMath tex={"\\lambda_2"} /> use the second constraint:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i E_i = U"} />
      <p>Substitute in the equation for <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} E_i = U"} />
      <hr/>
      <p>Look at the equation for the maximum entropy:</p>
      <MakeMathDisplay tex={"S_{\\text{max}} = S(P_{\\text{max}}) =  -k_B\\sum_{i=1}^{N} p_i \\ln(p_i) = -\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\ln \\Big(\\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}}} \\Big)"} />
      <p>Then simplify</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\ln \\Big(\\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}}} \\Big)"} />
      <p>Split the logarithm</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\Bigg(\\ln\\Big(e^{\\frac{\\lambda_2 E_i}{k_B}}\\Big) - \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big)\\Bigg)"} />
      <p>Cancel the logarithm and exponent</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\Bigg(\\frac{\\lambda_2 E_i}{k_B} - \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big)\\Bigg)"} />
      <p>Split the summation.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big) - k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\Big(\\frac{\\lambda_2 E_i}{k_B} \\Big)"} />
      <p>The second term in the first summation is independent so it can be moved out.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  k_B\\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big) \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}}  - k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\Big(\\frac{\\lambda_2 E_i}{k_B} \\Big)"} />
      <p>Then from the first constraint the entire first summation is just equal to 1.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  k_B\\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big) - k_B\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} \\Big(\\frac{\\lambda_2 E_i}{k_B} \\Big)"} />
      <p>Move the <MakeMath tex={"\\lambda_2"} /> out of the summation.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  k_B\\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 E_k}{k_B}} \\Big) - k_B\\frac{\\lambda_2}{k_B} \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 E_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 E_j}{k_B}}} E_i"} />
      <p>Then the summation is just equal to <MakeMath tex={"U"} /></p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  k_B\\ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 E_k} \\Big) - \\lambda_2 U"} />
      <p>Then <MakeMath tex={"\\lambda_2"} /> is equal to the derivative which is ends up being the definition of temperature.</p>
      <MakeMathDisplay tex={"\\lambda_2  = \\dfrac{\\partial S_{\\text{max}}}{\\partial U} = \\frac{1}{T}"} />
      <hr/>
      <p>Substituting, the full equation becomes</p>
      <MakeMathDisplay tex={"p_i = \\frac{e^{\\frac{1}{k_B T} E_i}}{ \\sum_{i=1}^{N} e^{\\frac{1}{k_B T} E_i}}"} />
      <h2>Derivation by the Limit of the Heat Bath's Heat Capacity In the Canonical Ensemble</h2>
      <p>In the Canonical ensemble the combined energy of the bath and system should be constant. The combination of the 2 makes a microcanonical ensemble. Let <MakeMath tex={"W_{\\text{total}}(E_{\\text{total}})"} /> be the number of accessable states when the total energy is equal to <MakeMath tex={"E_{\\text{total}}"}/>, and the same with <MakeMath tex={"W_{\\text{bath}}"} /> and <MakeMath tex={"W_{\\text{sys}}"} />. Let the set of microstates of the system can be in <MakeMath tex={"X_{\\text{sys}}"} />, the microstates the bath can be in <MakeMath tex={"X_{\\text{bath}}"} />, and the total microstates <MakeMath tex={"X_{\\text{total}} = X_{\\text{bath}} \\times X_{\\text{sys}}"} />. The total energy should be the sum of the two energies.</p>
      <MakeMathDisplay tex={"E_{\\text{total}} = E_{\\text{bath}} + E_{\\text{sys}}"} />
      <p>The total accessable states with an energy should be the total number combined number of states the bath and system can be in that sum to that energy.</p>
      <MakeMathDisplay tex={"W_{\\text{total}}(E_{\\text{total}}) = \\sum_{r \\in X} W_{\\text{bath}}(E_{\\text{total}} - E_{\\text{sys}}(r))"} />
      <p>And in the microcanonical ensemble all microstates <MakeMath tex={"(r_\\text{bath}, r_\\text{sys}) \\in X_{\\text{total}}"} /> with the correct have an equal probaility.</p>
      <MakeMathDisplay tex={"p(r_\\text{bath}, r_\\text{sys}) = \\frac{1}{W_{\\text{total}}(E_{\\text{total}})} \\mathbb{1}\\Big(E_\\text{total} = E_\\text{sys}(r_\\text{sys}) + E_\\text{bath}(r_\\text{bath})\\Big)"} />
      <p>We can calculate the probability of just the microstate for the system.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys}) = \\sum_{r_\\text{bath} \\in X_\\text{bath}}p(r_\\text{bath}, r_\\text{sys})"} />
      <MakeMathDisplay tex={"= \\sum_{r_\\text{bath} \\in X_\\text{bath}} \\frac{1}{W_{\\text{total}}(E_{\\text{total}})} \\mathbb{1}\\Big(E_\\text{total} = E_\\text{sys}(r_\\text{sys}) + E_\\text{bath}(r_\\text{bath})\\Big)"} />
      <MakeMathDisplay tex={"= \\frac{W_\\text{bath}(E_\\text{total} - E_\\text{sys}(r_\\text{sys}))}{W_{\\text{total}}(E_{\\text{total}})}"} />
      <p>Take the natural log of both sides</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= \\ln(\\frac{W_\\text{bath}(E_\\text{total} - E_\\text{sys}(r_\\text{sys}))}{W_{\\text{total}}(E_{\\text{total}})})"} />
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= \\ln(W_\\text{bath}(E_\\text{total} - E_\\text{sys}(r_\\text{sys}))) - \\ln(W_{\\text{total}}(E_{\\text{total}}))"} />
      <p>Then we expand the logarithm to its Taylor series.</p>
      <MakeMathDisplay tex={"f(x+c)= f(x) + \\frac{df(x)}{dx}c + \\frac{1}{2}\\frac{d^2f(x)}{dx^2}c^2 + \\frac{1}{6}\\frac{d^3f(x)}{dx^3}c^3 + \\cdots "} />
      <p>We set <MakeMath tex={"f(x) = \\ln(W_\\text{bath}(x))"} />, <MakeMath tex={"x = E_\\text{total}"} />, and <MakeMath tex={"c = -E_\\text{sys}"} /> we get the following expression.</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= - \\frac{d\\ln(W_\\text{bath}(E_\\text{total}))}{dE_\\text{total}}E_\\text{sys}(r_\\text{sys}) + \\frac{1}{2}\\frac{d^2\\ln(W_\\text{bath}(E_\\text{total}))}{dE_\\text{total}^2}E_\\text{sys}(r_\\text{sys})^2 + \\frac{1}{6}\\frac{d^3\\ln(W_\\text{bath}(E_\\text{total}))}{dE_\\text{total}^3}E_\\text{sys}(r_\\text{sys})^3 + \\cdots - \\ln(W_{\\text{total}}(E_{\\text{total}}))"} />
      <p>In the limit that <MakeMath tex={"E_\\text{total}"} /> approaches <MakeMath tex={"E_\\text{bath}"} /> the bath becomes a microcanonical ensemble and the entropy of the bath <MakeMath tex={"S_\\text{bath} (E_\\text{total}) = k_B\\ln(W_\\text{bath}(E_\\text{total}))"} /></p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= - \\frac{1}{k_B}\\frac{dS_\\text{bath}(E_\\text{total})}{dE_\\text{total}}E_\\text{sys}(r_\\text{sys}) + \\frac{1}{2k_B}\\frac{d^2S_\\text{bath}(E_\\text{total})}{dE_\\text{total}^2}E_\\text{sys}(r_\\text{sys})^2 + \\frac{1}{6k_B}\\frac{d^3S_\\text{bath}(E_\\text{total})}{dE_\\text{total}^3}E_\\text{sys}(r_\\text{sys})^3 + \\cdots - \\ln(W_{\\text{total}}(E_{\\text{total}}))"} />
      <p>And by definition <MakeMath tex={"\\frac{1}{T_\\text{bath}} = \\frac{dS_\\text{bath}(E)}{dE}"} />.</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= - \\frac{1}{k_B T_\\text{bath}}E_\\text{sys}(r_\\text{sys}) + \\frac{1}{2k_B T_\\text{bath}}\\frac{dT_\\text{bath}}{dE_\\text{total}^2}E_\\text{sys}(r_\\text{sys})^2 - \\frac{1}{6k_B T_\\text{bath}}\\frac{d^2T_\\text{bath}}{dE_\\text{total}^2}E_\\text{sys}(r_\\text{sys})^3 + \\cdots - \\ln(W_{\\text{total}}(E_{\\text{total}}))"} />
      <p>Then if we assume the heat capacity of the bath is infinite so that <MakeMath tex={"\\frac{dT_\\text{bath}}{dE_\\text{total}} = 0"} /> we can remove the extra terms.</p>
      <MakeMathDisplay tex={"\\ln(p(r_\\text{sys}))= - \\frac{1}{k_B T_\\text{bath}}E_\\text{sys}(r_\\text{sys}) - \\ln(W_{\\text{total}}(E_{\\text{total}}))"} />
      <p>Then exponentiate both sides.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys})= \\frac{e^{-\\frac{E_\\text{sys}(r_\\text{sys})}{k_B T_\\text{bath}}}}{W_{\\text{total}}(E_{\\text{total}})}"} />
      <p>And the denominator is just a normalizing factor.</p>
      <MakeMathDisplay tex={"\\frac{1}{W_{\\text{total}}(E_{\\text{total}})} = p(r_\\text{bath}\', r_\\text{sys}\')"} />
      <p>So the final expression is below.</p>
      <MakeMathDisplay tex={"p(r_\\text{sys})= \\frac{e^{-\\frac{E_\\text{sys}(r_\\text{sys})}{k_B T_\\text{bath}}}} {\\displaystyle \\sum_{ r\'_\\text{sys} \\in X_\\text{sys}} e^{-\\frac{E_\\text{sys}(r\'_\\text{sys})}{k_B T_\\text{bath}}} }"} />
    </Wrapper>
  );
}

export default DeltaGcode;
