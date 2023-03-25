const express = require('express'); //Inyección de dependencias
let app = express(); //Instancia de express
let PORT = process.env.PORT || 3000; //Definición de puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estático

// * NOTA: La siguiente línea es para indicar que se va a Parsear las peticiones con URL Encoded
app.use(express.urlencoded({ extended: false }));
// * Agregar la siguiente línea para usar ejs
app.set('view engine', 'ejs');


//Crear la ruta Student
app.get('/student', function (req, res) {
    let t = req.params.id;
    res.render('student');
})
// * Se agrega la ruta /addStudent para mostrar el formulario de agregar estudiante
/*
app.get('/addStudent', function (req, res) {
    res.send(` Nombre: ${req.body.nombre}
            <br> Edad: ${req.body.edad}
            <br> NSS: ${req.body.nss}
            <br> Tipo de sangre: ${req.body.tipoSangre}`);
});
*/
// * Se agrega la ruta /addStudent para mostrar el formulario de agregar estudiante
app.post('/addStudent', function (req, res) {
    res.render('displayData',{
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

app.listen(PORT);