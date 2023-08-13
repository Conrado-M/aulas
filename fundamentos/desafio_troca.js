let a = 7
let b = 94

console.log("A variavel A é = " + a)
console.log("A variavel B é = " + b)

// a = b
// b = a - 87

{
    [a, b] = [b, a]

    console.log("A variavel A é = " + a)
    console.log("A variavel B é = " + b)
}