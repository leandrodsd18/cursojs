function Mensagem(nome){
    alert("Parabéns " + nome +"!");
}
//chamando a função
var a= prompt("Digite seu nome:");
Mensagem(a);


//Passagem de parâmentros para a função
function valorReferencia(strVar, arrVar){
    strVar= "String modificada";
    arrVar[0]= "Array modificado";
}
var texto= "Valor original";
var vetor= ["Valor original"];

document.write("String antes de chamar a função "+ texto + "<br/>");
document.write("Array antes de chamar a função "+ vetor + "<br/>");

valorReferencia(texto, vetor);
//Por ser do tipo primitivo a stringo não tem o seu valor modificado.
document.write("String depois de chamar a função "+ texto + "<br/>");
//Por ser um objeto o array tem o seu valor modificado dentro da funão e propagado para fora dela.
document.write("Array depois de chamar a função "+ vetor + "<br/>");

//Declaração de return na função.
/*function quadrado(numero){
    quad= numero*numero;
    return quad;
}
var num= prompt("Digite um numero qualquer:")
document.write("O quadrado de "+ num + " é: "+ quadrado(num));*/

//Mais de um return na mesma função
function quadrado(numero){
    if(isNaN(numero)){
        return "Valor digitado não é um número valido";
    }
    quad= numero*numero;
    return quad;
}
var num= prompt("Digite um numero qualquer:");
document.write(quadrado(num));