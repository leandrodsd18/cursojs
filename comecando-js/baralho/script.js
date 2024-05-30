let fila = []
let opcao = ''

do{
    opcao = prompt('Escolha uma das opções:\n1- Adicionar carta \n2- Puxar carta \n3- Sair')

    switch(opcao){
        case '1':
           const novaCarta = prompt('Digite uma carta')
           fila.push(novaCarta)
           break
        case '2':
            const cartaPuxada = fila.pop()
            if(!cartaPuxada){
                alert('Não há cartas no baralho')
            }else{
                alert('Você puxou um(a) '+ cartaPuxada)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida!')
            break
    }
}while(opcao !== '3')