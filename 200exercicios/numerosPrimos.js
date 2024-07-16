//Esse primeiro laço for, percorre os números de 2 a 100
for(let num =2; num <=100; num++){
    //Essa variavel 'isPrime' assumi que todos os números são primos até que se prove o contrario
    let isPrime = true
    //Nesse laço for, pegamos o numero que vem do primeiro laço e dividimos por todos os menores que ele a partir do 2, se o resto da divisão for === 0 então a variável 'isPrime se torna false, e o laço encerra, se a divisão for != 0 então 'isPrime' continua true e o numero é impresso na tela
    for(let div =2; div <num; div++){
        if(num%div ==0){

            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(num)
    }
}