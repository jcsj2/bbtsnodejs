import bcrypt from 'bcrypt'

class UsuarioModel {

    constructor() {
        this.usuarios = []
    }

    criar(dadosUsuario) {

        const novoUsuario = dadosUsuario
        novoUsuario.senha = bcrypt.hashSync(novoUsuario.senha, 6)

        this.usuarios.push(novoUsuario)
    }

    listar() {

        const usuarios = this.usuarios.map(usuario => {
            return {
                nome: usuario.nome,
                email: usuario.email
            }
        }) 

        return usuarios
    }

}

export default UsuarioModel