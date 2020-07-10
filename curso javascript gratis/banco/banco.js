var express = require("express");
var aplicacion = express();

var banco_cliente = santander;
var cuenta_cliente = true;
var saldo_cliente = 100000000;
var banco_destino = itau;
var cuenta_destino = true;
var hora_trans = 16;
var comision = 100
var monto_transferencia = 10000

aplicacion.get("/", inicio);
function inicio (peticion, resultado)
{
  if( cuenta_cliente && cuenta_destino )
  {
    if(cuenta_cliente == cuenta_destino)
    {
      comision = 0;
    }
  else {
    {
      comision = 100;
    }
  }
  if (saldo_cliente > monto_transferencia + comision)
    {
      if(hora_trans >= 9 && hora_trans <= 12 || hora_trans >= 15 && hora_trans <=20 )
    }
  }

}
aplicacion.listen(8989);
