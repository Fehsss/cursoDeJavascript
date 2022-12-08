/* função factory é uma função que sempre retorna um objeto, é uma forma de criar diversas instancias dessa função
 */

// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())