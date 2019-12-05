const express = require('express');
const mongoose = require('mongoose');

//iniciando app
const app = express();

//iniciando DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useNewUrlParser: true });


//primeira rota
app.get('/', (req, res) => {
    res.send("oi ewertoon")
});

app.listen(3001);