"use strict";

function generate() {
    let i = 0;
    let numbers = Array();
    while (i != 20) {
        let latestNum = Math.floor(Math.random() * 101);
        while (latestNum in numbers) {
            latestNum = Math.floor(Math.random() * 101);
        }
        numbers[i] = latestNum;
        i++;
    }
    const gridContainer = document.querySelector("#grid-container");
    for (let index = 0; index < numbers.length; index++) {
        let Element = document.createElement("div");
        Element.className = "grid-item";
        let columnNum = index + 1;
        Element.className += " gi-" + columnNum;
        Element.setAttribute("data-value", numbers[index]);
        Element.style = "height: " + numbers[index] + "%";
        gridContainer.appendChild(Element);
    }
}

async function sort() {
    const Container = document.querySelector("#grid-container");
    let Children = [...Container.childNodes];
    for (let index = 0; index < Children.length; index++) {
        if (Children[index].nodeName.toLowerCase() == 'div') {
            for (let index2 = 0; index2 < Children.length; index2++) {
                if (Children[index2].nodeName.toLowerCase() == 'div') {
                    let node1class = Children[index].className;
                    let node1val = Children[index].getAttribute("data-value");
                    let node2class = Children[index2].className;
                    let node2val = Children[index2].getAttribute("data-value");
                    if (node1val > node2val) {
                        Children[index].className = node2class;
                        Children[index2].className = node1class;
                        let temp = Children[index2];
                        Children[index2] = Children[index];
                        Children[index] = temp;
                        await sleep(300);
                    }
                }
            }
        }
    }
    console.log("finished");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}