function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(6)
soBoaNoticia(6.9)

function seForVerdade(valor){
    if(valor)
    console.log('É verdade...' + valor)
}

seForVerdade(0)
seForVerdade(1)
seForVerdade(null)
seForVerdade([])
seForVerdade({})
