function calcularImc(peso, altura){
    let imc = peso / (altura*altura)

    if(imc <= 18.5){
        console.log(`Seu IMC é: ${imc}! Você está muito magro `)
    }
    if(imc > 18.5 && imc <= 24.9 ){
        console.log(`Seu IMC é: ${imc}! Você está normal `)
    }
    if(imc > 24.9 && imc <= 29.9){
        console.log(`Seu IMC é: ${imc}! Você está com sobrepeso `)
    }
    if(imc > 29.9 && imc <= 39.9){
        console.log(`Seu IMC é: ${imc}! Você está obeso `)
    }
    if(imc > 40){
        console.log(`Seu IMC é: ${imc}! Você está com obesidade grave `)
    }
}
calcularImc(75.4, 1.74)