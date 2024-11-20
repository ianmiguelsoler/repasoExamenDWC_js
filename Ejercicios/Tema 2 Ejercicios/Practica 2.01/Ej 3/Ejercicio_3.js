"use strict";

//! Variables
var numero1 = 2 /*numero impresion*/
var numero2 = 8 /*numero multiplicador*/

//? Soluciones
if (numero1 >= 0) {
    console.log(multiplicar(numero1, numero2)); // Solo se ejecuta si número 1 es >= 0
} else {
    console.log("Los números no cumplen con las condiciones: numero1 debe ser >= 0.");
}
//* Funciones
// Función que muestra un numero x de veces el siguiente multiplicado por 2
function multiplicar(numero1P, numero2M) {
    let valorAnterior = numero2M
    for (let contador = 0; contador < numero1P; contador++) {
        var resultado = valorAnterior * 2
        console.log(resultado)
        valorAnterior = resultado
    }
}