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
var anoCurso = 2024
var descCurso = "Es un curso donde se aprende programación Web"
var alumnado = []

//? Solución
var curso = creaCurso(nombreCurso, anoCurso, descCurso, alumnado, discente);
curso.matricular(discente);  // Matriculamos al discente.
muestraCurso(curso);

//* Funciones
//Función que es capaz de crear un curso.
function creaCurso(nombreCurso, anoCurso, descCurso, alumnado) {
    return {
        nombreCurso: nombreCurso,
        anoCurso: anoCurso,
        descCurso: descCurso,
        alumnado: alumnado,
        objetoPrueba: {
            pruebaInt: 1,
            pruebaString: "Me llamo Pepito",
            pruebaString2: "Me llamo Jose",
            pruebaInt2: 3832,
            // objetoPruebaDentro: {
            //     hola: 1,
            //     estoy: "Me llamo Pepito",
            //     dentro: "Me llamo Jose",
            //     objeto: 3832,
    
            // },
        },
        // Método para matricular un discente al curso.
        matricular: function (discenteM) {
            this.alumnado.push(discenteM);
        },
        // objetoPrueba2: {
        //     pruebaInt: 1,
        //     pruebaString: "Me llamo Pepito",
        //     pruebaString2: "Me llamo Jose",
        //     pruebaInt2: 3832,

        // },pruebaInt2
    };
};
//Muestra el curso y también los que sean indefinidos, nulos o no tengan tamaño si son array. Mostrará un mensaje en él.
function muestraCurso(curso) {
    console.log(`%cEl Objeto contiene los siguientes datos:\n`, 'color: red; font-weight: bold;');//He cambiado el color para distinguirlo mejor.
    for (const clave in curso) {
        //Este if se asegura El tipo de dato es un objetoue todas que son directamente del objeto curso, no propiedades heredadas del prototipo.
        if (Object.hasOwnProperty.call(curso, clave)) {
            const element = curso[clave];
            if (element === undefined || element === null) { // Verifica si es undefined o null.
                console.log(`El valor es ${element === undefined ? 'undefined' : 'null'}: ${clave}`);
            } else if (typeof element === 'function') { // Verifica si es una función.
                console.log(`El elemento es una función: ${clave}`);
            } else if (typeof element === 'string') { // Verifica si es un string.
                console.log(`El tipo de dato es un string: ${clave} => ${JSON.stringify(element)}`);
            } else if (typeof element === 'number') { // Verifica si es un número.
                console.log(`El tipo de dato es un número: ${clave} => ${JSON.stringify(element)}`);
            } else if (Array.isArray(element)) { // Verifica si es un array
                console.log(`El tipo de dato es un array: ${clave} => ${JSON.stringify(element)}`);
            } else if (typeof element === 'object') { // Verifica si es un objeto.
                console.log('%cEl tipo de dato es un objeto:', 'color: blue; font-weight: bold;');
                    if (element !== null && element !== undefined && element.length !== 0) {
                    muestraCurso(element);
                    console.log('%cTerminado el muestreo del objeto.', 'color: blue; font-weight: bold;');
                }
            }
        }
    }
};
//Para saber si es un array esta antes de comprobar que sera un objeto porque con el typeof tambien sale como que es un objeto y para que descarte primero si es un array.