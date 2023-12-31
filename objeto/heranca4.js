function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(Object.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = `Anônimo`
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia, Meu nome é ${this.nome}!`)
}
console.log(obj1.nome)
console.log(obj2.nome)

obj2.falar()

obj1.nome = 'Conrado'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log(MeuObjeto.__proto__ === Object.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
