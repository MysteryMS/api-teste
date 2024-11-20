const express = require('express')
const santosJson = require('./santos.json')

const app = express()

app.get('/santos', (req, res) => {

    const mes = new Date().getMonth() + 1
    const dia = new Date().getDate()

    const santo = santosJson[mes.toString()][dia.toString()]

    console.log(santo)

    res.send(santo)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
