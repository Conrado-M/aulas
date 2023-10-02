const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Cristina', nota: 9.2 }
]

// Imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log('Méida dos Alunos', total1 / alunos.length)

// Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log('Méida dos Alunos', total2 / alunos.length)