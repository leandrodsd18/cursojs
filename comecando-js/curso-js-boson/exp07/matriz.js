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

//Criando uma matriz em tempo de execução

var LINHAS= prompt("Digite o numero de linhas da matriz:");
var COLUNAS= prompt("Digite o numero de colunas da matriz: ");
alert("Criar matriz de "+ LINHAS + " linhas por " + COLUNAS + " colunas");

var MATRIZ2= [];
    for(i=0; i<LINHAS; i++){
        MATRIZ2[i] =[];
        for(j=0; j<COLUNAS; j++){
            MATRIZ2[i][j] ='';
        }
    }
//inserindo valores na matriz em tempo de execução
for(L=0; L<LINHAS; L++){
    for(C=0; C<COLUNAS; C++){
        MATRIZ2[L][C]= prompt("Digite um valor para inserir na matriz: ");
    }
}
//Lendo os valores da matriz
var VALORES3 ='';
for(L=0; L<LINHAS; L++){
    for(C=0; C<COLUNAS; C++){
        if(C < COLUNAS -1){
            VALORES3 += MATRIZ2[L][C] + "\t\t";
        }
        else{
            VALORES3 += MATRIZ2[L][C] + "\n";
        }
    }
}
alert("Conteúdo da matriz: \n"+ VALORES3);