//Definindo constante da dependência express (o retorno é uma função)
const express = require('express');

//Definindo constante e executando função express
const app = express();

//Indicando para a aplicação ouvir a porta 3001 do navegador (http://localhost:3001)
app.listen(3001);