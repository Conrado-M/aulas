// armazenando uma funçao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(4, 5)

// Armazenando uma funçao arrow em um variavel
const somar = (a, b ) => {
    return a + b
}

console.log(somar(6, 8))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 3))