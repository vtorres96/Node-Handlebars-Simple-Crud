const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config Handlebars - Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes 

// Home
app.get("/", (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) =>{     
        res.render("home", {posts: posts})
    })
})

// Posts
app.get("/cadastro", (req, res) => {
    res.render("formulario")
})

app.post("/salvar-cadastro", (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect("/")
    }).catch((erro) => {
        res.send("Erro ao criar o post " + erro)
    })
})

// Server
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
