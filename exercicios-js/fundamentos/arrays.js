const valores = [7.7, 8.9, 6, 9.2];//o indice de array começa apartir do 0
console.log(valores[0], valores[3]);// aqui chamo o primeiro e o ultimo valor
console.log(valores[4]);// nesse momento não foi atribuido nenhum valor no indice 4

valores[4] = 10;
console.log(valores);
console.log(valores.length);//assim mostro o tamanho do array

valores.push({id: 3}, false, null, 'texto');//essa função adiciono elementos ao array, nesse caos um objeto, um boolean, um nulo e uma string
console.log(valores);

console.log(valores.pop());//remove o valor do ultimo array
delete valores[0];//outra forma de apagar um valor de array
console.log(valores);

console.log(typeof valores);//mostra o tipo 
