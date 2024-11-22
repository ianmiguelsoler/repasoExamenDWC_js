"use strict";

document.addEventListener("DOMContentLoaded", () => {

    creaTabla(10, 10)

setTimeout(() => {
    var tabla = document.getElementsByTagName("table")[0];
    tabla.style.backgroundColor = "red"

}, 2000);
}, false)


const creaTabla = (filas, columnas) => {

    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    
    for (let contadorFilas = 0; contadorFilas < filas; contadorFilas++) {
        // tabla.insertAdjacentHTML('beforeend', tr)
        var tr = document.createElement("tr");
        for (let contadorColumnas = 0; contadorColumnas < columnas; contadorColumnas++) {
            tr.innerHTML += `<td>${contadorFilas +1},${contadorColumnas +1}</td>`;
            
        }
        tabla.appendChild(tr)
    }
    body.appendChild(tabla)
};

function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) { // Solo iterar hasta la raíz cuadrada
        if (numero % i === 0) return false; // Si es divisible por cualquier número menor a él, no es primo
    }
    return true; // Si no encontró divisores, es primo
}
