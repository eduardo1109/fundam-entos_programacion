var texto =document.getElementById("texto_lineas")
var boton =document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorclick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorclick()
{
  var lineas = parseInt(texto.value);
var l =0;
var yi, xf;
var colorcito = "#FAA";
var espacio = ancho / lineas;


for(l = 0; l < lineas;l++)
{
yi = espacio * l;
xf= espacio * (l + 1);
dibujarlinea(colorcito, 0, yi, xf, 300 );
console.log("linea " + 1);
}

dibujarlinea(colorcito, 1, 1, 1, 299);
dibujarlinea(colorcito, 1, 299, 299, 299);

}
