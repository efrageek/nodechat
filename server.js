const express = require('express');

const app = express();
app.use('/', (req, res) => {
    res.send('Hola');
});

app.listen(3000);
console.log('escuchando en puerto 3000');