const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProviderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
});

ProviderSchema.plugin(mongoosePaginate);

mongoose.model('Provider', ProviderSchema);