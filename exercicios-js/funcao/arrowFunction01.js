let dobro = function (a) {
    return 2 * a 
}

// com o arrow o codigo fica reduzido
dobro = (a) => {
    return 2 * a
}// arrow sempre é anonimo, então é necessrio atribuir a alguma variavel

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um param
console.log(ola())