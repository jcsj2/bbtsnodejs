import express from 'express'
import morgan from 'morgan'
import UsuarioController from './controllers/UsuarioController.js'
import FilmeController from './controllers/FilmeController.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())

const usuarioController = new UsuarioController()
const filmeController = new FilmeController()

app.post('/usuarios/criar', usuarioController.criar.bind(usuarioController))
app.get('/usuarios/listar', usuarioController.listar.bind(usuarioController))
app.post('/usuarios/login', usuarioController.login.bind(usuarioController))

app.post('/filmes/criar', filmeController.criar.bind(filmeController))
app.get('/filmes/listar', filmeController.listar.bind(filmeController))

app.listen(3000, () => {
    console.log('Servidor iniciado')
})