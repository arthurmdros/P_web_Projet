const express = require ('express');
const routes = express.Router();
const FuncionarioController = require('./controllers/FuncionarioController');//importo metodo

routes.get("/funcionario", FuncionarioController.index);
routes.post("/funcionario", FuncionarioController.store);
routes.post("/funcionario/:id", FuncionarioController.show);
routes.put("/funcionario/:id", FuncionarioController.update);
routes.delete("/funcionario/:id", FuncionarioController.destroy);
module.exports = routes;