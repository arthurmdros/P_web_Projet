const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();
        
        //retorna monteúdo armazenado em 'products'
        return res.json(products);
    }
};