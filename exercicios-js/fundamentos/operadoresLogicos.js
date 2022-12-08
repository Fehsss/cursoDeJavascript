/* se trabalha dia 1 e dia 2 comprara uma tv 55 polegadas e comprara um sortete | se trabalha apenas um dia comprara tv 32 e comprara um  sorvete
sse nao trabalhar nenhum dia não comprará nennuma tv e sorvete | e ficara mais saudavel
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))