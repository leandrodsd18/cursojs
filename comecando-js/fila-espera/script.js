/*Esse programa simula uma fila de espera em um consultório. Usando um laço 'do while' aninhado ha um condicional 'switch' criei um menu onde, vamos contralar a fila de espera */
let fila = []
let opcao = ''

do{
    let pacientes = ''
    for(let i =0; i < fila.length; i++){
        pacientes += (i+1) + '° - ' + fila[i] + '\n'
    }
    opcao = prompt('Pacientes:\n' + pacientes + '\nEscolha uma ação: \n1- Novo paciente \n2- Consultar paciente \n3- Sair')
    switch(opcao){
    //case 1 => Faz o cadastro de um novo paciente e o adiciona ao final da fila
        case '1':
            const novoPaciente = prompt('Digite o nome do paciente:')
            fila.push(novoPaciente)
            break
    // case 2 => Chama o paciente para a consulta e o retira da fila
        case '2':
            const pacienteConsultado = fila.shift()
            if(!pacienteConsultado){
                alert('Não há pacientes na fila!')
            }else{
                alert(pacienteConsultado + 'Foi removido da fila')
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção invalida')        
    }
}while(opcao !== '3')