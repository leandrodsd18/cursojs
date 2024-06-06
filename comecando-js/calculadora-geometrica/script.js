function triangulo(){
    const base = parseFloat(prompt('Digite o valor da base do triangulo'))
    const altura = parseFloat(prompt('Digite o valor da altura do triangulo'))
    return base * altura/2
}

function retangulo(){
    const base = parseFloat(prompt('Digite o valor da base do retângulo'))
    const altura = parseFloat(prompt('Digite o valor da altura do retângulo'))
    return base * altura
}

function quadrado(){
    const lado = parseFloat(prompt('Digite o valor dos lados do quadrado'))
    return lado * lado
}

function trapezio(){
    const baseMaior = parseFloat(prompt('Digite o valor da base maior do trapézio'))
    const baseMenor = parseFloat(prompt('Digite o valor da base menor do trapézio'))
    const altura = parseFloat(prompt('Digite o valor da altura do trapézio'))
    return (baseMaior + baseMenor)* altura/2
}

function circulo(){
    const raio = parseFloat(prompt('Digite o valor do raio do circulo'))
    return 3.14 * (raio*raio)
}

function exibirMenu(){
    return prompt('Escolha a área que deseja calcular:' +
        '\n1- Área do Triângulo'+
        '\n2- Área do Retângulo'+
        '\n3- Área do Quadrado'+
        '\n4- Área do Trapézio'+
        '\n5- Área do Circulo'+
        '\n6- Sair '
    )
}

function executar(){
    let opcao = ''

    do{
        opcao = exibirMenu()
        switch(opcao){
            case '1':
                alert('A área do triângulo é: '+ triangulo())
                break                
            case '2':
                alert('A área do retângulo é: '+ retangulo())
                break
            case '3':
                alert('A área do quadrado é: '+ quadrado())
                break
            case '4':
                alert('A área do trapézio é: '+ trapezio())
                break
            case '5':
                alert('A área do circulo é: '+ circulo())
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção invalida! Selecione uma opção e tente novamente')
        }

    }while(opcao !== '6')
}
executar()