const funcs =  []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
/*note que retornara os valores 2 e 8, que eu solicitei na chamada funcs[2] e [8], pois o let possui escopo de funcao
ou seja ele guarda o valor em escopo de funcao

*/