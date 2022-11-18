/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import UsuarioController from './controllers/UsuarioController.js';
import FilmeController from './controllers/FilmeController.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const autenticador = (req, res, next) => {
  const { headers } = req;
  const { authorization } = headers;

  if (authorization && authorization === 'sextou') {
    next();
  } else {
    // 401 - Unauthorized
    res.sendStatus(401);
  }
};

const usuarioController = new UsuarioController();
const filmeController = new FilmeController();

// rotas publicas
app.post('/usuarios/criar', usuarioController.criar.bind(usuarioController));
app.post('/usuarios/login', usuarioController.login.bind(usuarioController));
app.get('/filmes/listar', filmeController.listar.bind(filmeController));

app.use(autenticador);

// rotas privadas (autenticadas)
app.get('/usuarios/listar', usuarioController.listar.bind(usuarioController));
app.post('/filmes/criar', filmeController.criar.bind(filmeController));

app.listen(3000, () => {
  console.log('Servidor iniciado');
});
