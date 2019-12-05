const express = require ('express');
const routes = express.Router();
const FuncionarioController = require('./controllers/FuncionarioController');//importo metodo
const CustomerController = require('./controllers/CustomerController');

routes.get("/funcionario", FuncionarioController.index);
routes.post("/funcionario", FuncionarioController.store);
routes.post("/funcionario/:id", FuncionarioController.show);
routes.put("/funcionario/:id", FuncionarioController.update);
routes.delete("/funcionario/:id", FuncionarioController.destroy);


routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.destroy);
module.exports = routes;