//Inyectar dependencias
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

//Crear la ruta /gente
router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    if (!Persons) res.status(404).send('No se encontraron personas');
    res.render('person', { Persons });
});
// Aquí se muestra la ruta addPerson para ver el formulario
router.get('/addPerson', (req, res) => {
    res.render('addPerson');
});

//Enviar datos de la forma POST a la base de datos
router.post('/addPerson', async (req, res) => {
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    //Guardar en la base de datos con save()
    newPerson.save().then((data) => res.redirect('/gente')).catch((err) => res.json(err));
})
//Exportar el modulo
module.exports = router;