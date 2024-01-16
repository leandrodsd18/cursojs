document.write("Criando matrizes em JavaScript <br/>" );
var matriz = [
    ["Melão", "Banana"],
    ["Pessego", "Morango"],
    ["Uva", "Melancia"]
];
//Escrevendo a matriz na tela em uma unica linha
document.write("<br/>" + matriz);
//Escrevendo a matriz na tela em uma unica coluna
var valores= '';
for(L=0; L<=2; L++){
    for(C=0; C<=1; C++){
        valores += matriz[L][C] + "\n";
    }
}
alert(valores);
//Escrevendo a matriz na tela em formato de tabela
var valores2 = '';

for(L=0; L<=2; L++){
    for(C=0; C<=1; C++){
        if(C<1){
            valores2 += matriz[L][C] + "\t\t";
        }
        else{
            valores2 += matriz[L][C] + "\n";
        }
    }
}
alert(valores2);