//Definindo constante das dependências (o retorno é uma função)
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Definindo constante e executando função express
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
requireDir('./src/models');


//Definindo rotas a serem acessadas pelo usuário
app.use('/api', require('./src/routes'));

//Indicando para a aplicação ouvir a porta 3001 do navegador (http://localhost:3001)
app.listen(3001);