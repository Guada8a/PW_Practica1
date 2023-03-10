var express = require('express'); // importamos la dependencia
var app = express(); //declaramos una App de Express
var port = process.env.PORT || 3006; //setteamos el puerto para que escuche el servidor   x
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); //setteamos el motor de plantillas
//*Middleware
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

//primera ruta (está al nivel de la raiz / ) , Hello World!
app.get('/', function (req, res) {
    res.render('index');
});

//segunda ruta (/api ) ,regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

//tercera ruta (/api/person/:id) ,regresa un objeto JSON
app.get('/person/:id', function (req, res) {
    //Retornar una funcion
    res.render('person', { ID: req.params.id});

});

//Array de Personas
let data = [
    { id: 1, nombre: "Hugo", apellido: "Estrada Ramírez", edad: 19 },
    { id: 2, nombre: "Estela", apellido: "Pérez Suárez", edad: 18 },
    { id: 3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17 },
]; //

//Enviar un arreglo de personas
app.get('/personas', function (req, res) {
    res.render('personas', { personas: data });
});
app.listen(port); //levantar el server y ponerlo a escuchar