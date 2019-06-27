const express = require('express')
const PostController = require('./controllers/PostController')

const routes = new express.Router()

// Home
routes.get("/", PostController.home)

// Posts - Create
routes.get("/cadastro", PostController.cadastroPost)
routes.post("/salvar-cadastro", PostController.salvarCadastroPost)

// Posts - Update
routes.get("/alterar-post/:id", PostController.alteracaoDePost)
routes.post('/alterar-post/:id', PostController.salvarAlteracaoDePost)

// Post - Delete
routes.get("/deletar/:id", PostController.exclusaoDePost)

module.exports = routes