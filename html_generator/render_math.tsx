import katex from "katex";
import React from "react";


export function MakeMath({tex}: {tex: string}) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex) }}
    ></span>
  )
}
