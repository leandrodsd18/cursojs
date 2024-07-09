function palindromo(palavra){
    let palavraInvertida = ''

    for(let i = palavra.length -1; i >=0; i--){
        palavraInvertida += palavra[i]
    }
    if(palavraInvertida === palavra){
    console.log(`${palavra}! É um palindromo! ${palavraInvertida}`)
    }else{
        console.log(`${palavra}! Não é um palindromo`)
    }
}
palindromo('sopapos')

function verificaPalind(palavra){
    let palavraInver =

    palavra.split('').reverse().join('')
    if(palavraInver === palavra){
        console.log(`${palavra}! É um palindromo! ${palavraInver}`)
    }
    else{
        console.log(`${palavra}! Não é um palindromo`)
    }
}
verificaPalind('sopapos')