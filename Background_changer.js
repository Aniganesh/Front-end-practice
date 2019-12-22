"use strict";

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    e.target.parentElement.style = "background-color:" + getRandomColourHex() + ";";
});

function getRandomColourHex() {
    let R = Math.floor(Math.random() * 256).toString(16);
    R.length === 2 ? R = R : R = "0" + R;
    let G = Math.floor(Math.random() * 256).toString(16);
    G.length === 2 ? G = G : G = "0" + G;
    let B = Math.floor(Math.random() * 256).toString(16);
    B.length === 2 ? B = B : B = "0" + B;
    const hex = "#" + R + G + B;
    return hex;
}