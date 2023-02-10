/*
function greet() {
    console.log('Hello!');
}
greet(); // Invoke

//Functions as parameters
function logGreeting(fn) {
    fn();
}
logGreeting(greet); //Debe aparacer dos veces en la terminal
/* Estamos pasando la función greet como parámetro e invocando con el nombre del argumento

//Function expression
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe(); // El mensaje sólo deberá aparecer una sola vez

logGreeting(greetMe); // functions are first class, pass it as a parameter
//El mensaje sólo deberá aparecer 2 veces
*/

//Refactorizando el código con Arrow Functions (ECMAScript 6)
let greet = () => console.log('Hello!'); //Arrow function
greet(); // Invoke

let logGreeting = fn => fn(); //Arrow function
logGreeting(greet); //Debe aparacer dos veces en la terminal

let greetMe = () => console.log('Hello from the function expression'); //Arrow function
greetMe(); // El mensaje sólo deberá aparecer una sola vez

logGreeting(greetMe); // functions are first class, pass it as a parameter
//El mensaje sólo deberá aparecer 2 veces