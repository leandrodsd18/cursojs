function media(mediaFinal){
    if(mediaFinal >=7){
        console.log(`A sua média foi: ${mediaFinal}, Você foi aprovado(a)`)
    }
    else if(mediaFinal >= 5 && mediaFinal < 7){
        console.log(`A sua média foi: ${mediaFinal}, Você ficou em recuperção`)
    }
    else{
        console.log(`A sua média foi: ${mediaFinal}, Você foi reprovado(a)`)
    }
}
media(6)