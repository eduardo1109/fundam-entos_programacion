var lo = document.getElementById("lo");
var papel = lo.getContext("2d");


var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var teclas = {
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};
var xcerdo = 100;
var ycerdo = 100;
var movimiento = 80;

var cantidad = aleatorio(1, 10);
var cantidad1 = aleatorio(2, 15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
document.addEventListener("keydown", moverTeclado);

function moverTeclado(evento)
{

switch(evento.keyCode)
{
  case teclas.UP:
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo - movimiento);
    ycerdo = ycerdo - movimiento;
    console.log(ycerdo);
          break;
    case teclas.DOWN:
      papel.drawImage(cerdo.imagen, xcerdo, ycerdo + movimiento);
    ycerdo = ycerdo + movimiento;
    console.log(ycerdo);
    break;
    case teclas.LEFT:
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo + movimiento);
    xcerdo = xcerdo - movimiento;
    console.log(xcerdo);
    break;
    case teclas.RIGHT:
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo - movimiento);
    xcerdo = xcerdo + movimiento;
    console.log(xcerdo);
    break;
    }
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar ();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    console.log(cantidad1);
    for(var p=0; p < cantidad1; p++)
    {
      var a = aleatorio(2, 7);
      var b = aleatorio(3, 8);
      var a = a * 70;
      var b = b * 30;
    papel.drawImage(pollo.imagen, a, b);
  }
}
if(cerdo.cargaOK)
{
  papel.drawImage(cerdo.imagen, 1, 8);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
