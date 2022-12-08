// ao fazer uma comparação com operadores relacionais o resultado sempre sera true ou false, sim ou não
console.log('01)', '1' == 1)// compara se as variaveis são iguais
console.log('02)', '1' === 1)// compara se as variaveis são estritamente
console.log('03)', '3' != 3)//compara se são diferentes
console.log('04)', '3' !== 3)//compara se são estritamentes diferentes

console.log('05)', 3 < 2)//compara se uma variavel é menor que a outra
console.log('06)', 3 > 2)//compara se a variavel é maior que a outra
console.log('07)', 3 <= 2)//a variavel é menor ou igual
console.log('08)', 3 >= 2)//a variavel é maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)


