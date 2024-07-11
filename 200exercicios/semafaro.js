function semafaro(cor){
    if(cor === 'vermelho'){
        console.log('Pare seu veiculo')
    }
    if (cor === 'amarelo'){
        console.log('Atenção, diminua a velocidade')
    }
    if (cor === 'verde'){
        console.log('Siga em frente')
    }
    if(cor !== 'vermelho' && cor !== 'amarelo' && cor !== 'verde'){
        console.log('Entre com uma cor valida')
    }
}
semafaro('amarelo') 