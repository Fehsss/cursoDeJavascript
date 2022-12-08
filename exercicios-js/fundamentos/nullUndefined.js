let valor // não inicializada
console.log(valor)

valor = null// ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixa para a linguagem definir, caso queira atribuir valor idefinido utilize null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)