function att(){
    let msg = document.getElementById('msg')
    let foto = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas`
    if(hora >=0 && hora < 12){
        msg.innerHTML += `<br> BOM DIA!!`
        foto.src = 'img/manha.png'
        document.body.style.background= '#FDCB6A'
    }else if( hora >= 12 && hora <=18){
        msg.innerHTML+= `<br> BOA TARDE`
        foto.src ='img/tarde.png'
        document.body.style.background= '#7C6C63'


    }else{
        msg.innerHTML+= `<br> BOA NOITE`
        foto.src= 'img/noite.png'
        document.body.style.background= '#4E3852'
    }
}