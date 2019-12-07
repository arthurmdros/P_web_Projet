//Modelo do cliente
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const FuncionarioSchema = new mongoose.Schema({
    cpf:{ 
        type: String,
        required:true,
    },
    nome:{
        type: String,
        required:true,
    },
    url:{
        type: String,
        required:true,
    }
});
FuncionarioSchema.plugin(mongoosePaginate);
mongoose.model('Funcionario', FuncionarioSchema);