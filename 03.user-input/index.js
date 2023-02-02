// USER INPUT
//Como aceitar entrada de dados do user
//    EASY WAY: window prompt

//let username = window.prompt("Digite seu username:");
//console.log(username);

//    HARD WAY: HTML textbox

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}