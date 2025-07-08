import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function LangevinDynamics({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>Langevin dynamics is usually written like</p>
      <MakeMathDisplay tex={"M \\ddot{\\vec{X}} = -\\nabla_X U(X) - \\gamma M \\dot{\\vec{X}} + \\sqrt{2\\gamma M k_B T}d\\vec{W}"} />
      <p>which is really just two first order differential form relations</p>
      <MakeMathDisplay tex={"d\\vec{x}_i = \\vec{v}_i dt"} />
      <MakeMathDisplay tex={"M_i d \\vec{v}_i = -\\frac{\\partial}{\\partial x_i} U(\\vec{x})dt - \\gamma M_i \\vec{v}_i dt + \\sqrt{2\\gamma M_i k_B T}d\\vec{W}_i"} />
      <p>but statistical mechanics is formulated in Hamiltonian phase space.</p>
      <h2>Reformulating in Hamiltonian Phase space</h2>
      <p>Instead if we can generalize mass then can redefine the process as</p>
      <MakeMathDisplay tex={"d\\vec{q}_i = \\frac{\\partial H}{\\partial p_i} dt"} />
      <MakeMathDisplay tex={"d\\vec{p}_i = -\\frac{\\partial H}{\\partial q_i} dt - \\gamma_i \\vec{p}_i dt + \\sqrt{2 \\gamma_i M_i k_B T} d\\vec{W}_i"} />
      <p>where mass is generalized to <MakeMath tex={"M_i(\\vec{q}, \\vec{p}) = \\frac{\\vec{p}_i}{\\frac{\\partial q_i}{\\partial t}} = \\frac{\\vec{p}_i}{\\Big( \\frac{\\partial H}{\\partial p_i} \\Big)}"} />.</p>
      <h2>Drift Diffusion Process</h2>
      <p>We can then combine both equations to a single drift diffusion process</p>
      <MakeMathDisplay tex={`d
\\begin{bmatrix}
q_1 \\\\
\\vdots \\\\
q_n \\\\
p_1 \\\\
\\vdots \\\\
p_n
\\end{bmatrix} =
\\begin{bmatrix}
\\frac{\\partial H}{\\partial p_1} \\\\
\\vdots \\\\
\\frac{\\partial H}{\\partial p_n} \\\\
-\\frac{\\partial H}{\\partial q_1} - \\gamma_i p_1 \\\\
\\vdots \\\\
-\\frac{\\partial H}{\\partial q_n} - \\gamma_i p_n \\\\
\\end{bmatrix}dt +
\\begin{bmatrix}
0 & \\cdots & 0 & 0 & 0 \\\\
\\vdots & \\vdots & \\vdots & \\vdots & \\vdots \\\\
0 & \\cdots & 0 & 0 & 0 \\\\
0 & \\cdots & \\sqrt{2 \\gamma_i M_1 k_B T} & 0 & 0 \\\\
\\vdots & \\vdots & 0 & \\ddots & 0 \\\\
0 & \\cdots & 0 & 0 & \\sqrt{2 \\gamma_i M_n k_B T} \\\\
\\end{bmatrix}d\\vec{W}
`} />
      <h2>Fokker Plank</h2>
      <p>From the <a href="../fokker_plank">Fokker Plank</a> equation any drift diffusion process</p>
      <MakeMathDisplay tex={"d \\vec{z} = \\vec{A}(\\vec{z}) dt + \\mathbf{B}(\\vec{z}) d\\vec{W}"} />
      <p>The probability density at each point will evolve as</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = -\\sum_i \\frac{\\partial }{\\partial z_i} \\Big( \\rho \\vec{A}_i \\Big) + \\frac{1}{2} \\sum_i \\sum_j \\frac{\\partial^2}{\\partial z_i \\partial z_j} \\bigg( \\Big( \\mathbf{B}^T \\mathbf{B}\\Big)_{i, j} \\rho \\bigg)"} />
      <p>Substituting in the Langevin equation</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = -\\sum_{i=1}^n \\frac{\\partial }{\\partial q_i} \\Big( \\rho \\frac{\\partial H}{\\partial p_i} \\Big) - \\frac{\\partial }{\\partial p_i} \\Big( \\rho \\Big(\\frac{\\partial H}{\\partial q_i} + \\gamma_i p_i \\Big)\\Big) + \\frac{1}{2} \\sum_{i=1}^n \\frac{\\partial^2}{\\partial^2 p_i} \\bigg( \\rho 2 \\gamma_i M_i k_B T \\bigg)"} />
      <p>all the diagonal terms on the matrix are zero so the double sum becomes a single sum. We can combine the two sums to make</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = \\sum_{i=1}^n -\\frac{\\partial }{\\partial q_i} \\Big( \\rho \\frac{\\partial H}{\\partial p_i} \\Big) + \\frac{\\partial }{\\partial p_i} \\Big( \\rho \\Big(\\frac{\\partial H}{\\partial q_i} + \\gamma_i p_i \\Big)\\Big) + \\frac{1}{2} \\frac{\\partial^2}{\\partial^2 p_i} \\bigg( \\rho 2 \\gamma_i M_i k_B T \\bigg)"} />
      <p>and use the chain rule to expand the derivatives in the first part.</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\gamma_i \\frac{\\partial^2}{\\partial^2 p_i} \\bigg( \\rho M_i \\bigg)"} />
      <p>Then for the second</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\gamma_i \\frac{\\partial}{\\partial p_i} \\bigg( \\frac{\\partial \\rho}{\\partial p_i} M_i + \\frac{\\partial M_i}{\\partial p_i}\\rho  \\bigg)"} />
      <p>and again.</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\gamma_i \\bigg( \\frac{\\partial^2 \\rho}{\\partial p_i^2} M_i + \\frac{\\partial^2 M_i}{\\partial p_i^2}\\rho + 2\\frac{\\partial \\rho}{\\partial p_i} \\frac{\\partial M_i}{\\partial p_i} \\bigg)"} />
      <p>From our generalization of mass</p>
      <MakeMathDisplay tex={"M_i = \\frac{p_i}{\\frac{\\partial H}{\\partial p_i}} = p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <p>the first derivative is</p>
      <MakeMathDisplay tex={"\\frac{\\partial M_i}{\\partial p_i} = \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2}"} />
      <p>and the second derivative.</p>
      <MakeMathDisplay tex={"\\frac{\\partial^2 M_i}{\\partial p_i^2} = -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} - p_i \\Big(-2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 + \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3}\\Big)"} />
      <MakeMathDisplay tex={" = -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3}"} />
      <p>So substituting we get</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\gamma_i \\bigg( \\frac{\\partial^2 \\rho}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ \\rho \\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"+ 2\\frac{\\partial \\rho}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg)"} />
      <h2>Enforcing canonical distribution convergence</h2>
      <p>In the <a href="../statistical_mechanics_derivation">canonical ensemble</a> it should converge to the below.</p>
      <MakeMathDisplay tex={"\\rho(\\vec{q}, \\vec{p}) = \\frac{1}{Z}e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}"} />
      <p>So it should be a stable distribution by definition of equilibrium</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial e^{-\\frac{H}{k_B T}} }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial e^{-\\frac{H}{k_B T}}}{\\partial q_i} + \\frac{\\partial e^{-\\frac{H}{k_B T}} }{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\gamma_i \\bigg( \\frac{\\partial^2 e^{-\\frac{H}{k_B T}}}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ e^{-\\frac{H}{k_B T}} \\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"+ 2\\frac{\\partial e^{-\\frac{H}{k_B T}}}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg)"} />
      <p>The Possion bracket part goes to zero</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial e^{-\\frac{H}{k_B T}} }{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\gamma_i \\bigg( \\frac{\\partial^2 e^{-\\frac{H}{k_B T}}}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ e^{-\\frac{H}{k_B T}} \\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"+ 2\\frac{\\partial e^{-\\frac{H}{k_B T}}}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg)"} />
      <p>do the chain rule a bunch</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n -\\frac{e^{-\\frac{H}{k_B T}}}{k_B T}\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\gamma_i \\bigg( \\bigg( \\frac{e^{-\\frac{H}{k_B T}}}{(k_B T)^2} \\bigg(\\frac{\\partial H}{\\partial p_i}\\bigg)^2 - \\frac{e^{-\\frac{H}{k_B T}}}{k_B T} \\bigg(\\frac{\\partial^2 H}{\\partial p_i^2}\\bigg) \\bigg) p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ e^{-\\frac{H}{k_B T}} \\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"- 2\\frac{e^{-\\frac{H}{k_B T}}}{k_B T}\\frac{\\partial H}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg)"} />
      <p>Since it's equal to zero we can divide out the probability</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n -\\frac{1}{k_B T}\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\gamma_i \\bigg( \\bigg( \\frac{1}{(k_B T)^2} \\bigg(\\frac{\\partial H}{\\partial p_i}\\bigg)^2 - \\frac{1}{k_B T} \\bigg(\\frac{\\partial^2 H}{\\partial p_i^2}\\bigg) \\bigg) p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ \\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"- 2\\frac{1}{k_B T}\\frac{\\partial H}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg)"} />
      <p>then just some basic algebra to factor out the gamma and cancel some temperatures</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n \\gamma_i \\Bigg(-\\frac{1}{k_B T}\\frac{\\partial H}{\\partial p_i} p_i + 1"} />
      <MakeMathDisplay tex={"+ \\bigg( \\bigg( \\frac{1}{k_B T} \\bigg(\\frac{\\partial H}{\\partial p_i}\\bigg)^2 - \\bigg(\\frac{\\partial^2 H}{\\partial p_i^2}\\bigg) \\bigg) p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <MakeMathDisplay tex={"+ k_B T\\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"- 2\\frac{\\partial H}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg) \\Bigg)"} />
      <p>Then just rearrange</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n \\gamma_i \\Bigg("} />
      <MakeMathDisplay tex={"\\frac{1}{k_B T}\\bigg(-\\frac{\\partial H}{\\partial p_i} p_i + \\bigg(\\frac{\\partial H}{\\partial p_i}\\bigg)^2 p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} \\bigg)"} />
      <MakeMathDisplay tex={"+ k_B T\\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"1 - \\frac{\\partial^2 H}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - 2\\frac{\\partial H}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg) \\Bigg)"} />
      <p>And the whole first part cancels</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n \\gamma_i \\Bigg("} />
      <MakeMathDisplay tex={"k_B T\\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"1 - \\frac{\\partial^2 H}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - 2\\frac{\\partial H}{\\partial p_i} \\bigg( \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} \\bigg) \\bigg) \\Bigg)"} />
      <p>And simplify the last part to</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n \\gamma_i \\Bigg("} />
      <MakeMathDisplay tex={"k_B T\\Bigg( -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3} \\Bigg)"} />
      <MakeMathDisplay tex={"-1 + \\frac{\\partial^2 H}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1} \\Bigg)"} />
      <p>Since it should be valid for any temperature there are 2 equalities that must hold</p>
      <MakeMathDisplay tex={"0 = -2\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^2 H}{\\partial p_i^2} +2p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-3}\\Big(\\frac{\\partial^2 H}{\\partial p_i^2}\\Big)^2 - p_i\\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-2}\\frac{\\partial^3 H}{\\partial p_i^3}"} />
      <MakeMathDisplay tex={"0 = -1 + \\frac{\\partial^2 H}{\\partial p_i^2} p_i \\Big(\\frac{\\partial H}{\\partial p_i}\\Big)^{-1}"} />
      <h2>Quadratic Momentum</h2>
      <p>Note thate one possible Hamiltonian that satisfies this is</p>
      <MakeMathDisplay tex={"H(\\vec{q}, \\vec{p}) = \\sum_i \\frac{p_i ^2}{2 m(\\vec{q})} + U(\\vec{q})"} />
    </Wrapper>
  );
  }

export default LangevinDynamics;
