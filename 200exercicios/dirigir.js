function podeDirigir(idade){
    if(idade >= 18){
        console.log(`Sua idade é ${idade} anos! \nVocê já pode tirar a CNH`)
    }
    else{
        console.log(`Sua idade é ${idade} anos! \nVocê ainda não pode dirigir`)
    }
}
podeDirigir(50)