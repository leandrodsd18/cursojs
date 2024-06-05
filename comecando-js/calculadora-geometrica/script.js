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
let resultado = circulo()
alert(resultado)