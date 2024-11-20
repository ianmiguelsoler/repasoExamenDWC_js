"use strict";
import { mostrarOcultarAcordeon } from "../../Biblioteca_JS/funciones.js";

//!Ejercicio 1.
//?Solución:
//Añadimos el evento solo al cargarse el documento.
  document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos las clases de cada título.
    const elementos = document.querySelectorAll('.acordeon .elemento');
  
    //Utilizamos un forEach para listar todos los elementos
    elementos.forEach((elemento) => {
      elemento.addEventListener('click', () => {
        //Llamamos a la función de la lógica del acordeón
        mostrarOcultarAcordeon(elemento);
      });
    });
  });
  