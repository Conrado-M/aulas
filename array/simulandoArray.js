const quaseArray = { 0: 'Rafael', 1: 'Bia', 2: 'Ana'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

console.log(quaseArray.toString())

const meuArray = ['Rafael', 'Bia', 'Ana']
console.log(meuArray)

