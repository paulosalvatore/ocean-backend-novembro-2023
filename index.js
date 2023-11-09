const express = require('express')
const app = express()

// Registrar um Middleware de JSON
// Indica que todas as requisições podem receber
// Body em JSON. A partir disso, o Express aplica
// um JSON.parse para o conteúdo recebido
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!")
})

const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]
//              0               1              2

// Read All - [GET] /item
app.get("/item", function (req, res) {
  res.send(lista)
})

// Read by ID - [GET] /item/:id
app.get("/item/:id", function (req, res) {
  // Pegamos o ID de rota e subtraímos 1 para ficar
  // equivalente ao índice da lista que começa em 0
  const id = req.params.id - 1

  // Acessamos o item na lista, usando o índice corrigido
  const item = lista[id]

  // Enviamos o item como resposta do endpoint
  res.send(item)
})

// Create - [POST] /item
app.post("/item", function (req, res) {
  // Extraímos o nome do Body da Requisição
  const item = req.body.nome

  // Adicionamos o item recebido na lista
  lista.push(item)

  // Exibimos uma mensagem de sucesso
  res.send("Item adicionado com sucesso!")
})

app.listen(3000)
