//escopo é o trecho do codigo que limita a funcionalidade de determinada variavel
//variaveis do tipo var tem escopo global e escopo de funcao
//escopo global quer dizer que a variavel pode ser editada em qualqeur momento do codigo
{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(teste)