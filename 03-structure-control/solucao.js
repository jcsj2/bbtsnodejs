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

for (const data of locacao.datas) {

    const diaDaSemana = data.getDay();

    for (const filme of locacao.filmes) {

        let valorDia = valorPorDia;

        const ehQuartaELancamento = diaDaSemana === 3 && filme.lancamento
        const ehFinalDeSemana = diaDaSemana === 0 || diaDaSemana === 5 || diaDaSemana === 6
        const ehFinalDeSemanaEFamilia = (ehFinalDeSemana) && filme.categoria === "Familia"

        if (ehQuartaELancamento || ehFinalDeSemanaEFamilia) {
            valorDia = valorDia - 1
        }
        
        soma = soma + valorDia;
    }

}

console.log(soma);