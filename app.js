const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

// Config Handlebars - Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

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

// Server
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
