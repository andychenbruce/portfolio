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
      <MakeMathDisplay tex={"d\\vec{p}_i = -\\frac{\\partial H}{\\partial q_i} dt - \\gamma_i \\vec{p}_i dt + K_i\\sqrt{2 \\gamma_i k_B T} d\\vec{W}_i"} />
      <p>where we will be solving for <MakeMath tex={"K_i"} /> to converge to the canonical ensemble equilibrium distribution.</p>
      <h2>Drift Diffusion Process</h2>
      <p>We can then combine both equations to a single drift diffusion process and generalize the matrix so the momentum can share noise</p>
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
-\\frac{\\partial H}{\\partial q_1} - \\gamma_1 p_1 \\\\
\\vdots \\\\
-\\frac{\\partial H}{\\partial q_n} - \\gamma_n p_n \\\\
\\end{bmatrix}dt +
\\begin{bmatrix}
0 & \\cdots & 0 & \\cdots & 0 \\\\
\\vdots & \\vdots & \\vdots & \\vdots & \\vdots \\\\
0 & \\cdots & 0 & \\cdots & 0 \\\\
0 & \\cdots & K_{1, 1}\\sqrt{2 \\gamma_1 k_B T} & \\cdots & K_{1, n} \\sqrt{2 \\gamma_1 k_B T} \\\\
\\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\
0 & \\cdots & K_{n, 1} \\sqrt{2 \\gamma_n k_B T} & \\cdots & K_{n, n} \\sqrt{2 \\gamma_n k_B T} \\\\
\\end{bmatrix}d\\vec{W}
`} />
      <h2>Fokker Plank</h2>
      <p>From the <a href="../fokker_plank">Fokker Plank</a> equation any drift diffusion process</p>
      <MakeMathDisplay tex={"d \\vec{z} = \\vec{A}(\\vec{z}) dt + \\mathbf{B}(\\vec{z}) d\\vec{W}"} />
      <p>The probability density at each point will evolve as</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = -\\sum_i \\frac{\\partial }{\\partial z_i} \\Big( \\rho \\vec{A}_i \\Big) + \\frac{1}{2} \\sum_i \\sum_j \\frac{\\partial^2}{\\partial z_i \\partial z_j} \\bigg( \\Big( \\mathbf{B}^T \\mathbf{B}\\Big)_{i, j} \\rho \\bigg)"} />
      <p>Substitute in the Langevin equation.</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho}{\\partial t} = -\\sum_{i=1}^n \\frac{\\partial }{\\partial q_i} \\Big( \\rho \\frac{\\partial H}{\\partial p_i} \\Big) - \\frac{\\partial }{\\partial p_i} \\Big( \\rho \\Big(\\frac{\\partial H}{\\partial q_i} + \\gamma_i p_i \\Big)\\Big) + \\frac{1}{2} \\sum_{i=1}^n \\sum_{j=1}^n \\frac{\\partial^2}{\\partial p_i \\partial p_j} \\bigg( \\rho 2 k_B T \\sum_k K_{i, k} K_{j, k} \\sqrt{\\gamma_i \\gamma_j} \\bigg)"} />
      <p> We can combine the two sums and simplify.</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^n - \\frac{\\partial }{\\partial q_i} \\Big( \\rho \\frac{\\partial H}{\\partial p_i} \\Big) + \\frac{\\partial }{\\partial p_i} \\Big( \\rho \\Big(\\frac{\\partial H}{\\partial q_i} + \\gamma_i p_i \\Big)\\Big) + k_B T \\sum_{j=1}^n \\frac{\\partial^2}{\\partial p_i \\partial p_j} \\bigg( \\rho\\sum_k K_{i, k} K_{j, k} \\sqrt{\\gamma_i \\gamma_j} \\bigg)"} />
      <p>Let <MakeMath tex={"F_{i, j} = \\sum_k K_{i, k} K_{j, k} \\sqrt{\\gamma_i \\gamma_j}"} /> so that</p>
      <MakeMathDisplay tex={"\\sum_{i=1}^n - \\frac{\\partial }{\\partial q_i} \\Big( \\rho \\frac{\\partial H}{\\partial p_i} \\Big) + \\frac{\\partial }{\\partial p_i} \\Big( \\rho \\Big(\\frac{\\partial H}{\\partial q_i} + \\gamma_i p_i \\Big)\\Big) + k_B T \\sum_{j=1}^n \\frac{\\partial^2}{\\partial p_i \\partial p_j} \\bigg( \\rho F_{i, j}  \\bigg)"} />
      <p>and use the chain rule to expand the derivatives in the first part.</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\sum_{j=1}^n \\frac{\\partial^2}{\\partial p_i \\partial p_j} \\bigg( \\rho F_{i, j}  \\bigg)"} />
      <p>Then for the second</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\sum_{j=1}^n \\frac{\\partial}{\\partial p_i} \\bigg( \\frac{\\partial \\rho}{\\partial p_i} F_{i, j} + \\frac{\\partial F_{i, j}}{\\partial p_i}\\rho  \\bigg)"} />
      <p>and again.</p>
      <MakeMathDisplay tex={" = \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial \\rho }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial \\rho}{\\partial q_i} + \\frac{\\partial \\rho }{\\partial p_i}\\gamma_i p_i + \\rho \\gamma_i + k_B T \\sum_{j=1}^n \\bigg( \\frac{\\partial^2 \\rho}{\\partial p_i \\partial p_j} F_{i, j} + \\rho \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j} + \\frac{\\partial \\rho}{\\partial p_i} \\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial \\rho}{\\partial p_j} \\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg)"} />
      <h2>Enforcing canonical distribution convergence</h2>
      <p>In the <a href="../statistical_mechanics_derivation">canonical ensemble</a> it should converge to the below.</p>
      <MakeMathDisplay tex={"\\rho_0(\\vec{q}, \\vec{p}) = \\frac{1}{Z}e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}"} />
      <p>So it should be a stable distribution by definition of equilibrium</p>
      <MakeMathDisplay tex={"\\frac{\\partial \\rho_0}{\\partial t} = 0"} />
      <p>and putting it into the Fokker Plank equation we derived</p>
      <MakeMathDisplay tex={" = \\frac{1}{Z} \\sum_{i=1}^n \\frac{\\partial H}{\\partial q_i}\\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} }{\\partial p_i} - \\frac{\\partial H}{\\partial p_i}\\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial q_i} + \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} }{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\sum_{j=1}^n \\bigg( \\frac{\\partial^2 e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_i \\partial p_j} F_{i, j} + e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j} + \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_i} \\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_j} \\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg)"} />
      <p>the Possion bracket part goes to zero.</p>
      <MakeMathDisplay tex={" = \\frac{1}{Z} \\sum_{i=1}^n \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} }{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\sum_{j=1}^n \\bigg( \\frac{\\partial^2 e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_i \\partial p_j} F_{i, j} + e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}} \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j} + \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_i} \\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial e^{-\\frac{H(\\vec{q}, \\vec{p})}{k_B T}}}{\\partial p_j} \\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg)"} />
      <p>Then do the chain rule a bunch.</p>
      <MakeMathDisplay tex={" = \\frac{1}{Z} \\sum_{i=1}^n -\\frac{e^{-\\frac{H}{k_B T}}}{k_B T}\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + e^{-\\frac{H}{k_B T}} \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\sum_{j=1}^n \\Bigg( \\bigg( \\frac{e^{-\\frac{H}{k_B T}}}{(k_B T)^2} \\frac{\\partial H}{\\partial p_i}\\frac{\\partial H}{\\partial p_j} - \\frac{e^{-\\frac{H}{k_B T}}}{k_B T} \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) \\bigg) F_{i, j}"} />
      <MakeMathDisplay tex={"+ e^{-\\frac{H}{k_B T}} \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j}"} />
      <MakeMathDisplay tex={"- \\frac{e^{-\\frac{H}{k_B T}}}{k_B T}\\bigg(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial H}{\\partial p_j}\\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg) \\Bigg)"} />
      <p>Factor out the probability.</p>
      <MakeMathDisplay tex={" = p_0 \\sum_{i=1}^n -\\frac{1}{k_B T}\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + \\gamma_i"} />
      <MakeMathDisplay tex={"+ k_B T \\sum_{j=1}^n \\Bigg( \\bigg( \\frac{1}{(k_B T)^2} \\frac{\\partial H}{\\partial p_i}\\frac{\\partial H}{\\partial p_j} - \\frac{1}{k_B T} \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) \\bigg) F_{i, j}"} />
      <MakeMathDisplay tex={"+ \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j}"} />
      <MakeMathDisplay tex={"- \\frac{1}{k_B T}\\bigg(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial H}{\\partial p_j}\\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg) \\Bigg)"} />
      <p>Multiply through the temperature.</p>
      <MakeMathDisplay tex={" = p_0 \\sum_{i=1}^n -\\frac{1}{k_B T}\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + \\gamma_i"} />
      <MakeMathDisplay tex={"+ \\sum_{j=1}^n \\bigg( \\frac{1}{k_B T} \\frac{\\partial H}{\\partial p_i}\\frac{\\partial H}{\\partial p_j} - \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) \\bigg) F_{i, j}"} />
      <MakeMathDisplay tex={"+ k_B T \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j}"} />
      <MakeMathDisplay tex={"- \\bigg(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial H}{\\partial p_j}\\frac{\\partial F_{i, j}}{\\partial p_i}\\bigg)"} />
      <p>Then group based on the temperature.</p>
      <MakeMathDisplay tex={"0 = \\sum_{i=1}^n"} />
      <MakeMathDisplay tex={"\\frac{1}{k_B T}\\bigg(-\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i + \\sum_{j=1}^n \\frac{\\partial H}{\\partial p_i}\\frac{\\partial H}{\\partial p_j}F_{i, j} \\bigg)"} />
      <MakeMathDisplay tex={"+ k_B T \\sum_{j=1}^n \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j}"} />
      <MakeMathDisplay tex={"+ \\gamma_i + \\sum_{j=1}^n \\bigg(-\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F_{i, j}}{\\partial p_j} - \\frac{\\partial H}{\\partial p_j}\\frac{\\partial F_{i, j}}{\\partial p_i} - \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) F_{i, j}\\bigg)"} />
      <p>Any Hamiltonian and matrix <MakeMath tex={"\\mathbf{F} = \\mathbf{K}^\\top \\mathbf{K}"} /> that satisfy the above equation will correctly have equilbibrium as a stable distribution</p>
      <h2>Quadratic Momentum</h2>
      <p>Lets assume that each term of the sum should be zero. Since it should be valid for any temperature there are 3 equalities that must hold</p>
      <MakeMathDisplay tex={"\\frac{\\partial H}{\\partial p_i}\\gamma_i p_i = \\sum_{j=1}^n \\frac{\\partial H}{\\partial p_i}\\frac{\\partial H}{\\partial p_j}F_{i, j}"} />
      <MakeMathDisplay tex={"0 = \\frac{\\partial^2 F_{i, j}}{\\partial p_i \\partial p_j}"} />
      <MakeMathDisplay tex={"\\gamma_i = \\sum_{j=1}^n \\bigg(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial F_{i, j}}{\\partial p_j} + \\frac{\\partial H}{\\partial p_j}\\frac{\\partial F_{i, j}}{\\partial p_i} + \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) F_{i, j}\\bigg)"} />
      <p>If the Hamiltonian is in the form</p>
      <MakeMathDisplay tex={"H(\\vec{q}, \\vec{p}) = \\frac{1}{2}\\vec{p}^\\top \\mathbf{L}(\\vec{q})\\vec{p} + U(\\vec{q})"} />
      <p>where the "mass matrix" is only a function of position, then one can define a matrix</p>
      <MakeMathDisplay tex={"\\mathbf{S} = \\frac{1}{2}(\\mathbf{L} + \\mathbf{L}^\\top)"} />
      <p>where</p>
      <MakeMathDisplay tex={"\\frac{\\partial^2 H}{\\partial p_i \\partial p_j} = S_{i,j} = S_{j,i}"} />
      <p>Then if we assume that the <MakeMath tex={"F"} />'s are independent of momentum then the third equality becomes</p>
      <MakeMathDisplay tex={"\\gamma_i = \\sum_{j=1}^n  \\bigg(\\frac{\\partial^2 H}{\\partial p_i \\partial p_j}\\bigg) F_{i, j}"} />
      <MakeMathDisplay tex={"\\gamma_i = \\sum_{j=1}^n F_{i, j} S_{j, i} = (FS)_{i, j}"} />
      <p>if all the gammas are equal then</p>
      <MakeMathDisplay tex={"\\mathbf{F} = \\gamma \\mathbf{S}^{-1}"} />
      <MakeMathDisplay tex={"F_{i,j} = \\Big(\\gamma S^{-1}\\Big)_{i,j}"} />
      <MakeMathDisplay tex={"\\sum_k \\gamma K_{i, k} K_{j, k} = \\Big(\\gamma S^{-1}\\Big)_{i,j}"} />
      <MakeMathDisplay tex={"\\sum_k K_{i, k} K_{j, k} = \\Big(S^{-1}\\Big)_{i,j}"} />
      <p>Which requires</p>
      <MakeMathDisplay tex={"\\mathbf{K}^\\top \\mathbf{K} = \\mathbf{S}^{-1}"} />
      <p>since <MakeMath tex={"S"} /> is symmetric so it has an orthanormal basis</p>
      <MakeMathDisplay tex={"\\mathbf{S} = \\mathbf{Q}^\\top \\mathbf{D}\\mathbf{Q}"} />
      <p>and since we assumed it to be invertable then the inverse is</p>
      <MakeMathDisplay tex={"\\mathbf{S}^{-1} = \\mathbf{Q}^\\top \\mathbf{D}^{-1}\\mathbf{Q}"} />
      <p>and also assume it's positive definite then all the eigenvalues are positive so one can take the square root</p>
      <MakeMathDisplay tex={"\\mathbf{S}^-1 = \\mathbf{Q}^\\top \\mathbf{D}^{-1/2}\\mathbf{D}^{-1/2}\\mathbf{Q}"} />
      <MakeMathDisplay tex={"\\mathbf{S}^-1 = (\\mathbf{D}^{-1/2}\\mathbf{Q})^\\top \\mathbf{D}^{-1/2}\\mathbf{Q}"} />
      <p>So one possible solution is</p>
      <MakeMathDisplay tex={"\\mathbf{K} = \\mathbf{D}^{-1/2}\\mathbf{Q}"} />
     
    </Wrapper>
  );
  }

export default LangevinDynamics;
