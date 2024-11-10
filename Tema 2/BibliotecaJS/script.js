"use strict";


//!----------------- Ejercicio 1 practica 2.01 -----------------------
// une los dos objetos en 1
const unirValores = (objeto1,objeto2) => {

    return [objeto1,objeto2];
};
//Calcula la masa de cada uno
const calcularIMC = (masa, altura) => {
    return masa / (altura ** 2);
};


const comprobarMayorImc = (imc1,imc2) =>{
 if(imc1>imc2){
    return true
 }
 else{
    return false
 }
};

export {unirValores, calcularIMC, comprobarMayorImc};