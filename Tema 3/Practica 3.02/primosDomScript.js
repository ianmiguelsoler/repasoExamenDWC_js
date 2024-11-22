"use strict";

document.addEventListener("DOMContentLoaded", () => {

    creaTabla(10, 10)

setTimeout(() => {
    var tabla = document.getElementsByTagName("table")[0];
    var td = document.getElementsByTagName("td");
    for (let contador = 0; contador < td.length; contador++) {
        var numeroP =  Number(td[contador].innerText)
        if(esPrimo(numeroP)){
            td[contador].style.backgroundColor = "red"
            td[contador].style.fontWeight = "bold"
        }
        
    }
}, 2000);
}, false)


const creaTabla = (filas, columnas) => {

    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    
    for (let contadorFilas = 0; contadorFilas < filas; contadorFilas++) {
        // tabla.insertAdjacentHTML('beforeend', tr)
        var tr = document.createElement("tr");
        for (let contadorColumnas = 0; contadorColumnas < columnas; contadorColumnas++) {
            tr.innerHTML += `<td>${contadorColumnas +1}</td>`;
            
        }
        tabla.appendChild(tr)
    }
    body.appendChild(tabla)
};


const esPrimo = (numero) => {
    if(numero<= 1) return false
    for (let contador = 2; contador <= Math.sqrt(numero);contador++) {
        if (numero % contador === 0) return false
        
    }
    return true
};