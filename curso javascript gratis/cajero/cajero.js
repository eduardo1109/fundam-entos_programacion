
var imagenes = [];
imagenes ["Mil"] = "mil.jpg";
imagenes ["Dos mil"] = "dosmil.jpg";
imagenes ["Cinco mil"] = "cinco mil.jpg";
imagenes ["Diez mil"] = "diez mil.jpg";
imagenes ["Veinte mil"] = "veinte mil.jpg";

class Billete
{
  constructor(v, c)
 {

    this.valor = v;
    this.cantidad = c;
    this.image = new Image();
    this.image.src = imagenes[this.valor];

  }
}

  function retirarDinero()

{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

    if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
    else
      {
      papeles = div;
      }

    entregado.push( new Billete(bi.valor, papeles));
    dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {    resultado.innerHTML = "dinero no disponible"
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0 )
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }

    }
  }

}
 var caja = [];
 var entregado = [];
 caja.push( new Billete("Mil",1000, 20));
 caja.push( new Billete("Dos mil", 2000, 30));
 caja.push( new Billete("Cinco mil", 5000, 2));
 caja.push( new Billete("Diez mil",10000, 5));
 caja.push( new Billete("Veinte mil", 20000, 5));


var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("retirar");
b.addEventListener("click", retirarDinero);
