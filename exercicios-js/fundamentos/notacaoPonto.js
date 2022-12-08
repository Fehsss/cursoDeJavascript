console.log(Math.ceil(6.1))//ao usar '.' é possivel acessar funcoes de objetos nesse caso a funcao .ceil arredonda um numero para cima, enquanto .floor arredonda para baixo

const obj1 = {} //criando um objeto
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' aqui é outra forma de criar uma instancia dentro de um objeto
console.log(obj1.nome)//chmando o atributo nome dentro do objeto

function Obj(nome) { // criando uma funcao
    this.nome = nome 
    this.exec = function(){
        console.log('Exec...')//criando uma funcao dentro de uma funcao
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj2.nome)
obj3.exec()
// com a notaçao ponto podemos acessar os atributos de classes, objetos e funcoes
// ouseja acessamos os membros de um objeto atraves da notacao ponto