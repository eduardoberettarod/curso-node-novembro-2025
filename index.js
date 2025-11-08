const express = require("express")
const app = express()
app.get('/', function (req, res) {
    res.send('Hello Word')
})

app.get('/oi', function (res, req) {
    res.send('Olá mundo!')
})

app.listen(3000)
