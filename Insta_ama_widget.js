"use strict";

const input = document.querySelector(".answer-space");
const button = document.querySelector(".send-button");

input.addEventListener("keyup", dispOrHideButton);

button.addEventListener("click", async (event) => {
    event.target.parentElement.querySelector(".answer-space").value = "";
    event.target.innerText = "Sent!";
    event.target.classList.add("sent");
    event.target.parentElement.classList.add("shrink");
    await sleep(400);
    event.target.classList.remove("sent");
    event.target.parentElement.classList.remove("shrink");
    hideButton();
});

function dispOrHideButton() {
    if (this.value !== "") {
        this.parentElement.querySelector(".send-button").style.setProperty("display", "block");
        return;
    }
    hideButton();
}

function hideButton() {
    button.innerText = "Send";
    button.style.setProperty("display", "none");
}

function sleep(duration) {
    return new Promise(function (resolve) { setTimeout(resolve, duration) })
}

