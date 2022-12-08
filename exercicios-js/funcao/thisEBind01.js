const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e Orientado a Objetos 'OO'
// neste caso dará indefinido pois ele não consegue acessar o valor atravez do this

// com o bind é possivel amarrar a execução para que uncione em qualuer contexto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()