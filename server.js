//Definindo constante das dependências (o retorno é uma função)
const express = require('express');
const mongoose = require('mongoose');

//Definindo constante e executando função express
const app = express();

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);

//Definindo rotas a serem acessadas pelo usuário
app.get('/', (req, res) => {

});

//Indicando para a aplicação ouvir a porta 3001 do navegador (http://localhost:3001)
app.listen(3001);