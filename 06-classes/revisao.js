class Usuario {

    constructor(nome, senha) {
        console.log('Chamei o construtor')
        this.nome = nome
        this.senha = senha
    }

    set email(novoValorDeEmail) {
        this._email = novoValorDeEmail.toUpperCase()
    }

    get email() {
        return this._email
    }

    nomeComEmail() {
        // console.log(`${this.nome} - ${this.email}`)
    }

    senhaConfere(senhaParaConferencia) {
        // console.log(this.senha === senhaParaConferencia)
    }
}

const usuarioZe = new Usuario('Jose', '123123')
usuarioZe.telefone = '8181818181'
usuarioZe.email = 'nov22222absasdsdoemail@emai.com'

usuarioZe.nomeComEmail()
usuarioZe.senhaConfere('123123')


class CalcularFrete {

    static calcularFreteCorreios(valorDoProduto) {
        return valorDoProduto * 0.35
    }
}

console.log(CalcularFrete.calcularFreteCorreios(90))