function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getInteiroAleatorio(-1, 100)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a Proxima!')