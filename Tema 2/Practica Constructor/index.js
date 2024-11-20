"use strict";

import {nombreAleatorios} from "../BibliotecaJS/script.js";

//! Ejercicio 1
//? Variables

document.addEventListener("DOMContentLoaded", () => {
    const nombreDeCurso = ["2Daw", "1Daw", "2Dam", "1Dam", "Bachillerato 2", "Bachillerato 1"];
    const año = [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
    const nombres = ["Pedro", "Yuyu", "Miguel", "ian", "Cuyita", "Mai", "Joaquin", "Maria", "Patry"];

    var mostrarTodo = document.getElementById("mostrarContenidoObjetos");

var nombreDeCursoAleatorio = nombreDeCurso[4];
var añoCurso = año[5];
var descripcion = "Hola esto es una descripción";
var alumnado = nombreAleatorios();
if (alumnado === undefined){
    alumnado = nombreAleatorios();
}

const constructorCurso = (nombreDeCursoAleatorio, añoCurso, descripcion, alumnado) =>{

    var curso ={
        "Nombre del Curso": nombreDeCursoAleatorio,
        "Año Del Curso": añoCurso,
        "Descripcion": descripcion,
        "Alumnado": {alumnado},
    }
    return curso
}


var curso = constructorCurso(nombreDeCursoAleatorio, añoCurso, descripcion, alumnado);

const mostrarFuncionObjeto = (curso) => {
    for (const clave in curso) {
        if (Object.prototype.hasOwnProperty.call(curso, clave)) {
            const element = curso[clave];
            if(clave === "Alumnado"){
                console.log("Se Mostrará el interior de alumnado a continuación:")
                mostrarFuncionObjeto(element)
            }
            else{
                mostrarTodo.innerHTML += `<p> <span>${clave}</span> => <span>${element}</span></p>`
                 console.log(`${clave} => ${element}`)
            }
           
        }
    }
}

mostrarFuncionObjeto(curso)

},false)

