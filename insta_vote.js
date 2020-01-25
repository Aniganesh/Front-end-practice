"use strict";

const optionNo = document.querySelector("#no");
const optionYes = document.querySelector("#yes");

function yesFunction() {
    const randPercent = Math.floor(Math.random() * 101);
    const remaining = 100 - randPercent;
   
    const noTop = optionNo.getBoundingClientRect().top;
    const noLeft = optionNo.getBoundingClientRect().left;
    
    const yesTop = optionYes.getBoundingClientRect().top;
    const yesLeft = optionYes.getBoundingClientRect().left;

    optionNo.style = " position:absolute; top: "+noTop+ "px; left: "+noLeft+"px;line-height: 2.35rem";
optionYes.style = " position:absolute; top: "+yesTop+ "px; left: "+yesLeft+"px;line-height: 2.35rem";

    optionNo.innerText = remaining + "%";
    optionYes.innerText = randPercent + "%";
    optionYes.parentElement.style = "background:darkgrey;" + "width:" + randPercent + "%";
    optionNo.parentElement.style = "width:" + remaining + "%";
    removeListeners();
}

function noFunction() {
    const randPercent = Math.floor(Math.random() * 101);
    const remaining = 100 - randPercent;

    const noTop = optionNo.getBoundingClientRect().top;
    const noLeft = optionNo.getBoundingClientRect().left;
    
    const yesTop = optionYes.getBoundingClientRect().top;
    const yesLeft = optionYes.getBoundingClientRect().left;

    optionNo.style = " position:absolute; top: "+noTop+ "px; left: "+noLeft+"px;line-height: 2.35rem";
optionYes.style = " position:absolute; top: "+yesTop+ "px; left: "+yesLeft+"px;line-height: 2.35rem";

    optionYes.innerText = remaining + "%";
    optionNo.innerText = randPercent + "%";
    optionNo.parentElement.style = "background:darkgrey;" + "width:" + randPercent + "%";
    optionYes.parentElement.style = "width:" + remaining + "%";
    console.log(optionNo.getBoundingClientRect().height)
    removeListeners();
}

function removeListeners() {
    optionNo.removeEventListener("click", noFunction, true);
    optionYes.removeEventListener("click", yesFunction, true);
}

optionYes.addEventListener("click", yesFunction, true);
optionNo.addEventListener("click", noFunction, true);
