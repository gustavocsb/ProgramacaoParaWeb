const diaDaSemana = 5;
let nomeDiaSemana = "";

switch(diaDaSemana){
    case 0:
        nomeDiaSemana = "Domingo";
        break;
    case 1:
        nomeDiaSemana = "Segunda";
        break;
    case 2:
        nomeDiaSemana = "Terça";
        break;
    case 3:
        nomeDiaSemana = "Quarta";
        break;
    case 4:
        nomeDiaSemana = "Quinta";
        break;
    case 5:
        nomeDiaSemana = "Sexta";
        break;
    case 6:
        nomeDiaSemana = "Sábado";
        break;
    default:
        nomeDiaSemana = "Valor inválido!";
        break;
}

console.log(nomeDiaSemana);