const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) =>{
    /*Product.create({
        //id = 1,
        nome: "Jaqueta",
        descricao: "Jaqueta de couro",

    })*/
    return res.send("Hello Rocketseat");
});

module.exports = routes;