/*Funções de alta ordem ou high-order functions, são funções que recebem outras funções como parâmetro e as executam em algum momento */

function calcular(a, b, operacao){
    console.log('Realizando uma operação.')
    const resultado = operacao(a, b)
    return resultado
}

//Referenciar x Chamar a função.
/*Não usamos () ao lado do nome da função, porque ao fazer isso estaríamos executando a função. */

function somar(x, y){
    console.log('realizando soma.')
    return x+y
}
calcular(3, 5, somar)
console.log(somar)//Retorna a própria função
console.log(somar(1, 5))//Chama a função(retorna o resultado)

/*Funções anônimas como parâmentros.
Também podems escrever funções anônimas dentro da propria high-order function   */
calcular(9, 2, function(x, y){
    console.log('Realizando subtração.')
    return x-y
})

/*Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks. Um exemplo comum no javascritp é a fução .forEach()dos arrays*/

function exibirElemento(elemento, indice, array){
console.log({
    elemento,
    indice,
    array
    })
}
const lista= ['Maçã', 'Banana', 'Laranja', 'Limão', 'Uva']
//forma tradicional
for(let i=0; i <lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

//forma funcional
lista.forEach(exibirElemento)

//tambem da pra fazer assim
lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})