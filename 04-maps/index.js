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

const dicionario = new Map();

dicionario.set("luke", luke)
dicionario.set("leia", leia)
dicionario.set("obiwan", obiwan)

// console.log(dicionario.values())
// console.log(dicionario.keys())
// console.log(dicionario.get("luke"))

// console.log(dicionario.entries())

for (const [chave, valor] of dicionario.entries()) {
    // console.log(chave, valor)
}

const temObjetoDoBanco = dicionario.get("leia")

if (temObjetoDoBanco) {
    const objetoDoBanco = dicionario.get("leia")
    // console.log(objetoDoBanco)
}

// dicionario.clear()
// dicionario.delete("luke")

// console.log(dicionario)