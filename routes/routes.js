const express = require("express");
const router = express.Router()
const Pergunta = require("../database/Pergunta");
const Resposta = require("../database/Resposta");

router.get("/",(req, res)=>{
    //Mostrar os dados na Home page
    Pergunta.findAll({raw:true, order:[ // ORDENANDO A EXIBICAO NO FRONT 
        ['id', 'DESC'] // ASC = CRESCENTE || DESC = DECRESCENTE
    ]}).then(perguntas => {
        res.render("index",{
            perguntas:perguntas
        });
    }) ; 
});
 router.get("/perguntar",(req,res)=>{
    res.render("perguntar")
    
})
 router.post("/salvarpergunta", (req, res)=>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    if (titulo && descricao !== undefined){
        
      Pergunta.create({
        titulo: titulo,
        descricao: descricao
    
    }).then(()=>{
        res.redirect("/")
    })   
   } else{
       
    res.status(500).send({error: true, msg:'Dados não cadastrado !'})
   }
   
})
router.get("/pergunta/:id",(req, res)=>{
    let id = req.params.id;
    Pergunta.findOne({
        where:{id:id}

    }).then(pergunta =>{
        if(pergunta != undefined){ // pergunta encontrada

            Resposta.findAll({
                where: {perguntaId:pergunta.id},
                order: [['id','DESC']] 
            }).then (respostas =>{
                res.render("pergunta",{
                pergunta: pergunta,
                respostas: respostas
            });
         });
        }else{ // nao encontrada
            res.redirect("/");
        }
    });
});

router.post("/responder",(req, res) =>{
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    }).then(()=>{
        res.redirect("/pergunta/" + perguntaId);
    })
     .catch((msgErro)=>{
        console.log(msgErro)
        res.status(500).send({
            error: true, 
            msg: 'Dados não cadastrado no banco de dados !'})
    });
       
        
       
})

// TRATAMENTO DE ERRO 'PAGINA NAO ENCONTRADA'
router.use(function(req, res, next){
    res.status(404)
    res.render('partials/erro', {url: req.url})
});

module.exports = router
