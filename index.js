const express = require("express")
const app = express()
const herois = ["Mulher Maravilha", "Superman", "Batman"]

app.use(express.json());

app.get('/herois', function (req, res) {
    res.send(herois)
})

app.get('/herois/:id', function (req, res) {
    const id = req.params.id
    res.send(herois[id - 1])
})

app.post('/herois', function (req, res) {
    const { nome } = req.body
    herois.push(nome)
    console.log(`Dados recebidos: Nome do herói - ${nome}`)
    res.send(nome)
})


app.listen(3000)