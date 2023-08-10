function compras(Trabalho1, trabalho2){
    const comprarSorvete = Trabalho1 || trabalho2
    const comprarTv50 = Trabalho1 && trabalho2
    // const comprarTv32 = !!(Trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = Trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))