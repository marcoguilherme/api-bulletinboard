//Dependencies used
const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

//bodyParser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign()
    .include('api/routes')
    .then('api/models')
    .then('api/controllers')
    .then('config/database.js')
    .into(app);


module.exports = app;