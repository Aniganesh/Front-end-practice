"use strict";

function success(element) {

    const parent = element.parentElement;
    const gparent = parent.parentElement;
    const uname = parent.childNodes[3];
    const password = parent.childNodes[7];
    if (uname.value != "") {
        if (password.value != "") {
            const spl = document.createElement("div");
            const success = document.createElement("span");
            success.innerText = "Success";
            success.className = "success";
            spl.appendChild(success);
            spl.className += " spl centred"
            const TO = setTimeout(() => { gparent.appendChild(spl); clearTimeout(TO) }, 2000);
            parent.className += " clear";
            const GPTO = setTimeout(function () { parent.className += " clear"; gparent.removeChild(parent); clearTimeout(GPTO) }, 2000);
        } else {
            const msg = "Password field cannot be empty";
            errMsg(parent, msg);
        }
    } else {
        const msg = " It seems you've forgotten to enter your username";
        errMsg(parent, msg);
    }
}

function fail(element) {

    const parent = element.parentElement;
    const gparent = parent.parentElement;
    const uname = parent.childNodes[3];
    const password = parent.childNodes[7];
    if (uname.value != "") {
        if (password.value != "") {
            const spl = document.createElement("div");
            const failed = document.createElement("span");
            failed.innerText = "Sorry. Login \nfailed";
            failed.className = "success";
            parent.className += " clear";
            failed.style = "left: 65px";
            spl.appendChild(failed);
            spl.className += "spl centred";
            const parentCopy = parent;
            const TO = setTimeout(function () {
                gparent.appendChild(spl);
                gparent.removeChild(parent);
                clearTimeout(TO);
            }, 2000
            );
            const remTO = setTimeout(function () {
                gparent.removeChild(spl);
                parentCopy.childNodes[7].value = "";
                gparent.appendChild(parentCopy);
                parentCopy.className = "centred";
                clearTimeout(remTO);
            }, 6000);
        } else {
            const msg = "Password field cannot be empty";
            errMsg(parent, msg);
        }
    } else {
        const msg = " It seems you've forgotten to enter your username";
        errMsg(parent, msg);
    }
}

function errMsg(parent, MSG) {

    var errMsg = document.createElement('div');

    errMsg.innerHTML = "<span style='color:#121291;padding-left:5px; font-size:16pt; font-weight: 600'>" + MSG + "</span>";
    parent.appendChild(errMsg);
    setTimeout(function () { parent.removeChild(errMsg) }, 4000);

}