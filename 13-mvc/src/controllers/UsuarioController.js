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

    login(req, res) {
        //const body = req.body
        const { body } = req
        const usuario = this.usuarioModel.login(body.email, body.senha)
        res.json(usuario)
    }
}

export default UsuarioController