import entradaDados from 'readline-sync';

let oper = entradaDados.question("Qual operacao vc deseja fazer (+) (-) (/) (*): ");
let valor1 = entradaDados.question("Numero: ");
let valor2 = entradaDados.question("Numero: ");

function calSimples (oper, valor1, valor2) {
    switch (oper) {
        case "-":
            return valor1 - valor2;                
            break;
        case "+":
            return Number(valor1) + Number(valor2);              
            break;
        case "/":
            return  valor1 / valor2;             
            break;
        case "*":
            return  valor1 * valor2;
            break;
        default:
            console.log("Escolha uma opção!");

    };
    
};

console.log( "O resultado é: ", calSimples(oper, valor1, valor2));
