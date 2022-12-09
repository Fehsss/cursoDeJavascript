/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao) {
    soma = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
    console.log(soma)
}

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicacao) {
    soma = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    console.log(soma.toFixed(0)) 
}

jurosSimples(1000, 0.10, 3)
jurosCompostos(1000, 0.10, 3)

// Correção do exercicio:
/*
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
*/