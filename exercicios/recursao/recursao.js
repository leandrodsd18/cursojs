function chunk(n){
    if(n===1){
        return 'chunk'
    }else{
        return 'chunk-' + chunk(n-1)
    
    }
}
console.log(chunk(1))