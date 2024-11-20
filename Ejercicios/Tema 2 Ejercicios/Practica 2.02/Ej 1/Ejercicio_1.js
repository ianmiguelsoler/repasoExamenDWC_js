"use strict";

//? Solución
// Ejemplo de uso:
sumar(10, 20); // La suma de los números es: 30
sumar(5, 'no es número'); // Error: El argumento en la posición 1 no es un número.
sumar(5); // Error: Debes proporcionar al menos dos números.

//* Funciones
function sumar() {
    // Verificar si hay al menos dos argumentos
    if (arguments.length < 2) {
      console.error("Error: Debes proporcionar al menos dos números.");
      return;
    }
    let suma = 0;
    // Recorrer todos los argumentos
    for (let i = 0; i < arguments.length; i++) {
      // Comprobar si el argumento es un número
      if (typeof arguments[i] !== 'number') {
        console.error(`Error: El argumento en la posición ${i} no es un número.`);
        return;
      }
      suma += arguments[i];
    }
    // Mostrar la suma debidamente formateada
    console.log(`La suma de los números es: ${suma}`);
  }
