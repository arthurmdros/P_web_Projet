const mongoose = require('mongoose');

const Customer = mongoose.model('Customer');

module.exports = {
    async index(req, res){
        const customers = await Customer.find();

        return res.json(customers);
    },

    async show(req, res){
        const customer = await Customer.findById(req.params.id);

        return res.json(customer);
    },

    async store(req, res){
        const customer = await Customer.create(req.body);

        return res.json(customer);
    },

    async update(req, res){
        const product = await Customer.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res){
        await Customer.findByIdAndRemove(req.params.id);

        return res.send();
    }
};