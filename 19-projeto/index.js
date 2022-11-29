const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor iniciado')
})