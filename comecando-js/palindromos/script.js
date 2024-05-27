const palavra = prompt('Informe uma palavra:')
let palavraInvert = ''

for(let i = palavra.length -1; i >=0; i--){
    palavraInvert += palavra[i]
}
if(palavra === palavraInvert){
    alert(palavra + ' É um palíndromo!')
}else{
    alert(palavra + ' Não é um palíndromo!\n\n' +palavra + ' !== ' + palavraInvert)
}