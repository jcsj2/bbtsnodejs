const cliente = {
    nome: "Jose Claudio",
    email: "zeasdasd",
    idade: 31
}

const validator = require('validator')

console.log(validator.isEmail(cliente.email))