const { expect } = require('chai')

function somar(n1, n2) {
    return n1 + n2
}

it('deve somar dois numeros', () => {

    const resultadoDaSoma = somar(1, 2)

    expect(resultadoDaSoma).to.be.equal(3)
})

const pessoa = {
    nome: 'Jose Claudio',
    email: 'joseclaudio@email.com',
    birthday: new Date(1991, 8, 24),
    hobbies: ['video games', 'programar', 'praia']
}

it('deve validar dados de uma pessoa', () => {

    expect(pessoa).to.be.a('object')
    expect(pessoa).to.deep.equal({
        nome: 'Jose Claudio',
        email: 'joseclaudio@email.com',
        birthday: new Date(1991, 8, 24),
        hobbies: ['video games', 'programar', 'praia']
    })
    expect(pessoa).to.have.property('hobbies').with.lengthOf(3)

})