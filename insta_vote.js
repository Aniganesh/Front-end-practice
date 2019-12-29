"use strict";

const optionNo = document.querySelector("#no");
const optionYes = document.querySelector("#yes");

function yesFunction() {
    const randPercent = Math.floor(Math.random() * 101);
    const remaining = 100 - randPercent;
    optionNo.innerText = remaining + "%";
    optionYes.innerText = randPercent + "%";
    optionYes.style = "color:black";
    optionNo.style = "color: black";
    optionYes.parentElement.style = "background: darkgrey; width: "
        + randPercent + "%";
    optionNo.parentElement.style = "width: " + remaining + "%";
    removeListeners();
}

function noFunction() {
    const randPercent = Math.floor(Math.random() * 101);
    const remaining = 100 - randPercent;
    optionYes.innerText = remaining + "%";
    optionNo.innerText = randPercent + "%";
    optionYes.style = "color:black";
    optionNo.style = "color: black";
    optionNo.parentElement.style = "background: darkgrey; width: "
        + randPercent + "%";
    optionYes.parentElement.style = "width: " + remaining + "%";
    removeListeners();
}

function removeListeners() {
    optionNo.removeEventListener("click", noFunction, true);
    optionYes.removeEventListener("click", yesFunction, true);
}

optionYes.addEventListener("click", yesFunction, true);
optionNo.addEventListener("click", noFunction, true);