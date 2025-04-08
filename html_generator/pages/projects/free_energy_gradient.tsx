import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>
	   In the canonical or NVT ensemble the number of particles, volume, and temperature are fixed. We have microstates <MakeMath tex={"\\vec{r} \\in \\mathbb{R}^{3N}"} /> and macrostates <MakeMath tex={"\\vec{R} \\in \\mathbb{R}^m"} /> and a coarse-graining function <MakeMath tex={"\\mathcal{f} \\in \\mathbb{R}^{3N} \\rightarrow \\mathbb{R}^m"}/>. Each microstate has an energy defined by <MakeMath tex={"E(N, V, T, \\vec{r}) \\in \\mathbb{R} \\times \\mathcal{P}(\\mathbb{R}^3) \\times \\mathbb{R} \\times \\mathbb{R}^{3N} \\longrightarrow \\mathbb{R}"} />. In the canonical ensemble the Hemholtz free energy defined to be:
      </p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) \\coloneqq U(N, V, T, \\vec{R}) - TS(N, V, T, \\vec{R})"} />
      <p>where</p>
      <MakeMathDisplay tex={"U(N, V, T, \\vec{R}) \\coloneqq \\langle E(N, V, T, \\vec{r}) \\rangle_{p(\\vec{r}|\\vec{R})} = \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(N, V, T, \\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <MakeMathDisplay tex={"S(N, V, T, \\vec{R}) \\coloneqq -k_B \\langle \\ln(p(\\vec{r}|\\vec{R}, N, V, T) \\rangle_{p(\\vec{r}|\\vec{R})} = \\frac{-k_B}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(N, V, T, \\vec{r})}{k_B T}} \\ln\\bigg(\\frac{1}{Z(\\vec{R})}e^{-\\frac{E(N, V, T, \\vec{r})}{k_B T}}\\bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>When assuming entropy is maximized it can be <a href={`/projects/boltzman_derivation`}>derived</a> that the probability of being in a microstate is</p>
      <MakeMathDisplay tex={"p(\\vec{r} | \\vec{R}, N, V, T) = \\frac{1}{Z(\\vec{R})} e^{-\\frac{E(N, V, T, \\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})"} />
      <p>
	   And it can be found that
      </p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) = -k_BT \\ln(Z(N, V, T, \\vec{R}))"} />
      <p>where the partition function is</p>
      <MakeMathDisplay tex={"Z(N, V, T, \\vec{R}) = \\int_{V^N} e^{-\\frac{E(N, V, T, \\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>For brevity, because <MakeMath tex={"N, V, T"} /> are all fixed for a certain ensemble, we omit them from the function arguments.</p>
      <p>Taking the gradient of <MakeMath tex={"F"} /> gives:</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = -k_BT \\nabla_{\\vec{R}} \\ln(Z(\\vec{R})) = -k_BT \\dfrac{1}{Z(\\vec{R})} \\nabla_{\\vec{R}} Z(\\vec{R})"} />
      <p>Then substituting <MakeMath tex={"Z"} /> in for its definition gives</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\nabla_{\\vec{R}} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>And the only part of the expression that depends on <MakeMath tex={"\\vec{R}"} /> is the delta function.</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{R}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>For any function <MakeMath tex={"\\nabla_{\\vec{b}} g(\\vec{a}-\\vec{b}) = -\\nabla_{\\vec{a}} g(\\vec{a}-\\vec{b})"} /> so <MakeMath tex={"\\nabla_{\\vec{R}} \\delta(\\mathcal{f}(\\vec{r})-\\vec{R}) = -\\nabla_{\\mathcal{f}(\\vec{r})} \\delta(\\mathcal{f}(\\vec{r})-\\vec{R})"} /></p>
      <MakeMathDisplay tex={"= k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>The gradient can be converted from <MakeMath tex={"\\nabla_{\\mathcal{f}(\\vec{r})}"} /> to <MakeMath tex={"\\nabla_{r}"} /> using a matrix <MakeMath tex={"\\mathbf{B}(\\vec{r})"} /> that is constrained by the Jacobian of <MakeMath tex={"f"} />.</p>
      <div className="mathSubDiv">
	<h3>
	      Converting the gradient with the pseudoinverse of the Jacobian
	</h3>
	<p>
	     The gradient with respect to <MakeMath tex={"\\mathcal{f}(x)"} /> is
	</p>
	<MakeMathDisplay tex={`\\nabla_{\\mathcal{f}(\\vec{r})} = 
\\begin{bmatrix}
\\frac{\\partial}{\\partial \\mathcal{f}_1(\\vec{r})} \\\\
\\frac{\\partial}{\\partial \\mathcal{f}_2(\\vec{r})} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial \\mathcal{f}_{m}(\\vec{r})} \\\\
\\end{bmatrix}
`} />
	<p>
	     And since the expression <MakeMath tex={"\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"}/> only depends on <MakeMath tex={"\\vec{r}"} /> through <MakeMath tex={"\\mathcal{f}"} />:
	</p>
	<MakeMathDisplay tex={"\\frac{\\partial \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) }{\\partial \\vec{r}_i} = \\sum_{j=0}^{m} \\frac{\\partial \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})}{\\partial \\mathcal{f}_j(\\vec{r})} \\frac{\\partial \\mathcal{f}_j(\\vec{r})}{\\partial \\vec{r}_i}"} />
	<p>
	     meaning
	</p>
	<MakeMathDisplay tex={`\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) = 
\\begin{bmatrix}
\\frac{\\partial}{\\partial \\vec{r}_1} \\\\
\\frac{\\partial}{\\partial \\vec{r}_2} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial \\vec{r}_{3N}} \\\\
\\end{bmatrix}
\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) =
\\begin{bmatrix}
\\frac{\\partial \\mathcal{f}_1(\\vec{r}_1)}{\\partial \\vec{r}_1} & \\frac{\\partial \\mathcal{f}_2(\\vec{r}_1)}{\\partial \\vec{r}_1} & \\dots & \\frac{\\partial \\mathcal{f}_m(\\vec{r}_1)}{\\partial \\vec{r}_1} \\\\
\\frac{\\partial \\mathcal{f}_1(\\vec{r}_1)}{\\partial \\vec{r}_2} & \\ddots & \\vdots\\\\
\\vdots & \\dots \\\\
\\frac{\\partial \\mathcal{f}_1(\\vec{r}_{3N})}{\\partial \\vec{r}_{3N}} & & & \\frac{\\partial \\mathcal{f}_m}{\\partial \\vec{r}_{3N}}\\\\
\\end{bmatrix}
\\begin{bmatrix}
\\frac{\\partial}{\\partial \\mathcal{f}_1(\\vec{r})} \\\\
\\frac{\\partial}{\\partial \\mathcal{f}_2(\\vec{r})} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial \\mathcal{f}_{m}(\\vec{r})} \\\\
\\end{bmatrix}
\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})
` }/>
	<p>and is equivelent to</p>
	<MakeMathDisplay tex={"= \\mathbf{J}_\\mathcal{f}^\\top\\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"} />
	<p>
	     where <MakeMath tex={"\\mathbf{J}_\\mathcal{f}(\\vec{r}) \in \\in \\mathbb{R}^{3N} \\rightarrow \\mathbb{R}^{m \\times 3N}"} /> is the Jacobian of <MakeMath tex={"\\mathcal{f}"} /> at <MakeMath tex={"\\vec{r}"} />.
	</p>
	<p>Starting with</p>
	<MakeMathDisplay tex={"\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) = \\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})\\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"} />
	<p>For any matrix <MakeMath tex={"\\mathbf{B}(\\vec{r}) \\in \\mathbb{R}^{m \\times 3N}"} /> such that</p>
	<MakeMathDisplay tex={"\\mathbf{B}(\\vec{r})\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r}) = \\mathbf{I}"} />
	<p>Will satisfy</p>
	<MakeMathDisplay tex={"\\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) = \\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"} />
	<div className="mathSubDiv">
	  <h3>Showing the pseudoinverse is a possible solution if <MakeMath tex={"m \\le 3N"} /></h3>
	  <p>The transposed pseudinverse of the Jacobian, <MakeMath tex={"\\mathbf{J}_\\mathcal{f}^{+\\top}(\\vec{r}) = (\\mathbf{J}_\\mathcal{f}(\\vec{r})\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r}))^{-1}\\mathbf{J}_\\mathcal{f}(\\vec{r})"} /> is one possible solution for <MakeMath tex={"\\mathbf{B}(\\vec{r})"} />, but is not necessarily the only solution.</p>
	  <p>
	       If we multiply both sides by <MakeMath tex={"\\mathbf{J}_\\mathcal{f}(\\vec{rf)}"} />
	  </p>
	  <MakeMathDisplay tex={"\\mathbf{J}_\\mathcal{f}(\\vec{r})\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) = \\mathbf{J}_\\mathcal{f}(\\vec{r})\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})\\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"} />
	  <p>
	       Now if we assume that <MakeMath tex={"\\mathbf{J}_\\mathcal{f}(\\vec{r})\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})"} /> is invertable, which it is if the rows of <MakeMath tex={"\\mathbf{J}_\\mathcal{f}(\\vec{r})"} /> are linearely independent (this assumption implies <MakeMath tex={"m \\le 3N"} /> must be true placing additional constraints on the choice of coarse graining function), then we can multiply both sides by its inverse.
	  </p>
	  <MakeMathDisplay tex={"\\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R}) = (\\mathbf{J}_\\mathcal{f}(\\vec{r}\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})^{-1}\\mathbf{J}_\\mathcal{f}(\\vec{r}\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) = \\vec{R})"} />
	  <p>
	       The expression on the right is simply the formula for the pseudoinverse of a matrix, (if it has more columns than rows which is true for <MakeMath tex={"\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})"} /> because <MakeMath tex={"m \\le 3N"} />).
	  </p>
	  <MakeMathDisplay tex={"A^+ = (A^\\top A)^{-1}A^\\top"} />
	  <p>
	       so substituting <MakeMath tex={"A = \\mathbf{J}_\\mathcal{f}^\\top(\\vec{r})"} />
	  </p>
	  <MakeMathDisplay tex={"(\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r}))^+ = (\\mathbf{J}_\\mathcal{f}(\\vec{r})\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r}))^{-1}\\mathbf{J}_\\mathcal{f}(\\vec{r})"} />
	  <p>
	       And the pseudoinverse and transpose are commutative so we will just write <MakeMath tex={"(\\mathbf{J}_\\mathcal{f}^\\top(\\vec{r}))^+"} /> as <MakeMath tex={"\\mathbf{J}_\\mathcal{f}^{+\\top}(\\vec{r})"} />
	  </p>
	  <MakeMathDisplay tex={"\\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) = \\mathbf{J}_\\mathcal{f}^{+\\top}(\\vec{r})\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})"} />
	</div>
      </div>
      <p>
	So after replacing the gradient we get the expression
      </p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}F(\\vec{R})= k_BT \\dfrac{1}{Z(\\vec{R})} \\int e^{-\\frac{E(\\vec{r})}{k_B T}} \\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>Next, using the divergence theorem where the total divergence of a volume <MakeMath tex={"\\Omega"} /> is equal to the surface integral <MakeMath tex={"\\Gamma"} />. If <MakeMath tex={"A"} /> is a scalar function and <MakeMath tex={"\\mathcal{B}"} /> is a vector function then</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} A(\\vec{r})\\mathcal{B}(\\vec{r}) \\cdot \\vec{n} d\\vec{r} = \\int_{\\Omega} \\nabla_{\\vec{r}} \\cdot (A(\\vec{r})\\mathcal{B}(\\vec{r})) d\\vec{r}"} />
      <p>Where <MakeMath tex={"\\vec{n}"} /> is the normal vector to the surface.</p>
      <p>The product rule for divergence is</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{r}} \\cdot \\Big(A(\\vec{r})\\mathcal{B}(\\vec{r})\\Big) = \\Big(\\nabla_{\\vec{r}} A(\\vec{r})\\Big) \\cdot \\mathcal{B}(\\vec{r}) + A(\\vec{r}) \\Big(\\nabla_{\\vec{r}} \\cdot \\mathcal{B}(\\vec{r})\\Big)"} />
      <p>And when applied to the divergence theorem gives</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} A(\\vec{r})\\mathcal{B}(\\vec{r}) \\cdot \\vec{n} d\\vec{r} = \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} A(\\vec{r})\\Big) \\cdot \\mathcal{B}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} A(\\vec{r}) \\Big(\\nabla_{\\vec{r}} \\cdot \\mathcal{B}(\\vec{r}) d\\vec{r}\\Big)"} />
      <p>which is a generalization to integration by parts to vector fields</p>
      <p><MakeMath tex={"\\mathbf{J}_f^{+\\top}"} /> has dimension <MakeMath tex={"m \\times 3N"} /> so we can treat each row as a vector. In the following notation we apply dot products and divergences to each row of <MakeMath tex={"\\mathbf{J}_f^{+\\top}"} />, so <MakeMath tex={"\\vec{x} \\cdot \\mathbf{J}_f^{+\\top} = \\mathbf{J}_f^{+\\top}\\vec{x}"} /> means dot producting each row which is equivelent to matrix muliplication. We substitute <MakeMath tex={"A(\\vec{r}) = \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})"} /> and <MakeMath tex={"\\mathcal{B}(\\vec{r}) = e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r})"} /> into the divergence theorem.</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} \\delta(\\mathcal{f}(\\vec{r})-\\vec{R})e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\cdot \\vec{n} d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>When <MakeMath tex={"\\Omega = V"} /> the boundary points <MakeMath tex={"\\vec{x} \\in \\Gamma"} /> will contain points on the edge of the volume. Any points not inside the volume should have an infinite energy so that  <MakeMath tex={"e^{-\\frac{E(\\vec{x})}{k_B T}}"} /> should be zero (not sure about this part about eliminating the boundary term, could be wrong). The the entire left hand side of the equality should be zero.</p>
      <MakeMathDisplay tex={"0 = \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>so then</p>
      <MakeMathDisplay tex={"\\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) d\\vec{r} = -\\int_{\\Omega} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>and dot product-ing each row of a matrix is just matrix multiplication so</p>
      <MakeMathDisplay tex={"\\int_{\\Omega} e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r})\\Big(\\nabla_{\\vec{r}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Big) d\\vec{r} = -\\int_{\\Omega} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>Then substitue into the original equation gives</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{\\Omega} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>Using the divergence product rule again</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} \\Bigg(-e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} + e^{-\\frac{E(\\vec{r})}{k_B T}}\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Bigg(-\\mathbf{B}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} + \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Bigg) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})\\Bigg(\\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) - k_B T\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Bigg) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\bigg\\langle \\mathbf{B}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} - k_B T\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>Giving the final equation</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = \\bigg\\langle \\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <hr />
      <h2>Seperating energy and entropic terms</h2>
      <h3>Energy term</h3>
      <p>We want to seperate the Helmholtz free energy into energy and entropic terms.</p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) = U(N, V, T, \\vec{R}) - TS(N, V, T, \\vec{R})"} />
      <p>If we leave out the fixed terms <MakeMath tex={"N, V, T"} /> we can write this as</p>
      <MakeMathDisplay tex={"F(\\vec{R}) = U(\\vec{R}) - TS(\\vec{R})"} />
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}F(\\vec{R}) = \\nabla_{\\vec{R}}U(\\vec{R}) - T\\nabla_{\\vec{R}}S(\\vec{R})"} />
      <p>We start with the definition of <MakeMath tex={"U(\\vec{R})"} /></p>
      <MakeMathDisplay tex={"U(\\vec{R}) = \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <p>Take the gradient</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = \\nabla_{\\vec{R}}(\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r})"} />
      <p>Then apply the product rule</p>
      <MakeMathDisplay tex={"= \\nabla_{\\vec{R}}\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg)\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r} + \\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <p>The product rule creates 2 terms we must calculate. Starting with the first term.</p>
      <div className="mathSubDiv">
	<h3>Gradient of the first term</h3>
	<MakeMathDisplay tex={"\\nabla_{\\vec{R}}\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg)\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Applying the chain rule</p>
	<MakeMathDisplay tex={"= \\bigg(-\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})^2}\\bigg)\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"= -\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />p
	<p>And the integral is just the internal energy by definition</p>
	<MakeMathDisplay tex={"= -\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}U(\\vec{R})"} />
	<p>Now we just need to find <MakeMath tex={"-\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}"} />. Expanding its definition:</p>
	<MakeMathDisplay tex={"-\\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}Z(\\vec{R}) = \\nabla_{\\vec{R}}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{R}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<p>Converting the gradients again using the Jacobian:</p>
	<MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<p>And applying the same reasoning as the previous section using the divergence theorem and the divergence product rule:</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_{V^N} (\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{B}(\\vec{r})) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<p>Then the divergence product rule again</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\Bigg(\\Big((\\nabla_{\\vec{r}} e^{-\\frac{E(\\vec{r})}{k_B T}}) \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Big)\\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<p>Then the chain rule</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\Bigg(\\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Big)\\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}}\\Bigg(\\Big( \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
	<MakeMathDisplay tex={"= \\bigg\\langle \\Big( \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<MakeMathDisplay tex={"= -\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - \\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for <MakeMath tex={"\\nabla_{\\vec{R}}Z(\\vec{R})"} />. Substituting gives</p>
	<MakeMathDisplay tex={"\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}U(\\vec{R}) = -U(\\vec{R})\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - U(\\vec{R})\\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for the first term.</p>
      </div>
      <p>Next we have to find the gradient of the second term.</p>
      <div className="mathSubDiv">
	<h3>Gradient of the second term</h3>
	<p>Starting with the term</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>we can move the gradient to the only part that depends on <MakeMath tex={"\\vec{R}"} /> </p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\nabla_{\\vec{R}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"-\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\nabla_{\\mathcal{f}(\\vec{r})}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Once again convert the gradient</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Once again use the divergence theorem and the divergence product rule.</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\bigg(\\nabla_{\\vec{r}} \\cdot \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\mathbf{B}(\\vec{r})\\Big)\\bigg)\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Then the divergence product rule again</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\bigg(\\Big(\\nabla_{\\vec{r}}\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r})\\Big)\\bigg)\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Use the product rule</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\bigg(\\Big(\\big((\\nabla_{\\vec{r}}e^{-\\frac{E(\\vec{r})}{k_B T}}) E(\\vec{r}) + e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}}E(\\vec{r})\\big) \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r})\\Big)\\bigg)\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Then the chain rule</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} \\bigg(\\Big(\\big((e^{-\\frac{E(\\vec{r})}{k_B T}} \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T}) E(\\vec{r}) + e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}}E(\\vec{r})\\big) \\cdot \\mathbf{B}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r})\\Big)\\bigg)\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Factor out the exponential</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\bigg( \\Big(\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{B}(\\vec{r}) \\Big) + \\Big( \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{B}(\\vec{r}) \\Big) + \\Big(E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r})\\Big)\\bigg)\\delta(\\mathcal{f}(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"\\bigg\\langle\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for the second term.</p>
      </div>
      <p>Now we just add the expressions for the 2 terms together</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = "} />
      <MakeMathDisplay tex={"-U(\\vec{R})\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - U(\\vec{R})\\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}+" }/>
      <MakeMathDisplay tex={"\\bigg\\langle\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>We can group some terms</p>
      <MakeMathDisplay tex={"= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\nabla_{\\vec{r}}E(\\vec{r}) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>So we have a final expression of</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <h3>Entropic term</h3>
      <p>Starting with the definition of entropy</p>
      <MakeMathDisplay tex={"TS(\\vec{R}) = -k_B T \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\ln\\bigg(\\frac{1}{Z(\\vec{R})}e^{-\\frac{E(\\vec{r})}{k_B T}}\\bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>Using basic algebraic manupulation</p>
      <MakeMathDisplay tex={"= \\frac{-k_B T}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(\\ln\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg) + \\ln\\bigg(e^{-\\frac{E(\\vec{r})}{k_B T}}\\bigg)\\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\frac{-k_B T}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(-\\ln\\big(Z(\\vec{R})\\big) -\\frac{E(\\vec{r})}{k_B T}\\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(k_B T\\ln\\big(Z(\\vec{R})\\big) + E(\\vec{r})\\Bigg) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big)\\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}) + \\vec{R}) d\\vec{r} - \\frac{1}{Z(\\vec{R})}\\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big)\\frac{1}{Z(\\vec{R})}Z(\\vec{R}) + U(\\vec{R})"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big) + U(\\vec{R})"} />
      <MakeMathDisplay tex={"= -F(\\vec{R}) + U(\\vec{R})"} />
      <p>So this is consistent that</p>
      <MakeMathDisplay tex={"TS(\\vec{R})= U(\\vec{R}) - F(\\vec{R})"} />
      <p>Then</p>
      <MakeMathDisplay tex={"T\\nabla_{\\vec{R}}S(\\vec{R})= \\nabla_{\\vec{R}}U(\\vec{R}) - \\nabla_{\\vec{R}}F(\\vec{R})"} />
      <p>and we can substitute</p>
      <MakeMathDisplay tex={"= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <MakeMathDisplay tex={"- \\bigg(\\bigg\\langle \\mathbf{B}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}\\bigg)"} />
      <p>and one of the terms cancels out with a final expression of</p>
      <MakeMathDisplay tex={"T\\nabla_{\\vec{R}}S(\\vec{R})= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{B}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{B}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <hr />
      <h3>Isothermal-Isobaric Ensemble (not sure about this part)</h3>
      <p>We must first derive some properties about the Isothermal-Isobaric ensemble, or NPT ensemble. Starting with the NVT partition function, where <MakeMath tex={"V \\subseteq \\mathbb{R}^3"} /> is the set of all points in the volume</p>
      <MakeMathDisplay tex={"Z_{\\text{sys}}(N, V, T, \\vec{R}) = \\int_{V^N} e^{\\frac{E(\\vec{r}}{-k_B T}} \\delta(\\mathcal{f}(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>And if the heat bath is considered to be an ideal gas then</p>
      <MakeMathDisplay tex={"Z_{\\text{bath}}(N_{\\text{bath}}, V_{\\text{bath}}, T) = \\int_{V_{\\text{bath}}^{N_{\\text{bath}}}} d\\vec{s} = |V_{\\text{bath}}|^{N_{\\text{bath}}}"} />
      <p>which is equivelent to the total volume to the power of the number of particles</p>
      <MakeMathDisplay tex={"|V_{\\text{bath}}|^{N_{\\text{bath}}}"} />
      <MakeMathDisplay tex={"= |V_{\\text{total}} - V_{\\text{sys}}|^{N_{\\text{total}} - N_{\\text{sys}}}"} />
      <p>If we assume the particles and the heat bath don't share volume then</p>
      <MakeMathDisplay tex={"= (|V_{\\text{total}}| - |V_{\\text{sys}}|)^{N_{\\text{total}} - N_{\\text{sys}}}"} />
      <MakeMathDisplay tex={"= |V_{\\text{total}}|^{N_{\\text{bath}}} \\Big(1 - \\frac{|V_{\\text{sys}}|}{|V_{\\text{total}}|}\\Big)^{N_{\\text{bath}}}"} />
      <p>Using the natural gas law</p>
      <MakeMathDisplay tex={"P|V_\\text{bath}| = N_{\\text{bath}} k_B T"} />
      <p>We can find a formula for the number of particles in the bath</p>
      <MakeMathDisplay tex={"N_{\\text{bath}} = \\frac{P|V_\\text{bath}|}{k_B T}"} />
      <p>and substituting</p>
      <MakeMathDisplay tex={"= |V_{\\text{total}}|^{N_{\\text{bath}}} \\Big(1 - \\frac{|V_{\\text{sys}}|}{|V_{\\text{total}}|}\\Big)^{\\frac{P|V_\\text{bath}|}{k_B T}}"} />
      <p>In the limit that <MakeMath tex={"|V_{\\text{bath}}| \\rightarrow \\infty"} /> and approximating <MakeMath tex={"|V_{\\text{bath}}| \\approx |V_{\\text{total}}|"} /></p>
      <MakeMathDisplay tex={"\\lim_{|V_{\\text{bath}}| \\rightarrow \\infty } \\Big(1 - \\frac{|V_{\\text{sys}}|}{|V_{\\text{bath}}|}\\Big)^{\\frac{P|V_{\\text{bath}}|}{k_B T}} = e^{\\frac{P |V_{\\text{sys}}| }{- k_B T}}"} />
      <p>So we get an expression for the partition function of the heat bath:</p>
      <MakeMathDisplay tex={"Z_{\\text{bath}}(N, P, T, V) = |V_{\\text{total}}|^{N_{\\text{total}}} e^{\\frac{P |V| }{- k_B T}}"} />
      <p>The combined partition function is</p>
      <MakeMathDisplay tex={"Z_{\\text{sys} + \\text{bath}}(N, P, T, V, \\vec{R}) = Z_{\\text{bath}}(N, P, T, V) Z_{\\text{sys}}(N, V, T, \\vec{R})"} />
      <p>Consider the set <MakeMath tex={"V(\\vec{l}) \\in \\mathbb{R}^{3N}"} /> of possible points is parameterized by some variables <MakeMath tex={"\\vec{l} \\in \\mathbb{R}^k"} />, for example the lengths of a box. Also consider a coarse graining function on the parameters of the volume <MakeMath tex={"\\mathcal{g} \\in \\mathbb{R}^k \\rightarrow \\mathbb{R}^q"} /> where the coarse grained parameters are <MakeMath tex={"\\vec{L} \\in \\mathbb{R}^q"} /></p>
      <p>Compared to the canonical ensemble the partition function is <MakeMath tex={"\\Delta(N, P, T, \\vec{R}, \\vec{L})"} />.</p>
      <MakeMathDisplay tex={"\\Delta(N, P, T, \\vec{R}, \\vec{L}) = \\int_{\\mathbb{R}^k} Z_{\\text{sys}+\\text{bath}}(N, P, T, V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L})d\\vec{l}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} Z_{\\text{bath}}(N, P, T, V(\\vec{l}))Z_{\\text{sys}}(N, V(\\vec{l}), R, \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L})d\\vec{l}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(N, V(\\vec{l}), T, \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L})d\\vec{l}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} e^{P|V(\\vec{L})|} \\int_{V^N} e^{-\\frac{E(\\vec{r}, V(\\vec{L}))}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}, \\vec{L}) = \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} \\int_{V^N} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + P|V(\\vec{L})|}{k_B T}} \\delta(\\mathcal{f}(\\vec{r}, \\vec{L}) = \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>And it can be shown that the Gibbs free energy</p>
      <MakeMathDisplay tex={"H(N, P, T, \\vec{R}, \\vec{L}) = U(N, P, T, \\vec{R}, \\vec{L}) - TS(N, P, T, \\vec{R}, \\vec{L}) + P\\langle V(\\vec{l})\\rangle_{p(\\vec{l} | \\vec{L}, N, P, T)}"} />
      <p>And for brevity will be written as</p>
      <MakeMathDisplay tex={"H(\\vec{R}, \\vec{L}) = U(\\vec{R}, \\vec{L}) - TS(\\vec{R}, \\vec{L}) + P\\langle V(\\vec{L})\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <p>and where the microstates are <MakeMath tex={"(\\vec{r}, \\vec{l}) \\in \\mathbb{R}^{3N} \\times \\mathbb{R}^k"} /> and there are 2 mapping function <MakeMath tex={"\\vec{R} = \\mathcal{f}(\\vec{r}), \\vec{L} = \\mathcal{g}(\\vec{l})"} />. The Gibbs free energy can be found to be:</p>
      <MakeMathDisplay tex={"H(\\vec{R}, \\vec{L}) = -k_B T \\ln(\\Delta(\\vec{R}, \\vec{L}))"} />
      <p>Then to calculate the gradient</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}H(\\vec{R}, \\vec{L}) = -k_B T \\nabla_{\\vec{R}}\\ln(\\Delta(\\vec{R}, \\vec{L}))"} />
      <p>Chain rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\nabla_{\\vec{R}}\\Delta(\\vec{R}, \\vec{L})"} />
      <p>Put in the definition</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\nabla_{\\vec{R}}\\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <p>Move the graident inside</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\nabla_{\\vec{R}}Z(V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <div className="mathSubDiv">
	<p>We can make <MakeMath tex={"\\nabla_{\\vec{R}}Z(V, \\vec{R})"} /> a function of <MakeMath tex={"\\nabla_{\\vec{R}}F(V, \\vec{R})"} /></p>
	<MakeMathDisplay tex={"F(V, \\vec{R}) = -k_B T \\ln(Z(V, \\vec{R}))"} />
	<p>take the gradient of boths sides</p>
	<MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(V, \\vec{R}) = -k_B T \\nabla_{\\vec{R}}\\ln(Z(V, \\vec{R}))"} />
	<p>chain rule</p>
	<MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(V, \\vec{R}) = -k_B T \\frac{\\nabla_{\\vec{R}}Z(V, \\vec{R})}{Z(V, \\vec{R})}"} />
	<p>then algebraic manipulation</p>
	<MakeMathDisplay tex={"\\nabla_{\\vec{R}}Z(V, \\vec{R}) = \\frac{Z(V, \\vec{R})}{- k_B T}\\nabla_{\\vec{R}} F(V, \\vec{R})"} />
      </div>
      <p>substituting for <MakeMath tex={"\\nabla_{\\vec{R}}Z(V, \\vec{R})"} /> gives</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\frac{Z(V, \\vec{R})}{- k_B T}\\nabla_{\\vec{R}} F(V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <p>cancel out the denominator</p>
      <MakeMathDisplay tex={"= \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V, \\vec{R})\\nabla_{\\vec{R}} F(V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <p>and this is simply the weighted average based off the parameters of the volume, giving a final expression of</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} H(\\vec{L}, \\vec{R}) = \\bigg \\langle \\nabla_{\\vec{R}} F(V(\\vec{l}), \\vec{R}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <p>Move gradient</p>
      <hr />
      <p>We can also calculate the macrostate "pressure"</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{L}}H(\\vec{R}, \\vec{L}) = -k_B T \\nabla_{\\vec{R}}\\ln(\\Delta(\\vec{R}, \\vec{L}))"} />
      <p>Chain rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\nabla_{\\vec{L}}\\Delta(\\vec{R}, \\vec{L})"} />
      <p>Put in the definition</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\nabla_{\\vec{L}}\\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\nabla_{\\vec{L}}\\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <MakeMathDisplay tex={"= k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\nabla_{\\mathcal{g}(\\vec{l})}\\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <MakeMathDisplay tex={"= k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\mathbf{C}(\\vec{l})\\nabla_{\\vec{l}}\\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <p>and using the divergence theorem again with the argument the surface integral is zero because the pressure of the bath as the volume of the system becomes infinitely big becomes infinitely large as the system takes up all the volume</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} (\\nabla_{\\vec{l}} \\cdot e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R}) \\mathbf{C}(\\vec{l}))\\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k} \\bigg(\\Big(\\nabla_{\\vec{l}}\\big(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R})\\big) \\cdot \\mathbf{C}(\\vec{l})\\Big) + \\Big( \\big(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R})\\big) \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\Big)\\bigg) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l}"} />
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k}\\Big(\\nabla_{\\vec{l}}\\big(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}Z(V(\\vec{l}), \\vec{R})\\big) \\cdot \\mathbf{C}(\\vec{l})\\Big) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k}\\Bigg( \\bigg(\\Big(\\nabla_{\\vec{l}}e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\Big)Z(V(\\vec{l}), \\vec{R})\\bigg) + \\bigg(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\nabla_{\\vec{l}}Z(V(\\vec{l}), \\vec{R})\\bigg) \\Bigg) \\cdot \\mathbf{C}(\\vec{l})\\Big) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <p>Using the same substitution for <MakeMath tex={"\\nabla_{\\vec{L}}Z(V, \\vec{R})"} /> gives</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k}\\Bigg( \\bigg(\\Big(\\nabla_{\\vec{l}}e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\Big)Z(V(\\vec{l}), \\vec{R})\\bigg) + \\bigg(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\Big( \\frac{Z(V, \\vec{R})}{- k_B T}\\nabla_{\\vec{R}} F(V, \\vec{R}) \\Big)\\bigg) \\Bigg) \\cdot \\mathbf{C}(\\vec{l})\\Big) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k}\\Big(\\nabla_{\\vec{l}}e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\Big)Z(V(\\vec{l}), \\vec{R}) \\cdot \\mathbf{C}(\\vec{l}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l} + \\bigg\\langle \\nabla_{\\vec{L}} F(V, \\vec{R}) \\cdot \\mathbf{C}(\\vec{r}) \\bigg\\rangle_{p(\\vec{l}|\\vec{L})} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <p>chain rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R}, \\vec{L})} \\int_{\\mathbb{R}^k}\\Big(e^{\\frac{P|V(\\vec{l})|}{-k_B T}}\\nabla_{\\vec{l}}\\frac{P|V(\\vec{l})|}{-k_B T}\\Big)Z(V(\\vec{l}), \\vec{R}) \\cdot \\mathbf{C}(\\vec{l}) \\delta(\\mathcal{g}(\\vec{l}) - \\vec{L}) d\\vec{l} + \\bigg\\langle \\nabla_{\\vec{L}} F(V, \\vec{R}) \\cdot \\mathbf{C}(\\vec{r}) \\bigg\\rangle_{p(\\vec{l}|\\vec{L})} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />p
      <MakeMathDisplay tex={"= \\bigg\\langle P \\nabla_{\\vec{l}} |V(\\vec{l})| \\cdot \\mathbf{C}(\\vec{r})\\bigg\\rangle_{p(\\vec{l}|\\vec{L})} + \\bigg\\langle \\nabla_{\\vec{L}} F(V, \\vec{R}) \\cdot \\mathbf{C}(\\vec{r}) \\bigg\\rangle_{p(\\vec{l}|\\vec{L})} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      <p>Giving a final expression of</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{L}} H(\\vec{R}, \\vec{L})= \\bigg\\langle \\mathbf{C}(\\vec{r})P \\nabla_{\\vec{l}} |V(\\vec{l})| \\bigg\\rangle_{p(\\vec{l}|\\vec{L})} + \\bigg\\langle \\mathbf{C}(\\vec{r}) \\nabla_{\\vec{L}} F(V, \\vec{R}) \\bigg\\rangle_{p(\\vec{l}|\\vec{L})} - k_B T \\bigg\\langle \\nabla_{\\vec{l}} \\cdot \\mathbf{C}(\\vec{l}) \\bigg\\rangle_{p(\\vec{l} | \\vec{L})}"} />
      

      
      <h3>Seperating energy, entropic, and pressure contribution</h3>
      <p>TODO</p>
    </Wrapper>
  );
}

export default DeltaGcode;
