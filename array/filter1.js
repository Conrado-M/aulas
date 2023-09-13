const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4499, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plático', preco: 24.99, fragil: false },
    { nome: 'Copo Stanley', preco: 620, fragil: false }
]

console.log(produtos.filter(function(p){
    return true
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))