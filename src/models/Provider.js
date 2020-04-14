//Modelo do cliente
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProviderSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    dataDeCriacao: {
        type: String,
        required: true,
    }
});

ProviderSchema.plugin(mongoosePaginate);

mongoose.model('Provider', ProviderSchema);