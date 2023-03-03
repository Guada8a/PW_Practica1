var express = require( 'express'); // importamos la dependencia
var app = express(); //dec taramos una App de Express
var port = process.env.PORT || 3006; //setteamos el puerto para que escuche el servidor   x

//*Middleware
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

//primera ruta (está al nivel de la raiz / ) , Hello World!
app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="assets/style.css" type="text/css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
    `);
});

//segunda ruta (/api ) ,regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

//tercera ruta (/api/person/:id) ,regresa un objeto JSON
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port); //levantar el server y ponerlo a escuchar