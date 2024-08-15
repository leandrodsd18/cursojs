/*Programa para escalar um time.
Criei a função 'addplayer para escalar os jogadores do time. Nessa função o usuario vai entrar com a posição o nome e o número de cada jogador, antes de escalar o jogador o programa ainda pergunta se o usuario quer memso escalar tal jogador, após a confirmação o jogador é adicionado a uma lista. Podemos tbm remover um determinado jogador apenas pelo némero da camisa através da função 'removeToPlayer*/
function addPlayer(){
    /*Função para adicionar os jogadores.
    Essa função captura os inputs da pagina HTML com, posição, nome e número da camisa de cada jogador */
    const position = document.getElementById('position').value 
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    /*Ao clicar no botão escalar da pagina HTML é exibido uma caixa de confirmção perguntando ao usuario, "Deseja escalar o jogador?" */
    const confirmacao = confirm('Deseja esacalar o jogador ' + name + ' como ' + position +'?')
    /*Se o valor vindo do confirm for true, então caimos nesse if, que mostra qual jogador com nome e número está sendo escalado e depois limpa todos os inputs para que um novo jogador possa ser escalado */
    if(confirmacao){
        const teamList = document.getElementById('time-list')
        playerItens = document.createElement('li')
        playerItens.id = 'player-' + number
        playerItens.innerText = position + ': ' + name + ' (' + number + ')'
        teamList.appendChild(playerItens)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''

    }
}
/*Função para remover um jogador.
Essa função captura o valor vindo do input na pagina HTML e então abri um confirm perguntando se deseja remover o jagodor número tal. */
function removeToPlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    confirmacao = confirm('Deseja remover o jogador ' + playerToRemove.innerText + '?')

    if(confirmacao){
        document.getElementById('time-list').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}