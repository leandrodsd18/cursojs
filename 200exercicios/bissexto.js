function calcularBissexto(ano){
    let res1 = ano%4
    let res2 = ano%100
    let res3 = ano%400
    console.log(`${res1}  ${res2}  ${res3}`)

    if((res1 === 0 && res2 !==0)||(res2 ===0 && res3 ===0)||(res1 ===0 &&res2===0 &&res3!==0)){
    console.log('O ano é bissexto')
    }
    else{
        console.log('O ano não é bissexto')
    }
}

calcularBissexto(2300)