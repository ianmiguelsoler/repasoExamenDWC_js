"use strict";

import { crearParrafo } from "../../Biblioteca_JS/funciones.js";

//!Ejercicio 2.
//?Solución:

document.addEventListener("DOMContentLoaded", () => {

    var botonCrearParrafo = document.getElementById("crearParrafo");
    const divResultado = document.getElementById("resultado");

    
    
    botonCrearParrafo.addEventListener("click", () => {
        let textArea = document.getElementById("texto").value.trim();
        let formato = document.getElementById('formato').value;
        crearParrafo(textArea, divResultado, formato);
    });


},false);
