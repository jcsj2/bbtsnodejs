const alfabeto = ['a','b','c','d','e', 'f', 'g']
const numeros = [1, 2, 3, 4, 5]

const [letraA, , letraC, , batatinha ] = alfabeto

// console.log(letraA, letraC, batatinha)

const token = "Bearer kjnasniodajnsdnjkasd98asd98.nbuasuhd9basb9da9bsdn9asnd.nua9sudb9as9bd9aa0="

const [, jwt] = token.split(" ")

// console.log(jwt)

// spread operator ...

//console.log(alfabeto.concat(numeros))

const todos = [...alfabeto, ...numeros]
// console.log(todos)

const [, letraB, , ...restanteDasLetras] = alfabeto

// console.log(restanteDasLetras)

const usuario = {
    nome: 'Usuario 1',
    email: 'usuario@email.com',
    senha: undefined,
    data: undefined
}

// desestruturização

const { senha, nome, data = new Date() } = usuario


//console.log(senha, nome, data)

function logarInformacoes({email, senha = 'abcde'}) {
    console.log(`Usuario de email: ${email} e senha ${senha}`)
}

logarInformacoes(usuario)
