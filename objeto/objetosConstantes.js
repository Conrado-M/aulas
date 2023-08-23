// pessoa -> 123 -> {...} // o endereço do objeto pessoa sempre sera o mesmo
const pessoa = {nome:'João'}
// Mas os atributos do objeto pode ser alterado
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} // tentando alterar o endereço de pessoa
// vai dar erro pois a variável é constante e não permite mudanças no valor da referência que está sendo atribuida
// pessoa = { nome: 'Ana} // Erro

// Congelando objeto para que nem os atributos consigam ser alterados

Object.freeze(pessoa)

pessoa.nome = 'Maria' // não vai funcionar pois objeto e seus atributos foram congelados
pessoa.endereco = 'Rua Tapajos'// não é possivel adicionar atributos
delete pessoa.nome// não é possivel deletar atributos
console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome:'João'})// criando objeto e congelado atributos
pessoaConstante.nome = 'Maria'// não funciona pois objeto e atributos foram congelados
console.log(pessoaConstante)
