/*let a = 10;
if(a % 2 == 0)
{
    alert("O número é par");
}*/

/*a = prompt("Digite um número");
if(a % 2 == 0){
    alert("O número é par");
}
else{
    alert("O número é impar");
}*/

/*a = prompt("Digite um número:");
if(a > 10){
    alert("O número é maior que 10");
}
else if(a < 10){
    alert("O número é menor que 10");
}
else{
    alert("O número é 10");
}*/

let fruta = prompt("Digite o nome de uma fruta:");

switch(fruta){
    case "Morango":
    alert("Fruta boa para merengue");
    break;
    case "Laranja":
    alert("Fruta boa para suco");
    break;
    case "Banana":
    alert("Fruta boa para vitamina");
    break;
    default:
    alert("Fruta fora da base de dados");
    break;
}