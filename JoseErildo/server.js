const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true});

    require('./src/models/Product');
// Primeira Rota
app.get("/", (req, res) =>{
    res.send("Hello Rocketseat");
});


app.listen(3001);