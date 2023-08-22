//Código para calcular a multiplicação de duas matrizes e imprimir  o resultado (MatrizC) no console

//inicializando as 2 matrizes
let matrizA = Array(2);
matrizA[0] = [1,3];
matrizA[1] = [2,5];

let matrizB = Array(2);
matrizB[0] = [2,2];
matrizB[1] = [0,1];

//auxiliares
let i, j, k;

/*
É primordial que o número de colunas da primeira matriz seja igual ao número
de linhas da segunda matriz. Se for diferente, o algoritmo deve informar “Não é
possível calcular”;

Mesmo conceito usado no desafio01, matrizA[0].length retorna as colunas, matrizB.length retorna as linhas
*/
if (matrizA[0].length != matrizB.length){
    console.log("Não é possível calcular");
} else {
    let matrizC = Array(matrizA.length);

    for(i=0;i<matrizC.length;i++){
        //criando linha na matrizC com o mesmo número de colunas da matrizB, visto que terão o mesmo número de colunas
        //a MatrizC será um array de arrays para representar cada célula da matriz
        matrizC[i] = Array(matrizB[0].length);
        for(j=0;j<matrizB[0].length;j++){
            //inicializando o valor de cada célula da matriz como 0, pois o valor final é a soma dos produtos, sem inicializar
            //o cálculo da soma sai incorreto
            matrizC[i][j] = 0;
            for(k=0;k<matrizA[0].length;k++){
                //matrizC[i][j] = matrizA[i][n-1]*matrizB[n-1][j]
                matrizC[i][j] += matrizA[i][k]*matrizB[k][j];
            }
        }
    }

    //printando a multiplicação das matrizes
    for(i=0;i<matrizC.length;i++){
        console.log(matrizC[i]);
    }
}


