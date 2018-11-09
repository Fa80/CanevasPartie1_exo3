//Première partie
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(100, 100, 200, 70);
ctx.strokeStyle = "#00B64A";
ctx.stroke();
ctx.fillStyle = "#00B64A";
ctx.fill();

// Deuxième Partie
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(50, 150, 300, 70);
ctx.strokeStyle = "#00B64A";
ctx.stroke();
ctx.fillStyle = "#00B64A";
ctx.fill();

//La roue gauche
var r = document.getElementById("myCanvas");
var rtx = r.getContext("2d");
rtx.beginPath();
rtx.arc(100, 260, 40, 0, Math.PI * 2);
rtx.strokeStyle = "#C9C9C9";
rtx.stroke();
rtx.fillStyle = "#C9C9C9";
rtx.fill();

//La roe droite
var d = document.getElementById("myCanvas");
var dtx = d.getContext("2d");
dtx.beginPath();
dtx.arc(300, 260, 40, 0, Math.PI * 2);
dtx.strokeStyle = "#C9C9C9";
dtx.stroke();
dtx.fillStyle = "#C9C9C9";
dtx.fill();
