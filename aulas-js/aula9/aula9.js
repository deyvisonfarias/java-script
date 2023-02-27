var idade = 68
if(idade < 16){
    //console.log('Não Vota')
}else if(idade <18 || idade > 65){
    //console.log('Voto Opcional')
}else{
    //console.log('Voto Obrigatório')
}

var agora = new Date()
var hora = agora.getHours()

console.log( `Agora são exatamente: ${hora} horas`)
if( hora < 12){
    console.log('BOM DIA!')
}else if(hora <=18){
    console.log('BOA TARDE!')
}else{
    console.log('BOA NOITE!')
}