
  function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.getElementById('imagem')
    var titulo = document.querySelector('#titulo')
    
    var hA = new Date;
    var hora = hA.getHours();
    
    var minA = new Date;
    var min = minA.getMinutes();
    
    
    msg.innerHTML=`Agora são ${hora}:${min} horas `
    

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src="../primeiro exercício/imagens/manha1.png"
        document.body.style.background ='#e2cd9f'
        titulo.innerHTML='Bom dia!'
    }else{
        if  (hora >= 12 && hora <= 18){
            //Boa tarde!
            img.src='../primeiro exercício/imagens/tarde1.png'
            document.body.style.background='#b9846f'
            titulo.innerHTML='Boa terde!'
        }else{
          //Boa noite!
          img.src="../primeiro exercício/imagens/noite1.jpg"
          document.body.style.background='#515154'
          titulo.innerHTML='Boa noite!'
        }
    }
}
   
