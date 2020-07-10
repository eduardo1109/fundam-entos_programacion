var d = document.getElementById("area_de_dibujo");
d.addEventListener("mousedown", iDibujo);
d.addEventListener("mousemove", mDibujo);
d.addEventListener("mouseup", fDibujo);
var papel = d.getContext("2d");
var xi = 0;
var yi = 0;
var xf = 0;
var yf = 0;
var color = "black";
var click = 0;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)

{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function iDibujo(evento1)
{
  click = 1;
  xi = evento1.layerX;
  yi = evento1.laxerY;
}

function mDibujo(evento2)
{
  if (click == 1)
  {
  xf = evento2.layerX;
  yf = evento2.layerY;
  dibujarLinea(color,xi,yi,xf,yf,papel)
  xi = xf;
  yi = yf;
  }
}

function fDibujo(evento3)
{
click = 0;
}
