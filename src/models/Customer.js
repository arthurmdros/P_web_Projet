//Modelo do cliente
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

CustomerSchema.plugin(mongoosePaginate);

mongoose.model('Customer', CustomerSchema);