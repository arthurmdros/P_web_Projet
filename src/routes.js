const express = require('express');
const routes = express.Router();

const CustomerController = require('./controllers/CustomerController');

routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.destroy);

module.exports = routes;