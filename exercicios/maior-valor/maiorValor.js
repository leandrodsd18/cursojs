function maiorValor(string){
let maiorLetra = ''

    for(let i = 1; i < string.length; i++){
        if(string[i] > maiorLetra){
            maiorLetra = string[i]
        }
    }
    return maiorLetra
}
 console.log(maiorValor('Leandro'))
 console.log(maiorValor('O rato roeu a roupa do rei de roma'))
 console.log(maiorValor('iscobofi la pra baixo'))
 console.log(maiorValor('tres veiz ontem'))
