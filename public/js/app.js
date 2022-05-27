const form = document.getElementById('formulario');
const formResponda = document.getElementById('formResponda');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('floatingTextarea');
const btnPergResp = document.getElementById('btn-perg-resp');
const btnResp = document.getElementById('btn-perg-resp');
const resposta = document.getElementById('resposta');
const alerta = document.getElementById('alerta');

btnPergResp.addEventListener("click", (e)=>{
    e.preventDefault()
    perguntas()
});

btnResp.addEventListener("click", (e)=>{
  e.preventDefault()
   responda()
});

// TRATANDO CAMPO DE DADOS INVALIDOS
function perguntas (){
    if(titulo.value !== "" &&  descricao.value !== "" ){
        bootstrapSuccess()
        setTimeout(() => {
            form.requestSubmit()
          }, "3000")
        return true;
        
    }else{
        bootstrapError()
        return false;
    }
}
function responda(){
  if(resposta.value !== ""){
    bootstrapSuccess()
    setTimeout(() => {
      formResponda.submit()
      }, "1500")
    return true;
  }else{
    bootstrapError();
    return false;
}
}

function bootstrapError(){
    $(".bootstrap-growl").remove();
    $.bootstrapGrowl(" <center> <strong>Erro Preencha Todos os Campos !!</strong> </center>",{
  type: "danger",
  offset:{from:"top",amount:70},
  align:"center",
  width: 420,
  delay: 3000,
  allow_dismiss: true,
  stackup_spacing: 10
})
}

function bootstrapSuccess(){
    $(".bootstrap-growl").remove();
    $.bootstrapGrowl(" Pergunta Cadastrada com Sucesso !!",{
  type: "success",
  offset:{from:"top",amount:70},
  align:"center",
  width: 420,
  delay: 3000,
  allow_dismiss: true,
  stackup_spacing: 10
})
}

