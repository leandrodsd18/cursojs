/*Neste exercício usei um laço do while aninhado com um switch para rodar um programa que cria um menu onde é possível cadastrar imóveis, simulando uma imobiliaria! */
const imoveis = []
let opcao = ''

do{
    //Esse prompt exibi o menu onde temos as opções para cadastrar ou listar os imóveis, além da opção de sair
    opcao = prompt('Imóveis cadastrados: '+ imoveis.length + '\n' +
        '\nDigite uma opção:'+
        '\n1- Cadastrar novo imóvel'+
        '\n2- Lista de imóveis'+
        '\n3- Sair'
    )
    switch(opcao){        
        case '1':
            //A primeira opção cria um objeto onde é armazenado todas as caracteristicas do imóvel que está sendo cadastrado            
            const imovel = {}
            imovel.proprietario = prompt('Qual o nome do proprietário do imóvel? ')
            imovel.quartos = prompt('Quatidade de quartos: ')
            imovel.banheiro = prompt('Quantidade de banheiros:')
            imovel.garagem = prompt('Possui garagem?(sim/não)')
            //Criei uma condicional para verificar o objeto {imovel} e caso esse objeto esteja vazio, ou seja, se ele for == a null, o programa alerta o usuario que exitem dados incompletos e não é possivel proseguir
            if((imovel.proprietario == null) || (imovel.quartos == null) || (imovel.banheiro == null) || (imovel.garagem == null)){
                alert('Dados incompletos! Verifique os dados para proseguir')
            }
            else{
                alert('Imóvel cadastrado!')
                imoveis.push(imovel)
            }
            
            break
        case '2':
            //A segunda opção vai exibir o objeto 'imovel' e mostrar todos os imóveis cadastrados com suas caracteristcas
            //Essa condicional verifica o array [imoveis] e caso ele seja == 0, informa o usuario que não existem imóveis cadastrados, caso seja != 0 mostra na tela os imóveis existentes
            if(imoveis.length ==0){
                alert('Não há imóveis cadastrados')
            }
            else{
                for(let i = 0; i<imoveis.length; i++){
                alert('Imóvel ' + (i+1) + 
                '\nProprietário: ' + imoveis[i].proprietario +
                '\nQuartos: ' + imoveis[i].quartos +
                '\nBanheiros: ' + imoveis[i].banheiro +
                '\nGaragem: ' + imoveis[i].garagem)
                }
            }
            break
        case '3':
            //A terceira opção encerra o programa
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida!')
    }
}while(opcao !== '3')