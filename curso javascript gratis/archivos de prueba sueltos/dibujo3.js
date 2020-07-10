var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l =0;
var z =0;
var yi, xf;
var colorcito = "#FAA";
var colorcitos = "purple";

while(l < lineas)
{
  yi = 10* l;
  xf= 10 * (l + 1);
  dibujarlinea(colorcito, 0, yi, xf, 300 );

  l++;

}
  dibujarlinea(colorcito, 1, 1, 1, 299);
  dibujarlinea(colorcito, 0, 299, 299, 299);

while(z < lineas)
{
  xi = 300 -((z+1)*10);
  yf = 300  -((z+1)*10);
  dibujarlinea(colorcitos, xi, 0, 300, yf);
  z =z+1;
}

dibujarlinea(colorcitos, 1, 1, 299, 1);
dibujarlinea(colorcitos, 299, 1, 299, 299);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
