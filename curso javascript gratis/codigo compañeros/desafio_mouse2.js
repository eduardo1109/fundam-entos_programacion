
p = document.getElementById("plantilla");
var papel = p.getContext("2d");
p.addEventListener("mousedown", dibujarClick);
p.addEventListener("mouseup", pararDibujo);
limpieza = document.getElementById("limpiador");
limpieza.addEventListener("click",limpiar);
//Variable que valida que el mouse esté oprimido para permitir el dibujo
var prueba;
function dibujar_Marco()
{
  dibujarMarco(0,0,300,0);
dibujarMarco(0,0,0,300);
dibujarMarco(0,300,300,300);
dibujarMarco(300,0,300,300);
}
// Dibuja el marco

// FUnción que activa el listener del evento movemouse
function dibujarTrazo(evento)
{
  if (p == true)
  {
    dibujarLinea("blue", xi, yi, evento.layerX, evento.layerY, papel);
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

// limpia el canvas
function limpiar()
{
  lienzo.clearRect(2,2,(p.width)-4,(p.height)-4)
}
// dibuja
function dibujarLinea(color,xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.lineWidth =3;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();

}
