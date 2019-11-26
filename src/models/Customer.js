//Modelo do cliente
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    dataDeNascimento: {
        type: String,
        required: true,
    }
});

mongoose.model('Customer', CustomerSchema);