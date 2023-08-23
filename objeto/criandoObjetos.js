// usando conotação literal
const obj1 = {

}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)// Função e Objeto
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}


const p1 = new Produto('Caneta', 8.99, 0.15)
const p2 = new Produto('Mouse', 288.99, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 18700.79, 2)
const f2 = criarFuncionario('Conrado', 48500.25, 10)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null) // sem herança
filha.nome = 'Ana'
console.log(filha)