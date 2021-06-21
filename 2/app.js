const express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hola Mundo!2');
});

app.listen(3000, function() {
    console.log('App escuchando el puerto 3000');
});