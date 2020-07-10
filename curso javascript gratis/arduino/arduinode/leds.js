var jf = require("johnny-five");
var circuito = new jf.Board({port: "COM3"});


circuito.on("ready", prender)

function prender()
{
  var led = new jf.Led(9);
  led.blink(500);
}
console.log("se hacer hardware");
