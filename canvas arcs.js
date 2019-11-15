"use strict";

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

//Draw a blue circle
context.beginPath();
context.arc(35, 50, 30, 0, Math.PI * 2);
context.fillStyle = 'mediumSlateBlue';
context.fill();

//Draw outline for circle.
context.beginPath();
context.arc(35, 50, 30, 0, Math.PI * 2);
context.lineWidth = 3.5;
context.strokeStyle = '#4B28aE';
context.stroke();

//Draw arc counterclockwise
context.beginPath();
context.arc(110, 50, 30, 0, Math.PI, true);
context.strokeStyle = '#000';
context.stroke();

//Draw semi-circle clockwise
context.beginPath();
context.arc(185, 50, 30, 0, Math.PI, false);
context.fillStyle = "red";
context.fill();

//Draw an arc counter-clockwise
context.beginPath();
context.arc(260, 50, 30, 0, 3 * Math.PI / 2, true);
context.strokeStyle = "darkorange";
context.stroke();

