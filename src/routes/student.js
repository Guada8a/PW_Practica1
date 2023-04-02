//Este código pertenece a la práctica 16, donde se envían nuevos campos mediante un formulario
let express = require('express');
let router = express.Router();

//En este caso ya no es necesario usar la instancia de express, ya que se usa el router
//let app = express();
router.get('/student', (req, res) => {
    let t = req.params.id
    res.render('student');
});

//En este apartado se crea la ruta /addStudent y se le pasa los datos del formulario
router.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});
//Se exporta el router
module.exports = router;