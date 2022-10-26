// para executar basta chamar o comando node [nomedoarquivo].js

let marvelMovies = ['Iron Man', 'Blade']

// console.log(marvelMovies)
// console.log(typeof marvelMovies)
// console.log(marvelMovies[0])

marvelMovies[0] = 'Homem formiga'

marvelMovies[2] = 'Capitao America'

// console.log(marvelMovies[0], marvelMovies[1], marvelMovies[2])

marvelMovies.push('Avengers')

// console.log(marvelMovies)

const lastMovie = marvelMovies.pop()

// console.log(marvelMovies)

// console.log(lastMovie)

const ze = {
    nome: "Jose Claudio",
    idade: 31,
    cidade: "Jaboatão",
    filmes: ["Senhor dos Aneis", "Jason Bourne", "Avengers"],
    hobbies: ["Gamer", "Praia", "Comer"]
}


const luke = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    birthDay: new Date(1991, 8, 24),
    jedi: true
}

const leia = {
    firstName: 'Leia',
    lastName: 'Organa',
    birthDay: new Date(2001, 3, 1),
    jedi: false
}

const obiwan = {
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    birthDay: new Date(1970, 5, 10),
    jedi: true
}

const starWars = [luke, leia, obiwan];

// console.log(starWars)

for (let i = 0; i < starWars.length; i++) {
    // console.log(starWars[i].lastName)
}


for (let personIndex in starWars) {
    // console.log(starWars[personIndex].firstName)
}

for (let person of starWars) {
    // console.log(person.firstName)
}


// Operadores aritmeticos = + - * /

/* console.log(1 + 1)
console.log(2 - 1)
console.log(2 * 3)
console.log(4 / 2)
console.log(4 % 2) // Resto da divisão
*/

// --- Concatenação +
const idade = 31
// console.log("Jose Claudio " + " da Silva Junior " + " - tenho " + idade + " anos");

let contador = 0

// enquanto
while (contador < 5) {
    // console.log("contador: " + contador)
    contador++
}

contador = 0

do {
    // console.log("do while contador: " + contador)
    contador++
} while(contador > 5)

