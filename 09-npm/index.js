const axios = require('axios')
const fs = require('fs')

// https://pokeapi.co/
// pokemon - https://pokeapi.co/api/v2/pokemon/pikachu

axios.create().get('https://api.github.com/users/JoseClaudioADS').then((dados) => {
    fs.writeFileSync('arquivo.txt', JSON.stringify(dados.data))
})
