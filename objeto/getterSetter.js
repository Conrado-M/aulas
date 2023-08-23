const sequencia = {
    _valor: 1, // convenção, informar os programadores que o atributo é "PRIVADO"
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // informa o valor e o valor + 1
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // informa o novo valor informado e o valor +1
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // não mostra nada pois o valor informado é menor