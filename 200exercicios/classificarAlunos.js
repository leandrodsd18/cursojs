function classificarAluno(nota){
    if(nota >= 90){
        console.log('A')
    }
    else if(nota >= 80 && nota < 90){
        console.log('B')
    }
    else if(nota >= 70 && nota < 80){
        console.log('C')
    }
    else if(nota >= 60 && nota < 70){
        console.log('D')
    }
    else if(nota >= 50 && nota < 60){
        console.log('E')
    }
    else if(nota >= 40 && nota < 50){
        console.log('F')
    }
    else if(nota >= 30 && nota < 40){
        console.log('G')
    }
    else if(nota >= 20 && nota < 30){
        console.log('H')
    }
    else if(nota >= 10 && nota < 20){
        console.log('I')
    }
    else if(nota >= 0 && nota < 10){
        console.log('J')
    }
}
classificarAluno(50)