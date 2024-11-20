"use strict";

import { crearCheckBox, agregarCheckPares, desmarcarChecks} from "../../Biblioteca_JS/funciones.js";

//!Ejercicio 1.
//?Solución:

document.addEventListener("DOMContentLoaded", () => {

    var form = document.getElementById("formularioCheckBox");
    var botonParaMarcarPares = document.getElementById("marcarTodosLosPares");
    var botonDesmarcarTodos = document.getElementById("desmarcarTodos");
    var cantidadNumerosAleatorios = 100;
    const seleccionCheckBox = document.getElementsByName("checkbox");

    crearCheckBox(cantidadNumerosAleatorios, form);
    
    botonParaMarcarPares.addEventListener("click", () => {
        agregarCheckPares(seleccionCheckBox);
    });

    botonDesmarcarTodos.addEventListener("click", () => {
        desmarcarChecks(seleccionCheckBox);
        
    });


},false);
