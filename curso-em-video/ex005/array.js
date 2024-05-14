let num = [5,9,2,8]
console.log('inicializei o vetor ' + num)
//adicionar elementos no fim array ou seja, ele cria mais uma posição
num.push(6)
console.log('Adicionei o numero 6 ao vetor com o método push() ' + num)
//O método sort ordena o array em ordem crescente
num.sort()
//Adiciona um elemento ao array na posição indicada
num[5] = 1
console.log(num)
num.push(3)
num.sort()
console.log(num)
//O atributo length mostra o tamanho do array
console.log(`Esse vetor tem ${num.length} posições`)
//Mostrar um elemento do vetor em uma posição indicada
console.log(`O valor na posição 4 é o número ${num[3]} `)
//Buscar valor dentro do vetor
console.log('Qual a posição do número 8 no vetor? ' +'Está na posição: ' +num.indexOf(8))
//Caso não tenha o valor dentro do vetor, ele retorna o valor -1
console.log('Qual a posição do número 7 no vetor? ' +'Está na posição: ' +num.indexOf(7))