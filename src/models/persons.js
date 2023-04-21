//Schema person for mongoose
const mongoose = require('mongoose');

//Crear schema de mongoose
let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

//Exportar el modelo
module.exports = mongoose.model('Persons', personSchema);
