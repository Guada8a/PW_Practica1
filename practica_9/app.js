const express = require('express');
const app = express();
app.get('/', (req, res) => { //route handler
    res.send('Hello World, this is a root route');
});

app.get('/uno', (req, res) => { //route handler
    res.send('Hello World, from route One');
});

app.get('/prueba', (req, res) => { //route handler
    res.send(`<!DOCTYPE html>
    <html lang = "en" >
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Raíz</title>
                    </head>
                    <body>
                        <h1>Práctica 9</h1>
                        <p>Respuesta del Servidor mediante HTML</p>
                    </body>
                </html>`);
});

app.listen(3000, () => console.log('Listening on port 3000')); //port listener


