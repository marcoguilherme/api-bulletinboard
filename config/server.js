//Inportacao das dependencias usadas
const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

//Configuracao do body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('config/database.js')
    .into(app);


module.exports = app;