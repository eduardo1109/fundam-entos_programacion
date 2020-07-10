// primero debemos identificar cuales son los elemntos para trabajar
//necesitamos un canvas, dos barras que se corran y una pelota
// primero vamos a llamar a una funcion anonima que se va a ejecutar a si misma, para no afectar todo el scope 
// este ejemplo es del 2015, trabajan con var, pero lo intentaremos hacer con let
// esta es una funcnion delcarativa que se trata como una clase, por eso parsamos parametros y le
//asignamos variables a los obbjetos.recordar quer this hace referencia a la funcion 
//  DECLARACION DE CLASE

    class Board {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.playing = false;
            this.game_over = false;
            this.bars = [];
            this.ball = null;
           
            // estas variables son buleanas y nos permiten saber ejecutar si es que la condicion es true;
        }
    }

//MODIFICACION DEL PROTOTIPO DE LA CLASE PARA COLOCAR LOS METODOS DE LA MISMA ocuparemos getters y setters, para obtener los elemntos, las barras 
//esto lo que hace es retornar los elemntos del canvas las barras y la pelota 
self.prototype = {
    get elements(){
let elements = this.bars;
elements.push(ball);
return elements;
    }
}
class BoardWiew {
    constructor(canvas,board){
        this.canvas = canvas;
        this.width = board.width;
        this.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d")
    }
}



window.addEventListener("load",main);
// aqui estamos declarando la funcion y dandole el tamaño al canvas, trayendolo y ejecutando la variable boardwiew

function main(){
    const board = new Board(1200,800);
    console.log("hola")
  let canvas = document.getElementById('canvas')
  const board_wiew = new BoardWiew(canvas,board);  
}