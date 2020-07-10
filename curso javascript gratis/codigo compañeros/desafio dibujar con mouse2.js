
document.addEventListener("mousedown", dibujarClick);
document.addEventListener("mouseup", pararDibujo);
var cuadrito = document.getElementById("area de dibujo");
 var papel = cuadrito.getContext("2d");
limpieza = document.getElementById("limpiador");
limpieza.addEventListener("click",limpiar);

var xi, yi;
var p;
dibujarLinea("red",0,0,0,299,papel);
dibujarLinea("red",0,0,299,0,papel);
dibujarLinea("red",299,299,0,299,papel);
dibujarLinea("red",299,0,299,299,papel);
function dibujarTrazo(evento)
{
  if (p == true)
  {
    dibujarLinea("white", xi, yi, evento.layerX, evento.layerY, papel);
    xi = evento.layerX;
    yi = evento.layerY;
    console.log(evento);
  }
}

function dibujarClick(evento)
{
  p = true;
  document.addEventListener("mousemove", dibujarTrazo);
  console.log(evento);
}

function pararDibujo(evento)
{
  p = false;
  xi = undefined;
  yi = undefined;
}
function limpiar()
{
  papel.clearRect(2,2,(cuadrito.width)-4,(cuadrito.height)-4)
}
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
   lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
