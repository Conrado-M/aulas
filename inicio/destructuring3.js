function rand({ min = 0, max = 1000}) {
    return Math.floor(Math.random() * (max - min + 1) )
}

console.log(rand({}))