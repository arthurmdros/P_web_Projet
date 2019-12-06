const mongoose = require('mongoose');

const Provider = mongoose.model('Provider');

module.exports= {
    //Listagem de funcionarios
    async index(req, res){
        const { page = 1} = req.query;
        const providers = await Provider.paginate({}, {page, limit: 10 });

        return res.json(providers);
    },
    //mostrar um funcionario
    async show(req, res){
        const provider = await Provider.findById(req.params.id);

        return res.json(provider);
        },


    //Criação de produto
    async store(req, res){
        const provider = await Provider.create(req.body);

        return res.json(Provider);
    },

    //atualização
    async update(req, res){
        const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        return res.json(provider);
    },


    //remoção
    async destroy(req, res){
        await Provider.findByIdAndRemove(req.params.id);
        return res.send();

    },
};