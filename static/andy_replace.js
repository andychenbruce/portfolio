addEventListener("load", main);

function main(){
    const to_replace = Array.from(document.getElementsByClassName("andy_replace"));
    if(to_replace != null){
	to_replace.forEach(replace);
    }
}

async function replace(elem){
    let src = elem.getAttribute("src");
    let text = await fetch(src).then(res => res.text());
    
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    elem.parentNode.replaceChild(newelem, elem);
}
