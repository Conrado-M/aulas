const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAtributo = 'Nota'
const valorAtributo = 7.7

const obj3 = {}
    obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcao1: function(){ // Criando função do modo antido
        //...
    },
    funcao2(){ // Criando função da maneira nova, mais reduzido
        // ...
    }
}

console.log(obj5)