document.write("Criando matrizes em JavaScript <br/>" );
var matriz = [
    ["Melão", "Banana"],
    ["Pessego", "Morango"],
    ["Uva", "Melancia"]
]
document.write("<br/>" + matriz);

var valores= '';
for(L=0; L<=2; L++){
    for(C=0; C<=1; C++){
        valores += matriz[L][C] + "\n";
    }
}
alert(valores);
