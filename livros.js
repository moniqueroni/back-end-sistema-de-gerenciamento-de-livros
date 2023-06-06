const express = require("express")
const router = express.Router()

const app = express()
const porta = 7777

function mostraLivros(request, response) {
    response.json({
        nome: 'Fibromialgia sem mistérioFibromialgia sem mistério: um guia para pacientes, familiares e médicos',
        imagem: 'https://m.media-amazon.com/images/I/514Zmv63+ZL._SX331_BO1,204,203,200_.jpg',
        autor: 'Manuel Martínez-Lavín',
        categoria: 'Saúde e Família',
        descricao: 'Este livro esclarece vários aspectos de um problema de saúde polêmico e ainda não totalmente compreendido nem mesmo pela classe médica: a fibromialgia. Apresenta os principais sinais e sintomas dessa doença, explica por que seu diagnóstico é tão difícil e apresenta alguns conceitos importantes que explicam a provável causa e as possibilidades de tratamento do problema.'
    })
}

function mostraPorta() {
    console.log("Servidor criado e iniciado na porta", porta)
}


app.use(router.get('/livros', mostraLivros))
app.listen(porta, mostraPorta)