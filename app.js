const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/html/" })
})

app.get("/sobre", (req, res) => {
    res.sendFile("sobre.html", { root: __dirname + "/html/" })
})

app.get("/ola/:nome", (req, res) => {
    res.send("Seja bem-vindo " + req.params.nome)
})

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})
