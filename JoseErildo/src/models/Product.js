//importando mongodb
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    /*id:{
        type: Number,
        required: true,
    },*/
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