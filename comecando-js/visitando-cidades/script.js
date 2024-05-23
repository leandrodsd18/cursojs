const turista = prompt('Qual o seu nome?')
let cidades = ''
let contagem = 0

let continuar = prompt('Você visitou alguma cidade? (Sim/Não)')

while(continuar === 'Sim'){
    let cidade = prompt('Qual cidade você visitou?')
    cidades += '-' + cidade + '<br>'
    contagem++
    continuar = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}
document.write(`O Turista ${turista} visitou ${contagem} cidades, foram elas: <br> ${cidades}`)
