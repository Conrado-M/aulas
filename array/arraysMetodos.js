const pilotos = ['Vettel', 'Alonso', 'Massa', 'Raikkonen']
pilotos.pop() // Remove o ultimo elemento!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Raikkonen') // add apartir do index 2 e não deletou nenhum elemento
console.log(pilotos)

// remover
pilotos.splice(3, 1) // remove 1 alemento do index 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir da constante pilotos utilizando do index 2 em diante
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // cria um novo array a partir da constante pilotos utilizando o index 1 até o 4 mas o 4 não é incluido
console.log(algunsPilotos2) 
