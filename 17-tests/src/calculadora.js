class Calculadora {

    static soma(n1, n2) {
        return n1 + n2
    }

    static subtracao(n1, n2) {
        return n1 - n2
    }

    static multiplicacao(n1, n2) {
        return n1 * n2
    }

    static divisao(n1, n2) {

        if (n1 <= 0 || n2 <= 0) {
            throw new Error('não pode dividir por zero ou números negativos')
        }

        return n1 / n2
    }
}

module.exports = Calculadora