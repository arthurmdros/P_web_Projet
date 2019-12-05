//importando mongodb
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);