var agora = new Date()
var horas = agora.getHours()
var diaHoje = new Date()
var dia = diaHoje.getDate()
var minAgora = new Date();
var min = minAgora.getMinutes();
var mesAgora = new Date();


console.log(`Agora são exetamente ${horas}:${min} horas. `);
console.log(`Dia ${dia} `);
if(horas < 12){
    console.log('Bom dia!');
}else{
    if(horas <= 18){
        console.log('Boa tarde!')
    }else{
        if(horas <= 24 || horas == 00){
            console.log('Boa noite!');
        }else{
            console.log('Não existe!')
        }
    }
}