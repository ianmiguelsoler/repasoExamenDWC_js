"use strict";

//! Variables
var nombreCurso = "2ºDAW"
var anoCurso = "2024"
var descCurso = "Es un curso donde se aprende programación Web"
var alumnado = []

//? Solución
var curso = creaCurso(nombreCurso, anoCurso, descCurso, alumnado);
muestraCurso(curso)

//* Funciones
//Función que es capaz de crear un curso.
function creaCurso(nombreCurso, anoCurso, descCurso, alumnado){
    return {
        nombreCurso: nombreCurso,
        anoCurso: anoCurso,
        descCurso: descCurso,
        alumnado: alumnado
    };
};
//Muestra el curso y también los que sean indefinidos, nulos o no tengan tamaño si son array. Mostrará un mensaje en él.
function muestraCurso(curso){
    console.log(`El Curso Contiene esto:\n`)
    for (const clave in curso) {
        if (Object.hasOwnProperty.call(curso, clave)) {
            const element = curso[clave];
            if (element !== null && element !== undefined && element.length !== 0) {
                console.log(`${clave} => ${element}`);
            }
            else{
                console.log(`${clave} => NO TIENE NINGÚN DATO`);
            }
        }
    }
};

