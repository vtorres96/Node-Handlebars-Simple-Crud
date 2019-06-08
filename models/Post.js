const conn = require ('./conn')

const Post = conn.sequelize.define('posts', {
    title: {
        type: conn.Sequelize.STRING
    },
    content: {
        type: conn.Sequelize.TEXT
    }
})

module.exports = Post