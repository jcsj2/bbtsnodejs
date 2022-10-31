class Calculadora {

    static soma(num1, num2) {
        return num1 + num2
    }

    static sub(num1, num2) {
        return num1 - num2
    }

    static multi(num1, num2) {
        return num1 * num2
    }

    static divisao(num1, num2) {
        return num1 / num2
    }
}

console.log(Calculadora.soma(1, 2))
console.log(Calculadora.sub(10, 8))