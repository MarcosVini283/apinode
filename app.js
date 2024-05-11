const express = require('express') // gerencia prompts de rede
const app = express() // inicia como obj
const userBD = require('./user-dao') // traz as funções do CRUD
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json()) // reconhecer como arquivos JSON

app.get('/', function (req, res) {
    res.send("Minha API") // quando carregar, escreve o seguinte texto
})

app.get('/users', function (req, res) {
    userBD.getAllUsers(function (users) {
        res.json(users)
    })
})
app.get('/users/:id', function (req, res) {
    const id = req.params.id
    userBD.getUserById(id, function(users){
        res.json(users)
    })
})

const server = app.listen(3000, function () {
    const host = server.address().address // endereço passa para o host
    const port = server.address().port // porta passar para a porta
    console.log("Servidor iniciado em http://%s:%s", host, port) // formatação de String
})