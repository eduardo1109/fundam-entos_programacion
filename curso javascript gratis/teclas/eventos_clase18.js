var teclas =
 {
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area de dibujo");
var papel = cuadrito.getContext("2d");

dibujarlinea("red", 100, 100, 200, 200, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

function dibujarTeclado(evento)
{
  if(evento.keyCode == teclas.UP)
{
  console.log("vamos pa abajo");
  }

  switch(evento.keyCode)
{
  case teclas.UP:
    console.log("arriba");
    break;
    case teclas.DOWN:
     console.log("abajo");
      break;
      default:
        console.log("otra tecla");
      break;
  }


}
