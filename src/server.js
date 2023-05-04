//Inyectar dependencias
const express = require('express'); //Express
const mongoose = require('mongoose'); //Mongoose
const personsRoutes = require('./routes/persons'); //Rutas de personas
require('dotenv').config(); //Dotenv => MONOGDB_URI

//Instanciar express
mongoose.Promise = global.Promise; //Promesas de mongoose
const app = express(); //Instancia de express
const port = process.env.PORT || 3000; //Conectar a puerto 3000

//Configurar View Engine
app.set('view engine', 'ejs'); //Motor de plantillas
app.use(express.urlencoded({ extended: false })); //Formularios
//Usar Public Folder para archivos estaticos (css, js, img)
app.use("/assets", express.static(__dirname + '/../public'));
console.log(__dirname + '/../public');
app.use(personsRoutes); //Rutas de personas

//Conectar con la base de datos
mongoose.connect(process.env.MONGODB_URI).then(() => console.log(`Connected to TEST: Welcome ${process.env.MONGODB_DB}`)).catch((err) => console.log(err));

//Levantar servidor en el puerto 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));