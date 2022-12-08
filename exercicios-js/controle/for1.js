let contador = 1
while(contador <= 10) {
    console.log(`contado = ${contador}`)
    contador++
}
//abaixo o mesmo exemplo de contador utilizando o for
//for utiliza 3 passo a declaração da variavel, a expressaõ e o encremento
for(let i = 1; i <= 10; i++) {
    console.log(`contador for ${i}`)
} 
/*
 * For utiliza a variavel denomina neste caso i = 1
 * enquanto i <= 10 for maior ou igual a 10 adicionará i++
 * é necessario a utilização do ; entre as funções da estrutura do laço
 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}//utilizando for em cima de um arrey