const numero = parseFloat(prompt('Digite um número para gerar a tabuada:'))
let res = ''

for(let fator = 1; fator <=10; fator++){
    res += '-> ' + numero + ' x ' + fator + '= ' + (numero*fator) + '\n'
}
alert('A tabuada de ' + numero + ' é:\n\n' + res)