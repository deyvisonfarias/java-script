var s = 'javaScript'
//console.log( "eu estou apredendo " + s);

var nome = 'maria'
var idade = 50
var linguagem ='javaScript'
// métedo com concatenação
console.log('a estudante ' + nome + ' de ' + idade + ' anos de idade esta aprendendo programar em ' + linguagem)
// método com template string (placeholder)

console.log(`a aluna ${nome} de ${idade} de idade, está aprendendo a  programar em ${linguagem}`);

var n1 = 1545.5
console.log( n1.toFixed(2))

var n2 = 1400.65
console.log(n2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))