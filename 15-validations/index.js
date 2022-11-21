const express = require('express')
const yup = require('yup') //JOI --> AJV Validator

const app = express()
app.use(express.json())

const clientes = []

app.get('/', (req, res) => {
    res.json(clientes)
})

app.post('/', (req, res) => {

    const { body } = req

    const schemaValidator = yup.object().shape({
        nome: yup.string().required().max(200).min(20),
        email: yup.string().email()
    })

    /*if (schemaValidator.isValidSync(body)) {
        clientes.push(body)
        res.send('Foi')
    } else {
        res.send('Dados inválidos')
    }*/

    try {
        schemaValidator.validateSync(body, { abortEarly: false })
        clientes.push(body)
        res.send('Foi')
    } catch(err) {
        res.status(400).send(err.errors)
    }

})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})