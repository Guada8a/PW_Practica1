const express = require('express');
//En este apartado se crea el router, y la ruta /student
let router = express.Router();
router.get('/student', (req, res) => {
    let t = req.params.id
    res.render('student');
});

//En este apartado se crea la ruta /addStudent y se le pasa los datos del formulario
router.post('/addStudent', (req, res) => {
    res.render('displayData', { nombre: req.body.nombre,
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre
    });
});

//En este apartado se crea la ruta /personJson y se le pasa los datos del formulario
router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    let name = req.body.fname === undefined ? ' ' : `nombre: ${req.body.fname}`;
    let lastname = req.body.lname === undefined ? '' : `| apellido: ${req.body.lname}`;
    
    let nombre = req.body.nombre === undefined ? '' : `nombre: ${req.body.nombre}`;
    let apellido = req.body.apellido === undefined ? '' : `| apellido: ${req.body.apellido}`;

    console.log(name, lastname);
    console.log(nombre, apellido);
    let t = req.params.id;
    res.render('displayData1',
        {
            nombre: req.body.fname,
            apellido: req.body.lname
        });
});

//En este apartado se crea la ruta /testJson y se le pasa los datos del formulario
router.get('/testJson', (req, res) => {
    res.render('testJson');
});

module.exports = router;