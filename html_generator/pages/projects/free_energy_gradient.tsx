import React from "react";
import {MakeMath, MakeMathCenter} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function DeltaGcode({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>In the cannonical or NVT ensemble the number of particles, volume, and temperature are fixed. If we have a microstates <MakeMath tex={"r \\in \\mathbb{R}^{3N}"} /> and macrostates <MakeMath tex={"R \\in \\mathbb{R}^m"} /> and a coarse-graining function <MakeMath tex={"f \\in \\mathbb{R}^{3N} \\longrightarrow \\mathbb{R}^m"}/>. Each microstate has an energy <MakeMath tex={"E \\in \\mathbb{R}^{3N} \\longrightarrow \\mathbb{R}"} />. In the cannonical ensemble the Hemholtz free energy is:</p>
      <MakeMathCenter tex={"H(R) = -k_BT \\ln(Z(R))"} />
      <p>where the partition function is</p>
      <MakeMathCenter tex={"Z(R) = \\int e^{-\\frac{E(r)}{k_B T}} \\delta(f(r) - R) dr"} />
      <p>Taking the gradient of <MakeMath tex={"H"} /></p>
      <MakeMathCenter tex={"\\nabla_R H(R) = -k_BT \\nabla_R \\ln(Z(R)) =-k_BT \\dfrac{\\nabla_R Z(R)}{Z(R)}"} />
      <MakeMathCenter tex={"= -k_BT \\dfrac{1}{Z(R)} \\nabla_R Z(R)"} />
      <p>Then substituting in for <MakeMath tex={"Z"} /> gives</p>
      <MakeMathCenter tex={"= -k_BT \\dfrac{1}{Z(R)} \\nabla_R \\int e^{-\\frac{E(r)}{k_B T}} \\delta(f(r) - R) dr"} />
      <p>And the only part of the expression that depends on <MakeMath tex={"R"} /> is the delta function.</p>
      <MakeMathCenter tex={"= -k_BT \\dfrac{1}{Z(R)} \\int e^{-\\frac{E(r)}{k_B T}} \\nabla_R\\delta(f(r) - R) dr"} />
      <p>For any function <MakeMath tex={"\\nabla_b g(a-b) = -\\nabla_a g(a-b)"} /> so <MakeMath tex={"\\nabla_R \\delta(f(r)-R) = -\\nabla_{f(r)} \\delta(f(r)-R)"} /></p>
      <MakeMathCenter tex={"= k_BT \\dfrac{1}{Z(R)} \\int e^{-\\frac{E(r)}{k_B T}} \\nabla_{f(r)}\\delta(f(r) - R) dr"} />
      <p>The gradient can be converted with the Jacobian matrix <MakeMath tex={"\\nabla_{f(r)}\\delta(f(r) - R) = (J(f(r))^+)^T\\nabla_{r}\\delta(f(r) - R)"} />, using the pseudoinverse of the matrix.</p>
      <MakeMathCenter tex={"= k_BT \\dfrac{1}{Z(R)} \\int e^{-\\frac{E(r)}{k_B T}} (J(f(r))^+)^T\\nabla_{r}\\delta(f(r) - R) dr"} />
      <p>Next, using the divergence theorem where the total divergence of a volume <MakeMath tex={"\\Omega"} /> is equal to the surface integral <MakeMath tex={"\\Gamma"} />. If <MakeMath tex={"A"} /> is a scalar function and <MakeMath tex={"\\vec{B}"} /> is a vector function then</p>
      <MakeMathCenter tex={"\\int_{\\Gamma} A(r)\\vec{B}(r) \\cdot \\vec{n} dr = \\int_{\\Omega} \\nabla_r \\cdot (A(r)\\vec{B}(r)) dr"} />
      <p>Where <MakeMath tex={"\\vec{n}"} /> is the normal vector to the surface.</p>
      <p>The product rule for gradients</p>
      <MakeMathCenter tex={"\\nabla_r \\cdot (A(r)\\vec{B}(r)) = \\nabla_r A(r) \\cdot \\vec{B}(r) + A(r) \\nabla_r \\cdot \\vec{B}(r)"} />
      <p>substitutded becomes</p>
      <MakeMathCenter tex={"\\int_{\\Gamma} A(r)\\vec{B}(r) \\cdot \\vec{n} dr = \\int_{\\Omega} \\nabla_r A(r) \\cdot \\vec{B}(r) dr + \\int_{\\Omega} A(r) \\nabla_r \\cdot \\vec{B}(r) dr"} />
      <p><MakeMath tex={"(J^+)^T"} /> has dimension <MakeMath tex={"m \\times 3N"} /> so we can treat each row as a vector. In the following notation we apply dot products and gradients to each row of <MakeMath tex={"(J^+)^T"} />. We substitute <MakeMath tex={"A = \\delta{f(r) - R}"} /> and <MakeMath tex={"B = e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T"} />.</p>
      <MakeMathCenter tex={"\\int_{\\Gamma} \\delta(f(r)-R)e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T(r) \\cdot \\vec{n} dr"} />
      <MakeMathCenter tex={"= \\int_{\\Omega} \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\nabla_r \\delta(f(r)- R) dr + \\int_{\\Omega} \\nabla_r \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\delta(f(r) -R) dr"} />

      <p>In the limit that <MakeMath tex={"\\Omega"} /> expands to cover all of <MakeMath tex={"\\mathbb{R}^{3N}"} /> the boundary points <MakeMath tex={"x \\in \\Gamma"} /> will contain points that get infinitely far away from the origin <MakeMath tex={"\\displaystyle \\lim_{\\Omega \\rightarrow \\mathbb{R}^{3N}} |x| = \\infty"} />. We assume that the energy <MakeMath tex={"E(r)"} /> goes towards infinity away from the origin meaning <MakeMath tex={"e^{-\\frac{E(r)}{k_B T}}"} /> tends towards zero, and the delta function <MakeMath tex={"\\delta(f(r) - R)"} /> is always zero in the limit towards infinity. With these assumptions the boundary term on the left hand side of the equality disappers.</p>
      <MakeMathCenter tex={"0 = \\int e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\cdot \\nabla_r \\delta(f(r)- R) dr + \\int \\nabla_r \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\delta(f(r) -R) dr"} />
      <p>so then</p>
      <MakeMathCenter tex={"\\int e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\cdot \\nabla_r \\delta(f(r)- R) dr = - \\int \\nabla_r \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\delta(f(r) -R) dr"} />
      <p>and dot product-ing each row of a matrix is just matrix multiplication so</p>
      <MakeMathCenter tex={"\\int e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\nabla_r \\delta(f(r)- R) dr = - \\int \\nabla_r \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\delta(f(r) -R) dr"} />
      <p>Then substitue into the original equation gives</p>
      <MakeMathCenter tex={"\\nabla_R F(R) = -k_BT \\dfrac{1}{Z(R)} \\int \\nabla_r \\cdot e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T \\delta(f(r) -R) dr"} />
      <p>Using the gradient product rule again</p>
      <MakeMathCenter tex={"= -k_BT \\dfrac{1}{Z(R)} \\int (-e^{-\\frac{E(r)}{k_B T}}(J(f(r))^+)^T\\dfrac{\\nabla_r E(r)}{k_B T} + e^{-\\frac{E(r)}{k_B T}}\\nabla_r \\cdot(J(f(r))^+)^T)\\delta(f(r) -R) dr"} />
      <MakeMathCenter tex={"= \\dfrac{1}{Z(R)} \\int  e^{-\\frac{E(r)}{k_B T}}\\delta(f(r) -R) ((J(f(r))^+)^T(\\nabla_r E(r)) -k_B T(J(f(r))^+)^T\\nabla_r) dr"} />
      <MakeMathCenter tex={"= \\bigg\\langle (J(f(r))^+)^T(\\nabla_r E(r)) -k_B T(J(f(r))^+)^T\\nabla_r \\bigg\\rangle_R"} />
      <MakeMathCenter tex={"= \\bigg\\langle (J(f(r))^+)^T(\\nabla_r E(r)) \\bigg\\rangle - k_B T \\bigg\\langle(J(f(r))^+)^T\\nabla_r \\bigg\\rangle_R"} />
    </Wrapper>
  );
}

export default DeltaGcode;
