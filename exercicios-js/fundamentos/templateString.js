const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'// concatenação comum

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);// essa conc. respeita quebras de linhas e padroes de texto. 

// expressoes
console.log(`1 + 1 = ${1 + 1}`);// `` cria o tamplateString

// arrow
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);