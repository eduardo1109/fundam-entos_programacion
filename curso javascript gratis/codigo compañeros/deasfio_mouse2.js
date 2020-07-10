
document.addEventListener("mousedown", dibujarClick);
document.addEventListener("mouseup", pararDibujo);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var xi, yi;
var p;

functiondibujarTrazo(evento)
{
  if (p == true)
  {
    dibujarLinea("blue", xi, yi, evento.pageX, evento.pageY, papel);
    xi = evento.pageX;
    yi = evento.pageY;
    console.log(evento);
  }
}

functiondibujarClick(evento)
{
  p = true;
  document.addEventListener("mousemove", dibujarTrazo);
  console.log(evento);
}

functionpararDibujo(evento)
{
  p = false;
  xi = undefined;
  yi = undefined;
}

functiondibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
