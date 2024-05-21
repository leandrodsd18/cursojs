let carroA = prompt('Diginte o modelo do seu carro: ')
let velCarA = prompt('Digite a velocidade do seu carro')
document.write(`<p>O carro ${carroA} está rodando a ${velCarA} km/h</p>`)

let carroB = prompt('Diginte o modelo do seu carro: ')
let velCarB = prompt('Digite a velocidade do seu carro')
document.write(`<p>O carro ${carroB} está rodando a ${velCarB} km/h</p>`)

if(velCarA > velCarB){
    document.write(`O Carro ${carroA} está mais rápido`)
}else if(velCarA < velCarB){
    document.write(`O Carro ${carroB} está mais rápido`)
}else{
    document.write('As velocidades são iguais')
}