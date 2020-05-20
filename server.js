const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "valor personalizado"
    })
    
    response.succes(req, res, 'Lista de mensajes');
})

router.post('/message', (req, res) => {
    console.log(`Esto viene del query: ${JSON.stringify(req.query)}`);
    console.log(`Esto viene del body: ${JSON.stringify(req.body)}`);
    // res.status(201).send([{
    //     error: '', body: 'Creado correctamente'
    // },
    // {
    //     error: '', body: 'Creado correctamente'
    // }]);
    if (req.query.error === 'ok'){
        response.error(req, res, 'Error simulado', 400);

    } else {
        response.succes(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static('public'));

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.listen(3000);
console.log('escuchando en puerto 3000');