const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routers');

//securing DB url
process.env.URL = 'mongodb+srv://USER:USER1234@telegrom-lhpui.mongodb.net/test';
const URL = process.env.URL;

//connecting db
db(URL);

const app = express();
app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));



app.listen(3000);
console.log('escuchando en puerto 3000');