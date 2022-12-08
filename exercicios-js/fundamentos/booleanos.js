let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);// ! = negativa, !! = nega a negativa anterior

console.log('os verdadeiros...');
console.log(!!3);//numeros inteiros
console.log(!!-1);//numeors negativos
console.log(!!' '); //string com espaço
console.log(!![]);//Arrey
console.log(!!{}); //objeto
console.log(!!Infinity)//funçao para infinito
console.log(!!(isAtivo = true)); //atribuição
//os exemplos acima mostram o que é considerado true.

console.log('os falsos...');
console.log(!!0);//neste caso 0 é considerado false
console.log(!!'');//string não atribuida é considera da false
console.log(!!null);//nulo
console.log(!!NaN); //not a number
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || 'Eu'));// com a função 'ou ||' caso umas das obções seja verdadeira ele ira retornar true

let nome = '';
console.log(nome || 'Desconhecido');//se a variavel não tiver atribuição a função 'ou ||' retornatara false, nesse caso o 'Desconhecido'. Caso esteja atribuido retornará true com o valor correspondente.
