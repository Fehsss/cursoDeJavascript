// objeto é uma junção de chaves com valores

const prod1 = {};// assim que é declarado um objeto em javascript
prod1.nome = 'Celular Ultra Mega';// nome é a chave, 'Celular ultra mega é o valor atribuido.

console.log(prod1);

//outra forma de declarar um objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
    }//pode-se adicionar um objeto dentro de outro objeto igual acima
}

console.log(prod2);

