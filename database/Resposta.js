

const Sequelize = require ("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas",{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false,  // Campo nunca pode ser vazio
        validate:{
            notNull: { msg: '"Descricao" requerida' },
            notEmpty: {
                msg:'coloque uma descricao'
            }
        }
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notNull: { msg: '"Descricao" requerida' },
            notEmpty: {
                msg:'coloque uma descricao'
            }
        }
    },
});

Resposta.sync({force: false});
module.exports = Resposta;