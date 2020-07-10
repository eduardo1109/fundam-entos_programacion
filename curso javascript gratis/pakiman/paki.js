var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocionauro"] = "cerdo.png";




var coleccion= [];

coleccion.push( new Pakiman("Cauchin",30 , 50, "tierra") )
coleccion.push(new Pakiman("Pokacho", 60, 120, "aire"));
coleccion.push( new Pakiman("Tocionauro",60,200,"barro"));

for(var pakimanes of coleccion)
{pakimanes.mostrar()
}
