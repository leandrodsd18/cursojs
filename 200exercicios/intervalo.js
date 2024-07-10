function verificarIntervalo(num, limMin, limMax){
    if(num >= limMin && num <= limMax){
        console.log(`${num} Está dentro do intervalo de ${limMin} e ${limMax}`)
    }
    else{
        console.log('Numero fora do intervalo')
    }
}

verificarIntervalo(5, 9, 4)