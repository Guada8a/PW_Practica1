let greet = require("./greet1"); //* El módulo que regresa una sola función
//let greet2 = require("./greet2").greet;
let greet2a = require("./greet2"); //* El módulo regresa con una propiedad en específico
let greet2b = require("./greet2").greet;

greet();
//greet2();
greet2a.greet();
greet2b();

/*
    ? Notas:
    * Cuando un módulo se inyecta se puede realizar de dos maneras: Inyectar el módulo completo o inyectar una propiedad del módulo.
    * En caso de que sea un módulo completo, las propiedades del módulo serán llamadas como si fueran funciones.
*/

const greet3 = require("./greet3"); //* El módulo regresa un objeto construido
console.log(greet3); //* Se muestran los detalles del objeto construido
greet3.greet(); //* Se llama a la función greet del objeto construido

greet3.greeting = "Hello from the App.js"; //* Se modifica la propiedad greeting del objeto construido

let greet3b = require("./greet3"); //* Se crea una nueva instancia del objeto construido
greet3b.greet(); //* Se llama a la función greet del objeto construido

/*
    ? Notas:
    * Al momento de cambiar una propiedad del objeto construido, se modifica la propiedad en todas las instancias del objeto construido. No importa si se crea una nueva instancia del objeto construido, la propiedad será la misma.
*/

const Greet4 = require('./greet4'); //* El módulo que expone un constructor
let myGreet = new (Greet4); //* Se crea una nueva instancia del constructor
myGreet.greet(); //* Se llama a la función greet del objeto construido

/*
    ? Notas:
    * El módulo que expone un constructor, se debe inyectar como una función, para que se cree una nueva instancia del constructor.
    * Por lo que ahora se puede acceder a las propiedades del objeto construido, sin afectar a las demás instancias del objeto construido.
*/

/*                                      || Se puede inyectar el módulo completo
const greet5 = require('./greet5').greet; //* Revealing Module Pattern
greet5(); */ 
const greet5 = require('./greet5'); //* Revealing Module Pattern
greet5.greet();
greet5.test();
greet5.jump();
greet5.connect();