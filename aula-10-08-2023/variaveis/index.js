/* VARIÁVEIS

    Variável contém data
    Dois passos:
    1. Declarar (var, let, const)
    2. Assignment, atribuir (= assignment operator)
*/

let nome = "Gustavo";
let age = 19;
let dev = true;

console.log("Hello", nome);
console.log("You are", age, "years old");
console.log("Studying:", dev);

document.getElementById("p1").innerHTML = "Hello " + nome;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Studying: " + dev;

