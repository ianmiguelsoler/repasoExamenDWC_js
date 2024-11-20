"use strict";

console.log(calcular(numerosAleatorios, generarArray, imprimirArrayFormateado))
//* Funciones
//Función que calcula números de forma aleatoria
function numerosAleatorios(numero) {
    let arrayAleatorio = [];
    for (let contador = 0; contador < numero; contador++) {
        arrayAleatorio[contador] = Math.floor(Math.random() * 100) + 1; 
    }
    return arrayAleatorio;
}
//calcula el array formateado
function generarArray(array1, array2) {
    var arraySumado = []
    if(array1.length !== array2.length){
        console.error("Los arrays deben tener la misma longitud.");
        return null;
    }
    for (let contador = 0; contador < array1.length; contador++) {
        arraySumado.push(array1[contador] + array2[array2.length - 1 - contador]);
    }
    return arraySumado;
}

//Imprime el array de forma formateada
function imprimirArrayFormateado(array) {
    console.log("[" + array.join(", ") + "]");
}
//Función para pasar todas las variables y comprobar el código
function calcular(numerosAleatorios,generarArray,imprimirArrayFormateado){
    let numero = 12
    //Creamos dos arrays con el mismo tamaño y uno que no lo tiene
    let array1 = numerosAleatorios(numero)
    let array2 = numerosAleatorios(numero)
    let array3 = numerosAleatorios(14)

    console.log(`Los dos arrays generados son: \n`)
    imprimirArrayFormateado(array1)
    imprimirArrayFormateado(array2)
    
    console.log(`Array Sumado Correctamente\n`)
    let arraySumado = generarArray(array1, array2) // No dará problemas y podremos imprimirlo
    imprimirArrayFormateado(arraySumado) // Mostrará el array sumado
    console.log(`Error por no tener la misma longitud:\n`)
    generarArray(array1, array3) //Este dará un error porque no funciona

}