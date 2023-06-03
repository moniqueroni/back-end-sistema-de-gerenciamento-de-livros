const express = require("express")
const router = express.Router()

const app = express()
const porta = 7777

const apredendosobrefibromialgia = [
    {
        Nome: 'Fibromialgia sem mistérioFibromialgia sem mistério: um guia para pacientes, familiares e médicos',
        autor: 'Manuel Martínez-Lavín',
        categoria: 'Saúde e Família',
        descricao: 'Este livro esclarece vários aspectos de um problema de saúde polêmico e ainda não totalmente compreendido nem mesmo pela classe médica: a fibromialgia. Apresenta os principais sinais e sintomas dessa doença, explica por que seu diagnóstico é tão difícil e apresenta alguns conceitos importantes que explicam a provável causa e as possibilidades de tratamento do problema.'
    },
    {
        Nome: 'Fibromialgia: O Mal-estar do Século XXI',
        autor: 'Rafael da Silva Mattos',
        categoria: 'Medicina',
        descricao: 'A proposta deste livro é contribuir para a compreensão de novas práticas terapêuticas corporais que possibilitem maior autonomia para pessoas com fibromialgia, produzindo novos sentidos e significados para o viver, ajudando seus portadores a romper com a solidão do sofrimento. Trata-se de uma obra dirigida tanto aos profissionais da área da Saúde, que poderão conhecer mais sobre o diagnóstico, os sintomas e os tratamentos para a fibromialgia, como às pessoas acometidas dessa patologia ou que lidam com alguém nessa condição.'
    }
]


function mostraApredendoSobreFibromialgia(request, response) {
    response.json(apredendosobrefibromialgia)
}


function mostraPorta() {
    console.log("Servidor criado e iniciado na porta", porta)
}


app.use(router.get('/apredendosobrefibromialgia', mostraApredendoSobreFibromialgia))
app.listen(porta, mostraPorta)