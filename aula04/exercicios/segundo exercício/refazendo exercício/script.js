
function verificar(){
    //Variável do id ano de nascimento
    var anoN = document.querySelector('#txtAno');
    anoNasc = Number(anoN.value)

    //Variável  id do parágrafo que mostra idade
    var mensagem =document.querySelector('#mensagem');

    var imagem = document.querySelector('#imagem')

    var anoAt = new Date
    var anoAtual = anoAt.getFullYear()
    var idade = anoAtual-anoNasc
    var genero = document.getElementsByName('genero');

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(anoNasc == 0 || anoNasc > anoAtual ){
      alert('[ERRO] Verifique os dados e tente novamente!');
      imagem.src=''
      mensagem.innerHTML=''
       
    } else if(genero[0].checked){
             genero='Homem'
          if(idade >= 0 && idade <= 4){
            imagem.src='imagens prontas/bebe-m.png'
            
           }else if(idade <= 9){
                 //criança-m
                 imagem.src='imagens prontas/crianca-m.png'
                
              
            }else if(idade <= 18){
                  //adolescente-m
                imagem.src='imagens prontas/adolescente-m.png' 
           }else if(idade <= 50){
                 imagem.src='imagens prontas/adulto-m.png'
                 
           }else if(idade > 50){
                 imagem.src='imagens prontas/idoso.png'
                 
          }
          mensagem.innerHTML=`Detectamos um(a) ${genero} de ${idade} anos`

      } else if(genero[1].checked){
        genero= 'Mulher'
        if(idade <= 4){
             imagem.src='imagens prontas/bebe-f.png'
             
          }else if(idade <= 9){
            imagem.src='imagens prontas/crianca-f.png'
             
            
          }else if(idade <= 18){
             //adolescente-f
             imagem.src='imagens prontas/adolescente-f.png'
            
          }else if(idade <= 50){
             //adolto-f
             imagem.src='imagens prontas/adulta-f.png'
          }else if(idade > 50){
           //idoso-f
           imagem.src='imagens prontas/idosa.png'
           
          }
          mensagem.innerHTML=`Detectamos um(a) ${genero} de ${idade} anos` 
         }  
    
 
        
}