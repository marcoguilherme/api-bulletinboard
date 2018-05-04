//Inportacao das dependencias usadas
var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

//Configuracao do body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);


module.exports = app;