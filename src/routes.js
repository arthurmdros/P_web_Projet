const express = require('express');
const routes = express.Router();

const CustomerController = require('./controllers/CustomerController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProviderController = require('./controllers/ProviderController');
const ProductController = require('./controllers/ProductController');
routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.destroy);

routes.get("/funcionario", FuncionarioController.index);
routes.post("/funcionario", FuncionarioController.store);
routes.get("/funcionario/:id", FuncionarioController.show);
routes.put("/funcionario/:id", FuncionarioController.update);
routes.delete("/funcionario/:id", FuncionarioController.destroy);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:id', ProviderController.show);
routes.post('/providers', ProviderController.store);
routes.put('/providers/:id', ProviderController.update);
routes.delete('/providers/:id', ProviderController.destroy);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;