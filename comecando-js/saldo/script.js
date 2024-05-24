let saldo = parseFloat(prompt("Qual seu saldo inicial?"))
let opcao = ''
let adic = 0
do{
    opcao = prompt('O que deseja fazer?'+
        '\n1- Adicionar saldo'+
        '\n2- Remover saldo'+
        '\n3- Sair'
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
            alert('Saindo...')
            break
        default:
            alert('Opção invalida! Tente novamente')
    }
}while(opcao !=='3')