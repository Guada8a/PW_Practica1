let express = require('express');
let router = express.Router();
let app = express();

router.get('/student', (req, res) => res.render('student'));
//addStudent que abra el archivo displayData.ejs por metodo post
router.post('/addStudent', (req, res) => {
    let t = req.params.id;
    res.render('displayData',
        {
            nombre: req.body.nombre,
            nss: req.body.nss,
            edad: req.body.edad,
            tipoSangre: req.body.tipoSangre
        });
});

module.exports = router;
