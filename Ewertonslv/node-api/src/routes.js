const express = require('express');

const routes = express.Router();

const ProviderController = require('./controllers/ProviderCrontroller');
routes.get('/providers', ProviderController.index);
routes.get('/providers/:id', ProviderController.show);
routes.post('/providers', ProviderController.store);
routes.put('/providers/:id', ProviderController.update);
routes.delete('/providers/:id', ProviderController.destroy);


module.exports = routes;