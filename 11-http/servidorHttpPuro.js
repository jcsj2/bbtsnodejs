const http = require('http')

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

const requestListener = (request, response) => {

    if (request.method === 'GET') {
        if (request.url === '/pegarClientes') {
                // 200 -> OK
                response.writeHead(200, {'Content-type': 'application/json'})
                response.end(JSON.stringify(clientes))
        }
    }

}

const server = http.createServer(requestListener)

// PORTA -> 8080
// "IP" -> 127.0.0.1 --> localhost

server.listen('8080', 'localhost', () => {
    console.log('Servidor iniciado')
})