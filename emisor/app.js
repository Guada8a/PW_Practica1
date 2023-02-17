var Emmiter = require('./emmiter');

var emtr = new Emmiter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

/** Explicación del código de arriba
 * 1. Se crea una instancia de la clase Emmiter, que se encuentra en el archivo emmiter.js
 * 2. Se ejecuta el método on, que recibe dos parámetros: el tipo de evento y la función que se ejecutará cuando se emita el evento.
 * 3. Se ejecuta el método emit, que recibe un parámetro: el tipo de evento que se desea emitir.
 * 4. Se ejecuta la función emit, que ejecuta las funciones que se encuentran en el array del tipo de evento que se desea emitir.
 * */

emtr.on('jump', () => {
    console.log('Someone jumped!');
});

console.log(emtr);
emtr.emit('jump');

/**
 * ? Explicación del código de arriba
 ** Se agregó el evento jump al objeto emtr, al momento de ejecutar la variable emtr en consola, se mostrará el objeto con el evento jump y las funciones que se ejecutarán cuando se emita el evento.
 ** Entonces se podría deducir que emtr es un objeto que contiene eventos y funciones que se ejecutarán cuando se emita el evento.
 */
