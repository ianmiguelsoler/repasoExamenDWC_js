"use strict";

import {unirValores, calcularIMC, comprobarMayorImc} from "../BibliotecaJS/script.js";

//! Ejercicio 1
//? Variables

document.addEventListener("DOMContentLoaded", () => {

//Definición de variables
var objetoMarcos = {
    "nombre": "Marcos",
    "masa" : 68,
    "altura" : 170
};

var objetoJuan = {
    "nombre": "Juan",
    "masa" : 81,
    "altura" : 195
};
var IMCMarcos
var IMCJuan
var IMC
var marcosJuan = unirValores(objetoMarcos,objetoJuan)

marcosJuan.forEach((persona) => {
    IMC = calcularIMC(persona.masa, persona.altura)
    if(persona.nombre === "Marcos"){
        IMCMarcos = IMC
    }
    else{
        IMCJuan = IMC
    }
    console.log(`La persona con el nombre ${persona.nombre}, tiene una altura de ${persona.altura} y una masa de ${persona.masa}. Su IMC es ${IMC}`)
})

var comprobarIMC = comprobarMayorImc(IMCMarcos,IMCJuan)

console.log(`Tiene Marcos un IMC mayor que el de Juan?: ${comprobarIMC}`)

},false)


