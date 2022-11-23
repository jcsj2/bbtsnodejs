const jwt = require('jsonwebtoken')

const senha = 'sdni0fi0sd0f0msd0f0sd0mf09s-s=f=f435-4-=!!!+_=-0s=odfk=sd=kf=00!!!!!***8---98988757d3'

const usuarioLogado = {
    id: '1',
    nome: 'Junior',
    email: 'junior@email.com'
}

const tokenGerado = jwt.sign(usuarioLogado, senha, {
    expiresIn: '30m'
})

console.log(tokenGerado)

// console.log(jwt.decode(tokenGerado))

setTimeout(() => {
    try {
        const tokenVerificado = jwt.verify(tokenGerado, senha)
        console.log('deu tudo certo ', tokenVerificado)
    } catch(err) {
        console.log(err)
    }
}, 5000)

