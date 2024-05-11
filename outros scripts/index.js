// para pegar, muda o arquivo para a raiz, dentro da pasta n vai

const express = require("express") // requisitando o express
const app = express()

// apenas servidor e porta, n precisa mexer
app.listen(8081, function () {
    console.log("Servidor funcionando")
})


//Rotas
app.get("/", function (req, res) { // manda a msg ao passar pelo /
    res.send("Seja bem vindo")
})
app.get("/sobre", function (req, res) {
    res.send("minha página sobre") //É necessário fazer a página sobre.html
})

app.get("/aluno", function (req, res){
    res.redirect("http://aluno.html") // no lugar de mandar msg, ele vai redirecionar para o documento desejado
})

//Adicionando Parametros
app.get("ola/:cargo/:nome", function (req, res) {
    res.send(req.params)
    //ou
    res.send("<h1>Olá" + req.name + "</h1>")
})