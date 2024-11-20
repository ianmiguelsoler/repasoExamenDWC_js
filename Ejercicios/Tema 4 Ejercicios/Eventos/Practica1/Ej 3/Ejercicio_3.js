"use strict";

//!Ejercicio 3.
//?Solución:

const posicion = document.getElementById('posicion');

window.addEventListener(
    "mousemove", 
    (evento) => {
        const x = evento.clientX;
        const y = evento.clientY;
        posicion.innerHTML= `Posición del ratón: X: ${x}, Y: ${y}`;
    },false);

