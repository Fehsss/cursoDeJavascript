/*  Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function calculador (dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return console.log(resultado, resto)
}

calculador(3, 2)

//Correção:
/*function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)
 */