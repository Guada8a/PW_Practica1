/**
 ** Código de la clase pasada "Práctica 2"
function greet() {
    console.log("Hello!");
}
let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

* TODO:Refactorar el código de la clase pasada "Práctica 2" como una "function expression created on the fly"
*/
let logGreeting = (miParametro) => miParametro();
// Refactorización de la función logGreeting
logGreeting(function () {
    console.log("Hello from a function created on the fly!")
});

/** 
 * * Parte 2 : Interpolación de Strings
 * */

// *Interpolación clásica de strings "clasica"

let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + "buenos días! Tu color favorito es el" + miColor);
} // * Esta es la forma clásica de concatenar strings, usando el operador + y las variables que queremos concatenar dentro de las comillas.

logGreeting1("Carlos", "Azul");

/**
 * String Interpolation
 * * Embedded expressions
 * * Multiline strings
 * TODO: Usar la interpolación de strings con el código de práctica
 */
//Declaración de variables
let color = "Rojo";
let talla = "M";
let modelo = "Clasico";

//Interpolación de strings "clasica"
console.log("Juan tiene una playera talla" + talla + " de color " + color + " modelo " + modelo);

//Interpolación de strings "nueva"
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);
// * Se usa la interpolación de strings para evitar tanto el uso de comillas.

/**
 * Parte 3: Javascript Modules
 * TODO: Crear un directorio "modules" y crear los archivos "app.js" y "greet.js"
 */