/* eslint-disable import/extensions */
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import UsuarioController from './controllers/UsuarioController.js';
import FilmeController from './controllers/FilmeController.js';
import LocacaoController from './controllers/LocacaoController.js';
import FilmeModel from './models/FilmeModel.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const autenticador = (req, res, next) => {
  const { headers } = req;
  const { authorization } = headers;

  if (authorization) {
    try {
      jwt.verify(authorization, process.env.SENHA_DO_JWT);
      next();
    } catch (err) {
      res.sendStatus(401);
    }
  } else {
    // 401 - Unauthorized
    res.sendStatus(401);
  }
};

const filmeModel = new FilmeModel();

const usuarioController = new UsuarioController();
const filmeController = new FilmeController(filmeModel);
const locacaoController = new LocacaoController(filmeModel);

// rotas publicas
app.post('/usuarios/criar', usuarioController.criar.bind(usuarioController));
app.post('/usuarios/login', usuarioController.login.bind(usuarioController));
app.get('/filmes/listar', filmeController.listar.bind(filmeController));

app.use(autenticador);

// rotas privadas (autenticadas)
app.get('/usuarios/listar', usuarioController.listar.bind(usuarioController));
app.post('/filmes/criar', filmeController.criar.bind(filmeController));

app.post('/locacoes/criar', locacaoController.criar.bind(locacaoController));

app.listen(3000, () => {
  console.log('Servidor iniciado');
});
