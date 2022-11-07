const idade = 15

const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (idade >= 18) {
            resolve('pode entrar')
        } else {
            reject('pode não')
        }

    }, 0)
})

p.then((valor) => {
   // console.log('deu certo a promise ', valor)
}).catch((err) => {
   // console.error(err)
}).finally(() => {
   // console.log('sempre venho por aqui')
})

// console.log('outra coisa')

const axios = require('axios')

const resultado = axios.create().get('https://api.github.com/users/JoseClaudioADS')

resultado.then((valor) => {
    // console.log(valor.data.name)
}).finally(() => {
   // console.log('busquei os dados no github')
})

// console.log('outra coisa')

async function pegarDadosGitHub(usuario) {

    const resultado = await axios.create().get('https://api.github.com/users/' + usuario)

    return resultado.data.name
}

// Top level await
/*(async () => {

    try {
        const retornoDoGitHub = await pegarDadosGitHub('JoseClaudioADS')
        console.log(retornoDoGitHub)
    
        console.log('aqui primeiro')
    } catch (err) {
        console.log('deu erro')
    }
})()*/


(async () => {

    const retornoDoZe = pegarDadosGitHub('JoseClaudioADS')
    const retornoDaGraci = pegarDadosGitHub('Graciele-Tourinho')
    const retornoDoDurigon2 = pegarDadosGitHub('durigon2')
    const retornoDoNayan = pegarDadosGitHub('N2y2n')

    const listaDePromises = [retornoDoZe, retornoDaGraci, retornoDoDurigon2, retornoDoNayan]

    const resultados = await Promise.all(listaDePromises)

    console.log(resultados)

    const ganhador = await Promise.race(listaDePromises)
    console.log(ganhador)
        
})()