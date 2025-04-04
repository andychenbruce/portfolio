import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";


import Wrapper from "../../wrapper.js";

function DiracSpinors({title}: {title: string}) {
  let new_head = (
    <>
      <script type="module" src="./main.js"></script>
    </>
  );

  return (
    <Wrapper head={new_head} title={title}>
      <hr className="clearLeft" />
      <p>The energy mass shell equation is</p>
      <MakeMathDisplay
        tex={
	  "\\bigg(\\dfrac{E_0}{c}\\bigg)^2 = \\bigg(\\dfrac{E}{c}\\bigg)^2 - ||\\vec{p}||^2"
	}
      />
      <p>Where <MakeMath tex={"E_0 = mc^2"}/> is the rest energy, <MakeMath tex={"E"}/> is the total energy and <MakeMath tex={"\\vec{p}"}/> is the momentum vector.</p>
      <p>Replacing energy and momentum with their respective wave equation operators <MakeMath tex={"E = i\\hbar\\dfrac{\\partial}{\\partial t}"}/> and <MakeMath tex={"p = -i\\hbar\\bigg\\langle\\dfrac{\\partial}{\\partial x}, \\dfrac{\\partial}{\\partial y}, \\dfrac{\\partial}{\\partial z}\\bigg\\rangle"}/> gives the Klein-Gordon equation.</p>
      <MakeMathDisplay
        tex={
	  "\\bigg(\\dfrac{E_0}{c}\\bigg)^2 = \\hbar^2\\bigg(-\\dfrac{1}{c^2}^2 \\dfrac{\\partial^2}{\\partial t^2} + \\dfrac{\\partial^2}{\\partial x^2} + \\dfrac{\\partial^2}{\\partial y^2} + \\dfrac{\\partial^2}{\\partial z^2}\\bigg)"
	}
      />
      <MakeMathDisplay
        tex={
	  "-\\dfrac{1}{\\hbar^2}\\bigg(\\dfrac{E_0}{c}\\bigg)^2 = \\bigg(\\dfrac{1}{c^2}^2 \\dfrac{\\partial^2}{\\partial t^2} - \\dfrac{\\partial^2}{\\partial x^2} - \\dfrac{\\partial^2}{\\partial y^2} - \\dfrac{\\partial^2}{\\partial z^2}\\bigg)"
	}
      />
      <p>Assume there exists some expression that squares to the operators on the right.</p>
      <MakeMathDisplay
	tex={"\\bigg(\\gamma_t \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t} + \\gamma_x \\dfrac{\\partial}{\\partial x} + \\gamma_y \\dfrac{\\partial}{\\partial y} + \\gamma_z \\dfrac{\\partial}{\\partial z} \\bigg)^2 = \\dfrac{1}{c^2}^2 \\dfrac{\\partial^2}{\\partial t^2} - \\dfrac{\\partial^2}{\\partial x^2} - \\dfrac{\\partial^2}{\\partial y^2} - \\dfrac{\\partial^2}{\\partial z^2}"}
      />
      <p>Multiplying the left side out gives the below</p>
      <MakeMathDisplay
	tex={"\\gamma_t^2 \\dfrac{1}{c^2} \\dfrac{\\partial^2}{\\partial t^2}"
          + "+ \\gamma_t \\gamma_x \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial t \\partial x}"
	  + "+ \\gamma_t \\gamma_y \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial t \\partial y}"
          + "+ \\gamma_t \\gamma_z \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial t \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={"+ \\gamma_x \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial x \\partial t}"
	  + "+ \\gamma_x^2 \\dfrac{\\partial^2}{\\partial x^2}"
	  + "+ \\gamma_x \\gamma_y \\dfrac{\\partial^2}{\\partial x \\partial y}"
	  + "+ \\gamma_x \\gamma_z \\dfrac{\\partial^2}{\\partial x \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={"+ \\gamma_y \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial y \\partial t}"
	  + "+ \\gamma_y \\gamma_x \\dfrac{\\partial^2}{\\partial y \\partial x}"
	  + "+ \\gamma_y^2 \\dfrac{\\partial^2}{\\partial y^2}"
	  + "+ \\gamma_y \\gamma_z \\dfrac{\\partial^2}{\\partial y \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={"+ \\gamma_z \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial^2}{\\partial z \\partial t}"
	  + "+ \\gamma_z \\gamma_x \\dfrac{\\partial^2}{\\partial z \\partial x}"
	  + "+ \\gamma_z \\gamma_y \\dfrac{\\partial^2}{\\partial z \\partial y}"
	  + "+ \\gamma_z^2 \\dfrac{\\partial^2}{\\partial z^2}"
	}
      />
      <MakeMathDisplay
	tex={"= \\dfrac{1}{c^2}^2 \\dfrac{\\partial^2}{\\partial t^2} - \\dfrac{\\partial^2}{\\partial x^2} - \\dfrac{\\partial^2}{\\partial y^2} - \\dfrac{\\partial^2}{\\partial z^2}"}
      />
      

      <p>Assuming the derivative operators are commutative then then grouping</p>
      <MakeMathDisplay
	tex={"\\gamma_t^2 \\dfrac{1}{c^2} \\dfrac{\\partial}{\\partial t^2}"
	  + "+ \\gamma_x^2 \\dfrac{\\partial}{\\partial x^2}"
	  + "+ \\gamma_y^2 \\dfrac{\\partial}{\\partial y^2}"
	  + "+ \\gamma_z^2 \\dfrac{\\partial}{\\partial z^2}"} />
      <MakeMathDisplay
	tex={"+ (\\gamma_t \\gamma_x + \\gamma_x \\gamma_t) \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t \\partial x}"}
      />
      <MakeMathDisplay
	tex={
	  "+ (\\gamma_t \\gamma_y + \\gamma_y \\gamma_t) \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t \\partial y}"
	}
      />
      <MakeMathDisplay
	tex={
	  "+ (\\gamma_t \\gamma_x + \\gamma_z \\gamma_t) \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={
	  "+ (\\gamma_x \\gamma_y + \\gamma_y \\gamma_x) \\dfrac{\\partial}{\\partial x \\partial y}"
	}
      />
      <MakeMathDisplay
	tex={
	  "+ (\\gamma_x \\gamma_z + \\gamma_z \\gamma_x) \\dfrac{\\partial}{\\partial x \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={
	  "+ (\\gamma_y \\gamma_z + \\gamma_z \\gamma_y) \\dfrac{\\partial}{\\partial y \\partial z}"
	}
      />
      <MakeMathDisplay
	tex={"= \\dfrac{1}{c^2}^2 \\dfrac{\\partial^2}{\\partial t^2} - \\dfrac{\\partial^2}{\\partial x^2} - \\dfrac{\\partial^2}{\\partial y^2} - \\dfrac{\\partial^2}{\\partial z^2}"}
      />

      <p>Assuming the derivatives are independent the only solution can be that</p>
      <MakeMathDisplay
	tex={"\\gamma_t^2 = 1"}
      />
      <MakeMathDisplay
	tex={"\\gamma_x^2 = -1"}
      />
      <MakeMathDisplay
	tex={"\\gamma_y^2 = -1"}
      />
      <MakeMathDisplay
	tex={"\\gamma_z^2 = -1"}
      />
      <MakeMathDisplay
	tex={"\\gamma_t \\gamma_x + \\gamma_x \\gamma_t = 0"
	}
      />
      <MakeMathDisplay
	tex={
	  "\\gamma_t \\gamma_y + \\gamma_y \\gamma_t = 0"
	}
      />
      <MakeMathDisplay
	tex={
	  "\\gamma_t \\gamma_x + \\gamma_z \\gamma_t = 0"
	}
      />
      <MakeMathDisplay
	tex={
	  "\\gamma_x \\gamma_y + \\gamma_y \\gamma_x = 0"
	}
      />
      <MakeMathDisplay
	tex={
	  "\\gamma_x \\gamma_z + \\gamma_z \\gamma_x = 0"
	}
      />
      <MakeMathDisplay
	tex={
	  "\\gamma_y \\gamma_z + \\gamma_z \\gamma_y = 0"
	}
      />
      <p>These just so happen to be basis elements of a Clifford algebra <MakeMath tex={"\\text{Cl}(V, Q)"} /> over a vector space with basis elements</p>
      <MakeMathDisplay
        tex={
	  "t\\gamma_t + x\\gamma_x + y\\gamma_y + z\\gamma_z \\in V = \\mathbb{R}^4"
	}
      />
      <p>and quadratic form</p>
      <MakeMathDisplay
        tex={
	  "Q(t\\gamma_t + x\\gamma_x + y\\gamma_y + z\\gamma_z) = t^2 - x^2 - y^2 - z^2"
	}
      />
      <p>By "square rooting" both sides of the Klein-Gordon equation the resulting equation, the Dirac equation, can then be written as</p>
      <MakeMathDisplay
        tex={
	  "\\pm\\dfrac{i}{\\hbar}\\dfrac{E_0}{c} = \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t} + \\gamma_x \\dfrac{\\partial}{\\partial x} + \\gamma_y \\dfrac{\\partial}{\\partial y} + \\gamma_z \\dfrac{\\partial}{\\partial z}"
	}
      />
      <p>(The choice of plus minus will just switch matter and antimatter.) After applying the operator to the wave field <MakeMath tex={"\\psi(t, x, y, z)"}/> we get</p>
      <MakeMathDisplay
        tex={
	  "\\pm\\dfrac{i}{\\hbar}\\dfrac{E_0}{c}\\psi(t, x, y, z) = \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial t} + \\gamma_x \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial x} + \\gamma_y \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial y} + \\gamma_z \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial z}"
	}
      />
      <p>Whatever the elements of the field <MakeMath tex={"\\psi(t, x, y, z)"}/> are multiplied on the left by the basis elements of the Clifford algebra they stay in the same group. This behaviour is a left ideal over the Clifford algebra as a ring. A left ideal is a subset <MakeMath tex={"S \\subset Cl(V, Q)"}/> where <MakeMath tex={"\\forall (a \\in Cl(V, Q)) . \\forall (b \\in S) . ab \\in S"}/> it says in the subset when left multiplied by anything.</p>
      <p>We can construct a minimal left ideal from any primitive idempotent <MakeMath tex={"p = p^2"}/>. The choice of idempotent doesn't matter as all minimal left ideals are isomorphic. We will arbitrarily choose</p>
      <MakeMathDisplay
        tex={
	  "p = \\frac{1}{2}(1 + \\gamma_t)"
	}
      />
      and
      <MakeMathDisplay
        tex={
	  "p^2 = \\frac{1}{4}(1 + 2\\gamma_t + \\gamma_t^2) = \\frac{1}{4}(2 + 2\\gamma_t) = \\frac{1}{2}(1 + \\gamma_t) = p"
	}
      />

      <p>Then to generate the minimal left ideal we project all elements <MakeMath tex={"a \\in \\text{CL}(V, Q)"}/> to <MakeMath tex={"ap"}/></p>
      <p>Any element <MakeMath tex={"x"}/> can be written in its 16 dimensional basis: </p>
      <MakeMathDisplay
        tex={
	  "a ="
	}
      />
      <MakeMathDisplay
        tex={
	  "X"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_t\\gamma_t"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_x\\gamma_x"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_y\\gamma_y"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_z\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tx}\\gamma_t\\gamma_x"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{ty}\\gamma_t\\gamma_y"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tz}\\gamma_t\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{xy}\\gamma_x\\gamma_y"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{xz}\\gamma_x\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{yz}\\gamma_y\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txy}\\gamma_t\\gamma_x\\gamma_y"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txz}\\gamma_t\\gamma_x\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tyz}\\gamma_t\\gamma_y\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tyz}\\gamma_x\\gamma_y\\gamma_z"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txyz}\\gamma_t\\gamma_x\\gamma_y\\gamma_z"
	}

      />
      <p>After multiplying by <MakeMath tex={"p"}/></p>
      <MakeMathDisplay
        tex={
	  "ap = a\\frac{1}{2}(1 + \\gamma_t) = \\frac{1}{2}\\bigg("
	}
      />
      <MakeMathDisplay
        tex={
	  "X(1 + \\gamma_t)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_t(\\gamma_t+1)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_x(\\gamma_x - \\gamma_t\\gamma_x)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_y(\\gamma_y - \\gamma_t\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_z(\\gamma_z - \\gamma_t\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tx}(\\gamma_t\\gamma_x - \\gamma_x)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{ty}(\\gamma_t\\gamma_y - \\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tz}(\\gamma_t\\gamma_z - \\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{xy}(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{xz}(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{yz}(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txy}(\\gamma_t\\gamma_x\\gamma_y + \\gamma_x\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txz}(\\gamma_t\\gamma_x\\gamma_y + \\gamma_x\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{tyz}(\\gamma_t\\gamma_y\\gamma_z + \\gamma_y\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{xyz}(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ X_{txyz}(\\gamma_t\\gamma_x\\gamma_y\\gamma_z - \\gamma_x\\gamma_y\\gamma_z) \\bigg)"
	}
      />

      <p>Then grouping them makes an 8 dimensional basis:</p>
      <MakeMathDisplay
        tex={
	  "ap = \\frac{1}{2}\\bigg("
	}
      />
      <MakeMathDisplay
        tex={
	  "(X + X_t)(1 + \\gamma_t)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_x - X_{tx})(\\gamma_x - \\gamma_t\\gamma_x)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_y - X_{ty})(\\gamma_y - \\gamma_t\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_z - X_{tz})(\\gamma_z - \\gamma_t\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_{xy} + X_{txy})(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_{xz} + X_{txz})(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_{yz} + X_{tyz})(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ (X_{xyz} - X_{txyz})(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z) \\bigg)"
	}
      />

      <p>Then if we represent this as a vector <MakeMath tex={"\\langle A, B, C, D, E, F, G, H \\rangle"}/>. These elements of a minimal left ideal are the elements of the field <MakeMath tex={"\\psi(t, x, y, z)"}/>.</p>
            <MakeMathDisplay
        tex={
	  "\\psi(t, x, y, z) = \\frac{1}{2}\\bigg("
	}
      />
      <MakeMathDisplay
        tex={
	  "A(1 + \\gamma_t)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ B(\\gamma_x - \\gamma_t\\gamma_x)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ C(\\gamma_y - \\gamma_t\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ D(\\gamma_z - \\gamma_t\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ E(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ F(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ G(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"
	}
      />
      <MakeMathDisplay
        tex={
	  "+ H(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z) \\bigg)"
	}
      />
      <p>Then substituting into the Dirac equation</p>
      <MakeMathDisplay
        tex={
	  "\\pm\\dfrac{i}{\\hbar}\\dfrac{E_0}{c}\\psi(t, x, y, z) = \\gamma_t \\dfrac{1}{c} \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial t} + \\gamma_x \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial x} + \\gamma_y \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial y} + \\gamma_z \\dfrac{\\partial\\psi(t, x, y, z)}{\\partial z}"
	}
      />
      <p> with the subsituted in vectors</p>
      <MakeMathDisplay
        tex={
	  `\\pm\\dfrac{i}{\\hbar}\\dfrac{E_0}{c}
\\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
=
\\gamma_t \\dfrac{1}{c} \\dfrac{\\partial}{\\partial t}
\\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
+ \\gamma_x \\dfrac{\\partial}{\\partial x}
\\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
+ \\gamma_y \\dfrac{\\partial}{\\partial y}
\\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
+ \\gamma_z \\dfrac{\\partial}{\\partial z}
\\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
`
	}
      />
      <p>We can find how the basis elements <MakeMath tex={"\\gamma_t, \\gamma_x, \\gamma_y, \\gamma_z"}/> act on elements of the minimal left ideal, or <MakeMath tex={"\\psi"}/>, when left multiplied..</p>
      <MakeMathDisplay
        tex={
	  "\\gamma_t(A(1 + \\gamma_t)"}/>
      <MakeMathDisplay
        tex={
	  "B(\\gamma_x - \\gamma_t\\gamma_x) + C(\\gamma_y - \\gamma_t\\gamma_y) + D(\\gamma_z - \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y) + F(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z) + G(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z))"}/>
      <MakeMathDisplay
        tex={
	  "="}/>
      <MakeMathDisplay
        tex={
	  "A(\\gamma_t + 1)"}/>
      <MakeMathDisplay
        tex={
	  "B(\\gamma_t\\gamma_x - \\gamma_x) + C(\\gamma_t\\gamma_y - \\gamma_y) + D(\\gamma_t\\gamma_z - \\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_t\\gamma_x\\gamma_y + \\gamma_x\\gamma_y) + F(\\gamma_t\\gamma_x\\gamma_z + \\gamma_x\\gamma_z) + G(\\gamma_t\\gamma_y\\gamma_z + \\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_t\\gamma_x\\gamma_y\\gamma_z - \\gamma_x\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={`
= \\begin{bmatrix}
A \\\\
-B \\\\
-C \\\\
-D \\\\
E \\\\
F \\\\
G \\\\\
-H
\\end{bmatrix}
`}/>
      <p>So the matrix representation is</p>
      <MakeMathDisplay
        tex={`\\gamma_t \\mapsto
\\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & -1 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & -1 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & -1
\\end{bmatrix}
`}/>
      <p>Doing it for <MakeMath tex={"\\gamma_x"}/>.</p>
      <MakeMathDisplay
        tex={
	  "\\gamma_x(A(1 + \\gamma_t)"}/>
      <MakeMathDisplay
        tex={
	  "B(\\gamma_x - \\gamma_t\\gamma_x) + C(\\gamma_y - \\gamma_t\\gamma_y) + D(\\gamma_z - \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y) + F(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z) + G(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z))"}/>
      <MakeMathDisplay
        tex={
	  "="}/>
      <MakeMathDisplay
        tex={
	  "A(\\gamma_x - \\gamma_t\\gamma_x)"}/>
      <MakeMathDisplay
        tex={
	  "B(-1 - \\gamma_t) + C(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y) + D(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(-\\gamma_y + \\gamma_t\\gamma_y) + F(-\\gamma_z + \\gamma_t\\gamma_z) + G(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(-\\gamma_y\\gamma_z - \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={`
= \\begin{bmatrix}
-B \\\\
A \\\\
-E\\\\
-F\\\\
C\\\\
D\\\\
-H\\\\\
G
\\end{bmatrix}
`}/>
      <p>So the matrix representation is</p>
      <MakeMathDisplay
        tex={`\\gamma_x \\mapsto
\\begin{bmatrix}
0 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & -1 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & -1 & 0 & 0 \\\\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & -1 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
\\end{bmatrix}
`}/>
      <p>Doing it for <MakeMath tex={"\\gamma_y"}/>.</p>
      <MakeMathDisplay
        tex={
	  "\\gamma_y(A(1 + \\gamma_t)"}/>
      <MakeMathDisplay
        tex={
	  "B(\\gamma_x - \\gamma_t\\gamma_x) + C(\\gamma_y - \\gamma_t\\gamma_y) + D(\\gamma_z - \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y) + F(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z) + G(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z))"}/>
      <MakeMathDisplay
        tex={
	  "="}/>
      <MakeMathDisplay
        tex={
	  "A(\\gamma_y - \\gamma_t\\gamma_y)"}/>
      <MakeMathDisplay
        tex={
	  "B(-\\gamma_x\\gamma_y - \\gamma_t\\gamma_x\\gamma_y) + C(-1 - \\gamma_t) + D(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x - \\gamma_t\\gamma_x) + F(-\\gamma_x\\gamma_y\\gamma_z + \\gamma_t\\gamma_x\\gamma_y\\gamma_z) + G(-\\gamma_z + \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z)"}/>
      <MakeMathDisplay
        tex={`
= \\begin{bmatrix}
-C\\\\
E\\\\
A\\\\
-G\\\\
-B\\\\
H\\\\
D\\\\\
-F
\\end{bmatrix}
`}/>
      <p>So the matrix representation is</p>
      <MakeMathDisplay
        tex={`\\gamma_y \\mapsto
\\begin{bmatrix}
0 & 0 & -1 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & -1 & 0 \\\\
0 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\\\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & -1 & 0 & 0
\\end{bmatrix}
`}/>
      <p>Doing it for <MakeMath tex={"\\gamma_z"}/>.</p>
      <MakeMathDisplay
        tex={
	  "\\gamma_z(A(1 + \\gamma_t)"}/>
      <MakeMathDisplay
        tex={
	  "B(\\gamma_x - \\gamma_t\\gamma_x) + C(\\gamma_y - \\gamma_t\\gamma_y) + D(\\gamma_z - \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x\\gamma_y + \\gamma_t\\gamma_x\\gamma_y) + F(\\gamma_x\\gamma_z + \\gamma_t\\gamma_x\\gamma_z) + G(\\gamma_y\\gamma_z + \\gamma_t\\gamma_y\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "H(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z))"}/>
      <MakeMathDisplay
        tex={
	  "="}/>
      <MakeMathDisplay
        tex={
	  "A(\\gamma_z - \\gamma_t\\gamma_z)"}/>
      <MakeMathDisplay
        tex={
	  "B(-\\gamma_x\\gamma_z - \\gamma_t\\gamma_x\\gamma_z) + C(-\\gamma_y\\gamma_z - \\gamma_t\\gamma_y\\gamma_z) + D(-1 - \\gamma_t)"}/>
      <MakeMathDisplay
        tex={
	  "E(\\gamma_x\\gamma_y\\gamma_z - \\gamma_t\\gamma_x\\gamma_y\\gamma_z) + F(\\gamma_x - \\gamma_t\\gamma_x) + G(\\gamma_y - \\gamma_t\\gamma_y)"}/>
      <MakeMathDisplay
        tex={
	  "H(-\\gamma_x\\gamma_y - \\gamma_t\\gamma_x\\gamma_y)"}/>
      <MakeMathDisplay
        tex={`
= \\begin{bmatrix}
-D\\\\
F\\\\
G\\\\
A\\\\
-H\\\\
-B\\\\
-C\\\\
E
\\end{bmatrix}
`}/>
      <p>So the matrix representation is</p>
      <MakeMathDisplay
        tex={`\\gamma_z \\mapsto
\\begin{bmatrix}
0 & 0 & 0 & -1 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & -1 \\\\
0 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & -1 & 0 & 0 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0
\\end{bmatrix}
`}/>
      <p>If we then change the vector representation in <MakeMath tex={"\\mathbb{R}^8"}/> to <MakeMath tex={"\\mathbb{C}^4"}/></p>
      <MakeMathDisplay
        tex={`\\psi(t, x, y, z) \\mapsto \\begin{bmatrix}
A \\\\
B \\\\
C \\\\
D \\\\
E \\\\
F \\\\
G \\\\
H
\\end{bmatrix}
\\mapsto
\\begin{bmatrix}
A + iG \\\\
F + iE \\\\
B + iH \\\\
D + iC
\\end{bmatrix}
`} />
      <p>the corresponding matricies map to</p>
      <MakeMathDisplay
        tex={`\\gamma_t \\mapsto
\\begin{bmatrix}
1 & 0 & 0 & 0 \\\\
0 & 1 & 0 & 0 \\\\
0 & 0 & -1 & 0 \\\\
0 & 0 & 0 & -1
\\end{bmatrix},
\\gamma_x \\mapsto
\\begin{bmatrix}
0 & 0 & -1 & 0 \\\\
0 & 0 & 0 & 1 \\\\
1 & 0 & 0 & 0 \\\\
0 & -1 & 0 & 0
\\end{bmatrix},
\\gamma_y \\mapsto
\\begin{bmatrix}
0 & 0 & 0 & i \\\\
0 & 0 & -i & 0 \\\\
0 & -i & 0 & 0 \\\\
i & 0 & 0 & 0
\\end{bmatrix},
\\gamma_z \\mapsto
\\begin{bmatrix}
0 & 0 & 0 & -1 \\\\
0 & 0 & -1 & 0 \\\\
0 & 1 & 0 & 0 \\\\
1 & 0 & 0 & 0
\\end{bmatrix}
`}/>
      <p>and these just so happen to be the Dirac matricies, showing their derivation.</p>
    </Wrapper>
  );
  
}

export default DiracSpinors;
