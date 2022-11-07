const fs = require('fs')

const resultado = fs.readFileSync('teste.txt', {
    encoding: 'utf-8'
})
console.log(resultado)

const os = require('os')
console.log(os.cpus())