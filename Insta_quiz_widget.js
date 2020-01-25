"use strict";

const optionGroup = document.querySelector(".opt-group");


optionGroup.addEventListener("click", answerSelector, true)

async function answerSelector(event) {
    if (event.target.hasAttribute("data-correct")) {
        if (event.target.getAttribute("data-correct").toString() == "true") {
            event.target.className += " end correct";
            const indicator = event.target.querySelector(".indicator");
            indicator.innerText = "✓";
            const WrongOptions = event.target.parentElement.querySelectorAll("[data-correct='false']");
            [...WrongOptions].forEach(function (item) {
                item = item.querySelector(".indicator");
                item.style = "color: #c35358; border-color: #c35358;"
                item.innerText = "✗"
            })
            await burstConfetti();
            destroyConfetti();
            removeListener();
        } else {
            event.target.className += " end wrong";
            event.target.parentElement.parentElement.className += " shake";
            removeListener();
        }
    }
}


function burstConfetti() {
    const colours = ["yellow-bg", "red-bg", "purple-bg"];
    const confettiTypes = ["confetti-rect", "confetti-round"];
    const confettiContainer = document.getElementById("confetti-container");
    const styleElement = document.createElement("style");

    confettiContainer.appendChild(styleElement);
    const numConfetti = 15;
    for (let i = 0; i < numConfetti; i++) {
        const xPos = Math.floor(Math.random() * 51);
        const yPos = Math.floor(Math.random() * 51);
        const div = document.createElement("div");
        confettiContainer.appendChild(div);
        const style = ".class" + i + "{top:" + yPos + "%; right: " + xPos + "%; }";
        styleElement.innerHTML += style;
        div.className = confettiTypes[Math.floor(Math.random() * (confettiTypes.length))] + " " + colours[Math.floor(Math.random() * (colours.length))] + " conf-movement class" + i;
    }
    for (let i = 0; i < numConfetti; i++) {
        const xPos = Math.floor(Math.random() * 51);
        const yPos = Math.floor(Math.random() * 51);
        const div = document.createElement("div");
        confettiContainer.appendChild(div);
        const style = ".class" + (14 + i) + "{top: " + yPos + "%; left: " + xPos + "%; }";
        styleElement.innerHTML += style;
        div.className = confettiTypes[Math.floor(Math.random() * (confettiTypes.length))] + " " + colours[Math.floor(Math.random() * (colours.length))] + " conf-movement1 class" + (14 + i);
    }
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function destroyConfetti() {
    const confetti = [...document.querySelectorAll("[class*=conf-movement]")];
    confetti.forEach(async function (element) {
        element.style = "top: 100%; left: 50%;";
        await sleep(100);
        element.parentElement.removeChild(element);
    });
}

function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

function removeListener() {
    optionGroup.removeEventListener("click", answerSelector, true);
}