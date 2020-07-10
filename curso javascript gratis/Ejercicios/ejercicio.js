
// }
// edo.saludar();    

// var nombre = "Eduardo"
// var apellido = "eduardo"

// console.log( `hola me llamo,${this.nombre}`)

// function persona(name){
//     const persona = {
//     name :name,
//     profesion : `Amd, ing_civil, programador, trader`     
// }

// persona.saludar = function () {
//  console.log(`hola soy ${this.name}  y tengo todas estas maestrias, ${this.profesion} `);
// };
// return persona}

// const maria = persona("maria");
// maria.saludar();
// const edo = persona("eduardo");
// edo.saludar();

function persona(name, profesion, hobbies){
       this.name = name,
       this.profesion = profesion,
      this.hobbies = hobbies   
    }

persona.prototype.saludar = function() {
    console.log(`hola soy ${this.name} mi profesion es ${this.profesion} y mi hobbie es ${this.hobbies}`)
    
}
const edo = new persona("edo", "Ing civil ", "programar")
edo.saludar();