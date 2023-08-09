import entrDados from 'readline-sync';

// - Faça a leitura da quantidade de rotas do dia. OK
// - Faça a leitura da km de cada ônibus. OK
// - Calcule a quantidade necessária de combustível para atender toda a demanda. OK
// - Faça leitura do valor do litro do óleo diesel. OK
// - No final mostre o resultado de total de km, quantos litros de combustível é necessário para atender às rotas e o valor que a empresa desembolsará OK

let qtsRotas = entrDados.question("Quantas rotas vão ser hoje? ");
var totalSoma = 0;
var qtsCobust = 0;

// Sabendo que cada ônibus tem uma média de consumo de 2,5km/litro de óleo diesel, faça um programa que

for (let i = 1; i <= qtsRotas; i++){

    let qtsKm = entrDados.question("Rota: " + i + " Quantos KM cada rota ? ");
    totalSoma = Number(totalSoma) + Number(qtsKm);
    qtsCobust = totalSoma / 2.5;
   
};

let valorDiesel = parseFloat(entrDados.question("Valor diesel atual? "));
    var consumoTotal = qtsCobust * valorDiesel;

    // diferenciação de . e , na entrada de dados

console.log("Total de KM: " + totalSoma);
console.log("Total de combustivel para as rotas: " + qtsCobust);
console.log("Gatos totais com combustivel: " + convert);