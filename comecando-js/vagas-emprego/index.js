//criei um array no escopo global para armazenar as vagas disponíveis
const vagas = []
//Função para listagem das vagas
//REDUCE: Serve para reduzir um array existente a um valor final qualquer, passando um valor entre cada iteração sobre esse array e retornando ele no final
function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + '. '
        textoFinal += vaga.nome 
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        }, '')
    alert(vagasEmTexto)
}
//Função para criar novas vagas
function novaVaga(){
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Informe a descrição da vaga:')
    const dataLimite = prompt('Informe a data limite para a vaga: (dd/mm/aaaa)')

    const confirmacao = confirm('Deseja criar uma nova vaga com essas informações?\n' + 'Nome: ' + nome + '\nDescrição: ' + descricao + '\nData limite: '+ dataLimite)

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert('Vaga criada com sucesso!')
    }
}
