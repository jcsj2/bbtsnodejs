import express from 'express'
import morgan from 'morgan'
import UsuarioController from './controllers/UsuarioController.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())

const usuarioController = new UsuarioController()

app.post('/usuarios/criar', usuarioController.criar.bind(usuarioController))
app.get('/usuarios/listar', usuarioController.listar.bind(usuarioController))

app.listen(3000, () => {
    console.log('Servidor iniciado')
})