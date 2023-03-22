//Práctica 14
const express = require('express'); //Inyección de dependencias
let app = express(); //Instancia de express
let PORT = process.env.PORT || 3000; //Definición de puerto de escucha
app.use('/assets',express.static(__dirname + '/public')); //contenido estático

// * Agregar la siguiente línea para usar ejs
app.set('view engine', 'ejs');

/* 
    * El siguiente código es parte de la práctica 14 parte 1, en el que se muestra un párrafo con  letra color azul
*/
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width">
                <link rel="stylesheet" href="assets/style.css">
                <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.min.css">    
                <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.css">
                <title>Práctica 14</title>
            </head>
            <body>
                <header><h1>Práctica 14</h1></header>
                <h1>Hola mundo!</h1>
                <p>Este es un párrafo y su contenido debe ser azul</p>
            </body>
        </html>
        `);
});
/*
 * En esta parte agregamos la ruta /person/:id, con 2 parámetros, message y times
    * El parámetro message es el mensaje que se mostrará en la página
    * El parámetro times es el número de veces que se mostrará el mensaje 
 */
//Person con parámetros id, message, times
app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        MESSAGE: req.query.message,
        TIMES: req.query.times
    });
});

app.listen(PORT);