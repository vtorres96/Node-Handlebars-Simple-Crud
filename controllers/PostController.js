const Post = require('../models/Post')

module.exports = {
    // List Pots
    async home(req, res){
        await Post.findAll({order: [['id', 'DESC']]}).then((posts) =>{     
            res.render("home", {posts: posts})
        })
    },

    // Create Post
    async cadastroPost(req, res){
        await res.render("formulario")
    },

    async salvarCadastroPost(req, res){    
        await Post.create({
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
        const id = req.params.id
        await Post.findOne({
            where: {'id': id}
        }).then((post) => {
            if(post){
                res.render('formulario', {post: post})
            } else {
                res.redirect('/')
            }
        }).catch(erro => {
            res.send('Post não encontrado ' + erro)
        })
    },

    async salvarAlteracaoDePost(req, res){
        const id = req.params.id
        await Post.update({      
            title: req.body.title,
            content: req.body.content,
            where: {'id': id}
        }).then((post) => {
            res.redirect("/", {post: post})
        }).catch((erro) => {
            res.send("Erro ao alterar postagem" + erro)
        })
    },

    // Delete Post
    async exclusaoDePost(req, res){
        const id = req.params.id
        await Post.destroy({
            where: {'id': id}
        }).then(() => {
            res.send("Postagem excluída com sucesso")
        }).catch((erro) => {
            res.send("Erro ao deletar postagem" + erro)
        })
    }
}
