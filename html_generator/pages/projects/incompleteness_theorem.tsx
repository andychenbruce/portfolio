import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function IncompletenessTheorem({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <p>Create a meta function <MakeMath tex={"\\mathbf{g}"} /> that bijects between natural numbers and formulas of a formal system <MakeMath tex={"F"} /> that has first order logic and Peano arithmetic. Also create a meta function <MakeMath tex={"\\mathbf{k}"} /> that turns the meta natural numbers into the symbols for the formal systems Peano arithmetic numerals. </p>
      <h2>Diagonal Lemma</h2>
      <p>Make substitution function that applies to the Godel numeral of a function with a single free variable with a Peano arithmetic numeral.</p>
      <MakeMathDisplay tex={"a = \\mathbf{g}(\"\\alpha(\\cdot)\")"} />
      <MakeMathDisplay tex={"\\mathbf{sub}(a, b) = \\lceil \\alpha(\\mathbf{k}(b)) \\rceil"} />
      <p>Then define diagonalization function.</p>
      <MakeMathDisplay tex={"\\mathbf{d}(n) = \\mathbf{sub}(n, n)"} />
      <p>and a formula.</p>
      <MakeMathDisplay tex={"F \\vdash \\gamma(x) = \\forall y \\Big[ \\text{Diag}(x, y) \\rightarrow \\psi(y) \\Big]"} />
      <p>and Diag is a function satisfying</p>
      <MakeMathDisplay tex={"\\Big(\\mathbf{d}(x) = y\\Big) \\Longrightarrow \\text{Diag}(\\mathbf{k}(x), \\mathbf{k}(y))"} />
      <p>let</p>
      <MakeMathDisplay tex={"p = \\mathbf{g}(\"\\gamma(x)\")"} />
      <p>then let</p>
      <MakeMathDisplay tex={"\\phi \\equiv \\gamma(p) \\equiv \\forall y \\Big[ \\text{Diag}(\\mathbf{k}(p), y) \\rightarrow \\psi(y) \\Big]"} />
      <hr/>
      <p>Then prove that</p>
      <MakeMathDisplay tex={"\\mathbf{d}(p) = \\mathbf{sub}(p, p) = \\mathbf{g}(\"\\gamma(\\mathbf{k}(p))\") = \\mathbf{g}(\"\\phi\")"} />
      <p>and substituting</p>
      <MakeMathDisplay tex={"F \\vdash \\phi \\leftrightarrow \\forall y \\Big[ \\mathbf{k}(\\mathbf{g}(\"\\phi\")) = y \\rightarrow \\psi(y) \\Big]"} />
      <p>then</p>
      <MakeMathDisplay tex={"\\phi \\leftrightarrow \\psi(\\mathbf{k}(\\mathbf{g}(\"\\phi\")))"} />
      <h2>First incompleteness theorem</h2>
      <p>Use diagonal lemma to make</p>
      <MakeMathDisplay tex={"G \\leftrightarrow \\neg \\text{Prov}_F(\\mathbf{k}(\\mathbf{g}(G)))"} />
      <p>So if <MakeMath tex={"G"} /> is provable it is true but that means it's not provable. If <MakeMath tex={"\\neg G"} /> is provable then it means that <MakeMath tex={"G"} /> is provable so the formal system isn't consistent</p>
    </Wrapper>
  );
}

export default IncompletenessTheorem;
