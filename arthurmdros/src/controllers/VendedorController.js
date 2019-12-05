const db = require('./conexaodb');
const Vendedor = db.sequelize.define('vendedores', {
    nome: {
        type: db.Sequelize.STRING
    },
    cargo: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }    
})

module.exports = {
    async index(req, res) {
        res.render('index')
    },
    async formVendedor(req,res){
        res.render('formVendedor')
    },
    async addVendedor(req,res){                
        Vendedor.create({
            nome: req.body.nome,
            cargo: req.body.cargo,
            senha: req.body.senha
        }).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.send("Houve um erro na criação do vendedores: "+erro)
        })
    },async listarVendedor(req,res){
        Vendedor.findAll({order: [['id','ASC']]}).then((vendedores) =>{
            res.render('vendedor',{vendedores: vendedores})
        })
    },async buscarVendedor(req,res){
        res.render('buscarVendedor')
    },async detalheVendedor(req,res){
        Vendedor.findAll({where: {'id': req.query.id}})
        .then((vendedores)=>{
            res.render('detalheVendedor',{vendedores: vendedores})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },
    async deletarVendedor (req,res){
        Vendedor.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarvendedores')
        }).catch(()=>{
            res.send("Este vendedor não existe!")
        })
    },
    async formAlterar(req, res){        
        res.render("formAlterar")        
    },async alterarVendedor(req,res){
        const id = req.query.id;          
        let values = {
            nome: req.query.nome,
            cargo: req.query.cargo,
            senha: req.query.senha
        };
        Vendedor.update(        
            values,{where: {id: id}}
        ).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.send("Houve um erro na alteração do vendedor: "+erro)
        })
    }
}


