class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes
        this.ano
        this.lancamentos = []
    }
    addLancamentos (...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let ValorConsolidado = 0
        this.lancamentos.forEach(l => {
            ValorConsolidado += l.valor
        })
        return ValorConsolidado
    }
}


const salario = new Lancamento('Salario', 55000)
const contaDeLuz = new Lancamento('Luz', -550)

const contas = new CicloFinanceiro (6, 2023)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())