import katex from "katex";
import React from "react";


export function MakeMath({tex}: {tex: string}) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, {output: "mathml"}) }}
    ></span>
  )
}

export function MakeMathCenter({tex}: {tex: string}) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, {output: "mathml", displayMode: true}) }}
    ></span>
  )
}
