//diferente de var o let respeita o escopo caso esteja dentro de um bloco
// variavel do tipo let tem escopo global, escopo de funcao e escopo de bloco
var numero = 1
{
    let numero = 2
    console.log('dentro', numero)
}

console.log('fora =', numero)
