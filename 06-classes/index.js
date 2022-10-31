class Cliente {

    constructor(primeiroNome, ultimoNome, email, cpfOuCnpj) {
        this.primeiroNome = primeiroNome
        this.ultimoNome = ultimoNome
        this._email = email
        this.cpfOuCnpj = cpfOuCnpj
    }

    pegarTipoPessoa () {
        return this.cpfOuCnpj.length === 11 ? "Fisica" : "Juridica"
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.ultimoNome}`
    }

    pegarCpfFormatado() {
        return `${this.cpfOuCnpj.substring(0, 3)}.${this.cpfOuCnpj.substring(3, 6)}.${this.cpfOuCnpj.substring(6, 9)}-${this.cpfOuCnpj.substring(9, 11)}`
    }

    get email() {
        return this._email
    }

    set email(email) {
//        console.log("antes " + email)
        this._email = email.toUpperCase()
    }

    static teste() {
        console.log("Chamou o teste")
    }

}

const ze = new Cliente("Ze", "Claudio", "ze@email.com", "96385274196")

// console.log(ze.pegarTipoPessoa())

// console.log("antes de atribuir " + ze.email)

ze.email = "claudio@email.com"

// console.log("depois " + ze.email)

// console.log(ze.nomeCompleto())
// console.log(ze.pegarCpfFormatado())

Cliente.teste()

