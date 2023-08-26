console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // split() - dividir uma string em um array, reverse() - inverter o array
}


console.log('Curso JavaScript'.reverse())

Array.prototype.first = function () {
    return this[0] // retorna o primeiro elemento do array
}

console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

String.prototype.toString = function(){ // sobreescrevendo o comportamento de 'toString' Não faça isso.
    return 'Deu Ruim'
}

console.log('Escola Cod3r'.reverse())