function nomeDaFuncao(parametrosDaFuncao){
    let something = parametrosDaFuncao;

    //function scope

    return something;
}

function HelloWorld(){
    let string = "Hello World!";
    return string;
}

console.log(HelloWorld());

function HelloString(string){
    let retorno = string;
    return retorno;
}

let string = "Hello String!";

console.log(HelloString(string));