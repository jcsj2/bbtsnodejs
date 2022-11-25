const { expect } = require("chai")
const Calculadora = require("../src/calculadora")

describe('operações básicas', () => {



    it('deve somar dois numeros', () => {
        expect(Calculadora.soma(3, 2)).to.be.equal(5)
    })

    it('deve subtrair dois numeros', () => {
        expect(Calculadora.subtracao(3, 2)).to.be.equal(1)
    })

    it('deve dividir dois numeros', () => {
        expect(Calculadora.divisao(10, 2)).to.be.equal(5)
    })

    it('não deve dividir se algum dos números for zero ou negativo', () => {

        let mensagemErro

        try {
            Calculadora.divisao(10, 0)
        } catch (err) {
            mensagemErro = err.message
        }

        expect(mensagemErro).to.be.equal('não pode dividir por zero ou números negativos')
    })
})