import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>Assume there are <MakeMath tex={"N"} /> discrete states the system can be in: <MakeMath tex={"X \\in \\{ x_1 \\dots x_N \\}"} />. Let <MakeMath tex={"p_i = P(X = x_i)"} /> sampling the state over an indefinite time period, and <MakeMath tex={"\\epsilon_i"} /> be the energy in state <MakeMath tex={"x_i"} />. The system will have 2 contraints, the probabilities must add to 1, and the average energy should equal <MakeMath tex={"\\bar{E}"} />:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i = 1"} />
      <p>and</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i \\epsilon_i = \\bar{E}"} />
      <p>We will assume that <MakeMath tex={"S"} /> should be maximized.</p>
      <MakeMathDisplay tex={"S(p) = - k_B \\sum_{i=1}^{N} p_i \\ln(p_i)"} />
      <p>We want to find the probability distribution <MakeMath tex={"p = {p_1 \\dots p_n}"} /> that maximizes <MakeMath tex={"S"} />, while following the 2 constraints.</p>
      <MakeMathDisplay tex={"p_{\\text{max}} = \\text{argmax}_P S(p)"} />
      <p>We can solve this system of equations with a Lagrange multiplier. First rewrite the 2 constraints like:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i - 1 = 0"} />
      <p>and</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i \\epsilon_i - \\bar{E} = 0"} />
      <p>Then make the Lagrange multiplier equation</p>
      <MakeMathDisplay tex={"L(p, \\lambda_1, \\lambda_2) =  -k_B \\sum_{i=1}^{N} p_i \\ln(p_i) + \\lambda_1 \\Big(\\sum_{i=1}^{N} p_i - 1\\Big) + \\lambda_2 \\Big(\\sum_{i=1}^{N} p_i \\epsilon_i - \\bar{E}\\Big)"} />
      <p>At the maximum the derivative with respect to any <MakeMath tex={"p_i"} /> should be zero.</p>
      <MakeMathDisplay tex={"\\dfrac{\\partial L(p, \\lambda_1, \\lambda_2)}{\\partial p_i} = - k_B \\Big(\\ln(p_i) - p_i \\frac{1}{p_i}\\Big) + \\lambda_1  + \\lambda_2 \\epsilon_i"} />
      <p>Set the derivative to zero.</p>
      <MakeMathDisplay tex={"0 = - k_B \\Big(\\ln(p_i) - p_i \\frac{1}{p_i}\\Big) + \\lambda_1  + \\lambda_2 \\epsilon_i"} />
      <p>Then Solve for <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\ln(p_i) = \\frac{-k_B + \\lambda_1  + \\lambda_2 \\epsilon_i}{k_B}"} />
      <p>Exponentiate both sides</p>
      <MakeMathDisplay tex={"p_i = e^{\\frac{- k_B + \\lambda_1  + \\lambda_2 \\epsilon_i}{k_B}}"} />
      <p>Then split the exponent.</p>
      <MakeMathDisplay tex={"p_i = e^{-1 + \\frac{\\lambda_1}{k_B}}e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}"} />
      <hr/>
      <p>Now we have to solve for the 2 multipliers. Start with the first constraint:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i = 1"} />
      <p>And substitute <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} e^{- 1 + \\frac{\\lambda_1}{k_B}} e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}} = 1"} />
      <p>The first term is independent of <MakeMath tex={"i"} /> so it can be moved out of the sum.</p>
      <MakeMathDisplay tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}} \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}} = 1"} />
      <p>Then divide both sides by the sum.</p>
      <MakeMathDisplay tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}}  = \\frac{1}{ \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}"} />
      <p>Now <MakeMath tex={"e^{- 1 + \\frac{\\lambda_1}{k_B}}"} /> can be substituted.</p>
      <MakeMathDisplay tex={"p_i = \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{i=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}"} />
      <hr/>
      <p>Next solve to solve for <MakeMath tex={"\\lambda_2"} /> use the second constraint:</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} p_i \\epsilon_i = \\bar{E}"} />
      <p>Substitute in the equation for <MakeMath tex={"p_i"} />.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^{N} \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\epsilon_i = \\bar{E}"} />
      <hr/>
      <p>Look at the equation for the maximum entropy:</p>
      <MakeMathDisplay tex={"S_{\\text{max}} = S(P_{\\text{max}}) =  -\\sum_{i=1}^{N} p_i \\ln(p_i) = -\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\ln \\Big(\\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}}} \\Big)"} />
      <p>Then simplify</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\ln \\Big(\\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}}} \\Big)"} />
      <p>Split the logarithm</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\Bigg(\\ln\\Big(e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}\\Big) - \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big)\\Bigg)"} />
      <p>Cancel the logarithm and exponent</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  -\\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\Bigg(\\frac{\\lambda_2 \\epsilon_i}{k_B} - \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big)\\Bigg)"} />
      <p>Split the summation.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big) - \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\Big(\\frac{\\lambda_2 \\epsilon_i}{k_B} \\Big)"} />
      <p>The second term in the first summation is independent so it can be moved out.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big) \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}}  - \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\Big(\\frac{\\lambda_2 \\epsilon_i}{k_B} \\Big)"} />
      <p>Then from the first constraint the entire first summation is just equal to 1.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big) - \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\Big(\\frac{\\lambda_2 \\epsilon_i}{k_B} \\Big)"} />
      <p>Move the <MakeMath tex={"\\lambda_2"} /> out of the summation.</p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  \\ln\\Big( \\sum_{k=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_k}{k_B}} \\Big) - \\frac{\\lambda_2}{k_B} \\sum_{i=1}^N \\frac{e^{\\frac{\\lambda_2 \\epsilon_i}{k_B}}}{ \\sum_{j=1}^{N} e^{\\frac{\\lambda_2 \\epsilon_j}{k_B}}} \\epsilon_i"} />
      <p>Then the summation is just equal to <MakeMath tex={"\\bar{E}"} /></p>
      <MakeMathDisplay tex={"S_{\\text{max}} =  \\ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) - \\frac{\\lambda_2}{k_B} \\bar{E}"} />
      <p>Then <MakeMath tex={"\\lambda_2"} /> is equal to the derivative which is ends up being the definition of temperature.</p>
      <MakeMathDisplay tex={"\\frac{\\lambda_2}{k_B}  = \\dfrac{\\partial S_{\\text{max}}}{\\partial \\bar{E}} = \\frac{1}{T}"} />
      <hr/>
      <p>Substituting, the full equation becomes</p>
      <MakeMathDisplay tex={"p_i = \\frac{e^{\\frac{1}{k_B T} \\epsilon_i}}{ \\sum_{i=1}^{N} e^{\\frac{1}{k_B T} \\epsilon_i}}"} />
    </Wrapper>
  );
}

export default DeltaGcode;
