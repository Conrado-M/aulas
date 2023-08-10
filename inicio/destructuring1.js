const pessoa = {
    nome: 'Conrado',
    idade: 28,
    endereco: {
        rua: 'Macaé',
        numero: 96
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)

//const { conta: { ag, num } } = pessoa
//console.log(ag, num)