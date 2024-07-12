//Jeito mais simples que eu sei para contar até 10
for(i =0; i <=10; i++){
    console.log(i)
}
//Mesma coisa, mas em uma função
function contar(num){
    for(num =num; num <=10; num++){
        console.log(num)
    }
}
contar(5)
//Função para contar a partir de um determinado número, até outro 
function contarAte(ini, fim){
    for(ini =ini; ini <=fim; ini++){
        console.log(ini)
    }
}
contarAte(20, 100)