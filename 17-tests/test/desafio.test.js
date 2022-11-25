const cadastros = [
    {
        nome: 'John doe',
        email: 'johndoe@email.com',
        cpfOuCnpj: '12345678910'
    }
]
function cadastrar(dadosCadastro) {

    const emailJaExiste = cadastros.some(c => c.email === dadosCadastro.email)

    if (emailJaExiste) {
        throw new Error('e-mail já utilizado')
    }

    if (dadosCadastro.cpfOuCnpj.length != 11 && dadosCadastro.cpfOuCnpj.length != 14) {
        throw new Error('cpf ou cnpj inválido')
    }

    cadastros.push(dadosCadastro)
}

describe('cadastro de usuarios', () => {

    it('validar um cadastro todo OK', () => {

    })

    it('validar se email já existe', () => {

    })

    it('validar se é um CPF válido', () => {
        
    })

    it('validar se é um CNPJ válido', () => {
        
    })

    it('validar se informar um CPF ou CNPJ inválido retorna um erro', () => {
        
    })
})

