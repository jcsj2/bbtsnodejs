class Cliente {

    constructor(nome, email, endereco) {
        this.nome = nome
        this.email = email
        this.endereco = endereco
    }

}

class ClienteFisico extends Cliente {

    constructor(nome, email, endereco, cpf) {
        super(nome, email, endereco)
        this.cpf = cpf
    }

    tipoPessoa() {
        console.log("fisica")
    }
}

class ClienteJuridico extends Cliente {

    constructor(nome, email, endereco, cnpj) {
        super(nome, email, endereco)
        this.cnpj = cnpj
    }

    tipoPessoa() {
        console.log("juridica")
    }
}

class Endereco {
    constructor(rua, numero, cidade, uf) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.uf = uf
    }
}

const enderecoDoZe = new Endereco("Rua tal", 123, "Cidade alta", "PE")

const clienteFisico = new ClienteFisico("ze fisico", "zefisico@email.com", enderecoDoZe, "12345678914")
const clienteJuridico = new ClienteJuridico("ze juridico", "zejuridico@email.com", enderecoDoZe, "12345678912345")

// console.log(clienteFisico)
// console.log(clienteJuridico)


class Animal {
    constructor(nome, barulho) {
        this.nome = nome
        this.barulho = barulho
    }

    fazerBarulho() {
        console.log(`${this.nome} fez ${this.barulho}`)
    }
}

class Dog extends Animal {

    constructor(nome) {
        super(nome, "Auuuuuu")
    }
}

class Cat extends Animal {

    constructor(nome) {
        super(nome, "Miauuuuu")
    }
}

const pluto = new Dog("Pluto")
const frajola = new Cat("Frajola")

// console.log(pluto)
// console.log(frajola)

// pluto.fazerBarulho()
// frajola.fazerBarulho()