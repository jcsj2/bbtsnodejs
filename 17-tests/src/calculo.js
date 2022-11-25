const cupons = new Map();
cupons.set('vale10', {
    porcentagem: 10
})

const SEGUNDA_FEIRA = 1
const SEXTA_FEIRA = 5

function ehDiaUtil (dataReferencia) {
    const diaDaSemana = dataReferencia.getDay()
    return diaDaSemana >= SEGUNDA_FEIRA && diaDaSemana <= SEXTA_FEIRA
}

function buscarPorcentagem(codigoCupom) {
    const { porcentagem } = cupons.get(codigoCupom)
    return porcentagem
}

function calcularDesconto(codigoCupom, valor, dataReferencia) {
    if (!ehDiaUtil(dataReferencia)) return 0
    const porcentagem = buscarPorcentagem(codigoCupom)
    return (valor / 100) * porcentagem
}

module.exports = {
    calcularDesconto
}