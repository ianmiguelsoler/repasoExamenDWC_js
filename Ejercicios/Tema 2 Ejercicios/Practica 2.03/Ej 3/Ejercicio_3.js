"use strict";

//! Variables
var discente = {
    idDiscente: 1,
    nombreDiscente: "Pedro",
    apellidos: "Pica Piedras",
    aficiones: ["Picar", "Dormir"],
    notas:{
        primera: 7.8,
        segunda: 8,
        tercera: 9
    },
    //Calcula la media de forma interna con el this.
    getCalcularMedia: function() {
        console.log("La nota media es: ");
        return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
    },
    //obtiene las aficiones mostrandolas con un foreach.
    getAficiones: function() {
        console.log(`Las Aficiones Son Estas:\n`);
        this.aficiones.forEach(element => {
            console.log(element);
        });
    },
    //obtiene los informes mostrandolos con pantalla.
    getInforme: function() {
        console.log(`El informe que ha pedido es este: \n`);
        for (let clave in this) {
            //El operador typeof devuelve el tipo de datos del valor de esa propiedad.
            //Si this[clave] es una función, typeof devolverá "function".
            // Si this[clave] es una cadena, devolverá "string".
            // Si es un número, devolverá "number", etc.
            if (typeof this[clave] !== 'function') {
                console.log(`${clave}: ${JSON.stringify(this[clave])}`);
            }
        }
    }
}

//? Solución
comprobarTodo(discente)

//* Funciones
//Funcion que hace todas las llamadas para comprobar que funcionen.
function comprobarTodo(discente) {
    console.log("Comprobación código Discente: \n");

    // Imprimendo propiedades simples.
    for (let clave in discente) {
        if (typeof discente[clave] !== 'function') {
            console.log(`${clave}: ${JSON.stringify(discente[clave])}`);
        }
    }

    // Llamar a las funciones.
    console.log("Resultado de getCalcularMedia: ", discente.getCalcularMedia());
    discente.getAficiones();
    discente.getInforme();
}
