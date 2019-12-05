const db = require('./conexaodb');

const Venda = db.sequelize.define('vendas', {
    cliente: {
        type: db.Sequelize.STRING
    },
    vendedor: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    },
    produto: {
        type: db.Sequelize.STRING
    }    
})

module.exports = {
    async index(req, res) {
        res.render('index')
    },
    async formVenda(req,res) {        
        res.render('formVenda') 
    },
    async confirmarVenda(req,res){                
        Venda.create({            
            cliente: req.body.cliente,
            vendedor: req.body.vendedor,            
            valor: req.body.valor,
            produto: req.body.produto
        }).then(()=>{
            res.redirect('/inicio') // REDIRECIONAMENTO DE ROTAS
        }).catch((erro)=>{
            res.send("Houve um erro na efetuação da venda: "+erro)
        })
    },async listarVenda(req,res){
        Venda.findAll({order: [['createdAt','DESC']]}).then((vendas)=>{            
            res.render('venda',{vendas: vendas})
        })        
    },async buscarVenda(req,res){
        res.render('buscarVenda')
    },async detalheVenda(req,res){
        Venda.findAll({where: {'id': req.query.id}})
        .then((vendas)=>{
            res.render('detalheVenda',{vendas: vendas})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },async deletarVenda (req,res){
        Venda.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarvendas')
        }).catch(()=>{
            res.send("Este vendedor não existe!")
        })
    },async formAlterarVenda(req, res){        
        res.render("formAlterarVenda")        
    },async alterarVenda(req,res){
        const id = req.query.id;          
        let values = {
            vendedor: req.query.vendedor,
            cliente: req.query.cliente,
            produto: req.query.produto,
            valor: req.query.valor
        };
        Venda.update(        
            values,{where: {id: id}}
        ).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.send("Houve um erro na alteração da venda: "+erro)
        })
    }
}