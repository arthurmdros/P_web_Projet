//importando mongodb
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{
        type: Int16Array,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    descricao{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now;
    };

});

mongoose.model("Product", ProductSchema);