var teclas =
 {
  UP: 38,
  DOWN:40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

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
