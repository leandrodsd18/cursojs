let Cidades=["Bagé", "Acegua", "Hulha Negra", "Dom Pedrito"];
let cidade;
//Descobrindo a quantidade de posições do array
let QuantCidades = Cidades.length;
document.write("O array possui " + QuantCidades + " elementos <br/>");
//aceesando o elemento 1 do array
cidade= Cidades[0];
document.write("A cidade é: " + cidade + "<br/> <br/>");
//Escrevendo na tela todos os elementos do array
for(i=0; i<4; i++){
    document.write(Cidades[i] + "<br/>")
}
//Incluindo elementos ao final do array
Cidades.push("Lavras do Sul");
Cidades.push("Santana do Livramento");

for(i=0; i<Cidades.length; i++){
    document.write(Cidades[i] + "<br/>");
}
//Eliminando o último elemento do array
document.write(Cidades[Cidades.length-1] + "<br/>");
Cidades.pop();
document.write(Cidades[Cidades.length-1]+ "<br/>");
//Unindo o array em uma só string
let conjuntoCidades = Cidades.join(", ")
document.write("<br/>" + conjuntoCidades + "<br/>");

document.write("Posições do array = " + Cidades.length + "<br/>");
Cidades.push("Santana do Livramento");
document.write(Cidades.join(", "))
document.write("<br/> Posições do array = " + Cidades.length);