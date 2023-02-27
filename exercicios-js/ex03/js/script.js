let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passos')
let resultado = document.getElementById('resultado')

function contar(){
        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            alert('[ERRO!!] Existem campos em branco')
            resultado.innerHTML = ' Impossível contar'
        } else{
            resultado.innerText  = 'Contando:'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if( p >= f){
                alert('O passo não pode ser maior que o fim. Verifique e tente novamente')

            }
            if( p <= 0){
                alert('Paaso Inválido ! Adicionando um ao passo')
                p=1
            }
            //contagem crescente
            if(i < f){
                for(let c = i ; c <= f ; c = c+p){
                    resultado.innerHTML += `${c} \u{1F449}	 ` 
    
                }
                // contaem regressiva
            } else{
                for(let c = i ; c >= f; c -= p){
                    resultado.innerHTML += `${c} \u{1F449}`
                }
            }
            
            resultado.innerHTML += ` \u{1F3C1}`
        }

    
}

