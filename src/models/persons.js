//Schema person for mongoose
const mongoose = require('mongoose');

//Crear schema de mongoose basado en el modelo de personas
let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

//Exportar el modulo
module.exports = mongoose.model('Persons', personSchema);
