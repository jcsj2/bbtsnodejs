const express = require('express') //alternativa fastify
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('common'))


const clientes = [
    {
        nome: 'Ze',
        email: 'ze@email.com'
    },
    {
        nome: 'Maria',
        email: 'maria@email.com'
    },
]

app.get('/pegarClientes', (request, response) => {
    response.json(clientes)
})

app.post('/criarCliente', (request, response) => {

    const body = request.body

    clientes.push(body)

    response.send()

})

app.listen('8080', () => {
    console.log('Servidor express iniciado')
})