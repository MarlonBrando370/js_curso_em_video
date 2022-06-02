function contador(){
    var ini = document.querySelector('#txtIn');
    var inicio = Number(ini.value);
    var f = document.querySelector('#txtFim');
    var fim = Number(f.value);
    var p = document.querySelector('#passo');
    var passo = Number(p.value);
    var p = document.querySelector('#p');
    var txt = document.getElementsByName('txt');
    p.innerHTML='Contando:'

       if( fim == 0 || inicio >= fim || fim =='' || passo == 0 || passo ==''){
           p.innerHTML='Impossível contar'
       }else{
           while(inicio <= fim){
               p.innerHTML+=`&#128073; ${inicio}  `
               inicio = inicio + passo;
           }
       }
          
}

