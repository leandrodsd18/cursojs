/*Programa para escalar um time.
Criei a função 'addplayer para escalar os jogadores do time. Nessa função o usuario vai entrar com a posição o nome e o número de cada jogador, antes de escalar o jogador o programa ainda pergunta se o usuario quer memso escalar tal jogador, após a confirmação o jogador é adicinado a uma lista. Podemos tbm remover um determinado jogador apenas pelo némero da camisa através da função 'removeToPlayer*/
function addPlayer(){
    const position = document.getElementById('position').value 
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmacao = confirm('Deseja esacalar o jogador ' + name + ' como ' + position +'?')

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

function removeToPlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    confirmacao = confirm('Deseja remover o jogador ' + playerToRemove.innerText + '?')

    if(confirmacao){
        document.getElementById('time-list').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}