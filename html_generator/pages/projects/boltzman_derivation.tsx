import React from "react";
import {MakeMath, MakeMathCenter} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  let new_heads = (
    <>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
      />
      <script type="module" src="./main.js"></script>
    </>
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <p>Assume there are <MakeMath tex={"N"} /> discrete states the system can be in: <MakeMath tex={"X \\in \\{ x_1 \\dots x_N \\}"} />. Let <MakeMath tex={"p_i = P(X = x_i)"} /> sampling the state over an indefinite time period, and <MakeMath tex={"\\epsilon_i"} /> be the energy in state <MakeMath tex={"x_i"} />. The system will have 2 contraints, the probabilities must add to 1, and the average energy should equal <MakeMath tex={"\\bar{E}"} />:</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i = 1"} />
      <p>and</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i \\epsilon_i = \\bar{E}"} />
      The second law of thermodynamics says that entropy will always increase. Over a long enough time period the entropy of the system, <MakeMath tex={"S"} /> should be maximized.
      <MakeMathCenter tex={"S(p) = \\displaystyle -\\sum_{i=1}^{N} p_i \\ln(p_i)"} />
      <p>We want to find the probability distribution <MakeMath tex={"p = {p_1 \\dots p_n}"} /> that maximizes <MakeMath tex={"X"} />, while following the 2 constraints.</p>
      <MakeMathCenter tex={"p_{max} = \\text{argmax}_P S(p)"} />
      <p>Solve this system of equations with a Lagrange multiplier. First rewrite the 2 constraints like:</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i - 1 = 0"} />
      <p>and</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i \\epsilon_i - \\bar{E} = 0"} />
      <p>Then make the Lagrange equation</p>
      <MakeMathCenter tex={"L(p, \\lambda_1, \\lambda_2) = \\displaystyle -\\sum_{i=1}^{N} p_i \\ln(p_i) + \\lambda_1 \\Big(\\sum_{i=1}^{N} p_i - 1\\Big) + \\lambda_2 \\Big(\\sum_{i=1}^{N} p_i \\epsilon_i - \\bar{E}\\Big)"} />
      <p>At the maximum the derivative with respect to any <MakeMath tex={"p_i"} /> should be zero.</p>
      <MakeMathCenter tex={"\\dfrac{\\partial L(p, \\lambda_1, \\lambda_2)}{\\partial p_i} = - \\ln(p_i) - p_i \\frac{1}{p_i} + \\lambda_1  + \\lambda_2 p_i \\epsilon_i"} />
      <p>Set the derivative to zero.</p>
      <MakeMathCenter tex={"0 = - \\ln(p_i) - p_i \\frac{1}{p_i} + \\lambda_1  + \\lambda_2 \\epsilon_i"} />
      <p>Then Solve for <MakeMath tex={"p_i"} />.</p>
      <MakeMathCenter tex={"\\ln(p_i) = - 1 + \\lambda_1  + \\lambda_2 \\epsilon_i"} />
      <p>Exponentiate both sides</p>
      <MakeMathCenter tex={"p_i = e^{- 1 + \\lambda_1  + \\lambda_2 \\epsilon_i}"} />
      <p>Then split the exponent.</p>
      <MakeMathCenter tex={"p_i = e^{- 1 + \\lambda_1}e^{\\lambda_2 \\epsilon_i}"} />
      <hr/>
      <p>Now we have to solve for the 2 multipliers. Start with the first constraint:</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i = 1"} />
      <p>And substitute <MakeMath tex={"p_i"} />.</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} e^{- 1 + \\lambda_1} e^{\\lambda_2 \\epsilon_i} = 1"} />
      <p>The first term is independent of <MakeMath tex={"p_i"} /> so it can be moved out of the sum.</p>
      <MakeMathCenter tex={"e^{- 1 + \\lambda_1} \\displaystyle\\sum_{i=1}^{N} e^{\\lambda_2 \\epsilon_i} = 1"} />
      <p>Then divide both sides by the sum.</p>
      <MakeMathCenter tex={"e^{- 1 + \\lambda_1}  = \\frac{1}{\\displaystyle \\sum_{i=1}^{N} e^{\\lambda_2 \\epsilon_i}}"} />
      <p>Now <MakeMath tex={"e^{- 1 + \\lambda_1}"} /> can be substituted.</p>
      <MakeMathCenter tex={"p_i = \\frac{e^{\\lambda_2 \\epsilon_i}}{\\displaystyle \\sum_{i=1}^{N} e^{\\lambda_2 \\epsilon_i}}"} />
      <hr/>
      <p>Next solve to solve for <MakeMath tex={"\\lambda_2"} /> use the second constraint:</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} p_i \\epsilon_i = \\bar{E}"} />
      <p>Substitute in the equation for <MakeMath tex={"p_i"} />.</p>
      <MakeMathCenter tex={"\\displaystyle\\sum_{i=1}^{N} \\frac{e^{\\lambda_2 \\epsilon_i}}{\\displaystyle \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\epsilon_i = \\bar{E}"} />
      <hr/>
      <p>Look at the equation for the maximum entropy:</p>
      <MakeMathCenter tex={"S_{max} = S(P_{max}) = \\displaystyle -\\sum_{i=1}^{N} p_i \\ln(p_i) = -\\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\ln \\Big(\\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k}} \\Big)"} />
      <p>Then simplify</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle -\\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\ln \\Big(\\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k}} \\Big)"} />
      <p>Split the logarithm</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle -\\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\Bigg(\\ln\\Big(e^{\\lambda_2 \\epsilon_i}\\Big) - ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big)\\Bigg)"} />
      <p>Cancel the logarithm and exponent</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle -\\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\Bigg(\\lambda_2 \\epsilon_i - ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big)\\Bigg)"} />
      <p>Split the summation.</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) - \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\Big(\\lambda_2 \\epsilon_i \\Big)"} />
      <p>The second term in the first summation is independent so it can be moved out.</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}}  - \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\Big(\\lambda_2 \\epsilon_i \\Big)"} />
      <p>Then from the first constraint the entire first summation is just equal to 1.</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) - \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\Big(\\lambda_2 \\epsilon_i \\Big)"} />
      <p>Move the <MakeMath tex={"\\lambda_2"} /> out of the summation.</p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) - \\lambda_2 \\sum_{i=1}^N \\frac{e^{\\lambda_2 \\epsilon_i}}{ \\sum_{j=1}^{N} e^{\\lambda_2 \\epsilon_j}} \\epsilon_i"} />
      <p>Then the summation is just equal to <MakeMath tex={"\\bar{E}"} /></p>
      <MakeMathCenter tex={"S_{max} = \\displaystyle ln\\Big( \\sum_{k=1}^{N} e^{\\lambda_2 \\epsilon_k} \\Big) - \\lambda_2 \\bar{E}"} />
      <p>Then <MakeMath tex={"\\lambda_2"} /> is equal to the derivative which is ends up being the definition of temperature.</p>
      <MakeMathCenter tex={"\\lambda_2  = \\dfrac{\\partial S_{max}}{\\partial \\bar{E}} = \\frac{1}{k_b T}"} />
      <hr/>
      <p>Substituting, the full equation becomes</p>
      <MakeMathCenter tex={"p_i = \\frac{e^{\\frac{1}{k_b T} \\epsilon_i}}{\\displaystyle \\sum_{i=1}^{N} e^{\\frac{1}{k_b T} \\epsilon_i}}"} />
    </Wrapper>
  );
}

export default DeltaGcode;
