// a variavel do tipo var se afeta caso esteja dentro do escopo global
// ao utilizar var dentro de um bloco de codigo {} ainda assim ela se torna global
// para separa o escopo utiliza uma funcao dessa forma: function {}
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log("fora =", numero)