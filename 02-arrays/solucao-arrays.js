// Desafio principal:

const clientes = [
    {
        primeiroNome: "Jose Claudio",
        ultimoNome: "da Silva Junior",
        cpfOuCnpj: "12345678912",
        contato: "8181818181"
    },
    {
        primeiroNome: "John Doe",
        ultimoNome: "da Silva",
        cpfOuCnpj: "98765432154987",
        contato: "52525252525"
    },
    {
        primeiroNome: "Maria",
        ultimoNome: "da Silva",
        cpfOuCnpj: "85296374152",
        contato: "7845125458"
    }
]

function pegarTipoPessoa (cpfOuCnpj) {
    return cpfOuCnpj.length === 11 ? "Fisica" : "Juridica"
}

const clientesConvertidos = clientes.map((cliente) => {
    return {
        nomeCompleto: cliente.primeiroNome + " " + cliente.ultimoNome,
        tipoPessoa: pegarTipoPessoa(cliente.cpfOuCnpj)
    }
})

// console.log(clientesConvertidos)

const clientesTipoPessoaFisica = clientesConvertidos.filter((cliente) => cliente.tipoPessoa === "Fisica")
const clientesTipoPessoaJuridica = clientesConvertidos.filter((cliente) => cliente.tipoPessoa === "Juridica")

// console.log("clientes pessoa fisica", clientesTipoPessoaFisica)
// console.log("clientes pessoa juridica", clientesTipoPessoaJuridica)


// Fim desafio principal