const axios = require('axios')

// https://pokeapi.co/
// pokemon - https://pokeapi.co/api/v2/pokemon/pikachu

axios.create().get('https://api.github.com/users/JoseClaudioADS').then((dados) => {
    console.log(dados.data)
})
