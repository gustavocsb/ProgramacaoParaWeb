function contagemRegressiva(n){
    if (n>0){
        console.log(n);
        contagemRegressiva(n-1);
    }else{
        console.log("Feliz ano novo!!!");
    }
}

contagemRegressiva(10);