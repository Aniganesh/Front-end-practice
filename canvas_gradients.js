"use strict";
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const gradient = context.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "white");
gradient.addColorStop(0.5, "lightsteelblue");
gradient.addColorStop(1, "navy");
context.fillStyle = gradient;
context.fillRect(0, 0, 200, 200);

const canvas2 = document.querySelector('#canvas2');
const context2 = canvas2.getContext('2d');

const gradient2 = context2.createLinearGradient(0, 0, 200, 0);
gradient2.addColorStop(0, "white");
gradient2.addColorStop(0.15, "yellow");
gradient2.addColorStop(1, "orange");
context2.fillStyle = gradient2;
context2.fillRect(0, 0, 200, 200);

const canvas3 = document.querySelector("#canvas3");
const context3 = canvas3.getContext("2d");

const gradient3 = context3.createLinearGradient(0, 0, 200, 200);
gradient3.addColorStop(0, "white");
gradient3.addColorStop(0.35, "plum");
gradient3.addColorStop(1, "purple");
context3.fillStyle = gradient3;
context3.fillRect(0, 0, 200, 200);


const canvas4 = document.querySelector("#canvas4");
const context4 = canvas4.getContext("2d");

const gradient4 = context4.createRadialGradient(100, 100, 10, 100, 100, 125);
gradient4.addColorStop(0, "white");
gradient4.addColorStop(0.5, "yellow");
gradient4.addColorStop(0.75, "orange");
gradient4.addColorStop(1, "red");
context4.fillStyle = gradient4;
context4.fillRect(0, 0, 200, 200);

