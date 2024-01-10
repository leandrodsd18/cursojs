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
document.write("<br/>");
//Incluindo elementos ao final do array
Cidades.push("Lavras do Sul");
Cidades.push("Santana do Livramento");

for(i=0; i<Cidades.length; i++){
    document.write(Cidades[i] + "<br/>");
}
document.write("<br/>");
//Eliminando o último elemento do array
document.write(Cidades[Cidades.length-1] + "<br/>");
Cidades.pop();
document.write(Cidades[Cidades.length-1]+ "<br/>");
//Unindo o array em uma só string
let conjuntoCidades = Cidades.join(", ")
document.write("<br/>" + conjuntoCidades + "<br/>");

document.write("Posições do array = " + Cidades.length + "<br/>");
Cidades.push("Santana do Livramento");
document.write(Cidades.join(", "));
document.write("<br/> Posições do array = " + Cidades.length + "<br/><br/>");
//Removendo o priemeiro elemento do array e deslocando os demais
document.write("Antes do deslocamento <br/>");
document.write("1º elemento do array é " + Cidades[0]);
Cidades.shift();
document.write("<br/> Após do deslocamento <br/>");
document.write("1º elemento do array é " + Cidades[0]);
document.write("<br/> Posições do array = " + Cidades.length + "<br/><br/>");
//Deletando um valor qualquer no array
for(i=0; i<Cidades.length; i++){
    document.write(Cidades[i] + "<br/>");
}
delete Cidades[1];
document.write("<br/>");
for(i=0; i<Cidades.length; i++){
    document.write(Cidades[i] + "<br/>");
}    
document.write("Posições do array = " + Cidades.length + "<br/><br/>");
//Adicionando elementos ao array
document.write("Método splice(): <br/>");
Cidades.splice(1,1,"Bagé", "Hulha Negra");
for(i=0; i<Cidades.length; i++){
    document.write(Cidades[i] + "<br/>");
}    
document.write("Posições do array = " + Cidades.length + "<br/><br/>");

document.write("Método concat(): <br/>");
let Sudeste=["SP","RJ","ES","MG"];
let Nordeste=["PI","MA","CE","RN","PB","PE","SE","AL","BA"];
let Norte=["AC","AM","AP","RO","RR","PA","TO"];
let Sul=["PR","SC","RS"];
let CentroOeste=["MS","MT","GO","DF"];

let Estados = Sudeste.concat(Nordeste,Norte,Sul,CentroOeste);
document.write("<br/>Listando os Estados <br/><br/>");

Estados.sort();
for(i=0; i<Estados.length; i++){
    document.write(Estados[i]+"<br/>")
}