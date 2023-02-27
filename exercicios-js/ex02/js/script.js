function verificar(){
  var data  = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
   
  if(fano.value.length == 0 || fano.value > ano){
    alert('erro')
  } else{
    var fsex= document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

      if(fsex[0].checked){
        genero= 'homem'
        if( idade >=0 && idade <5){
          //bb
          img.setAttribute('src' , 'img/bebe-m.png')
        } else if(idade >=5 && idade < 15){
          //crianca
          img.setAttribute('src' , 'img/crianca-m.png')
        }else if(idade >= 16 && idade < 23){
          //jovem
          img.setAttribute('src' , 'img/jovem-m.png')
        } else if(idade >= 24 && idade < 50){
          //adulto
          img.setAttribute('src' , 'img/homem-adulto.png')
        }else if(idade >= 51 && idade < 67 ){
          //senhor
          img.setAttribute('src' , 'img/senhor.png')
        }else {
          //idoso
          img.setAttribute('src' , 'img/idoso-m.png')
        }

    }else{
      genero= 'mulher'
      if( idade >=0 && idade <5){
        //bb
        img.setAttribute('src' , 'img/bebe-f.png')
      } else if(idade >=5 && idade < 15){
        //crianca
        img.setAttribute('src' , 'img/crianca-f.png')
      }else if(idade >= 16 && idade < 23){
        //jovem
        img.setAttribute('src' , 'img/jovem-f.png')
      } else if(idade >= 24 && idade < 50){
        //adulto
        img.setAttribute('src' , 'img/mulher-adulta.png')
      }else if(idade >= 51 && idade < 67 ){
        //senhor
        img.setAttribute('src' , 'img/senhora.png')
      }else {
        //idoso
        img.setAttribute('src' , 'img/idosa-f.png')
      }

    }
    res.style.textAlign = 'center'
    res.innerHTML= ` Dectamos ${genero} com  ${idade} anos de idade`
    res.appendChild(img)

    
  }
      



}
