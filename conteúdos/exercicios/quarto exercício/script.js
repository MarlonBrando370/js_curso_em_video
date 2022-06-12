function tabuada(){
    var nu = document.getElementById('txtN');
    var tab = document.getElementById('seltab');
    
   
    if(nu.value == ''){
        window.alert('Por favor, digite um número!');
    }else{
        tab.innerHTML=''
        let n = Number(nu.value);
        for(let c = 1; c <=10; c++ ){
            let item = document.createElement('option');
            item.text = `${n} * ${c} = ${n*c} `
            item.value =`${c}`
            tab.appendChild(item);
           
        }
    }
}