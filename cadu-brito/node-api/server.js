const express = require('express');/*01para ter acesso ao express */
const mongoose = require('mongoose');/*06importo o mongosse */
const cors = require('cors');
const requireDir = require('require-dir');// 11- importando a require dir

const app = express();
app.use(express.json());
app.use(cors());
//iniciando do banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true});

requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3001);
























/*
/*02depois de ter acesso vamos executar  a funçao 
const app = express();


//07iniciando bd                   porta /schema utilizado ou database
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true});
//dando orequire para registrar o model
requireDir('./src/models');

//recebe todas requisoes =------ROTAS
app.use('/api', require('./src/routes'));
app.listen(3001);
/*05iniciar mongo ----mongod 
*/