function recarrega(){
var hora = document.querySelector('#horas');
var titulo = document.querySelector('#titulo');
var imagem = document.querySelector('#imagem');
var h1 = document.querySelector('#titulo')


var horasAg = new Date;
var horasAgora = horasAg.getHours();
//var horasAgora = 15
var min = new Date;
var minutes = min.getMinutes();
hora.innerHTML=`Agora são ${horasAgora}:${minutes} horas  `

if (horasAgora >= 0 && horasAgora < 12){
titulo.innerHTML='Bom Dia!'
imagem.src='imagens/manha1.png'
document.body.style.background='#e2cd9f'
titulo.style.background='rgba(0, 0, 0, 0.218)'


}else if(horasAgora < 18){
    titulo.innerHTML='Boa tarde!'
    imagem.src='imagens/tarde1.png'
    document.body.style.background='#b9846f'

    titulo.style.background='rgba(0, 0, 0, 0.218)'
   
}else{
    titulo.innerHTML='Boa noite!'
    imagem.src='imagens/noite1.jpg'
    document.body.style.background='#515154'
    titulo.style.background='rgba(0, 0, 0, 0.218)'

    

}
}
