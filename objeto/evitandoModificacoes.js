// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' // é possivel alterar atributos
produto.descricao = 'Borracha escolar branca' // Não é possivel adicionar atributos 
delete produto.tag // é possivel deletar atributos
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)// Congela o objeto para não ser mais modificado
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Não é possivel add atributos
delete pessoa.nome // não é possivel deletar atributos
pessoa.idade = 28 // é possivel alterar informaçoes de atributos
console.log(pessoa)

// Object.freeze = selado + valores constantes