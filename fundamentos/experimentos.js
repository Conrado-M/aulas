let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'texto'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports == this)
console.log(module.exports)

// Criando uma variavel sem let e var.
abc = 3 // não faça isso !!!!!!
console.log(global.abc)