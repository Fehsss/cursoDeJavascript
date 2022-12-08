//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
} //a funcao exec recebe o valor da const saudacao e retorna

// Objetos são grupos aninhados de paes nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: ' Rua Muito Legal',
        numero: 123
    }//aqui declarei um objeto dentro de outro objeto
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
//note mesmo a variavel saudacao sendo declarada em diversos contextos ainda assim ela guardou os atributos corretamente
// isso porque ela respeita o contexto do esboço