const soma = require("./soma") // pega a função requerindo o nome do arquivo
const subtracao = require("./sub")
const multiplicacao = require("./mult")
const divisao = require("./div")

console.log(soma(2, 3)) // exibe a função importada dentro do console (só mostra pq tem retorno)
console.log(subtracao(3, 1))
console.log(multiplicacao(3, 3))
console.log(divisao(15, 3))