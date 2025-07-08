import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function FokkerPlank({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>For a drift diffusion process</p>
      <MakeMathDisplay tex={"d\\vec{z} = \\vec{A}(t, \\vec{z})dt + \\mathbf{B}(t, \\vec{z})d\\vec{W}_t"} />
      <p>is in differential form. The in integral form</p>
      <MakeMathDisplay tex={"\\vec{z}(t_b) - \\vec{z}(t_a) = \\int_{t_a}^{t_b} \\vec{A}(t, \\vec{z}(t))dt + \\int_{t_a}^{t_b}\\mathbf{B}(t, \\vec{z}(t))d\\vec{W}_t"} />
      <p>is defined by a regular Reinmann integral and an Ito integral. Expanding their definitions is</p>
      <MakeMathDisplay tex={" = \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0}\\sum_{(t_i, t_{i+1}) \\in \\pi(t_a, t_b)} \\vec{A}(t_i, \\vec{z}(t_i)) \\Big(t_{i+1} - t_i\\Big) \\bigg)"} />
      <MakeMathDisplay tex={"+ \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0}\\sum_{(t_i, t_{i+1}) \\in \\pi(t_a, t_b)} \\mathbf{B}(t_i, \\vec{z}(t_i))\\Big(\\vec{W}(t_{i+1}) - \\vec{W}(t_i)\\Big)\\bigg)"} />
      <p>Let <MakeMath tex={"\\Delta_i t = t_{i+1} - t_i"} /> and <MakeMath tex={"\\Delta_i W = W(t_{i+1}) - W(t_i)"} />.</p>
      <MakeMathDisplay tex={" = \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_{\\Delta_i t \\in \\pi(t_a, t_b)} \\vec{A}(t_i, \\vec{z}(t_i)) \\Delta_i t + \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0}\\sum_{\\Delta_i t \\in \\pi(t_a, t_b)} \\mathbf{B}(t_i, \\vec{z}(t_i))\\Delta_i W"} />
      <p>Now consider an infinitelly differentiable, square integrable function <MakeMath tex={"f(t, \\vec{z}(t))"} /> that is a function of the vector.</p>
      <MakeMathDisplay tex={"f(t + k, \\vec{z}(t + k)) - f(t, \\vec{z}(t))"} />
      <p>We can put in a dummy value equal to zero</p>
      <MakeMathDisplay tex={"= f(t + k, \\vec{z}(t + k)) + \\sum_{j=1}^N \\Big(-f(t_j, \\vec{z}(t_j)) + f(t_j, \\vec{z}(t_j))  \\Big) - f(t_a, \\vec{z}(t_a))"} />
      <p>And move the 2 endpoints into the summation</p>
      <MakeMathDisplay tex={"= \\sum_{i=0}^{N} \\Big(f(t_{i+1}, \\vec{z}(t_{i+1})) - f(t_i, \\vec{z}(t_i))\\Big)"} />
      <p>where the endpoints are <MakeMath tex={"t_0 = t"} /> and <MakeMath tex={"t_{N+1} = t+k"} />, and all the other indices else is copied <MakeMath tex={"t_i = t_j"} />. Then make</p>
      <MakeMathDisplay tex={"t_i = t + i\\frac{k}{N+1}"} />
      <p>And let</p>
      <MakeMathDisplay tex={"\\Delta t = \\frac{k}{N+1}"} />
      <MakeMathDisplay tex={"= \\sum_{i=0}^{N} \\Big(f(t + (i+1)\\Delta t, \\vec{z}(t + (i + 1)\\Delta t)) - f(t + i\\Delta t, \\vec{z}(t + i\\Delta t))\\Big)"} />
      <p>And taking the limit</p>
      <MakeMathDisplay tex={"= \\lim_{N \\rightarrow \\infty} \\sum_{i=0}^{N} \\Big(f(t + (i+1)\\Delta t, \\vec{z}(t + (i+1)\\Delta t)) - f(t + i\\Delta t, \\vec{z}(t + i\\Delta t))\\Big)"} />
      <p>Is the same as</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Big(f(t + (i+1)\\Delta t, \\vec{z}(t + (i+1)\\Delta t)) - f(t + i\\Delta t, \\vec{z}(t + i\\Delta t))\\Big)"} />
      <p>Since <MakeMath tex={"\\Delta t"} /> will become arbitrarily small it will always be in the radius of convergence for a Taylor series. So we can expand the difference to a Taylor series.</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\frac{\\partial f}{\\partial \\vec{z}}\\cdot \\Big( \\vec{z}(t_{i+1}) - \\vec{z}(t_i) \\Big) + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial^2 t} \\Delta t^2 + \\dots\\Bigg)"} />
      <p>Let</p>
      <MakeMathDisplay tex={"\\Delta_i \\vec{z} = \\vec{z}(t_{i+1}) - \\vec{z}(t_i)"} />
      <p>So</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\frac{\\partial f}{\\partial \\vec{z}}\\cdot \\Delta_i \\vec{z} + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial^2 t} \\Delta t^2 + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial^2 \\vec{z} } \\Delta_i \\vec{z} \\cdot \\Delta_i \\vec{z} + \\frac{\\partial ^2 f}{\\partial t \\partial \\vec{z}} \\Delta t \\Delta_i \\vec{z} + \\dots \\Bigg)"} />
      <p>Here <MakeMath tex={"\\frac{\\partial f}{\\partial \\vec{z}}"} /> is the gradient and <MakeMath tex={"\\frac{\\partial^2 f}{\\partial^2 \\vec{z}}"} /> is the Hessian and so on. If we expand the gradients and Hessians to a sum</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\sum_k^U \\frac{\\partial f}{\\partial \\vec{z}_k} \\Delta_i \\vec{z}_k + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial^2 t} \\Delta t^2 + \\frac{1}{2}\\sum_k^U\\sum_l^U\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l + \\sum_k^U\\frac{\\partial ^2 f}{\\partial t \\partial \\vec{z}_k} \\Delta t \\Delta_i \\vec{z}_k + \\dots \\Bigg)"} />
      <p>one can see that</p>
      <MakeMathDisplay tex={"\\Delta_i \\vec{z}_k = \\int_{t_i}^{t_{i+1}} \\vec{A}(t, \\vec{z}(t))_k dt + \\int_{t_i}^{t_{i+1}}\\mathbf{B}(t, \\vec{z}(t))_kd\\vec{W}_t"} />
      <p>and so</p>
      <MakeMathDisplay tex={"\\Delta_i \\vec{z}_k\\Delta_i \\vec{z}_l = \\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big)\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_l(t, \\vec{z}(t))dt\\Big)"} />
      <MakeMathDisplay tex={"+ \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_k(t, \\vec{z}(t))d\\vec{W}_t\\Big)\\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <MakeMathDisplay tex={"+ \\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big) \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <MakeMathDisplay tex={"+ \\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_l(t, \\vec{z}(t))dt\\Big) \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_k(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <h2>Get rid of the first term</h2>
      <p>For the first part let</p>
      <MakeMathDisplay tex={"M_k = \\text{sup}_{t \\in [t_i, t_{i+1}]} \\vec{A}_k(t, z(t))"} />
      <MakeMathDisplay tex={"M_l = \\text{sup}_{t \\in [t_i, t_{i+1}]} \\vec{A}_l(t, z(t))"} />
      <p>Then</p>
      <MakeMathDisplay tex={"\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt \\le M_k \\Delta_i t"} />
      <p>So</p>
      <MakeMathDisplay tex={"\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big)\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_l(t, \\vec{z}(t))dt\\Big) \\le M_k M_l \\Delta_i t^2"} />
      <p>And inside the summation is</p>
      <MakeMathDisplay tex={"\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\frac{\\partial f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big)\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_l(t, \\vec{z}(t))dt\\Big) = \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\frac{\\partial f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\frac{}{}M_k M_l \\Delta_i t^2 \\le \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\Delta_i t_{\\text{max}}\\sum_i \\frac{\\partial f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\frac{}{}M_k M_l \\Delta_i t = 0"} />
      <p>and doing the same thing with a lower bound we know the first part goes to zero</p>
      <h2>The second term</h2>
      <p>Looking at the second term</p>
      <MakeMathDisplay tex={"\\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_k(t, \\vec{z}(t))d\\vec{W}_t\\Big)\\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <p>We can expand the dot product to </p>
      <MakeMathDisplay tex={"= \\Big(\\sum_s^U \\int_{t_i}^{t_{i+1}}\\mathbf{B}_{k, s}(t, \\vec{z}(t))d\\vec{W}_{t, s}\\Big)\\Big(\\sum_q^U \\int_{t_i}^{t_{i+1}}\\mathbf{B}_{l, q}(t, \\vec{z}(t))d\\vec{W}_{t, q}\\Big)"} />
      <MakeMathDisplay tex={"= \\sum_s^U \\sum_q^U \\Big( \\int_{t_i}^{t_{i+1}}\\mathbf{B}_{k, s}(t, \\vec{z}(t))d\\vec{W}_{t, s}\\Big)\\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_{l, q}(t, \\vec{z}(t))d\\vec{W}_{t, q}\\Big)"} />
      <p>If we take the expected value then</p>
      <MakeMathDisplay tex={"= \\sum_s^U \\sum_q^U \\mathbb{E}\\bigg[\\Big( \\int_{t_i}^{t_{i+1}}\\mathbf{B}_{k, s}(t, \\vec{z}(t))d\\vec{W}_{t, s}\\Big)\\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_{l, q}(t, \\vec{z}(t))d\\vec{W}_{t, q}\\Big)\\bigg]"} />
      <p>Swap in the definition of Ito integrals</p>
      <MakeMathDisplay tex={"= \\sum_s^U \\sum_q^U \\mathbb{E}\\bigg[\\Big( \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0}\\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\mathbf{B}_{k, s}(t, \\vec{z}(t))\\Delta_a\\vec{W}_{t, s}\\Big)\\Big(\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0}\\sum_{\\Delta_b t \\in \\pi(t_i, t_{i+1})} \\mathbf{B}_{l, q}(t, \\vec{z}(t))\\Delta_b\\vec{W}_{t, q}\\Big)\\bigg]"} />
      <p>Factor out the limit and swap it with the expected value (I think this works but not sure)</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\mathbb{E}\\bigg[ \\sum_s^U \\sum_q^U \\Big( \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\mathbf{B}_{k, s}(t, \\vec{z}(t))\\Delta_a\\vec{W}_{t, s}\\Big)\\Big(\\sum_{\\Delta_b t \\in \\pi(t_i, t_{i+1})} \\mathbf{B}_{l, q}(t, \\vec{z}(t))\\Delta_b\\vec{W}_{t, q}\\Big)\\bigg]"} />
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\mathbb{E}\\bigg[ \\sum_s^U \\sum_q^U \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\sum_{\\Delta_b t \\in \\pi(t_i, t_{i+1})} \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t))\\Delta_a\\vec{W}_{t, s}\\Big)\\Big( \\mathbf{B}_{l, q}(t, \\vec{z}(t))\\Delta_b\\vec{W}_{t, q}\\Big)\\bigg]"} />
      <p>then rearange</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_s^U \\sum_q^U \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\sum_{\\Delta_b t \\in \\pi(t_i, t_{i+1})} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, q}(t, \\vec{z}(t))\\Big)\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_b\\vec{W}_{t, q}\\Big)\\bigg]"} />
      <p>The <MakeMath tex={"\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_b\\vec{W}_{t, q}\\Big)"} /> are are independent, so their covariance is always zero if <MakeMath tex={"s \\neq q"} />. So in the sume we only keep the diagonals</p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_s^U \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\sum_{\\Delta_b t \\in \\pi(t_i, t_{i+1})} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big)\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_b\\vec{W}_{t, s}\\Big)\\bigg]"} />
      <p>And the increments in <MakeMath tex={"\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_b\\vec{W}_{t, s}\\Big)"} /> are also independent by definition of a Weiner process, so the expected value goes to zero for different increments <MakeMath tex={"a \\neq b"} /> </p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_s^U \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big)\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_a\\vec{W}_{t, s}\\Big)\\bigg]"} />
      <p>And the variance of a Weiner processes increment is by definition the increment of time, so <MakeMath tex={"\\Big(\\Delta_a\\vec{W}_{t, s} \\Delta_a\\vec{W}_{t, s}\\Big) = \\Delta_a t"} /></p>
      <MakeMathDisplay tex={"= \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_s^U \\sum_{\\Delta_a t \\in \\pi(t_i, t_{i+1})} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big)\\bigg] \\Delta_a t"} />
      <p>And now its just the definition of a Reinmann integral</p>
      <MakeMathDisplay tex={"=  \\sum_s^U \\int_{t_i}^{t_{i+1}} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big)\\bigg] dt"} />
      <h2>Third and Fourth terms</h2>
      <p>So with</p>
      <MakeMathDisplay tex={"\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big) \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <p>inside the summation it looks like </p>
      <MakeMathDisplay tex={"\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big) \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)"} />
      <p>If we use Cauchy Schwarz inequality where <MakeMath tex={"\\sum_i |A_i B_i| \\le \\sqrt{\\sum_i A_i^2} \\sqrt{\\sum_i B_i^2}"} /> then</p>
      <MakeMathDisplay tex={"\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\bigg| \\sum_i\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big) \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)\\bigg| \\le \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i\\Big(\\int_{t_i}^{t_{i+1}} \\vec{A}_k(t, \\vec{z}(t))dt\\Big)^2 \\Big(\\int_{t_i}^{t_{i+1}}\\mathbf{B}_l(t, \\vec{z}(t))d\\vec{W}_t\\Big)^2"} />
      <p>And we've seen that the first term goes to zero, and the second term is finite so</p>
      <MakeMathDisplay tex={"= 0"} />
      <p>and we don't have to worry about it at all</p>
      <h2>Taylor series substituted</h2>
      <p>So substituting what we have, where only 1 of the terms isn't zero gives</p>
      <MakeMathDisplay tex={"\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\mathbb{E}\\Big[\\Delta_i \\vec{z}_k\\Delta_i \\vec{z}_l\\Big] = \\sum_s^U \\int_{t_i}^{t_{i+1}} \\mathbb{E}\\bigg[ \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big)\\bigg] dt"} />
      <p>Looking back at the Taylor series if we take the expected value</p>
      <MakeMathDisplay tex={"\\mathbb{E}[f(t + k, \\vec{z}(t + k)) - f(t, \\vec{z}(t)) ] = \\mathbb{E}\\Bigg[\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\sum_k^U \\frac{\\partial f}{\\partial \\vec{z}_k} \\Delta_i \\vec{z}_k + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial^2 t} \\Delta t^2 + \\frac{1}{2}\\sum_k^U\\sum_l^U\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l + \\sum_k^U\\frac{\\partial ^2 f}{\\partial t \\partial \\vec{z}_k} \\Delta t \\Delta_i \\vec{z}_k + \\dots \\Bigg) \\Bigg]"} />
      <p>and the higher order terms other than these ones go to zero, pretty easy to prove similar to others but will skip it for now</p>
      <MakeMathDisplay tex={" = \\mathbb{E}\\Bigg[\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\sum_k^U \\frac{\\partial f}{\\partial \\vec{z}_k} \\Delta_i \\vec{z}_k + \\frac{1}{2}\\sum_k^U\\sum_l^U\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\Bigg) \\Bigg]"} />
      <MakeMathDisplay tex={" = \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{\\partial f}{\\partial t}\\Delta t + \\sum_k^U \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\Delta_i \\vec{z}_k \\bigg] + \\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\bigg] \\Bigg)"} />
      <p>The first part is just a Reinmann integral</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\sum_k^U \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\Delta_i \\vec{z}_k \\bigg] + \\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\bigg] \\Bigg)"} />
      <p>Substitute</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt\\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\sum_k^U \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\bigg( \\int_{t_i}^{t_{i+1}} \\vec{A}(t, \\vec{z}(t))_k dt + \\int_{t_i}^{t_{i+1}}\\mathbf{B}(t, \\vec{z}(t))_kd\\vec{W}_t \\bigg) \\bigg] + \\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\bigg] \\Bigg)"} />
      <p>and adding the integrals just concatenates them so</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U  \\bigg( \\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\int_{t_i}^{t_{i+1}}\\mathbb{E}\\bigg[\\mathbf{B}(t, \\vec{z}(t))_kd\\vec{W}_t \\bigg] \\bigg) + \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\bigg] \\Bigg)"} />
      <p>The expected value of just the drift term is zero so</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U\\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\Delta_i \\vec{z}_k \\Delta_i \\vec{z}_l \\bigg] \\Bigg)"} />
      <p>Then if we substitute again</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U\\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\lim_{\\Delta t_{\\text{max}} \\rightarrow 0} \\sum_i \\Bigg(\\frac{1}{2}\\sum_k^U\\sum_l^U \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\bigg( \\sum_s^U \\int_{t_i}^{t_{i+1}} \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big) dt \\bigg) \\bigg] \\Bigg)"} />
      <p>and the integrals just concatenate again so the limit doesn't matter</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U\\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\frac{1}{2}\\sum_k^U\\sum_l^U \\int_{t}^{t + k} \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\bigg( \\sum_s^U  \\Big(\\mathbf{B}_{k, s}(t, \\vec{z}(t)) \\mathbf{B}_{l, s}(t, \\vec{z}(t))\\Big) \\bigg) \\bigg] dt"} />
      <p>Then let</p>
      <MakeMathDisplay tex={"\\mathbf{D} = \\mathbf{B}^T\\mathbf{B}"} />
      <p>so then</p>
      <MakeMathDisplay tex={" = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U\\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\frac{1}{2}\\sum_k^U\\sum_l^U \\int_{t}^{t + k} \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\mathbf{D}_{k, l}(t, \\vec{z}(t)) \\bigg] dt"} />
      <p>So we get the formula expression</p>
      <MakeMathDisplay tex={"\\mathbb{E}[f(t + k, \\vec{z}(t + k)) - f(t, \\vec{z}(t)) ] = \\int_{t}^{t + k} \\frac{\\partial f}{\\partial t} dt + \\sum_k^U\\int_{t}^{t + k} \\mathbb{E}\\bigg[ \\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k \\bigg] dt + \\frac{1}{2}\\sum_k^U\\sum_l^U \\int_{t}^{t + k} \\mathbb{E} \\bigg[\\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\mathbf{D}_{k, l}(t, \\vec{z}(t)) \\bigg] dt"} />
      <p>And since its deterministic you can do</p>
      <MakeMathDisplay tex={"\\frac{d}{d t}\\mathbb{E}[f(t, \\vec{z}(t))] = \\mathbb{E}\\bigg[\\frac{\\partial f}{\\partial t} + \\sum_k^U\\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k + \\frac{1}{2}\\sum_k^U\\sum_l^U \\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\mathbf{D}_{k, l}(t, \\vec{z}(t)) \\bigg]"} />
      <h2>final part</h2>
      <p>We also know that</p>
      <MakeMathDisplay tex={"\\mathbb{E}[f(\\vec{z}(t))] = \\int_V f(\\vec{z}) p(t, \\vec{z})d\\vec{z}"} />
      <p>so taking the derivative of both sides</p>
      <MakeMathDisplay tex={"\\frac{d}{dt}\\mathbb{E}[f(\\vec{z}(t))] = \\int_V f(\\vec{z}) \\frac{d p(t, \\vec{z})}{dt}d\\vec{z}"} />
      <p>and substituting</p>
      <MakeMathDisplay tex={"\\int_V \\Bigg(\\sum_k^U\\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k + \\frac{1}{2}\\sum_k^U\\sum_l^U \\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\mathbf{D}_{k, l}(t, \\vec{z}(t)) \\Bigg) p(t, \\vec{z}) d\\vec{z} = \\int_V f(\\vec{z}) \\frac{d p(t, \\vec{z})}{dt}d\\vec{z}"} />
      <h3>Divergence theorem</h3>
      <p>Split the integral up</p>
      <MakeMathDisplay tex={"= \\int_V \\sum_k^U\\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k p(t, \\vec{z}) d\\vec{z} + \\int_V \\frac{1}{2}\\sum_k^U\\sum_l^U \\frac{\\partial^2 f}{\\partial \\vec{z}_k \\partial \\vec{z}_l} \\mathbf{D}_{k, l}(t, \\vec{z}(t)) p(t, \\vec{z}) d\\vec{z} "} />
      <h4>first part</h4>
      <p>focusing on the first part</p>
      <MakeMathDisplay tex={"= \\int_V \\sum_k^U\\frac{\\partial f}{\\partial \\vec{z}_k} \\vec{A}(t, \\vec{z}(t))_k p(t, \\vec{z}) d\\vec{z}"} />
      <p>We can write it like this</p>
      <MakeMathDisplay tex={"= \\int_V \\sum_k^U \\bigg(\\Big( \\nabla_{z} f\\Big) \\cdot \\Big(\\vec{A}p\\Big)\\bigg) d\\vec{z}"} />
      <div className="mathSubDiv">

	<p>and remember that a scalar and a vector</p>
	<MakeMathDisplay tex={"\\nabla \\cdot \\Big( a \\vec{b} \\Big) = \\Big( \\nabla a \\cdot \\vec{b} \\Big) + \\Big( a \\nabla \\vec{b}\\Big)"} />
	<p>And with the divercence theorem</p>
	<MakeMathDisplay tex={"\\int_V \\nabla_z \\cdot \\vec{c}(\\vec{z}) d\\vec{z} = \\oint_{\\Omega(V)} \\Big(\\vec{c}(\\vec{z}) \\cdot \\vec{n}\\Big) d\\vec{z}"} />
	<p>And if its two of then dotted then</p>
	<MakeMathDisplay tex={"\\int_V \\Big(\\nabla_z a \\cdot \\vec{b}\\Big) d\\vec{z} + \\int_V \\Big( a \\nabla_z \\cdot \\vec{b} \\Big) d\\vec{z} = \\oint_{\\Omega(V)} \\Big((a\\vec{b}) \\cdot \\vec{n}\\Big) d\\vec{z}"} />
      </div>
      <p>so</p>
      <MakeMathDisplay tex={"= \\oint_{\\Omega(V)} \\Big((p\\vec{A}f) \\cdot \\vec{n}\\Big) d\\vec{z} - \\int_V f \\nabla_z \\cdot \\Big( p \\vec{A}\\Big)d\\vec{z} "} />
      <p>And if we assume the probability goes to zero at the edge (or in the limit to infinity) then the boundary condition dissapears</p>
      <MakeMathDisplay tex={"= -\\int_V f \\nabla_z \\cdot \\Big( p \\vec{A}\\Big)d\\vec{z} "} />
      <h4>second part</h4>
      <p>TODO, just the same thing but twice</p>
      
      <h3>result</h3>
      <p>So we have</p>
      <MakeMathDisplay tex={"\\int_V \\frac{\\partial p}{\\partial t} f d\\vec{z} = \\int_V \\Bigg(-\\sum_k^U\\frac{\\partial}{\\partial \\vec{z}_k} \\bigg(p \\vec{A}(t, \\vec{z}(t))_k\\bigg) + \\frac{1}{2}\\sum_k^U\\sum_l^U \\frac{\\partial^2}{\\partial \\vec{z}_k \\partial \\vec{z}_l}\\bigg(p \\mathbf{D}_{k, l}(t, \\vec{z}(t))\\bigg) \\Bigg) f(t, \\vec{z}) d\\vec{z}"} />
      <p>and since it works for arbitrary function f it must be that</p>
      <MakeMathDisplay tex={"\\frac{\\partial p}{\\partial t} = -\\sum_k^U\\frac{\\partial}{\\partial \\vec{z}_k} \\bigg(p \\vec{A}(t, \\vec{z}(t))_k\\bigg) + \\frac{1}{2}\\sum_k^U\\sum_l^U \\frac{\\partial^2}{\\partial \\vec{z}_k \\partial \\vec{z}_l}\\bigg(p \\mathbf{D}_{k, l}(t, \\vec{z}(t))\\bigg)"} />
    </Wrapper>
  );
}

export default FokkerPlank;
