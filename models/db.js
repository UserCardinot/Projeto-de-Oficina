const Sequelize = require('sequelize')

//Conexão com o banco de dados
const sequelize = new Sequelize('projetoOficina', 'root', '7242', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() =>{
    console.log("Conectado ao banco")
}).catch((erro) =>{
    console.log("Falha ao se conectar!")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}