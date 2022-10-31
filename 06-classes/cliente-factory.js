class Cliente {

    constructor( ) {}

    static clienteSimples(nome, email) {

        const c = new Cliente()
        c.nome = nome
        c.email = email

        return c
    }

    static clienteComCpf(nome, email, cpf) {
        const c = Cliente.clienteSimples(nome, email)
        c.cpf = cpf

        return c
    }

}

const cliente1 = Cliente.clienteSimples("Cliente 1", "cliente1@email.com")
console.log(cliente1)

const clientePessoaFisica = Cliente.clienteComCpf("Cliente com CPF", "clienteComCPF@email.com", "5461655161")
console.log(clientePessoaFisica)