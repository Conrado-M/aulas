const notas = [6.7, 7.4, 9.8, 7.1]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Flavio',
    sobrenome: 'Melo',
    idade: 23,
    peso: 90
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}

