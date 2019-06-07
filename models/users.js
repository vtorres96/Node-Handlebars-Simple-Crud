const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_mysql', 'victor', '03v01t96m', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = sequelize.define('users', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})
