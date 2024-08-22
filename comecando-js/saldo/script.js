/*Esse programa faz o controle de saldo de uma conta bancária */
let saldo = parseFloat(prompt("Qual seu saldo inicial?"))
let opcao = ''
let adic = 0
/*Com um 'do while' e um 'switch' criei um menu onde o usuário pode interagir com o programa e adicionar, cosultar ou remover o seu saldo */
do{
    opcao = prompt(
        'O que deseja fazer?'+
        '\n1- Adicionar saldo'+
        '\n2- Remover saldo'+
        '\n3- Cosultar saldo'+
        '\n4- Sair'
    )
    switch(opcao){
        case '1':
            adic = parseFloat (prompt(`Seu saldo atual é de: R$ ${saldo}\n Quanto deseja adicionar? `))
            saldo += adic
            alert(`Seu novo saldo é de: R$ ${saldo}`)
            break
        case '2':
            adic = parseFloat (prompt(`Seu saldo atual é de: R$ ${saldo}\n Quanto deseja Remover? `))
            saldo -= adic
            alert(`Seu novo saldo é de: R$ ${saldo}`)
            break
        case '3':
            alert(`Seu saldo atual é de: R$ ${saldo}`)
            break
        case '4':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida! Tente novamente')
    }
}while(opcao !=='4')