//No JS as funções podem ser atribuidas a variaveis como se fossem valores.

function somar(a, b){
    return a+b
}
//Para fazer isso, não usamos os () ao lado do nome da função, pq assim estariamos executando a função.

const operacao = somar
console.log(operacao(4,5))

//Então podemos usar as funções em ter que dar um nome a elas, desse jeito:

const subtrair = function(a,b){
    return a - b
}
console.log(subtrair(36,13))

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function(a, b){
    return a * b
}
console.log(calculadora.multiplicar(3, 7))
/*Funções anônimas só podem ser chamadas após a atribuição da variável,
elas não são jogadas para o topo do arquivo como funções normais*/