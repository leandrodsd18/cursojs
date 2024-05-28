/*let numero, contador = 0;
numero = prompt("Digite um numero qualquer entre 10 e 100:")

if((numero < 10)||(numero > 100)){
    alert("Numero fora do intervalo solicitado");    
}
else{
    while(contador <= numero){
        document.write(contador + ", ");
        contador++
    }
}*/

let numero;
numero = prompt("Digite um numero entre 10 e 100");

if((numero <10)||(numero >100)){
    alert("Numero fora do intervalo solicitado!");
}
else{
    for(contador =0;contador <= numero; contador++){
    document.write(contador + ", ")
    }
}