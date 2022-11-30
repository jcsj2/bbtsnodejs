const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()
app.use(express.json())

const dadosColetados = []


app.get('/buscarPorCodigo/:codigoFipe', (req, res) => {
    const { codigoFipe } = req.params
    axios.create().get(`https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`).then((resultado) => {
        const primeiroConjuntoDeDados = resultado.data[0]
        dadosColetados.push(primeiroConjuntoDeDados)
        res.json(primeiroConjuntoDeDados)
    })  
})

app.post('/gerarArquivo', (req, res) => {
    fs.writeFileSync('dadosFipe.txt', JSON.stringify(dadosColetados))
    res.json(dadosColetados)
})

app.listen(3005, () => {
    console.log('Servidor iniciado')
})