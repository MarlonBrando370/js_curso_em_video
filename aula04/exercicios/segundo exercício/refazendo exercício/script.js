
function verificar(){
    //Variável do id ano de nascimento
    var anoN = document.querySelector('#txtAno');
    anoNasc = Number(anoN.value)

    //Variável  id do parágrafo que mostra idade
    var mensagem =document.querySelector('#mensagem');

    var anoAt = new Date
    var anoAtual = anoAt.getFullYear()
    var idade = anoAtual-anoNasc
    var genero = document.getElementsByName('genero');

    if(genero[0].checked ){
      genero = 'Homem'
        mensagem.innerHTML=`${idade}`
    }

   
     

    
}