"use strict";

import { insertAfter } from "../../Biblioteca_JS/funciones.js";

//!Ejercicio 4.
//?Solución:
var nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Soy el nuevo elemento después de "existe"';

var existenteElemento = document.getElementById('existe');
insertAfter(nuevoElemento, existenteElemento) 

