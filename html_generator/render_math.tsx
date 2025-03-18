import katex from "katex";
import React from "react";


export function MakeMath({tex}: {tex: string}) {
  let tex_flat = tex.replace(/\n/g, "").trim();
  return (
    <span
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex_flat, {output: "mathml"}) }}
    ></span>
  )
}

export function MakeMathCenter({tex}: {tex: string}) {
  return (
    <div style={{ textAlign: "center" }}>
      <MakeMath
        tex={tex}
      />
    </div>
  )
}

export function MakeMathDisplay({tex}: {tex: string}) {
  let tex_flat = tex.replace(/\n/g, "").trim();
  return (
    <span
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex_flat, {output: "mathml", displayMode: true}) }}
    ></span>
  )
}
