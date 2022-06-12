function tabuada(){
    var num = document.querySelector('#txtN');
    var n = Number(num.value);
  
    if(num.value == ''){
        alert('Por favor, digite um número!');
    }else{
       
        var sel = document.querySelector('#seltab');
        sel.innerHTML=''
        for(var c = 1; c <= 10; c++){
            var op = document.createElement('option');
            op.text = (`${n} * ${c} = ${n*c} `)
            sel.appendChild(op);
            op.value =`sel${c} `
        }
    }

}