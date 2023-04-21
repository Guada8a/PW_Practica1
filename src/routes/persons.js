//Inyectar dependencias
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

//Crear la ruta /gente
router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    if (!Persons) res.status(404).send('No se encontraron personas');
    res.json(Persons);
});

//Exportar el modulo
module.exports = router;