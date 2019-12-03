const mongoose= require('mongoose'); /*importo o moongose*/
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
        },
        createdAt:{
            type: Date,
            default:Date.now,
        },
});
FuncionarioSchema.plugin(mongoosePaginate);
mongoose.model('Funcionario', FuncionarioSchema);