function tratarErroELancar(erro) {
    // throw new Error('Algo deu errado:'+ erro)
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimirMaiusculo(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome: 'Conrado' }
imprimirMaiusculo(obj)