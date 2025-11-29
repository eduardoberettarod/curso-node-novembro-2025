const express = require("express")
const app = express()
app.use(express.json());
const herois =
 [
    {
        "id": 1,
        "nome":'Mulher Maravilha',
        "editora": "Marvel",
        "foto": "https://img.elo7.com.br/product/zoom/17EC5F9/painel-mulher-maravilha-g-frete-gratis-painel-impresso.jpg%22",
        "criador": "Eduardo"
    },
    {
        "id": 2,
        "nome":'Lanterna Verde',
        "editora": "Marvel",
        "foto": "https://m.media-amazon.com/images/I/611cVvZPg-L._AC_UF894,1000_QL80_.jpg",
        "criador": "Eduardo"
    },
    {
        "id": 3,
        "nome":'Homem de Ferro',
        "editora": "Marvel",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFvCUVlD_TeaVPRI6wsIYEEUAAZBtl2eQn32ylYVm8W3mxzkRIgoxW6JRuGXJBOycaNk&usqp=CAU%22",
        "criador": "Eduardo"
    }  
]
 
app.get('/herois', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(herois)
})
 
app.get('/herois/:id', function (req, res) {
    const id = req.params.id
    res.send(herois[id - 1])
})
 
app.post('/herois', function (req, res) {
    let novoHeroi = req.body.nome;
    herois.push(novoHeroi);
    res.send("ok")
})
 
app.listen(3000)