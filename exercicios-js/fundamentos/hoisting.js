/*hoisting é o içamento de variaveis, em javascript var não segue a sequencia de codigos
ou seja o codigo funcionará mesmo que a variave seja declarada apos*/

console.log('a =', a)
var a = 2
console.log('a =', a)

//cuidado pois no caso de let não ocorre o efeito hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)