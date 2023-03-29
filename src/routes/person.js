let express = require('express');
let router = express.Router();


router.get('/person', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.min.css">    
            <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.css">
            <link rel="stylesheet" href="assets/style.css" type="text/css">
            <meta charset="UTF-8">
            <title>Respuesta</title>
        </head>
        <body>
            <header class="navbar navbar-expand-lg navbar-dark bg-dark" style="color:white !important">
                <h1>
                    Respuesta
                </h1>
                </header>
            <div class="container">
                <div class="row">
                    <h1>Has solicitado la ruta /person</h1>
                </div>
            </div>
        </body>
</html>
    `);
});

module.exports = router;