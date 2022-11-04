// console.log(__dirname)

const os = require('os')

// console.log(os.cpus())

const fs = require('fs')

const dados = fs.readFileSync('./teste.txt', { encoding: 'utf-8' })

console.log(dados)

console.log(fs.readdirSync('./'))
