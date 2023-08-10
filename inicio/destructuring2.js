const [a] = [7]
console.log(a)

const [n1, , n3, , n5, n6 = 0] =  [2, 8 , 3, 7]
console.log(n1, n3, n5, n6)

const [,[, nota]] = [[,8,8],[9,7,8]]
console.log(nota)