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

    login(email, senha) {

        const usuarioPorEmail = this.usuarios.find(usuario => usuario.email === email)

        if (usuarioPorEmail) {

            const senhasConferem = bcrypt.compareSync(senha, usuarioPorEmail.senha)

            if (senhasConferem) {
                return {
                    nome: usuarioPorEmail.nome,
                    email: usuarioPorEmail.email
                }
            } else {

            }

        } else {

        }
    }

}

export default UsuarioModel