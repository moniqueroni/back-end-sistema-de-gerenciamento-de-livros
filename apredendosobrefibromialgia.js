const express = require("express")
const router = express.Router()
const cors = require('cors')
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

const Livro = require('./apredendosobrefibromialgiaModel')

const app = express()
app.use(express.json())
app.use(cors())

const porta = 7777

//GET
async function mostraApredendoSobreFibromialgia(request, response) {
    try {
        const apredendosobrefibromialgiaVindosDoBancoDeDados = await Livro.find()

        response.json(apredendosobrefibromialgiaVindosDoBancoDeDados)
    }catch(erro){
        console.log(erro)
    }
}

//POST
async function criaLivro(request, response) {
    const novoLivro = new Livro({
        nome: request.body.nome,
        imagem: request.body.imagem, 
        autor: request.body.autor,
        categoria: request.body.categoria,
        descricao: request.body.descricao
    })

    try {
        const livroCriado = await novoLivro.save()
        response.status(201).json(livroCriado)
    }catch(erro) {
        console.log(erro)
    }
}
//PATCH
async function corrigeLivro(request, response) {
    try {
        const livroEncontrado = await Livro.findById(request.params.id)

        if (request.body.nome) {
            livroEncontrado.nome = request.body.nome
          }
    
          if (request.body.autor) {
            livroEncontrado.autor = request.body.autor
          }
    
          if (request.body.imagem) {
            livroEncontrado.imagem = request.body.imagem
          }
    
          if (request.body.categoria) {
            livroEncontrado.categoria = request.body.categoria
          }
    
          if (request.body.descricao) {
            livroEncontrado.descricao = request.body.descricao
          }

          const livroAtualizadoNoBancoDeDados = await livroEncontrado.save()

          response.json(livroAtualizadoNoBancoDeDados)

    }catch(erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaLivro(request, response) {
    try {
        await Livro.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Livro deletado com sucesso!'})
    }catch(erro) {
        console.log(erro)
    }

}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e iniciado na porta", porta)
}


app.use(router.get('/apredendosobrefibromialgia', mostraApredendoSobreFibromialgia))
app.use(router.post('/apredendosobrefibromialgia', criaLivro))
app.use(router.patch('/apredendosobrefibromialgia/:id', corrigeLivro))
app.use(router.delete('/apredendosobrefibromialgia/:id', deletaLivro))
app.listen(porta, mostraPorta)