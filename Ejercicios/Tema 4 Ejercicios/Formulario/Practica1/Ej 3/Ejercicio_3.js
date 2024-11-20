"use strict";

import { 
    obtenerDatosFormulario,
    validarDisco,
    guardarDiscoEnJSON,
    mostrarDiscos
} from "../../Biblioteca_JS/funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonGuardarDisco = document.getElementById("botonGuardarDisco");
    const divResultado = document.getElementById("resultado");
    const botonMostrarDiscos = document.getElementById("botonMostrarDiscos");

    //Botón que guarda el disco si cumple los requisitos de que esten rellenados todos los campos, si pasa el filtro los guarda o sino lo muestra en un div.
    botonGuardarDisco.addEventListener("click", () => {
        let formulario = document.getElementById("formularioDiscos");
        const disco = obtenerDatosFormulario(formulario);
        //Valida el disco comprobando que esten los campos.
        if (validarDisco(disco)) {
            //Guarda el disco JSON.
            guardarDiscoEnJSON(disco, divResultado);
        } else {
            //Muestra al usuario que tiene que rellenar todos los campos.
            divResultado.innerText = "Por favor, completa todos los campos requeridos.";
        }
    }, false);

    botonMostrarDiscos.addEventListener("click", () => {
        //Comprobamos que el divResultado tenga un none para no aparecer o este vacio.
        if (divResultado.style.display === "none" || divResultado.style.display === "") {
            mostrarDiscos(divResultado);
            divResultado.style.display = "block"; // Muestra el contenedor.
        } else {
            divResultado.style.display = "none"; // Oculta el contenedor.
        }
    });
}, false);