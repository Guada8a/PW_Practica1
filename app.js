 /* * EMISOR DE EVENTOS DE NODE JS */
 // var Emitter = require ('./emitter');

var Emitter = require('events');

/**
 *? NOTAS: 
 ** La variable emiter no mostrará nada en consola, ya que no se ha creado ningún evento.
    ** Para ello, se debe crear una instancia de la clase Emitter, es decir crear un nuevo evento.
 * */


//Parte 2
//Inyectar dependencia desde el archivo config.js
var config = require('./config');

//Crear una nueva instancia de la clase Emitter
var emtr = new Emitter();

//Crear eventos
emtr.on('greet', () => {
    console.log('Someone said hello');
});

emtr.on(config.events.GREET, () => {
    console.log('Someone said hello');
});

emtr.on(config.events.JUMP, () => {
    console.log('Someone said jump');
});

//Emitir eventos
emtr.emit('greet');
emtr.emit(config.events.GREET);
emtr.emit(config.events.JUMP);

/** 
 * ? NOTAS:
 * * Al ejecutar el archivo app.js, se mostró en consola el mensaje 'Hello' y los mensajes de los eventos emitidos.
 * * Es importante realizar una nueva instancia de Emitter, para poder crear nuevos eventos.
 * * Para crear un nuevo evento, se debe utilizar el método on() de la clase Emitter.
 */



