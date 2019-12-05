//importando mongodb
const mongoose = require('mongoose');

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

mongoose.model("Product", ProductSchema);