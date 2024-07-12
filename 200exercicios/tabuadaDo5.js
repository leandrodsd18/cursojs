//laço for para gerar a tabuada de um determinado número
for(i =0; i <=10; i++){
    console.log('5 x ' + i+'= '+ i*5)
}
//laço for para gerar a tabuada de qualquer número
function tabuada(fator){
    for(i =0; i <=10; i++){
        console.log(fator + ' x ' + i +'= ' + fator*i)
    }
}
tabuada(7)