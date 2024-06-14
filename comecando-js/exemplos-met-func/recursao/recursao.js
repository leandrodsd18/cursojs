//Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num){
    console.log(num)
    if(num % 2 ===0){
        dividir(num /2)
    }else{
        return num
    }
}
//dividir()

//É fundamental que uma função recursiva tenha uma forma de parar!
function dobrar(num){
    console.log(num)
    dobrar(num*2)
}
//dobrar()//Vai estourar a pilha de chamadas, pq a função vai ficar dobrando o numero eternamente!

/*Para construir uma função recursiva, geralmente partimos de um caso base para garantir que nossa funão não vai continuar se chamando para sempre*/
//Ex.: calcular o fatorial de um numero: !5 = 5*4*3*2*1 = 5*!4

function fatorial(num){
    console.log('num = '+ num)
    if(num ===0){//caso base 1
        return 1
    }else if(num ===1){//caso base 2
        return 1
    }else{
        console.log(num + '* !' + (num - 1))
        return num * fatorial(num -1)
    }
}
console.log('\n!5 = '+ fatorial(5))
console.log('\n!0 = '+ fatorial(0))