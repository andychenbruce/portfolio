import katex from "katex";
import React from "react";

function tex_to_mathml(tex: string, display_mode: boolean): string{
  let tex_flat = tex.replace(/\n/g, "").trim();
  return katex.renderToString(tex_flat, {output: "mathml", displayMode: display_mode});
}

export function MakeMath({tex}: {tex: string}) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: tex_to_mathml(tex, false) }}>
    </span>
  )
}

// export function MakeMathDisplay({tex}: {tex: string}) {
//   return (
//     <div className="displayCenterMath"
//       dangerouslySetInnerHTML={{ __html: tex_to_mathml(tex, false) }}>
//     </div>
//   )
// }

export function MakeMathDisplay({tex}: {tex: string}) {
  return (
    <div className="displayCenterMath"
      dangerouslySetInnerHTML={{ __html: tex_to_mathml(tex, true) }}>
    </div>
  )
}
