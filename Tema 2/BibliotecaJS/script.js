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


//!----------------- Ejercicio 1 practica 2.03 -----------------------

var nombreDeCurso = ["2Daw", "1Daw", "2Dam", "1Dam", "Bachillerato 2", "Bachillerato 1"];
var año = [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
const nombres = ["Pedro", "Yuyu", "Miguel", "ian", "Cuyita", "Mai", "Joaquin", "Maria", "Patry"];


const nombreAleatorios = () => {
    var arrayCurso = []
    let numero = Math.floor(Math.random() * 5)
    for (let contador = 0; contador < numero; contador++) {
        numero = Math.floor(Math.random() * 9)
        let nombre = nombres[numero];
        arrayCurso = [...arrayCurso, nombre];
    }
    if(arrayCurso.length === 0){
        nombreAleatorios()
    }
    else{
        return arrayCurso
    }
}

export {unirValores, calcularIMC, comprobarMayorImc, nombreAleatorios};