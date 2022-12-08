// com o Destructuring é possivel retirar em poucas linhas atributos de objetos ou funcoes
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "rua ABC",
        numero: 1000,
    }
}

const { nome, idade } = pessoa // aqui estou retirando do objeto pessoa os dois atributos
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // aqui estou retirando do objeto pessoa os valores nome e idade e atribuindo as variaveis n e i
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa // aqui estou acessando as informações da estrutura do objeto pessoa e retirando de endereco os dados que preciso 
console.log(logradouro, numero, cep)// cep não foi declarado e ira voltar undefined