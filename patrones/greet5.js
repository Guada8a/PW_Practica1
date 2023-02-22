// * Revealing Module Pattern
let greeting = "Hello from greet5";

let greet = () => {
    console.log(greeting);
}
// TODO: Funciones de prueba
let test = () => {
    console.log("Test from greet5");
}
let jump = () => {
    console.log("Jump from greet5");
}
let connect = () => {
    console.log("Connect from greet5");
}


// * Se regresa un objeto con las propiedades que se quieren exponer usando las keyvalue pairs
module.exports = {
    //greet: greet
    // * Si el nombre de la propiedad es igual al nombre de la variable, se puede omitir el nombre de la propiedad
    greet, test, jump, connect
}

// * Sin embargo, solamente se podra acceder a la propiedad greet, no a la variable greeting.
// * Esto se hace para ocultar propiedades y variables que no se quieren exponer.