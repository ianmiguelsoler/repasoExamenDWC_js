"use strict";

import { 
    filtrarPoblacionPorProvincia
} from "../../Biblioteca_JS/funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const selectProvincia = document.getElementById("seleccionProvincia");
    const selectPueblo = document.getElementById("seleccionPueblo");
    const divResultado = document.getElementById("resultado");

    selectProvincia.addEventListener("change", () => {
        filtrarPoblacionPorProvincia(seleccionProvincia.value, selectPueblo);        
    });

}, false);