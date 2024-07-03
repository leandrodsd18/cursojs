function invertArr(arr){
let invertCaixa = []

    for(let i = arr.length -1; i >=0; i--){
        invertCaixa += arr[i]
    } 
    return invertCaixa  
}
console.log(invertArr([1,2,3,4]))