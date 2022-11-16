import FilmeModel from '../models/FilmeModel.js'

class FilmeController {

    constructor() {
        this.filmeModel = new FilmeModel()
    }

    criar(req, res) {
        const { body } = req
        this.filmeModel.criar(body)
        res.send('Filme criado')
    }

    listar(req, res) {
        const filmes = this.filmeModel.listar()
        res.json(filmes)
    }
}

export default FilmeController