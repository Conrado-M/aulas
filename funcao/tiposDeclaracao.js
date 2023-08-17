// function declaretion
function soma(x, y) {
    return x + y
}
console.log(soma(1, 2));

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(1, 2));

// named function expression ------- não usada
const mult = function vezes(x, y) {
    return x * y
}
console.log(mult(2, 2));
console.log(typeof mult);
console.log(typeof vezes);