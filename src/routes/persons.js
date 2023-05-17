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
/* 
 * Para un llenado de datos más rápido, tengo la ruta addRandomPersons
*/
//Función para generar números aleatorios
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Función para generar nombres aleatorios
function getRandomName() {
    let nombres = ["Juan", "Pedro", "Luis", "Jose", "Ricardo", "Maria", "Ana", "Sofia", "Fernanda", "Lizbeth", "Luisa", "Luis", "Jorge", "Jesús", "Eduardo", "Javier", "Carlos", "Alejandro", "Miguel", "Daniel", "Santiago", "Emiliano", "Emilio", "José", "Miguel Ángel", "Juan Carlos", "Fernando", "Jesús", "Pablo", "Antonio", "Manuel", "Francisco", "Javier", "José Antonio", "José Luis", "Rafael", "Miguel", "Ángel", "José Manuel", "Alejandro", "Juan José", "David", "Jorge", "Alberto", "Juan Manuel", "Ricardo", "Joaquín", "Enrique", "Diego", "Adrián", "Andrés", "Víctor", "Óscar", "Julián", "Jaime", "Ignacio", "Juan Antonio", "Rubén", "Sergio", "Roberto", "Alfonso", "Jordi", "Salvador", "Tomás", "Agustín", "Marcos", "Juan Carlos", "Ramón", "Jordi", "Vicente"];
    
    //Obtiene un nombre aleatorio
    return nombres[randomIntFromInterval(0, nombres.length - 1)];
}
//Ruta para llenar la base de datos con datos aleatorios
router.get('/addRandomPersons', async (req, res) => {
    //Arrays con datos predefinidos
    let tipoSangre = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    // Genera un nombre aleatorio
    for (let i = 0; i < 10; i++) {
        const newPerson = Person({
            nombre: getRandomName(),
            edad: randomIntFromInterval(18, 60),
            tipoSangre: tipoSangre[randomIntFromInterval(0, tipoSangre.length - 1)],
            nss: "52" + randomIntFromInterval(100000000, 999999999)
        });
        newPerson.save().then().catch((err) => console.log(err));
    }
    res.redirect('/gente');
});

/*
 * Uso Try Catch para manejar errores de la base de datos y evitar que el servidor se caiga
*/

//Editar una persona por su id
router.get('/findById/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) throw new Error('No se encontró la persona');
        res.render('updatePerson', { person });
    } catch (error) {
        console.error(error);
        res.status(404).send(error.message);
    }
});

//Actualizar una persona por su id
router.post('/updatePerson/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre,
            nss: req.body.nss
        });
        if (!person) throw new Error('No se encontró la persona');
        res.redirect('/gente');
    } catch (error) {
        console.error(error);
        res.status(404).send(error.message);
    }
});
/* 
 * Aquí se usa el método findByIdAndDelete() para eliminar una persona por su id
    * Claro, recibiendo el id mediante la modal de confirmación
*/
//Eliminar una persona por su id
router.get('/deletePerson/:id', async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) throw new Error('No se encontró la persona');
        res.redirect('/gente');
    } catch (error) {
        console.error(error);
        res.status(404).send(error.message);
    }
});

//Buscar una persona
router.post('/find', (req, res) => {
    Person.find({ nombre: { $regex: req.body.criteria, $options: 'i' } }).then((Persons) => { res.render('person', { Persons }) }).catch((error) => { res.json({ message: error }) })
});

    //Exportar el modulo
module.exports = router;