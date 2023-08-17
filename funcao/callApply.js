function getPreco (imposto = 0, moeda = 'R$'){
    return`${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4699.00,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())// chamando a função direto
console.log('Valor do Notebook com desconto', produto.getPreco())// chamando função apartir de um objeto

const carro = { preco: 56000.99, desc: 0.20}

console.log('Valor do Carro ',getPreco.call(carro))// Chamando a partir de call 
console.log('Valor do Carro ',getPreco.apply(carro))// Chamando a partir de apply

console.log('Valor do Carro ',getPreco.call(carro, 0.17, '$'))// forma de passar os paramero com call
console.log('Valor do Carro ',getPreco.apply(carro, [0.17, '$']))// forma de passar os paramero com apply