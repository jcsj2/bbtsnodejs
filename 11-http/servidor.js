const express = require('express') //alternativa fastify
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('common'))


const clientes = [
    {
        id: '1',
        nome: 'Ze',
        email: 'ze@email.com'
    },
    {
        id: '2',
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

app.delete('/apagarCliente/:id', (request, response) => {
    
    const { id } = request.params

    const indiceDoClienteEncontrado = clientes.findIndex((cliente) => cliente.id === id)

    if (indiceDoClienteEncontrado === -1) {
        response.status(404).json({
            codigo: 'ERR_CLI_01',
            mensagem: 'Cliente não encontrado'
        })
    } else {
        clientes.splice(indiceDoClienteEncontrado, 1)
        response.send()
    }
})

app.get('/pegarCliente/:id', (request, response) => {
    
    const { id } = request.params

    const indiceDoClienteEncontrado = clientes.findIndex((cliente) => cliente.id === id)

    if (indiceDoClienteEncontrado === -1) {
        response.status(404).json({
            codigo: 'ERR_CLI_01',
            mensagem: 'Cliente não encontrado'
        })
    } else {
        const clienteEncontrado = clientes[indiceDoClienteEncontrado]
        response.json(clienteEncontrado)
    }
})

app.put('/atualizarCliente/:id', (request, response) => {
    
    const id = request.params.id
    // const { id } = request.params
    const body = request.body

    const indiceDoClienteEncontrado = clientes.findIndex((cliente) => cliente.id === id)

    if (indiceDoClienteEncontrado === -1) {
        response.status(404).json({
            codigo: 'ERR_CLI_01',
            mensagem: 'Cliente não encontrado'
        })
    } else {
        clientes[indiceDoClienteEncontrado] = body
        response.send()
    }
})

app.listen('8080', () => {
    console.log('Servidor express iniciado')
})