const express = require("express")
const app = express()

const porta = 7777

function mostraPorta() {
    console.log("Servidor criado e iniciado na porta", porta)
}

mostraPorta()

app.listen(porta, mostraPorta)