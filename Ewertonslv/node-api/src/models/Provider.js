const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProviderSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,  
    },
    cnpj: { 
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    telefone: {
        type: int,
        required: true,
    },

});

ProviderSchema.plugin(mongoosePaginate);

mongoose.model('Provider', ProviderSchema);