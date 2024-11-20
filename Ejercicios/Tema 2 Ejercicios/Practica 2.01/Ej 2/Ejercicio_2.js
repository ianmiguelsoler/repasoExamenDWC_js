"use strict";

//! Variables
var puntosJuan = [89,120,103] /*puntos*/
var puntosMiguel = [116,94,123] /*puntos*/
var puntosMaria = [97,134,105] /*puntos*/

//? Soluciones
console.log(`La media del equipo de Juan es: ${calculoMediaPuntos(puntosJuan)}`)
console.log(`La media del equipo de Miguel es: ${calculoMediaPuntos(puntosMiguel)}`)
console.log(`La media del equipo de María es: ${calculoMediaPuntos(puntosMaria)}`)
console.log(calculoGanador(puntosJuan, puntosMiguel, puntosMaria));

//* Funciones
//La funcion recibe el array de los puntos del equipo y recorre todo el array sumando sus datos y guardandolo en suma y despues hacemos la media con el tamaño del array
function calculoMediaPuntos(puntosTotales) {
    let sumaTot= 0
// Recorremos el array con forEach para sumar los puntos
puntosTotales.forEach(function(punto) {
    sumaTot += punto; 
});
 let media = sumaTot / puntosTotales.length;// Calculamos la media (promedio)
 return media;
}

// Función que compara las medias de dos equipos y determina el ganador
function calculoGanador(equipoJuan, equipoMiguel, equipoMaria) {
    let mediaJuan = calculoMediaPuntos(equipoJuan);
    let mediaMiguel = calculoMediaPuntos(equipoMiguel);
    let mediaMaria = calculoMediaPuntos(equipoMaria);

    if (mediaJuan > mediaMiguel && mediaJuan > mediaMaria) {
        return `Ha ganado el equipo de Juan con una media de ${mediaJuan.toFixed(2)}`;
    } else if (mediaMiguel > mediaJuan && mediaMiguel > mediaMaria) {
        return `Ha ganado el equipo de Miguel con una media de ${mediaMiguel.toFixed(2)}`;
    } else if (mediaMaria > mediaJuan && mediaMaria > mediaMiguel) {
        return `Ha ganado el equipo de María con una media de ${mediaMaria.toFixed(2)}`;
    } else {
        return `Es un empate entre varios equipos con una media de ${Math.max(mediaJuan, mediaMiguel, mediaMaria).toFixed(2)}`;
    }
}


// Mostrar el resultado en el HTML
// Esperamos a que el documento esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Calculamos las medias
    let mediaJuan = calculoMediaPuntos(puntosJuan);
    let mediaMiguel = calculoMediaPuntos(puntosMiguel);
    let mediaMaria = calculoMediaPuntos(puntosMaria);

    // Obtenemos el elemento para mostrar los resultados
    let resultadoElemento = document.getElementById("resultado");

    // Mostramos las medias y el ganador en el HTML
    resultadoElemento.innerHTML = `
        La media del equipo de Juan es: ${mediaJuan.toFixed(2)}<br>
        La media del equipo de Miguel es: ${mediaMiguel.toFixed(2)}<br>
        La media del equipo de María es: ${mediaMaria.toFixed(2)}<br>

        ${calculoGanador(puntosJuan, puntosMiguel, puntosMaria)}
    `;
});