import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>
	   In the canonical or NVT ensemble the number of particles, volume, and temperature are fixed. If we have microstates <MakeMath tex={"\\vec{r} \\in \\mathbb{R}^{3N}"} /> and macrostates <MakeMath tex={"\\vec{R} \\in \\mathbb{R}^m"} /> and a coarse-graining function <MakeMath tex={"f \\in \\mathbb{R}^{3N} \\rightarrow \\mathbb{R}^m"}/>. Each microstate has an energy defined by <MakeMath tex={"E(N, V, T, \\vec{r}) \\in \\mathbb{R} \\times \\mathcal{P}(\\mathbb{R}^{3N}) \\times \\mathbb{R} \\times \\mathbb{R}^{3N} \\longrightarrow \\mathbb{R}"} />. In the canonical ensemble the Hemholtz free energy is:
      </p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) \\coloneqq U(N, V, T, \\vec{R}) - TS(N, V, T, \\vec{R})"} />
      <MakeMathDisplay tex={"p(\\vec{r} | \\vec{R}, N, V, T) = \\frac{1}{Z(\\vec{R})} e^{-\\frac{E(\\vec{r})}{k_B T}}"} />
      <MakeMathDisplay tex={"U(N, V, T, \\vec{R}) \\coloneqq \\langle E(\\vec{r}) \\rangle_{p(\\vec{r}|\\vec{R})} = \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <MakeMathDisplay tex={"S(N, V, T, \\vec{R}) \\coloneqq -k_B \\langle p(\\vec{r}|\\vec{R}) \\rangle_{p(\\vec{r}|\\vec{R})} = -k_B \\int_V p(\\vec{r}|\\vec{R}) \\ln\\big(p(\\vec{r}|\\vec{R})\\big) d\\vec{r} = \\frac{-k_B}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\ln\\bigg(\\frac{1}{Z(\\vec{R})}e^{-\\frac{E(\\vec{r})}{k_B T}}\\bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>
	   And it can be found that
      </p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) = -k_BT \\ln(Z(N, V, T, \\vec{R}))"} />
      <p>where the partition function is</p>
      <MakeMathDisplay tex={"Z(N, V, T, \\vec{R}) = \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>For brevity, because <MakeMath tex={"N, V, T"} /> are all fixed for a certain ensemble, we omit them from the function arguments.</p>
      <p>Taking the gradient of <MakeMath tex={"F"} /> gives:</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = -k_BT \\nabla_{\\vec{R}} \\ln(Z(\\vec{R})) = -k_BT \\dfrac{1}{Z(\\vec{R})} \\nabla_{\\vec{R}} Z(\\vec{R})"} />
      <p>Then substituting <MakeMath tex={"Z"} /> in for its definition gives</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\nabla_{\\vec{R}} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>And the only part of the expression that depends on <MakeMath tex={"\\vec{R}"} /> is the delta function.</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{R}}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>For any function <MakeMath tex={"\\nabla_{\\vec{b}} g(\\vec{a}-\\vec{b}) = -\\nabla_{\\vec{a}} g(\\vec{a}-\\vec{b})"} /> so <MakeMath tex={"\\nabla_{\\vec{R}} \\delta(f(\\vec{r})-\\vec{R}) = -\\nabla_{f(\\vec{r})} \\delta(f(\\vec{r})-\\vec{R})"} /></p>
      <MakeMathDisplay tex={"= k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{V^N} e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{f(\\vec{r})}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>The gradient can be converted from <MakeMath tex={"\\nabla_{f(\\vec{r})}"} /> to <MakeMath tex={"\\nabla_{r}"} /> using the pseudoinverse of the Jacobian of <MakeMath tex={"f"} />.</p>
      <div className="mathSubDiv">
	<h3>
	      Converting the gradient with the pseudoinverse of the Jacobian
	</h3>
	<p>
	     The gradient with respect to <MakeMath tex={"f(x)"} /> is
	</p>
	<MakeMathDisplay tex={`\\nabla_{f(\\vec{r})} = 
\\begin{bmatrix}
\\frac{\\partial}{\\partial f_1(\\vec{r})} \\\\
\\frac{\\partial}{\\partial f_2(\\vec{r})} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial f_{m}(\\vec{r})} \\\\
\\end{bmatrix}
`} />
	<p>
	     And assuming the expression only depends on <MakeMath tex={"\\vec{r}"} /> through <MakeMath tex={"f"} />:
	</p>
	<MakeMathDisplay tex={"\\frac{\\partial}{\\partial \\vec{r}_i} = \\sum_{j=0}^{m} \\frac{\\partial}{\\partial f_j(\\vec{r})} \\frac{\\partial f_j(\\vec{r})}{\\partial \\vec{r}_i}"} />
	<p>
	     meaning
	</p>
	<MakeMathDisplay tex={`\\nabla_{\\vec{r}} = 
\\begin{bmatrix}
\\frac{\\partial}{\\partial \\vec{r}_1} \\\\
\\frac{\\partial}{\\partial \\vec{r}_2} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial \\vec{r}_{3N}} \\\\
\\end{bmatrix} =
\\begin{bmatrix}
\\frac{\\partial f_1(\\vec{r}_1)}{\\partial \\vec{r}_1} & \\frac{\\partial f_2(\\vec{r}_1)}{\\partial \\vec{r}_1} & \\dots & \\frac{\\partial f_m(\\vec{r}_1)}{\\partial \\vec{r}_1} \\\\
\\frac{\\partial f_1(\\vec{r}_1)}{\\partial \\vec{r}_2} & \\ddots & \\vdots\\\\
\\vdots & \\dots \\\\
\\frac{\\partial f_1(\\vec{r}_{3N})}{\\partial \\vec{r}_{3N}} & & & \\frac{\\partial f_m}{\\partial \\vec{r}_{3N}}\\\\
\\end{bmatrix}
\\begin{bmatrix}
\\frac{\\partial}{\\partial f_1(\\vec{r})} \\\\
\\frac{\\partial}{\\partial f_2(\\vec{r})} \\\\
\\vdots \\\\
\\frac{\\partial}{\\partial f_{m}(\\vec{r})} \\\\
\\end{bmatrix}
= \\mathbf{J}_f^\\top\\nabla_{f(\\vec{r})}
`} />
	<p>
	     Where <MakeMath tex={"\\mathbf{J}_f \in \\in \\mathbb{R}^{3N} \\rightarrow \\mathbb{R}^{m \\times 3N}"} /> is the Jacobian of <MakeMath tex={"f"} />.
	</p>
	<MakeMathDisplay tex={"\\nabla_{\\vec{r}} = \\mathbf{J}_f^\\top\\nabla_{f(\\vec{r})}"} />
	<p>
	     If we multiply both sides by <MakeMath tex={"\\mathbf{J}_f"} />
	</p>
	<MakeMathDisplay tex={"\\mathbf{J}_f\\nabla_{\\vec{r}} = \\mathbf{J}_f\\mathbf{J}_f^\\top\\nabla_{f(\\vec{r})}"} />
	<p>
	     Now if we assume that <MakeMath tex={"\\mathbf{J}_f\\mathbf{J}_f^\\top"} /> is invertable, which it is if the rows of <MakeMath tex={"\\mathbf{J}_f"} /> are linearely independent (this assumption implies <MakeMath tex={"m \\le 3N"} /> must be true placing additional constraints on the choice of coarse grain-ing function), then we can multiply both sides by its inverse.
	</p>
	<MakeMathDisplay tex={"\\nabla_{f(\\vec{r})} = (\\mathbf{J}_f\\mathbf{J}_f^\\top)^{-1}\\mathbf{J}_f\\nabla_{\\vec{r}}"} />
	<p>
	     The expression on the right is simply the formula for the pseudoinverse of a matrix, (if it has more columns than rows which is true for <MakeMath tex={"\\mathbf{J}_f^\\top"} /> because <MakeMath tex={"m \\le 3N"} />).
	</p>
	<MakeMathDisplay tex={"A^+ = (A^\\top A)^{-1}A^\\top"} />
	<p>
	     so substituting <MakeMath tex={"A = \\mathbf{J}_f^\\top"} />
	</p>
	<MakeMathDisplay tex={"(\\mathbf{J}_f^\\top)^+ = (\\mathbf{J}_f\\mathbf{J}_f^\\top)^{-1}\\mathbf{J}_f"} />
	<p>
	     And the pseudoinverse and transpose are commutative so we will just write <MakeMath tex={"(\\mathbf{J}_f^\\top)^+"} /> as <MakeMath tex={"\\mathbf{J}_f^{+\\top}"} />
	</p>
	<p>
	     So finally we have a formula
	</p>
	<MakeMathDisplay tex={"\\nabla_{f(\\vec{r})} = \\mathbf{J}_f^{+\\top}\\nabla_{\\vec{r}}"} />
	<p>
	     And now we can replace
	</p>
	<MakeMathDisplay tex={"\\nabla_{f(\\vec{r})}\\delta(f(\\vec{r}) - \\vec{R}) = \\mathbf{J}_f^{+\\top}\\nabla_{\\vec{r}}\\delta(f(\\vec{r}) - \\vec{R})"} />
      </div>
      <p>
	So after replacing the gradient we get the expression
      </p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}F(\\vec{R})= k_BT \\dfrac{1}{Z(\\vec{R})} \\int e^{-\\frac{E(\\vec{r})}{k_B T}} (\\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{\\vec{r}}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>Next, using the divergence theorem where the total divergence of a volume <MakeMath tex={"\\Omega"} /> is equal to the surface integral <MakeMath tex={"\\Gamma"} />. If <MakeMath tex={"A"} /> is a scalar function and <MakeMath tex={"\\vec{B}"} /> is a vector function then</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} A(\\vec{r})\\vec{B}(\\vec{r}) \\cdot \\vec{n} d\\vec{r} = \\int_{\\Omega} \\nabla_{\\vec{r}} \\cdot (A(\\vec{r})\\vec{B}(\\vec{r})) d\\vec{r}"} />
      <p>Where <MakeMath tex={"\\vec{n}"} /> is the normal vector to the surface.</p>
      <p>The product rule for divergence is</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{r}} \\cdot \\Big(A(\\vec{r})\\vec{B}(\\vec{r})\\Big) = \\Big(\\nabla_{\\vec{r}} A(\\vec{r})\\Big) \\cdot \\vec{B}(\\vec{r}) + A(\\vec{r}) \\Big(\\nabla_{\\vec{r}} \\cdot \\vec{B}(\\vec{r})\\Big)"} />
      <p>And when applied to the divergence theorem gives</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} A(\\vec{r})\\vec{B}(\\vec{r}) \\cdot \\vec{n} d\\vec{r} = \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} A(\\vec{r})\\Big) \\cdot \\vec{B}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} A(\\vec{r}) \\Big(\\nabla_{\\vec{r}} \\cdot \\vec{B}(\\vec{r}) d\\vec{r}\\Big)"} />
      <p>which is a generalization to integration by parts to vector fields</p>
      <p><MakeMath tex={"\\mathbf{J}_f^{+\\top}"} /> has dimension <MakeMath tex={"m \\times 3N"} /> so we can treat each row as a vector. In the following notation we apply dot products and divergences to each row of <MakeMath tex={"\\mathbf{J}_f^{+\\top}"} />, so <MakeMath tex={"\\vec{x} \\cdot \\mathbf{J}_f^{+\\top} = \\mathbf{J}_f^{+\\top}\\vec{x}"} /> means dot producting each row which is equivelent to matrix muliplication. We substitute <MakeMath tex={"A(\\vec{r}) = \\delta(f(\\vec{r}) - \\vec{R})"} /> and <MakeMath tex={"\\vec{B}(\\vec{r}) = e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r})"} /> into the divergence theorem.</p>
      <MakeMathDisplay tex={"\\oint_{\\Gamma} \\delta(f(\\vec{r})-\\vec{R})e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\cdot \\vec{n} d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(f(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} \\delta(f(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>When <MakeMath tex={"\\Omega = V"} /> the boundary points <MakeMath tex={"\\vec{x} \\in \\Gamma"} /> will contain points on the edge of the volume. Any points not inside the volume should have an internal energy that approches infinity meaning that  <MakeMath tex={"e^{-\\frac{E(\\vec{x})}{k_B T}}"} /> should be towards zero (not sure about this part about eliminating the boundary term, could be wrong). The the entire left hand side of the equality should be zero.</p>
      <MakeMathDisplay tex={"0 = \\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(f(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) d\\vec{r} + \\int_{\\Omega} \\delta(f(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>so then</p>
      <MakeMathDisplay tex={"\\int_{\\Omega} \\Big(\\nabla_{\\vec{r}} \\delta(f(\\vec{r}) - \\vec{R})\\Big) \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) d\\vec{r} = -\\int_{\\Omega} \\delta(f(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>and dot product-ing each row of a matrix is just matrix multiplication so</p>
      <MakeMathDisplay tex={"\\int_{\\Omega} e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r})\\Big(\\nabla_{\\vec{r}} \\delta(f(\\vec{r}) - \\vec{R})\\Big) d\\vec{r} = -\\int_{\\Omega} \\delta(f(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>Then substitue into the original equation gives</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_{\\Omega} \\delta(f(\\vec{r}) - \\vec{R}) \\Big(\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)d\\vec{r}"} />
      <p>Using the divergence product rule again</p>
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_V \\Bigg(-e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} + e^{-\\frac{E(\\vec{r})}{k_B T}}\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top} \\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= -k_BT \\dfrac{1}{Z(\\vec{R})} \\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) - \\vec{R})\\Bigg(-\\mathbf{J}_f^{+\\top}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} + \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top} \\Bigg) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\dfrac{1}{Z(\\vec{R})} \\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) - \\vec{R})\\Bigg(\\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) - k_B T\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top} \\Bigg) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r})\\dfrac{\\nabla_{\\vec{r}} E(\\vec{r})}{k_B T} - k_B T\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top} \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>Giving the final equation</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} F(\\vec{R}) = \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top} \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <hr />
      <h2>Seperating energy and entropic terms</h2>
      <h3>Energy term</h3>
      <p>We want to seperate the Helmholtz free energy into energy and entropic terms.</p>
      <MakeMathDisplay tex={"F(N, V, T, \\vec{R}) = U(N, V, T, \\vec{R}) - TS(N, V, T, \\vec{R})"} />
      <p>If we leave out the fixed terms <MakeMath tex={"N, V, T"} /> we can write this as</p>
      <MakeMathDisplay tex={"F(\\vec{R}) = U(\\vec{R}) - TS(\\vec{R})"} />
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}F(\\vec{R}) = \\nabla_{\\vec{R}}U(\\vec{R}) - T\\nabla_{\\vec{R}}S(\\vec{R})"} />
      <p>We start with the definition of <MakeMath tex={"U(\\vec{R})"} /></p>
      <MakeMathDisplay tex={"U(\\vec{R}) = \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <p>Take the gradient</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = \\nabla_{\\vec{R}}(\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r})"} />
      <p>Then apply the product rule</p>
      <MakeMathDisplay tex={"= \\nabla_{\\vec{R}}\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg)\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r} + \\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
      <p>The product rule creates 2 terms we must calculate. Starting with the first term.</p>
      <div className="mathSubDiv">
	<h3>Gradient of the first term</h3>
	<MakeMathDisplay tex={"\\nabla_{\\vec{R}}\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg)\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Applying the chain rule</p>
	<MakeMathDisplay tex={"= \\bigg(-\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})^2}\\bigg)\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"= -\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>And the integral is just the internal energy by definition</p>
	<MakeMathDisplay tex={"= -\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}U(\\vec{R})"} />
	<p>Now we just need to find <MakeMath tex={"-\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}"} />. Expanding its definition:</p>
	<MakeMathDisplay tex={"-\\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}Z(\\vec{R}) = \\nabla_{\\vec{R}}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{R}}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{f(\\vec{r})}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<p>Converting the gradients again using the Jacobian:</p>
	<MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{\\vec{r}}\\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<p>And applying the same reasoning as the previous section using the divergence theorem and the divergence product rule:</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_V (\\nabla_{\\vec{r}} \\cdot e^{-\\frac{E(\\vec{r})}{k_B T}}\\mathbf{J}_f^{+\\top}(\\vec{r})) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<p>Then the divergence product rule again</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_V \\Bigg(\\Big((\\nabla_{\\vec{r}} e^{-\\frac{E(\\vec{r})}{k_B T}}) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)\\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<p>Then the chain rule</p>
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_V \\Bigg(\\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big)\\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<MakeMathDisplay tex={"= -\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}}\\Bigg(\\Big( \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{R}"} />
	<MakeMathDisplay tex={"= \\bigg\\langle \\Big( \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<MakeMathDisplay tex={"= -\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - \\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for <MakeMath tex={"\\nabla_{\\vec{R}}Z(\\vec{R})"} />. Substituting gives</p>
	<MakeMathDisplay tex={"\\frac{\\nabla_{\\vec{R}}Z(\\vec{R})}{Z(\\vec{R})}U(\\vec{R}) = -U(\\vec{R})\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - U(\\vec{R})\\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for the first term.</p>
      </div>
      <p>Next we have to find the gradient of the second term.</p>
      <div className="mathSubDiv">
	<h3>Gradient of the second term</h3>
	<p>Starting with the term</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\nabla_{\\vec{R}}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>we can move the gradient to the only part that depends on <MakeMath tex={"\\vec{R}"} /> </p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\nabla_{\\vec{R}}\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"-\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\nabla_{f(\\vec{r})}\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Once again convert the gradient</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Once again use the divergence theorem and the divergence product rule.</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V \\bigg(\\nabla_{\\vec{r}} \\cdot \\Big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg)\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Then the divergence product rule again</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V \\bigg(\\Big(\\nabla_{\\vec{r}}\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg)\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Use the product rule</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V \\bigg(\\Big(\\big((\\nabla_{\\vec{r}}e^{-\\frac{E(\\vec{r})}{k_B T}}) E(\\vec{r}) + e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}}E(\\vec{r})\\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg)\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Then the chain rule</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V \\bigg(\\Big(\\big((e^{-\\frac{E(\\vec{r})}{k_B T}} \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T}) E(\\vec{r}) + e^{-\\frac{E(\\vec{r})}{k_B T}} \\nabla_{\\vec{r}}E(\\vec{r})\\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) + \\Big(\\big(e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r})\\big) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg)\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<p>Factor out the exponential</p>
	<MakeMathDisplay tex={"\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\bigg( \\Big(\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big) + \\Big( \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\Big) + \\Big(E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg)\\delta(f(\\vec{r}) - \\vec{R})d\\vec{r}"} />
	<MakeMathDisplay tex={"\\bigg\\langle\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
	<p>This equation gives an expression for the second term.</p>
      </div>
      <p>Now we just add the expressions for the 2 terms together</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = "} />
      <MakeMathDisplay tex={"-U(\\vec{R})\\bigg\\langle \\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - U(\\vec{R})\\bigg\\langle \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}+" }/>
      <MakeMathDisplay tex={"\\bigg\\langle\\frac{\\nabla_{\\vec{r}}E(\\vec{r})}{-k_B T} E(\\vec{r}) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle E(\\vec{r}) \\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>We can group some terms</p>
      <MakeMathDisplay tex={"= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\nabla_{\\vec{r}}E(\\vec{r}) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\big(\\nabla_{\\vec{r}}E(\\vec{r}) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <p>So we have a final expression of</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}U(\\vec{R}) = \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <h3>Entropic term</h3>
      <p>Starting with the definition of entropy</p>
      <MakeMathDisplay tex={"TS(\\vec{R}) = -k_B T \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\ln\\bigg(\\frac{1}{Z(\\vec{R})}e^{-\\frac{E(\\vec{r})}{k_B T}}\\bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <p>Using basic algebraic manupulation</p>
      <MakeMathDisplay tex={"= \\frac{-k_B T}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(\\ln\\bigg(\\frac{1}{Z(\\vec{R})}\\bigg) + \\ln\\bigg(e^{-\\frac{E(\\vec{r})}{k_B T}}\\bigg)\\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\frac{-k_B T}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(-\\ln\\big(Z(\\vec{R})\\big) -\\frac{E(\\vec{r})}{k_B T}\\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\Bigg(k_B T\\ln\\big(Z(\\vec{R})\\big) + E(\\vec{r})\\Bigg) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big)\\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} \\delta(f(\\vec{r}) + \\vec{R}) d\\vec{r} - \\frac{1}{Z(\\vec{R})}\\int_V e^{-\\frac{E(\\vec{r})}{k_B T}} E(\\vec{r}) \\delta(f(\\vec{r}) - \\vec{R}) d\\vec{r}"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big)\\frac{1}{Z(\\vec{R})}Z(\\vec{R}) + U(\\vec{R})"} />
      <MakeMathDisplay tex={"= \\Big(k_B T\\ln\\big(Z(\\vec{R})\\big)\\Big) + U(\\vec{R})"} />
      <MakeMathDisplay tex={"= -F(\\vec{R}) + U(\\vec{R})"} />
      <p>So this is consistent that</p>
      <MakeMathDisplay tex={"TS(\\vec{R})= U(\\vec{R}) - F(\\vec{R})"} />
      <p>Then</p>
      <MakeMathDisplay tex={"T\\nabla_{\\vec{R}}S(\\vec{R})= \\nabla_{\\vec{R}}U(\\vec{R}) - \\nabla_{\\vec{R}}F(\\vec{R})"} />
      <p>and we can substitute</p>
      <MakeMathDisplay tex={"= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <MakeMathDisplay tex={"- \\bigg(\\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{\\vec{r}} E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} - k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}\\bigg)"} />
      <p>and one of the terms cancels out with a final expression of</p>
      <MakeMathDisplay tex={"T\\nabla_{\\vec{R}}S(\\vec{R})= \\bigg\\langle \\frac{E(\\vec{r}) - U(\\vec{R})}{-k_B T} \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{\\vec{r}}E(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + \\bigg\\langle (E(\\vec{r}) - U(\\vec{R}))\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})} + k_B T \\bigg\\langle\\nabla_{\\vec{r}} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}|\\vec{R})}"} />
      <hr />
      <h3>Isothermal-Isobaric Ensemble (not sure about this part)</h3>
      <p>Compared to the canonical ensemble the partition function is <MakeMath tex={"\\Delta(N, P, T)"} />.</p>
      <p>Consider the set <MakeMath tex={"V"} /> of possible points is parameterized by some variables <MakeMath tex={"V(\\vec{L}), \\vec{L} = \\langle L_1, L_2, \\dots, L_k \\rangle"} />.</p>
      <MakeMathDisplay tex={"\\Delta(N, P, T, \\vec{R}) = \\int_{\\mathbf{R}^k} e^{PV(\\vec{L})} Z(N, V(\\vec{L}), T, \\vec{R}) d\\vec{L}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} e^{PV(\\vec{L})} \\int_V e^{-\\frac{E(\\vec{r}, V(\\vec{L}))}{k_B T}} \\delta(f(\\vec{r}, \\vec{L}) = \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <MakeMathDisplay tex={"= \\int_{\\mathbb{R}^k} \\int_V e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\delta(f(\\vec{r}, \\vec{L}) = \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>And it can be shown that the Gibbs free energy</p>
      <MakeMathDisplay tex={"H(N, P, T, \\vec{R}) = U(N, P, T, \\vec{R}) - TS(N, P, T, \\vec{R}) + P\\langle V(N, P, T, \\vec{L})\\rangle"} />
      <p>And for previty will be written as</p>
      <MakeMathDisplay tex={"H(\\vec{R}) = U(\\vec{R}) - TS(\\vec{R}) + P\\langle V(\\vec{L})\\rangle"} />
      <p>and where the microstates are <MakeMath tex={"(\\vec{r}, \\vec{L}) \\in \\mathbb{R}^{3N + k}"} /> and the mapping function is now <MakeMath tex={"R = f(\\vec{r}, \\vec{L})"} />. The Gibbs free energy can be found to be:</p>
      <MakeMathDisplay tex={"H(\\vec{R}) = -k_B T \\ln(\\Delta(\\vec{R}))"} />
      <p>Then to calculate the gradient</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}}H(\\vec{R}) = -k_B T \\nabla_{\\vec{R}}\\ln(\\Delta(\\vec{R}))"} />
      <p>Chain rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\nabla_{\\vec{R}}\\Delta(\\vec{R})"} />
      <p>Put in the definition</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\nabla_{\\vec{R}}\\int_{\\mathbb{R}^k} \\int_{V(\\vec{L})} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Move gradient</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_{V(\\vec{L})} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\nabla_{\\vec{R}}\\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <MakeMathDisplay tex={"= k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_{V(\\vec{L})} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\nabla_{f(\\vec{r}, \\vec{L})}\\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Use the Jacobian trick again</p>
      <MakeMathDisplay tex={"= k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_{V(\\vec{L})} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\mathbf{J}_f^{+\\top}(\\vec{r})\\nabla_{(\\vec{r}, \\vec{L})}\\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Divergence theorm thingy again (WE SHOULD DOUBLE CHECK THIS IS CORRECT BECAUSE THE SURFACE INTEGRAL BOUNDARY CONDITIONS MIGHT GET WEIRD WHEN THE VOLUME CHANGES)</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_V \\Big(\\nabla_{(\\vec{r}, \\vec{L})} \\cdot e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big) \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Apply the divergence product rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_V \\bigg(\\Big(\\big(\\nabla_{(\\vec{r}, \\vec{L})} e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}}\\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)+"} />
      <MakeMathDisplay tex={"\\Big(e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg) \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Use the chain rule</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_V \\bigg(\\Big(\\big(e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\frac{\\nabla_{(\\vec{r}, \\vec{L})}(E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L}))}{-k_B T} \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)+"} />
      <MakeMathDisplay tex={"\\Big(e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}} \\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg) \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Factor</p>
      <MakeMathDisplay tex={"= -k_B T \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_V e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}}\\bigg(\\Big(\\big(\\frac{\\nabla_{(\\vec{r}, \\vec{L})}(E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L}))}{-k_B T} \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)+"} />
      <MakeMathDisplay tex={"\\Big(\\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg) \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>Multiply in the scalar terms</p>
      <MakeMathDisplay tex={"= \\frac{1}{\\Delta(\\vec{R})} \\int_{\\mathbb{R}^k} \\int_V e^{-\\frac{E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})}{k_B T}}\\bigg(\\Big(\\big(\\nabla_{(\\vec{r}, \\vec{L})}(E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)"} />
      <MakeMathDisplay tex={"-k_B T\\Big(\\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r})\\Big)\\bigg) \\delta(f(\\vec{r}, \\vec{L}) - \\vec{R}))d\\vec{r} d\\vec{L}"} />
      <p>And this is just the weighted average</p>
      <MakeMathDisplay tex={"= \\bigg\\langle \\nabla_{(\\vec{r}, \\vec{L})}(E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})) \\big) \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})} -k_B T \\bigg\\langle \\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})}"} />
      <MakeMathDisplay tex={"= \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{(\\vec{r}, \\vec{L})}(E(\\vec{r}, V(\\vec{L})) + PV(\\vec{L})) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})} -k_B T \\bigg\\langle \\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})}"} />
      <p>The final expression below is achieved</p>
      <MakeMathDisplay tex={"\\nabla_{\\vec{R}} H(\\vec{R}) = \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{(\\vec{r}, \\vec{L})}E(\\vec{r}, V(\\vec{L})) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})} + \\bigg\\langle \\mathbf{J}_f^{+\\top}(\\vec{r}) \\nabla_{(\\vec{r}, \\vec{L})}PV(\\vec{L}) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})} -k_B T \\bigg\\langle \\nabla_{(\\vec{r}, \\vec{L})} \\cdot \\mathbf{J}_f^{+\\top}(\\vec{r}) \\bigg\\rangle_{p(\\vec{r}, \\vec{L}| \\vec{R})}"} />

      <h3>Seperating energy, entropic, and pressure contribution</h3>
      <p>TODO</p>
    </Wrapper>
  );
}

export default DeltaGcode;
