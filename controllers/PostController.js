const Post = require('../models/Post')

module.exports = {
    // List Pots
    async home(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then((posts) =>{     
            res.render("home", {posts: posts})
        })
    },

    // Create Post
    async cadastroPost(req, res){
        res.render("formulario")
    },

    async salvarCadastroPost(req, res){
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(() => {
            res.redirect("/")
        }).catch((erro) => {
            res.send("Erro ao criar o post " + erro)
        })
    },

    // Update Post
    async alteracaoDePost(req, res){
        Post.findOne({
            where: {'id': req.params.id}
        }).then((post) => {
            res.render('formulario', {post: post})
        }).catch(erro => {
            res.send('Post não encontrado ' + erro)
        })
    },

    async salvarAlteracaoDePost(req, res){
        Post.update({
            title: req.body.title,
            content: req.body.content,
            where: {'id': req.params.id}
        }).then(() => {
            res.send("Postagem alterada com sucesso")
        }).catch((erro) => {
            res.send("Erro ao alterar postagem" + erro)
        })
    },

    // Delete Post
    async exclusaoDePost(req, res){
        Post.destroy({
            where: {'id': req.params.id}
        }).then(() => {
            res.send("Postagem excluída com sucesso")
        }).catch((erro) => {
            res.send("Erro ao deletar postagem" + erro)
        })
    }
}