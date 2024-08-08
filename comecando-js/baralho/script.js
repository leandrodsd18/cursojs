/*Neste exercício foi usado um laço de repetição 'do while' aninhado com um 'switch' para criar um menu e receber a opção que vem do prompt, o programa então adiciona uma carta ao array [fila] ou mostra uma carta desse array, ou então sai do programa*/
let fila = []
let opcao = ''

do{
    opcao = prompt('Escolha uma das opções:\n1- Adicionar carta \n2- Puxar carta \n3- Sair')

    switch(opcao){
        case '1':
            //O método push adiciona elemento(s) no final do array
           const novaCarta = prompt('Digite uma carta')
           fila.push(novaCarta)
           break
        case '2':
            //O método pop remove o último elemento de um array e retorna aquele elemento
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