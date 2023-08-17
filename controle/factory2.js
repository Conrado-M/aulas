function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 'R$ ' + 6599.99))
console.log(criarProduto('Ipad', 'R$ ' + 11699.99))