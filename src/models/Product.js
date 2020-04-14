//Modelo do cliente
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    quantidade: {
        type: String,
        required: true,
    },
    fornecedor: {
        type: String,
        required: true,
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);