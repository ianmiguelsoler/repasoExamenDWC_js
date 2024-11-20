"use strict";

//!Ejercicio 2.
//?Solución:
//Genera Aleatoriamente el color del background.
const colorAleatorio = () => {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Añadimos el evento de doble clic al documento.
document.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = colorAleatorio();
});
