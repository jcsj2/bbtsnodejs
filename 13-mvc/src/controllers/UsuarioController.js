import UsuarioModel from "../models/UsuarioModel.js"

class UsuarioController {

    constructor() {
        this.usuarioModel = new UsuarioModel()
    }

    criar(req, res) {
        const { body } = req
        this.usuarioModel.criar(body)
        res.send('Usuario criado')
    }

    listar(req, res) {
        const usuarios = this.usuarioModel.listar()
        res.json(usuarios)
    }
}

export default UsuarioController