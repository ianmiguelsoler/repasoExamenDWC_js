"use strict";

//! Variables
const arrayCadenas = ["Ian", "Pedro", "Miguel", "Francisco", "Julio"];

//? Solución
// Array que pone en mayúsculas todo el array usando spread operator y map.
const arrayCadenasMayus = [...arrayCadenas].map(mostrarEnMayuscula);
imprimirArrayFormateado(arrayCadenasMayus)

// Array ordenado con sort, usando spread operator para no modificar el original y añadiendo reverse para que los tenga ordenados alfabeticamente pero al revés.
const arrayOrdenado = [...arrayCadenasMayus].sort().reverse();
imprimirArrayFormateado(arrayOrdenado);

// Array mapeado a JSON con spread operator y desestructuración.
const arrayJSON = arrayCadenas.map((nombre, indice) => {
    return {
        id: indice,
        nombre
    };
});
console.log(arrayJSON);

//* Funciones
// Función que recibe el array y lo devuelve en mayúsculas.
function mostrarEnMayuscula(valor) {
    return valor.toUpperCase();
}
// Usamos map en lugar de forEach para recorrer el array y devolver un nuevo array
const nombresConId = arrayJSON.map(({ id, nombre }) => {
    return `ID: ${id}, Nombre: ${nombre}`;
});
imprimirArrayFormateado(nombresConId);
//Imprime el array de forma formateada
function imprimirArrayFormateado(array) {
    console.log("[" + array.join(", ") + "]");
}