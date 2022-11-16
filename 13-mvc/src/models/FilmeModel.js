class FilmeModel {

    constructor() {
        this.filmes = []
    }

    criar(dadosFilme) {
        this.filmes.push(dadosFilme)
    }

    listar() {
        return this.filmes
    }
}

export default FilmeModel