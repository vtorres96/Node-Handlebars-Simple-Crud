const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// Config Handlebars - Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connect to Database
const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_mysql', 'victor', '03v01t96m', {
    host: 'localhost',
    dialect: 'mysql'
})

// Routes 
app.get("/cadastro", (req, res) => {
    res.render("formulario")
})

app.post("/salvar-cadastro", (req, res) => {
    res.send("Título: " + req.body.title + "Conteúdo: " + req.body.content)
})

// Server
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
