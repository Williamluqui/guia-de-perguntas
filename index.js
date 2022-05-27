
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require ("./database/database");
const port = process.env.PORT;
const router = require("./routes/routes");

// CONEXAO COM O BANCO DE DADOS
connection
.authenticate()
.then(()=>{
    console.log("BANCO DE DADOS CONECTADO !")
})
.catch((msgErro)=>{
    console.log(msgErro)
})

//EJS ENGINE
app.set('view engine','ejs')
app.use(express.static('public'));
// body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// ROTAS
app.use('/', router)

//  MUDAR PORTA NO dotenv
app.listen(port || 3000 ,()=>{
    console.log('******** Server ON !! ***********')
});
