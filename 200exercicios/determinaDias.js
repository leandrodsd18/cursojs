function determinaDias(mes){

    switch(mes){
        case '1':
            console.log('Janeiro tem 31 dias')
            break
        case '2':
            console.log('Fevereiro tem 28 dias')
            break
        case '3':
            console.log('Março tem 31 dias')
            break
        case '4':
            console.log('Abril tem 30 dias')
            break
        case '5':
            console.log('Maio tem 31 dias')
            break
        case '6':
            console.log('Junho tem 30 dias')
            break
        case '7':
            console.log('Julho tem 31 dias')
            break
        case '8':
            console.log('Agosto tem 31 dias')
            break
        case '9':
            console.log('Setembro tem 30 dias')
            break
        case '10':
            console.log('Outubro tem 31 dias')
            break
        case '11':
            console.log('Novembro tem 30 dias')
            break
        case '12':
            console.log('Dezembro tem 31 dias')
            break
        default:
            console.log('Opção invalida')
    }
}
determinaDias('4')