
const sequelize = require ("sequelize");
const connection = require("./database");

// definindo o nome da tabela
const Pergunta = connection.define('pergunta',{
    titulo:{
        type:sequelize.STRING,
        allowNull: false ,
        validate:{
            notNull: { msg: '"Descricao" requerida' },
            notEmpty: {
                msg:'coloque uma descricao'
            }
        }
       
    },
    descricao:{
        type:sequelize.TEXT,
        allowNull: false ,
        validate:{
            notNull: { msg: '"Descricao" requerida' },
            notEmpty: {
                msg:'coloque uma descricao'
            }
        }
        
    },
    
});

Pergunta.sync({force:false}).then(()=>{
   
}) // se nao tiver uma tabela pergunta ,esse comando cria.
module.exports = Pergunta;