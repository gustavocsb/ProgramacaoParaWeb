let num1 = Number (10)
let num2 = Number (7)

let soma = num1+num2
let sub = num1-num2
let mult = num1*num2
let div = num1/num2

let operacoes = [soma, sub, mult, div];
let nomes = ["soma", "subtracao", "multiplicacao", "divisao"];

for(let i = 0; i < 4; i++) {
    console.log(`Resultado da ${nomes[i]} entre ${num1} e ${num2} = ${operacoes[i]}`);
}

/*
console.log("Resultado da soma entre",num1,"e",num2,"é:",soma)
console.log("Resultado da subtração entre "+num1+" e",num2,"é:",sub)
console.log("Resultado da multiplicação entre",num1,"e",num2,"é:",mult)
console.log("Resultado da divisão entre",num1,"e",num2,"é:",div)
*/
let nr1Soma = 73
let nr2Soma = 37
let soma1 = (nr1Soma+nr2Soma)
console.log(`${nr1Soma} + ${nr2Soma} = ${soma1}`)

let nr1Subt = 100
let nr2Subt = 50
let subt1 = (nr1Subt+nr2Subt)
console.log(`${nr1Subt} + ${nr2Subt} = ${subt1}`)

let nr1Mult = 2
let nr2Mult = 9
let Mult1 = (nr1Mult+nr2Mult)
console.log(`${nr1Mult} + ${nr2Mult} = ${Mult1}`)

let nr1Div = 90
let nr2Div = 9
let div1 = (nr1Div+nr2Div)
console.log(`${nr1Div} + ${nr2Div} = ${div1}`)
