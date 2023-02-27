let num = [2, 4, 5,  3, 9, 8]
// para adicionar um valor no array, basta pegar o nome da variável, dizer qual a posição dve ser colocado o novo elemento e dar o valor ao elemento. Segue exemplo abaixo
//num[7]=26
//para adicionar um valor na última posiçao
//num.push(7)
//Comprimento
//num.length
//ordem crescente
//num.sort()

/*
console.log(`nosso vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log( 'O primeiro número é ' +num[0])
console.log(`O último número é ${num[7]}`)
*/
/*
num.sort()
for(let pos = 0  ; pos < num.length  ; pos++  ){
    console.log(num[pos])

}
*/

//simplificado
for( var pos  in num  ){
    console.log(num[pos])
}
num.sort()
//para buscar um valor dentro de array e dizer sua posição
console.log(` o valor esta posicao ${num.indexOf(4)}`)