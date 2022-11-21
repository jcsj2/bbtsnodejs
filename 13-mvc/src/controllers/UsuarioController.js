import * as yup from 'yup';
// eslint-disable-next-line import/extensions
import UsuarioModel from '../models/UsuarioModel.js';

class UsuarioController {
  constructor() {
    this.usuarioModel = new UsuarioModel();
  }

  criar(req, res) {
    const { body } = req;

    const validador = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email(),
      senha: yup.string().required().min(6),
    });

    if (validador.isValidSync(body)) {
      this.usuarioModel.criar(body);
      res.send('Usuario criado');
    } else {
      res.status(400).send('Dados inválidos');
    }
  }

  listar(req, res) {
    const usuarios = this.usuarioModel.listar();
    res.json(usuarios);
  }

  login(req, res) {
    // const body = req.body
    const { body } = req;
    try {
      const usuario = this.usuarioModel.login(body.email, body.senha);
      res.json(usuario);
    } catch (err) {
      // 400 - BadRequest --> um problema do cliente
      res.status(400).send(err.message);
    }
  }
}

export default UsuarioController;
