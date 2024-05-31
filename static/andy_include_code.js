import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';

addEventListener("load", main);

function main(){
    const to_replace = Array.from(document.getElementsByClassName("andy_include_code"));
    if(to_replace != null){
	to_replace.forEach(include_code);
    }
}

async function include_code(elem){
    let src = elem.getAttribute("src");
    let text = await fetch(src).then(res => res.text());

    elem.textContent = text;

    hljs.highlightElement(elem);
}
