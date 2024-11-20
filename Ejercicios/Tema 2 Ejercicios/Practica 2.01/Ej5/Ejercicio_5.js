"use strict";

//! Variables
var totalGastado = [124,48,268] /*Dolares gastados*/
var propinas = [20,15,10] /*Dolares gastados*/
// var totalGastadoP = [124,48,268] /*Dolares gastados*/

//? Solución
console.log(calculadoraDePropinas(totalGastado, propinas))


//* Funciones
//Esta función calcula las propinas según unos valores pasados en un array
function calculadoraDePropinas(totalGastado, propinasPorcentajes) {
    let totalPropinas = [];
    let totalConPropinas = [];
    
    for (let contador = 0; contador < totalGastado.length; contador++) {
        if (totalGastado[contador] < 50) {
            totalPropinas[contador] = totalGastado[contador] * (propinasPorcentajes[0] / 100);
        } else if (totalGastado[contador] >= 50 && totalGastado[contador] <= 200) {
            totalPropinas[contador] = totalGastado[contador] * (propinasPorcentajes[1] / 100);
        } else if (totalGastado[contador] > 200) {
            totalPropinas[contador] = totalGastado[contador] * (propinasPorcentajes[2] / 100);
        }
    }

    for (let contador = 0; contador < totalGastado.length; contador++) {
        totalConPropinas[contador] = totalGastado[contador] + totalPropinas[contador];
        console.log(`Ha pagado en el restaurante Nº ${contador+1}, una factura de ${totalGastado[contador]}$, una propina de ${totalPropinas[contador].toFixed(2)}$, y el total fue ${totalConPropinas[contador].toFixed(2)}$.`);
    }
}