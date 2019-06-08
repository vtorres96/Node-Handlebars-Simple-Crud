const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

Post.create({
    title: "Segundo Título",
    content: "Segundo Conteúdo"
})


