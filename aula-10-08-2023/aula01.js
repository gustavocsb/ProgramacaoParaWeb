let i=1

if(i==1){
    const pi=3.14;
    console.log(pi)
    i++
}

var name="Jorge"
var age=49

if(i==1){
    console.log("Your name is:",name)
    console.log("Your age is:",age)
}

var name="Gustavo"
var age=20

if(i==2){
    console.log("Your name is:",name)
    console.log("Your age is:",age)
}

console.log(main)
var main="Qiyana"
console.log("--------------------------------------------------");
//tipos primitivos:

//String
let txt = String("Isto é uma String!")
console.log(txt)
/*
ISTO ESTÁ ERRADO!
let txt1 = string("isto é uma String?");
console.log(txt1);
*/

console.log("Array na posição número 3 da string é: "+txt[3])
console.log(txt.length)

//Number
let num = Number(7)
console.log(num)

num = Number(7.592)
console.log(num)

//Boolean
let bool = Boolean(true)
console.log(bool)

let boolSimple = false
console.log(boolSimple)

//Null
let nulo = null
//"vazio", aponta para uma referência inexistente (objeto ou endereço de memória inválido)
console.log(nulo)

//Undefined
let indefinido = undefined
console.log(indefinido)

console.log("--------------------------------------------------")
/*
operadores aritméticos:
- Soma (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)
*/

console.log(892375+12)
console.log(34985-1923)
console.log(123*12)
console.log(689328/182)