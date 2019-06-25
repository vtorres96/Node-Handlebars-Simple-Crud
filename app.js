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

app.use(require('./routes'))

// Server
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
