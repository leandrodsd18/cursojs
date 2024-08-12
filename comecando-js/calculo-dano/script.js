let jogador1 = prompt('Digite o nome do seu personagem:')
let ataqJ1 = prompt('Digite o seu poder de ataque:')

let jogador2 = prompt('Digite o nome do seu personagem')
let pontosVida = prompt('Quantos pontos de vida você tem?')
let escudo = prompt('O seu personagem possui escudo?(Digite sim ou não)')

document.write(`<p>O personagem ${jogador1} possui ${ataqJ1} pontos de ataque</p>`)
document.write(`<p>O personagem ${jogador2} está usando escudo? ${escudo} e tem ${pontosVida} pontos de vida</p>`)

if(ataqJ1 >= pontosVida && escudo == 'não'){
    let dano = ataqJ1 - pontosVida
    document.write(`<p>${jogador1} causou ${dano} de danos no ${jogador2}</p>`)
}else if(ataqJ1 > pontosVida && escudo == 'sim'){
    let dano = (ataqJ1 - pontosVida)/2
    document.write(`<p>${jogador1} causou ${dano} de danos no ${jogador2}</p>`)
}else if(ataqJ1 <= pontosVida){
    let dano = (ataqJ1 - pontosVida)/2
    document.write(`<p>${jogador1} não causou danos em ${jogador2}</p>`)
}