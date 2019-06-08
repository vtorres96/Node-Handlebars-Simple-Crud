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

User.create({
    first_name: "Marcelo",
    last_name: "Diament",
    email: "mdiament@digitalhouse.com",
    age: 20
})