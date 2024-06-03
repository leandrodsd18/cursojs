const imoveis = []
let opcao = ''

do{
    opcao = prompt('Imóveis cadastrados: '+ imoveis.length + '\n' +
        '\nDigite uma opção:'+
        '\n1- Cadastrar novo imóvel'+
        '\n2- Lista de imóveis'+
        '\n3- Sair'
    )
    switch(opcao){
        case '1':
            const imovel = {}
            imovel.proprietario = prompt('Qual o nome do proprietário do imóvel? ')
            imovel.quartos = prompt('Quatidade de quartos: ')
            imovel.banheiro = prompt('Quantidade de banheiros:')
            imovel.garagem = prompt('Possui garagem?(sim/não)')
            imoveis.push(imovel)
            break
        case '2':
            for(let i = 0; i<imoveis.length; i++){
                alert('Imóvel' + (i+1) + 
                '\nProprietário: ' + imoveis[i].proprietario +
                '\nQuartos: ' + imoveis[i].quartos +
                '\nBanheiros: ' + imoveis[i].banheiro +
                '\nGaragem: ' + imoveis[i].garagem)
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }
}while(opcao !== '3')