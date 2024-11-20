"use strict";
import { mostrarOcultarPestanyas } from "../../Biblioteca_JS/funciones.js";

//!Ejercicio 2.
//?Solución:
  document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los botones y los contenidos.
    const botonesP = document.querySelectorAll(".botones");
    const contenidoDiv = document.querySelectorAll(".contenidoDiv");

    botonesP.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        // Llamamos a la función logicaPestanyas y le pasamos el botón seleccionado y los elementos.
        mostrarOcultarPestanyas(boton, botonesP, contenidoDiv, index);
      });
    });
  });