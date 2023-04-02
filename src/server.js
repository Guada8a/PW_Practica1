//Se importa express y path 
//Path permite acceder a los archivos del sistema
let express = require('express');
let path = require('path');
//Inyección de la dependencia de express
let app = express();
//App que hace la función de servidor
let personsRoute = require('./routes/person');
let studentRoute = require('./routes/student');
//Incluimos el router de person
app.use(express.json()); //Para poder parsear JSON (application/json
app.use('/assets', express.static(path.join(__dirname + '../public'))); //contenido estático


// * NOTA: La siguiente línea es para indicar que se va a Parsear las peticiones con URL Encoded
app.use(express.urlencoded({ extended: false }));

let PORT = process.env.PORT || 3000;

//Se define view engine como ejs para poder usarlo en las vistas
app.set('view engine', 'ejs');

//Crear la raíz del servidor
app.get('/', (req, res) => {
    res.render('index');
});
//Usamos los routers de person y student
app.use(personsRoute);
app.use(studentRoute);
//Definición de escucha
app.listen(PORT, function () {
    console.log('Server running on port: ' + PORT);
});

/*
     * El código es una nueva refactorización de la rama practica15
     * Se muestra en consola el puerto en el que se está ejecutando el servidor
     * En person muestra los datos del formulario en un archivo HTML, displayData1
     * En student muestra los datos del formulario en un archivo HTML, displayData
 */