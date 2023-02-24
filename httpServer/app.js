/*
* Ya no funciona
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

*/

// Importar con express
const express = require('express');
const app = express();

//Enviar un mensaje
var headerHTML = '<html><head><title>Prueba</title></head><body>';
var bodyHTML = '<h1>Prueba</h1><p>Práctica 8, pequeño server HTTP</p>';
var footerHTML = '</body></html>';

/*Enviar una respuesta
app.get('/', function (req, res) {
    res.send(headerHTML + bodyHTML + footerHTML);
});
*/

//TODO: Realizar un refactor de la función anterior con una notación de flechaj

app.get('/', (req, res) => {
    res.send(headerHTML + bodyHTML + footerHTML);
});

//Escuchar en el puerto 1337
app.listen(1337, '127.0.0.1');

/**
 * ? NOTAS:
 * Al revisar las herramientas del navegador, en la pestaña de red, se puede ver que el servidor se encuentra activo y
 * responde con el código 304, que significa que el recurso no ha sido modificado desde la última
 * vez que se solicitó
 */

