/*nesse exemplo criamos um arrey e nele adicionamos um  laco de repeticao for para que em cada passo fosse adicionado um valor
para que assim posso ser exeplificado a diferença entre let e var
*/
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//var não tem escopo de funcao logo ao chamar o valor 2, 8 ele retornará 10 que é o ultimo loop da funcao for