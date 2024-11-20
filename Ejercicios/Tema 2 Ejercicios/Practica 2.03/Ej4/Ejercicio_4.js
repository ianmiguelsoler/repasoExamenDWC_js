"use strict";

//! Variables
var discente = {
    idDiscente: 1,
    nombreDiscente: "Pedro",
    apellidos: "Pica Piedras",
    aficiones: ["Picar", "Dormir"],
    notas: {
        primera: 7.8,
        segunda: 8,
        tercera: 9
    },
    getCalcularMedia: function () {
        console.log("La nota media es: ");
        return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
    },
    getAficiones: function () {
        console.log(`Las Aficiones Son Estas:\n`);
        this.aficiones.forEach(element => {
            console.log(element);
        });
    },
    getInforme: function () {
        console.log(`El informe que ha pedido es este: \n`);
        for (let clave in this) {
            if (typeof this[clave] !== 'function') {
                console.log(`${clave}: ${JSON.stringify(this[clave])}`);
            }
        }
    }
};

var nombreCurso = "2ºDAW"
var anoCurso = "2024"
var descCurso = "Es un curso donde se aprende programación Web"
var alumnado = []

//? Solución
var curso = creaCurso(nombreCurso, anoCurso, descCurso, alumnado, discente);
curso.matricular(discente);  // Matriculamos al discente
muestraCurso(curso);

//* Funciones
//Función que es capaz de crear un curso.
function creaCurso(nombreCurso, anoCurso, descCurso, alumnado) {
    return {
        nombreCurso: nombreCurso,
        anoCurso: anoCurso,
        descCurso: descCurso,
        alumnado: alumnado,
        // Método para matricular un discente al curso.
        matricular: function (discenteM) {
            this.alumnado.push(discenteM);
        }
    };
};
//Muestra el curso y también los que sean indefinidos, nulos o no tengan tamaño si son array. Mostrará un mensaje en él.
function muestraCurso(curso) {
    console.log(`El Curso Contiene esto:\n`);
    for (const clave in curso) {
        //Este if se asegura que todas que son directamente del objeto curso, no propiedades heredadas del prototipo.
        if (Object.hasOwnProperty.call(curso, clave)) {
            const element = curso[clave];
            // Solo mostramos propiedades que no sean funciones, he tenido que añadir esto para que no intente mostrar el método.
            if(typeof element !== 'function'){
            if (element !== null && element !== undefined && (Array.isArray(element) ? element.length !== 0 : true)) {
                console.log(`${clave} => ${JSON.stringify(element)}`);
            } 
            else {
                    console.log(`${clave} => NO TIENE NINGÚN DATO`);
            }
            }
            
        }
    }
};

