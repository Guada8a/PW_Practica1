let express = require('express');
let path = require('path');
//Inyección de la dependencia de express
let app = express();
//App que hace la función de servidor
let personsRoute = require('./routes/person');
let studentRoute = require('./routes/student');
console.log(studentRoute);
//Incluimos el router de person

app.use(express.json()); //Para poder parsear JSON (application/json
app.use('/assets', express.static(path.join(__dirname + '../public'))); //contenido estático


// * NOTA: La siguiente línea es para indicar que se va a Parsear las peticiones con URL Encoded
app.use(express.urlencoded({ extended: false }));

let PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(personsRoute);
app.use(studentRoute);
//Definición de escucha
app.listen(PORT, function () {
    console.log('Server running on port: ' + PORT);
});

/*
     * El código es una nueva refactorización del código de la rama practica15
     * Se muestra en consola el puerto en el que se está ejecutando el servidor
     * 
 */