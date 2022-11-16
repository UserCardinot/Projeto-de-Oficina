const { STRING, DatabaseError } = require('sequelize');
const { sequelize } = require('./db');
const db = require('./db');

const Post = db.sequelize.define('imovel', {
    Nome: {
        type: db.Sequelize.STRING
    },
    Categoria: {
        type: db.Sequelize.STRING
    },
    Tipo: {
        type: db.Sequelize.STRING
    },
    Descrição: {
        type: db.Sequelize.TEXT
    },
    CEP: {
        type: db.Sequelize.INTEGER(8)
    },
    NomeRua: {
        type: db.Sequelize.STRING
    },
    Número: {
        type: db.Sequelize.INTEGER
    },
    Complemento: {
        type: db.Sequelize.TEXT
    },
    Bairro: {
        type: db.Sequelize.STRING
    },
    Cidade: {
        type: db.Sequelize.STRING
    },
    Estado: {
        type: db.Sequelize.STRING(2)
    }
});

//Post.sync(({force: true})
module.exports = Post;
