const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    
    res.send('Lista de mensajes');
})

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje anadido');
})

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.listen(3000);
console.log('escuchando en puerto 3000');