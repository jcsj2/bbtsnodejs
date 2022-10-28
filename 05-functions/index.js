const locacao = {
    cliente: "Zé",
    datas: [
        new Date(2022, 9, 26, 4),
        new Date(2022, 9, 27, 4),
        new Date(2022, 9, 28, 4)
    ],
    filmes: [
        {
            nome: "Star wars 11",
            categoria: "Terror",
            lancamento: true
        },
        {
            nome: "Exterminador do Futuro 2",
            categoria: "Familia",
            lancamento: false
        },
    ],
}

let soma = 0;
const valorPorDia = 3;

function ehFinalDeSemana (diaDaSemana) {
    const finalDeSemana = diaDaSemana === 0 || diaDaSemana === 5 || diaDaSemana === 6
    return finalDeSemana
}

for (const data of locacao.datas) {

    const diaDaSemana = data.getDay();

    for (const filme of locacao.filmes) {

        let valorDia = valorPorDia;

        const ehQuartaELancamento = diaDaSemana === 3 && filme.lancamento
        const finalDeSemana = ehFinalDeSemana(diaDaSemana)
        const ehFinalDeSemanaEFamilia = (finalDeSemana) && filme.categoria === "Familia"

        if (ehQuartaELancamento || ehFinalDeSemanaEFamilia) {
            valorDia = valorDia - 1
        }
        
        soma = soma + valorDia;
    }

}

// console.log(soma);

function numeros(numeroEspecial, ...nums) {
//    console.log(nums)

    for (const n of nums) {
//        console.log(n)
    }

}

numeros(1, 2, 3, 4, 5, 6)


/*
function multiplicacao (num1, num2) {
    return num1 * num2;
}
*/

const multiplicacao = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplicacao(1, 2))



function teste (funcao) {
    console.log("Chamou teste")
    funcao()
}

/*teste(function () {
    console.log("chamou a funcao de callback")
})*/