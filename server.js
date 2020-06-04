const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routers');

//securing DB url
process.env.URL = 'mongodb+srv://USER:USER1234@telegrom-lhpui.mongodb.net/test';
const URL = process.env.URL;

//connecting db
db(URL);

app.use(bodyParser.json());

socket.connect(server);

router(app);

app.use('/app', express.static('public'));



server.listen(3000, () => {
    console.log('escuchando en puerto 3000');

});