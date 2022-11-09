const express = require('express')

const app = express()

const clientes = [
    {
        nome: 'Ze',
        email: 'ze@email.com'
    },
    {
        nome: 'Maria',
        email: 'maria@email.com'
    },
    {
        nome: 'Joao',
        email: 'joao@email.com'
    },
]

app.get('/pegarClientes', (request, response) => {
    response.json(clientes)
})

app.get('/pegarNomesDosClientes', (request, response) => {

    const nomesDosClientes = clientes.map((cliente) => {
        return {
            nome: cliente.nome
        }
    });

    response.json(nomesDosClientes)
})

app.listen('8080', () => {
    console.log('Servidor express iniciado')
})