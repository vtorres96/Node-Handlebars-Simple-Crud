const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_mysql', 'victor', '03v01t96m', {
    host: 'localhost',
    dialect: 'mysql'
})

/*
sequelize.authenticate().then(
    () => console.log("Conecado com sucesso")
).catch(
    (erro) => console.log("Falha ao conectar " + erro)
)
*/
