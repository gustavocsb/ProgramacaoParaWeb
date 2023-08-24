const carro = {
    modelo: "Opala",
    ano: 1986,
    cor: "Preto"
}

for (const key in carro){
    const elemento = carro[key];
    console.log(`${key} - ${elemento}`);
}