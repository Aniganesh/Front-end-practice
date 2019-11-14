const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
//Red rectangle with blue border
context.fillStyle = "red";
context.fillRect(450, 10, 300, 100);
context.strokeStyle = "blue";
context.lineWidth = 6;
context.strokeRect(449, 9, 301, 101);

//Black lines with beveled edges and round ends.
context.beginPath(); // Begin a new path.
context.moveTo(10, 10); //Set start point.
context.lineTo(390, 10); //A line from start point to 390,10
context.lineTo(390, 30); //A line from last end point to 390,30
context.lineTo(10, 30); //A line from last end point to 10,30
context.lineWidth = 10; //Set width of line.
context.lineJoin = "bevel"; //Set join style line
context.lineCap = "round"; //Set cap style line
context.strokeStyle = "black"; //Set strokeStyle for line.
context.stroke(); // Draw the path.

//Orange lines without closed path.

context.beginPath();
context.moveTo(10, 30);
context.lineTo(10, 10);
context.lineTo(330, 10);
context.lineTo(330, 30);
context.lineWidth = 20;
context.lineJoin = "round";
context.lineCap = "round";
context.strokeStyle = "#fd555577";
context.stroke();

//Green lines with closed path
context.beginPath();
context.moveTo(10, 100);
context.lineTo(390, 100);
context.lineTo(390, 130);
context.closePath(); //Closing path automatically with a straight line.
context.lineWidth = 10;
context.lineJoin = "miter";
context.strokeStyle = "green";
context.stroke();

//blue lines without closed path
context.beginPath();
context.moveTo(40, 140);
context.lineTo(360, 190);
context.lineTo(360, 140);
context.lineTo(40, 190);
context.lineWidth = 5;
context.lineCap = "butt";
context.strokeStyle = "blue";
context.stroke();
