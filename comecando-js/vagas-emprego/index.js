//criei um array no escopo global para armazenar as vagas disponíveis
const vagas = []
//Função para listagem das vagas
//REDUCE: Serve para reduzir um array existente a um valor final qualquer, passando um valor entre cada iteração sobre esse array e retornando ele no final
function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + '. '
        textoFinal += vaga.nome 
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFinal
        }, '')
    alert(vagasEmTexto)
}
//Função para criar novas vagas
function novaVaga(){
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Informe a descrição da vaga:')
    const dataLimite = prompt('Informe a data limite para a vaga: (dd/mm/aaaa)')

    const confirmacao = confirm('Deseja criar uma nova vaga com essas informações?\n' + 'Nome: ' + nome + '\nDescrição: ' + descricao + '\nData limite: '+ dataLimite)
//Caso a confirmção seja true, então a nova vaga é criada!
    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert('Vaga criada com sucesso!')
    }
}
//Função para exibir as vagas na tela!
function exibirVaga(){
    const indice = prompt('Informe o indice da vaga que deseja exibir:')
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato){return textoFinal + '\n -' + candidato}, '')

    alert(
        'Vaga n° ' + indice +
        '\nNome: ' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData Limite: ' + vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nCandidatos inscritos: ' + candidatosEmTexto
    )
}
//Função para inscrever um candidato em uma vaga
function inscreverCandidato(){
    const candidato = prompt('Informe o nome do(a) candidato(a):')
    const indice = prompt('Digite o índice da vaga na qual deseja inscrever o candidato(a):')
    const vaga = vagas[indice]

    const confirmacao = confirm('Deseja inscrever o candidato(a)' + candidato + 'na vaga ' + indice + '?\n' + 'Nome: ' +vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData Limite: ' + vaga.dataLimite)

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada')
    }
}
//Função para excluir uma vaga
function excluirVaga(){
    const indice = prompt('Informe o indice da vaga que deseja excluir: ')
    const vaga = vagas[indice]

    const confirmacao = confirm('Tem certeza que deseja excluir a vaga ' + indice + '?\n' + 'Nome: ' +vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData Limite: ' + vaga.dataLimite)
    
    if(confirmacao){
        vagas.splice(indice, 1)
        alert('Vaga excluida')
    }
}
function exibirMenu(){
    const opcao = prompt(
        'Cadastro de vagas de emprego' +
        '\n\nEscolha uma das opções'+
        '\n1- Listar Vagas'+
        '\n2- Criar vagas disponíveis'+
        '\n3- Visualizar uma vaga'+
        '\n4- Inscrever um(a) candidato(a)'+
        '\n5- Excluir uma vaga'+
        '\n6- Sair')
    return opcao
}
function executar(){
    let opcao = ''

    do{
        opcao = exibirMenu()
        switch(opcao){
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção invalida!')
        }
    }while(opcao !== '6');
}
executar()