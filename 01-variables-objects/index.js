let firstName;
const age = 31;// Number
const likeGames = true; // Boolean false
const temperature = 38.4; // Number

firstName = "Ze" // String

console.log(firstName, age, likeGames, temperature)

console.log(typeof likeGames)

// Object (Date), Array e Function

const eu = {
    nome: "Jose Claudio",
    aniversario: new Date(1991, 8, 24) //mes em JavaScript é 0 based
}

console.log(eu)

console.log(eu.nome)

eu.nome = "Jose Claudio da Silva Junior"

console.log(eu.nome)

eu.cidade = "Jaboatão dos Guararapes"

clientes = {
    nome: 'a',
    email: 'a@a.com'
}

let inputDoUsuario;

inputDoUsuario = 'nome';

console.log(eu[inputDoUsuario])

console.log(JSON.stringify(eu))


