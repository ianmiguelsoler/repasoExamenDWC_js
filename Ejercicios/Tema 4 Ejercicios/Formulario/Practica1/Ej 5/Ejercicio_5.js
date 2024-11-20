"use strict";

import { 
    obtenerDatosFormulario,
    guardarDiscoEnJSON,
    mostrarDiscos,
    validarFormularioDiscosMejorado
} from "../../Biblioteca_JS/funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const divResultado = document.getElementById("resultado");

    const botonGuardarDisco = document.getElementById("botonGuardarDisco");
    const botonMostrarDiscos = document.getElementById("botonMostrarDiscos");

    //Botón que guarda el disco si cumple los requisitos de que esten rellenados todos los campos, si pasa el filtro los guarda o sino lo muestra en un div.
    botonGuardarDisco.addEventListener("click", () => {
        let formulario = document.getElementById("formularioDiscos");

        // Valida el formulario aplicando estilos en caso de error.
        if (validarFormularioDiscosMejorado(formulario)) {
            const disco = obtenerDatosFormulario(formulario);
            guardarDiscoEnJSON(disco, divResultado);
        } else {
            divResultado.innerText = "Por favor, completa todos los campos requeridos correctamente.";
        }
    });

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