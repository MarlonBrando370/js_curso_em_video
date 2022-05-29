function verificar(){
    var anoI = document.querySelector('#txtNasc');
    var ano = Number(anoI.value);
    //opSex é o gênero escolhido
    var opSex = document.getElementsByName('txtSex');
    var imagem = document.querySelector('#imagem');


    var anoA = new Date;
    var anoAtual = anoA.getFullYear();
    var idade = anoAtual - ano

    // msg é o id do paragráfo que irá aparecer idade é gênero
    var msg = document.querySelector('#msg');

    if(ano > anoAtual || ano == 0){
        alert('[ERRO] Verifique os dados e tente novamente!');
    }else if(opSex[0].checked){
        opSex='Homem'

        if (idade <=4){
            imagem.src='imagens prontas/bebe-m.png'
        }else if(idade <= 9){
            imagem.src='imagens prontas/crianca-m.png'
        }else if(idade <= 19){
            imagem.src='imagens prontas/adolecente-m.png'
        }else if(idade <= 45){
            imagem.src='imagens prontas/adulto.png'
        }else if(idade > 45){
            imagem.src='imagens prontas/idoso.png'
        }
    }else{
        if(opSex[1].checked){
            opSex = 'Mulher'

         if (idade <=4){
            imagem.src='imagens prontas/bebe-f.png'
        }else if(idade <= 9){
            imagem.src='imagens prontas/crianca-f.png'
    
        }else if(idade <= 20){
            imagem.src='imagens prontas/adolecente.png' 
        }else if(idade <= 45){
            imagem.src='imagens prontas/adulta-f.png'
        }else if(idade > 45){
            imagem.src='imagens prontas/idasa.png'
        }
    }
    }
    msg.innerHTML=`Detectamos um ${opSex} de ${idade} anos  `
}