let express = require('express');
//Inyección de la dependencia de express
let app = express();
//App que hace la función de servidor
let personsRoute = require('./routes/person');
//Incluimos el router de person

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//Definición de escucha
app.listen(PORT, function () {
    console.log('Server running on port: ' + PORT);
});

/*
     * El código es una nueva refactorización del código de la rama practica15
     * Se muestra en consola el puerto en el que se está ejecutando el servidor
     * 
 */