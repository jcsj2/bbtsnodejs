
const idade = 20

try {
    if (idade >= 18) {
        console.log('Ok pode entrar')
    } else {
        throw new Error('Idade não permitida')
    }
} catch(err) {
    console.log('deu erro')
} finally {
    console.log('eu sempre virei aqui')
}