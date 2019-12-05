const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();
        
        //retorna monteúdo armazenado em 'products'
        return res.json(products);
    },

async show(req, res){
    const product = await Product.findById(req.params.id);

    return res.json(product);
},

    async store(req, res){
        //passando todos os campos da requisição
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        //encpntrar pelo id e substituir
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
        return res.json(product);
    },

    async destroy(req, res){
        //como é exclusão, não é necessário salvar o conteúdo em uma variável
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
};