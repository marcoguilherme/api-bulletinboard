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
    .then('config/database.js')
    .then('api/models')
    .then('api/controllers')
    .into(app);


module.exports = app;