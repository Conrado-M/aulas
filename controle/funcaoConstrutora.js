function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log('O Uno esta a',uno.getVelocidadeAtual(),'Km/h')

const lamborguini = new Carro(350, 20)
lamborguini.acelerar()
lamborguini.acelerar()
console.log('A lamborguini esta a',lamborguini.getVelocidadeAtual(),'Km/h')

console.log(typeof Carro)
console.log(typeof lamborguini)