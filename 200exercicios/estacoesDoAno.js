function verificarEstacao(mes){
    if(mes >=1 && mes <= 3){
        console.log('Estamos no Verão')
    }
    else if(mes >=4 && mes <= 6){
        console.log('Estamos no Outono')
    }
    if(mes >=7 && mes <= 9){
        console.log('Estamos no Inverno')
    }
    if(mes >=10 && mes <= 12){
        console.log('Estamos na Primavera')
    }
}
verificarEstacao(9)

