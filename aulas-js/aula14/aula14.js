function parimp(n){
    if(n%2 == 0 ){
        return 'par'

    }else{
        return 'impar'
    }
}
let res = parimp(117)
//console.log(res)

function soma(n1, n2){
    return n1 + n2
}
//console.log(soma(4,5))

function fatorial (n){
    let fat =1
    for(let c = n; c> 1; c--){
        fat = fat * c

    }
    return fat
}
//console.log(fatorial(10))
//RECURSIVIDADE
function fatorial(x){
    if(x == 1){
        return 1
    }else{
        return  x * fatorial(x-1)
    }
   
}
console.log(fatorial(5))
 