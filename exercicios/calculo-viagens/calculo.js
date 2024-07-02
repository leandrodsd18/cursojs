function elevarAoQuadrado(num){
    //Variavel para armazenar o resultado final
    let resultado = ''
    //Primeiro converti o num para string para poder manipular cada algorismo separadamente
    let numString = num.toString()
    //Percorre cada algorismo da string
    for(let i =0; i < numString.length; i++){
        //Eleva cada um dos algorismos ao quadrado, e converte de volta para um valor numérico
        const algorismoAoQuadrado = Math.pow(parseInt(numString[i]), 2)
        //Concatena o resultado ao string de resultado
        resultado += algorismoAoQuadrado.toString()
    }
    //Converte o resultado final para um unico inteiro
    return parseInt(resultado)
}
console.log(elevarAoQuadrado(9))