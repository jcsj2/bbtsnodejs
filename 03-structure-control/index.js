
const nota = 9

// && E
// || OU

if (nota >= 6 && nota <= 7) {
    // console.log("Ta na media")
} else if (nota >= 8) {
    // console.log("Tooop demais")
} else {
    // console.log("Caiu no else")
}

// != DIFERENTE
// == IGUAL

// !== DIFERENTE COMPARANDO TIPO
// === IGUAL COMPARANDO TIPO

const ehIgual = "1" === 1

console.log(ehIgual)


const bancoDeDados = [
    {
        nome: "Ze Claudio",
        login: "ze",
        senha: "123456"
    },
    {
        nome: "John Wick",
        login: "wick",
        senha: "432233"
    }
]

const dadosUsuario = {
    login: "ze4",
    senha: "123456a"
}

let usuarioEncontrado = null;

for (const usuario of bancoDeDados) {
    if (dadosUsuario.login === usuario.login) {
        usuarioEncontrado = usuario
        break; // para a iteracao
        // continue; -> pula a iteracao
    }
}

if (usuarioEncontrado != null) {
    if (usuarioEncontrado.senha === dadosUsuario.senha) {
        console.log("Login com sucesso")
    } else {
        console.log("Senha incorreta")
    }
} else {
    console.log("Usuario nao encontrado")
}

/*break;
continue;

Sao utilizados em LOOPS (ou seja, podem ser utilizados no while)

*/

const dataAtual = new Date(2022, 9, 30, 4)

switch (dataAtual.getDay()) {
    case 0:
        console.log("domingo")
        break;
    case 1:
        console.log("segunda")
        break;
    case 2:
        console.log("terca")
        break;
    case 3:
        console.log("quarta")
        break;
    case 4:
        console.log("quinta")
        break;
    case 5:
        console.log("sexta")
        break;
    case 6:
        console.log("sabado")
        break;
    default:
        console.log("que dia e esse?")
}