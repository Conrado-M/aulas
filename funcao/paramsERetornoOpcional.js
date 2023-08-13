function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return `Valor dentro do permitido: ${area}`
    }
}

console.log(area(5, 5))
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 4, 6, 19, 27))
