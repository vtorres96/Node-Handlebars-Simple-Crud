const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_mysql', 'victor', '03v01t96m', {
    host: 'localhost',
    dialect: 'mysql'
})

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


