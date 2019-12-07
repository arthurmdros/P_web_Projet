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
        sexo: {
            type: String,
            required: true,
        },
        dataDeNascimento: {
            type: String,
            required: true,
        }
});
FuncionarioSchema.plugin(mongoosePaginate);
mongoose.model('Funcionario', FuncionarioSchema);