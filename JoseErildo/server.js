const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/node", 
    { useUnifiedTopology: true});

    requireDir("./src/models");

    //const Product = mongoose.model('Product');
// Primeira Rota
app.use('/api', require('./src/routes'));


app.listen(3001);   