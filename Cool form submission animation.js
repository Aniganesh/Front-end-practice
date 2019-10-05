"use strict";

function run(element) {

    var parent = element.parentElement;
    var email = parent.childNodes[1];
    if (email.value != "") {
        if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errMsg(parent, "Invalid email address entered.")
        } else {
            var rocket = document.createElement("img");
            rocket.setAttribute("src", "rocket-launch.svg");
            rocket.setAttribute("class", "rocket");
            parent.appendChild(rocket);
            email.className += " clear";
            element.className += " clear";
            email.value = "";
            setTimeout(function () { parent.removeChild(rocket) }, 4000);
        }
    }
    else {
        errMsg(parent, "Please enter your email address");
    }
}

function errMsg(parent, MSG) {

    var errMsg = document.createElement('div');

    errMsg.innerHTML = "<span style='color:#121291;padding-left:5px; font-size:16pt; font-weight: 600'>" + MSG + "</span>";
    parent.appendChild(errMsg);
    setTimeout(function () { parent.removeChild(errMsg) }, 4000);

}