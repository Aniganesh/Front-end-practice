"use strict";

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

//Shadow effect with positive offsets
context.shadowBlur = 10;
context.shadowOffsetX = 15;
context.shadowOffsetY = 15;
context.shadowColor = "blue";
context.fillStyle = "cyan"
context.fillRect(25, 25, 200, 200);


context.shadowBlur = 10;
context.shadowOffsetX = -15;
context.shadowOffsetY = -15;
context.shadowColor = "red";
context.fillStyle = "magenta";
context.fillRect(300, 25, 200, 200);
