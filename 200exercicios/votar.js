function podeVotar(idade){
    if(idade < 16){
        console.log(`Você tem ${idade} anos, E ainda não pode votar`)
    }
    else if(idade >=16 && idade <18 || idade >= 60){
        console.log(`Você tem ${idade} anos, O seu voto é opcional`)
    }else{
        console.log(`Você tem ${idade} anos, O seu voto é obrigatório`)
    }
}
podeVotar(20)