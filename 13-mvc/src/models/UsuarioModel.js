import bcrypt from 'bcrypt';

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
        return {
          nome: usuarioPorEmail.nome,
          email: usuarioPorEmail.email,
          chave: 'sextou',
        };
      }
      throw new Error(msgErro);
    } else {
      throw new Error(msgErro);
    }
  }
}

export default UsuarioModel;
