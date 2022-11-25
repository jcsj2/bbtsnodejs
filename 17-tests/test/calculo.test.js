const { expect } = require('chai')
const { calcularDesconto } = require('../src/calculo')

describe.only('teste do calculo', () => {

    it('deve aplicar cupom de 10%', () => {

        const codigoCupom = 'vale10'
        const dataReferencia = new Date('2022-11-24 10:00:00')

        const valor = 90

        const descontoCalculado = calcularDesconto(codigoCupom, valor, dataReferencia)
        expect(descontoCalculado).to.be.equal(9)
    })

    it('não deve aplicar cupom de 10% no sabado', () => {

        const codigoCupom = 'vale10'
        const dataReferencia = new Date('2022-11-26 10:00:00')

        const valor = 90

        const descontoCalculado = calcularDesconto(codigoCupom, valor, dataReferencia)
        expect(descontoCalculado).to.be.equal(0)
    })
})