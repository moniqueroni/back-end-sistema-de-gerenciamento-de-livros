const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    },
    autor:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('gerenciamentodesistemadelivros', LivroSchema)