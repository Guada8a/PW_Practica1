/* Convert Fahrenheit to Celsius */
//Esta es la inyección de dependencias
const { toCelsius } = require("celsius"); //En caso de modificar el nombre de la dependencia, el código no funcionará

//Esta es la llamada a la función toCelsius
console.log(toCelsius(100));
console.log(toCelsius(100,3));
console.log(toCelsius('105.981 degrees F',5));

/* Convert Celsius to Fahrenheit */
//Esta es la inyección de la dependencia toFahrenheit
const { toFahrenheit } = require("celsius");

//Esta es la llamada a la función toFahrenheit
console.log(toFahrenheit(36));
console.log(toFahrenheit(36.68,3));
console.log(toFahrenheit('-40.691 degrees C',5));

/*Ejemplos*/
//En caso de no conocer los nombres de las funciones que contiene el paquete, se puede hacer lo siguiente:
const conv = require("celsius");
//Con esto la constante conv tendrá todas las funciones que contiene el paquete celsius, por lo que pasa a ser un objeto

//Entonces, para llamar a las funciones, se hace lo siguiente:
console.log(conv.toCelsius(20));
console.log(conv.toFahrenheit(30));