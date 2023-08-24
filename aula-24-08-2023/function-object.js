const calculadora = {
    Somar: (n1,n2) => {
        return n1+n2;
    },
    Multiplicar: function(n1,n2){
        return n1*n2;
    },
    Divisao: function(n1,n2){
        return n1/n2;
    },
    Subtracao: function(n1,n2){
        return n1-n2;
    }
}

let n1,n2;
n1=15;
n2=20;

for (const key in calculadora){
    const elemento = calculadora[key];
    console.log(`${key}: ${elemento(n1,n2)}`);
}
