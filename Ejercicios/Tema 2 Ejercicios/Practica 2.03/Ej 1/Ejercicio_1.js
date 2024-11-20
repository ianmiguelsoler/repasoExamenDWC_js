"use strict";

//! Variables
var nombreCurso = "2ºDAW"
var anoCurso = "2024"
var descCurso = "Es un curso donde se aprende programación Web"
var alumnado = []
//? Solución
//* En esta cadena a la hora de pedirlo, me muestra el objeto porque solo puede impirmir cadenas de texto, tendria que 
//*utilizar JSON.stringify para que me imprimera una cadena de text
// let curso = creaCurso(nombreCurso, anoCurso, descCurso, alumnado)
// console.log(`El objeto creado es ${curso}`)
const curso2 = creaCurso(nombreCurso, anoCurso, descCurso, alumnado);
console.log("El objeto creado es:", curso);

//* Funciones
//Función que se le pasan los datos y te crea un Curso.
function creaCurso(nombreCurso, anoCurso, descCurso, alumnado){
    return {
        nombreCurso: nombreCurso,
        anoCurso: anoCurso,
        descCurso: descCurso,
        alumnado: alumnado
    };

};

