"use strict";

var modalbtn = document.getElementById('open-modal');
var modal = document.getElementsByClassName("modal")[0];
var bg = document.getElementsByClassName("bg")[0];

modalbtn.addEventListener('click', function () {
    modal['style'] = 'display:block; z-index: 9999;';
    bg["style"] = "background:rgba(51,51,51,0.1); height:100%; width:100%;position:fixed; top:0; left:0; display:flex; z-index:9998";

    bg.addEventListener('click', function () {
        modal.style['display'] = 'none';
        bg.style['display'] = 'none';
    })
});