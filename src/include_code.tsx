import React from 'react';
import hljs from 'highlight.js';
import fs from 'fs';
export function AndyCodeBlock({source_path, language}){
  let test_code: string = fs.readFileSync(source_path, 'utf8');
  const highlightedCode = hljs.highlight(test_code, {language: language}).value;

  return (<pre><code className="codeClass hljs" dangerouslySetInnerHTML={{__html: highlightedCode}}></code></pre>);
}
