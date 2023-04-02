const express = require('express');

let router = express.Router();

//En este apartado se crea la ruta /testJson para enviar los datos del formulario
router.get('/testJson', (req, res) => {
    res.render('testJson');
    // *El archivo testJson es un formulario que envía los datos a la ruta /personJson mediante el uso de un Ajax de JQuery
});
//En este apartado se crea la ruta /personJson y se le pasa los datos del formulario
router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    //Condicionales para comprobar si los datos del formulario estan vacios
    let name = req.body.fname === undefined ? ' ' : `nombre: ${req.body.fname}`;
    let lastname = req.body.lname === undefined ? '' : `| apellido: ${req.body.lname}`;
    
    let nombre = req.body.nombre === undefined ? '' : `nombre: ${req.body.nombre}`;
    let apellido = req.body.apellido === undefined ? '' : `| apellido: ${req.body.apellido}`;

    console.log(name, lastname);
    console.log(nombre, apellido);
    let t = req.params.id;
    //Muestra los datos del formulario en un archivo HTML, displayData1
    res.render('displayData1',
        {
            nombre: req.body.fname,
            apellido: req.body.lname
        });
});

module.exports = router;