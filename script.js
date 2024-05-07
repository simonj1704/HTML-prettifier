"use strict";

window.addEventListener("load", start);

function start() {
    console.log("start")
    const rootElement = document.documentElement.parentNode;
    console.log(rootElement)
    getHtmlElement(rootElement, 0);
}

function getHtmlElement(element, depth){
    let indent = "";
    for (let i = 0; i < depth; i++) {
        indent += "  ";
    }
    let list = element.childNodes;
    for (let i = 0; i < list.length; i++) {
        console.log(indent + "<" + list[i].nodeName + "> ");
        getHtmlElement(list[i], depth + 1);
    }
}