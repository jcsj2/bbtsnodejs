/* eslint-disable import/extensions */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UsuarioModel {
  constructor() {
    this.usuarios = [];
  }

  criar(dadosUsuario) {
    const novoUsuario = dadosUsuario;
    novoUsuario.senha = bcrypt.hashSync(novoUsuario.senha, 6);

    this.usuarios.push(novoUsuario);
  }

  listar() {
    const usuarios = this.usuarios.map((usuario) => ({
      nome: usuario.nome,
      email: usuario.email,
    }));

    return usuarios;
  }

  login(email, senha) {
    const msgErro = 'E-mail ou senha inválidos.';
    const usuarioPorEmail = this.usuarios.find((usuario) => usuario.email === email);

    if (usuarioPorEmail) {
      const senhasConferem = bcrypt.compareSync(senha, usuarioPorEmail.senha);

      if (senhasConferem) {
        const dadosParaOToken = {
          nome: usuarioPorEmail.nome,
        };

        const tokenGerado = jwt.sign(dadosParaOToken, process.env.SENHA_DO_JWT);

        return {
          token: tokenGerado,
        };
      }
      throw new Error(msgErro);
    } else {
      throw new Error(msgErro);
    }
  }
}

export default UsuarioModel;
