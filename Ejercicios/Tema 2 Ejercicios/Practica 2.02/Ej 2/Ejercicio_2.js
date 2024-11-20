"use strict";

//! Variables
var numeroTabla = 6;

//? Soluciones
// Imprime las tablas desde el número 6 hasta el 2
imprimeTablas(numeroTabla, calculaTabla);

//* Funciones
// La función recibe un número y lo multiplica y lo muestra
function calculaTabla(numeroTabla) {
    console.log(`La tabla del ${numeroTabla}:`);
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${numeroTabla} x ${contador} = ${numeroTabla * contador}`);
    }
    console.log(''); // Línea vacía para separar las tablas
}

// La función que recibe un número y una función para llamar a la tabla
function imprimeTablas(numeroTabla, funcionTabla) {
    if (numeroTabla <= 2) {
        console.log("El número debe ser mayor que 2.");
        return;
    }
    for (let contador = numeroTabla; contador >= 2; contador--) {
        funcionTabla(contador); // Llamada a la función que imprime la tabla
    }
}
