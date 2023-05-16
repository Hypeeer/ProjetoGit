let valor1 = 2;
let valor2 = 10;
let oper = "+";

function calculadora(oper, valor1, valor2) {

    switch (oper) {
        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 + valor2;
        case "/":
            return valor1 / valor2;
        case "*":
            return valor1 * valor2;
        default:
            console.log("Insira uma opção");
    }
    
}

console.log(calculadora(oper, valor1, valor2));