/*Criei um menu com o uso de 'do while' e 'switch' o menu é exibido em um 'prompt' e as opções são exibidas através de um 'alert' */
let opcao = ''

do{
    opcao = prompt('Escolha uma opção'+ '\n1- opção'+ '\n2- opção'+ '\n3- opção'+ '\n4- opção'+ '\n5- Encerrar')    
    
    switch(opcao){
        case '1':
            alert('Você escolheu a opção 1.')
            break
        case '2':
            alert('Você escolheu a opção 2.')
            break
        case '3':
            alert('Você escolheu a opção 3.')
            break
        case '4':
            alert('Você escolheu a opção 4.')
            break
        case '5':
            alert('Encerrando o programa.')
            break
        default:
            alert('Entrada Inválida! Escolha uma das 5 opções')
    }
}while(opcao !=='5')
