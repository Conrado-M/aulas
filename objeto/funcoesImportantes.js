const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 15
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


// Utilizando 'e' para informas os elementos q serão utilizados

// Object.entries(pessoa).forEach(e => {
//     console.log(`${e[0]}: ${e[1]}`);
// })

// utilizando Destructuring para mais claros os elementos q serão utilizados
Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se false não será exibido para métodos de iteração do objeto
    writable: false, // se true essa prpriedade podera ser alterada (ex. linha 29)
    value: '01/01/2019' // valor da variavel criada
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // 'a' sera subscrito
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c=1234 // 'c' não sera subscrito por conto do freeze
console.log(obj)