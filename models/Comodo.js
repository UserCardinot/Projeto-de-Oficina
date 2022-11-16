const { STRING, DatabaseError } = require('sequelize');
const { sequelize } = require('./db')
const db = require('./db');
const Post = require('./Post')

const Comodo = db.sequelize.define('Comodo', {
    Name: {
        type: db.Sequelize.STRING
    },
    Mobiliado: {
        type: db.Sequelize.BOOLEAN
    },
})

Comodo.belongsTo(Post, {
    constraint: true,
    foreingKey: 'idPost'
})

Post.hasMany(Comodo, {
    foreingKey: 'idPost'
})

Comodo.sync({force: true})
module.exports = Comodo;
