const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports= {
    //Listagem de produtos
    async index(req, res){
        const { page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10 });

        return res.json(products);
    },
    //mostrar um produto
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
        },


    //Criação de produto
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //atualização
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        return res.json(product);
    },


    //remoção
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();

    },
};