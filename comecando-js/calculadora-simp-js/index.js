/*Nesse exercício criei uma calculadora bem simples onde o usuario entra com dois numeros, e o programa devolve a soma, subtração, divisão, multiplicação e o modulo desses dois numeros*/
let a, b;

a = prompt("Digite um numero: ");
a = Number(a);
document.write("A variavel a é do tipo " + typeof a +"<br>" );

b = prompt("Digite um numero: ");
b = Number(b);
document.write("A variavel b é do tipo " + typeof b +"<br>" );
document.write("A soma dos numeros é: " + (a+b) +"<br>");
document.write("A subtração dos numeros é: " + (a-b) +"<br>");
document.write("A multiplicação dos numeros é: " + (a*b) +"<br>");
document.write("A divisão dos numeros é: " + (a/b) +"<br>");
document.write("O modulo dos numeros é: " + (a%b) +"<br>");