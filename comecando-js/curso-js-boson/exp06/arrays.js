let Cidades=["Bagé", "Lavras do Sul", "Hulha Negra", "Dom Pedrito"];
let cidade;
//aceesando o elemento 1 do array
cidade= Cidades[1];
document.write("A cidade é: " + cidade + "<br/>");
//Escrevendo na tela todos os elementos do array
for(i=0; i<4; i++){
    document.write(Cidades[i] + "<br/>")
}
//Trocando valor da posição 3 do array
Cidades[2] = "Santana do Livramento";

for(i=0; i<4; i++){
    document.write(Cidades[i] + "<br/>")
}