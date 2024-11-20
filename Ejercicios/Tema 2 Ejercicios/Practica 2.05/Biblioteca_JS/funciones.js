"use strict";

//!-------------------------------Ejercicio 1-----------------------------------
//* Funciones
//Función que se le pasa una cadena, cambia varios carácteres y los modifica.
function cadenaCani(cadenaCani) {
  var resultado = "";
  //Hacemos un array recorriendo todo el string carácter a carácter.
  for (let contador = 0; contador < cadenaCani.length; contador++) {
    let caracter = cadenaCani[contador];
    // Si el carácter está en mayúsculas, lo cambiamos a minúsculas.
    if (caracter === caracter.toUpperCase()) {
      if (caracter === "c" || caracter === "C") {
        resultado += "k";
      } else {
        resultado += caracter.toLowerCase();
      }
    }
    // Si está en minúsculas, lo cambiamos a mayúsculas.
    else {
      if (caracter === "c" || caracter === "C") {
        resultado += "k";
      } else {
        resultado += caracter.toUpperCase();
      }
    }
  }
  //Código que randomiza la cantidad de H que se agregaran al final de la frase.
  let cuantasH = Math.random() * 4 + 1;
  for (let contador = 0; contador < cuantasH; contador++) {
    resultado += "H";
  }
  return resultado; // Devolvemos el string modificado.
}

//!-------------------------------Ejercicio 2-----------------------------------

//* Funciones
// Función que muestra el tiempo en formato adecuado (mm:ss).
function mostrarTiempo(minutos, segundos) {
  //PadStart funciona de la siguiente manera, cuando la cadena no llega a la longitud deseada le añade lo que le pongamos, en este caso 0.
  let min = String(minutos).padStart(2, "0");
  let sec = String(segundos).padStart(2, "0");
  console.log(`${min}:${sec}`);
}

// Función del temporizador que recibe minutos y segundos como parámetros.
function temporizador(minutos, segundos) {
  // Validación de parámetros.
  if (
    typeof minutos !== "number" ||
    typeof segundos !== "number" ||
    minutos < 0 ||
    segundos < 0 ||
    segundos > 59
  ) {
    console.error(
      "Ya deberías de haber aprendido:\n 1-. Que los números que tienes que introducir son mayores a 0\n 2-. Y los segundos no deberían pasar de 59"
    );
    return;
  }
  // Si solo se recibe un parámetro, se considera que son segundos.
  if (minutos === undefined || minutos === null) {
    minutos = 0;
  }
  if (segundos === undefined || segundos === null) {
    segundos = minutos;
    minutos = 0;
  }
  // Inicializar el tiempo total en milisegundos.
  let tiempoTotal = minutos * 60 + segundos;

  // Definir la cuenta regresiva usando setInterval.
  let temporizadorId = setInterval(() => {
    let min = Math.floor(tiempoTotal / 60);
    let sec = tiempoTotal % 60;
    mostrarTiempo(min, sec);
    tiempoTotal--; // Restar 1 segundo.

    // Si el tiempo llega a 0, detener el temporizador.
    if (tiempoTotal < 0) {
      clearInterval(temporizadorId);
      console.log("¡Tiempo terminado!");
    }
  }, 1000);
}

//!-------------------------------Ejercicio 3-----------------------------------

function solicitarDni() {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let resultadoDniGuardados = [];

  // Función para calcular la letra de control de un DNI
  function calcularLetra(dni) {
    return letras[dni % 23];
  }

  // Función principal que solicita el DNI
  function pedirDni() {
    let dni = prompt("Escriba un DNI válido (8 números) o -1 para terminar:");

    // Si se ingresa -1, detener el proceso y mostrar los resultados
    if (dni === "-1") {
      clearInterval(intervalo);
      console.log("Todos los DNIs introducidos son:");
      resultadoDniGuardados.forEach((letra, index) => {
        console.log(`${index + 1}.- ${letra}`);
      });
    } else {
      // Validar si el DNI tiene 8 dígitos
      //?/^\d{8}$/.test(dni) --> Es una forma de validar un número específico de dígitos, en este caso 8. [.test(dni) comprueba si la cadena dni cumple con el patrón definido]
      if (dni.length === 8 && /^\d{8}$/.test(dni)) {
        let letra = calcularLetra(dni);
        resultadoDniGuardados.push(dni + letra);
        console.log(`DNI: ${dni} - Letra: ${letra}`);
      } else {
        console.error("¡Debe ser un DNI de 8 números!");
      }
    }
  }

  // Usar setInterval para pedir DNI cada 5 segundos
  let intervalo = setInterval(pedirDni, 5000);
}

//!-------------------------------Ejercicio 4-----------------------------------
// Función principal que envia la fecha actual cada 3 segundos.
function mostrarFecha() {
  const mostrarFecha = () => {
    const hoy = new Date();
    const dia = hoy.getDate(); // Día del mes (1-31).
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const mes = meses[hoy.getMonth()]; // Obtener el mes en texto.
    const anio = hoy.getFullYear(); // Año.
    console.log(`La fecha es: ${dia} de ${mes} de ${anio}.`);
  };

  // Mostrar la fecha una vez después de 3 segundos.
  setTimeout(() => {
    mostrarFecha();
  }, 3000);
}

//!-------------------------------Ejercicio 5-----------------------------------

function calculaNumeroDni() {
  //!Variables
  var totalSacados = 0
  var totalNoSacados = 0
  let dniLetra = prompt(
    "Escriba una letra del DNI válida (T-R-W-A-G-M-Y-F-P-D-X-B-N-J-Z-S-Q-V-H-L-C-K-E):"
  );
  if (dniLetra.length == 1) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resultadoDniGuardados = [];

    // Función para calcular la letra de control de un DNI.
    function calcularLetra(dni) {
      return letras[dni % 23];
    }
    //Primero compara que la letra introducida este dentro de las opciones y despues recorreo todos los dni posibles dentro de ese intervalo y calcula la letra.
    if (letras.includes(dniLetra)) {
      for (let contador = 48357001; contador < 48360000; contador++) {
        let dniCalculado = calcularLetra(contador);
        totalNoSacados++;
        if (dniCalculado.includes(dniLetra)) {
          let dniConLetra = contador + dniLetra;
          //Lo guardo con push en el array.
          resultadoDniGuardados.push(dniConLetra)
          totalSacados++;
        }
      }
      if (resultadoDniGuardados.length > 0) {
        console.log("DNI coincidentes con la letra introducida:");
        for (let i = 0; i < resultadoDniGuardados.length; i++) {
          console.log(`El DNI ${i + 1} es: ${resultadoDniGuardados[i]}`);
        }
        console.log(`%cHa habido un total de ${totalSacados} DNI sacados y un total de ${totalNoSacados-totalSacados} que no tenian la misma letra`,"color: blue; font-weight: bold;");
      } else {
        console.log("No se encontraron DNIs con esa letra.");
      }
    } else {
      console.log(
        "Tiene que ser una letra valida, cualquiera de estas te puede servir: \n(T-R-W-A-G-M-Y-F-P-D-X-B-N-J-Z-S-Q-V-H-L-C-K-E)"
      );
      calculaNumeroDni();
    }
  } else {
    console.log(
      "Tiene que ser una letra valida, cualquiera de estas te puede servir: \n(T-R-W-A-G-M-Y-F-P-D-X-B-N-J-Z-S-Q-V-H-L-C-K-E)"
    );
    calculaNumeroDni();
  }
}


//!-------------------------------Ejercicio 6-----------------------------------

function calculaNumerosPrimos() {
  //!Variables
  var guardaPrimo = []
  var numerosTotales = 0

  //Función que valida que sea número primo.
  function esPrimo(numero) {
    let esPrimo = true; // Asumimos que el número es primo inicialmente
    if (numero < 2) {
        esPrimo = false; // 0 y 1 no son primos
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false; // Encontramos un divisor, no es primo
                break; // Salimos del bucle
            }
        }
    }
    return esPrimo; // Retornamos el resultado
}
  //Un palindromo es una cadena que empieza y termina igual.
  function esPalindromo(num) {
    // Convertir el número a una cadena y verificar si es igual al revés.
    let str = num.toString();
    return str === str.split('').reverse().join('');
  }
  for (let contador = 1; contador <= 100000; contador++) {
    if (esPrimo(contador) && esPalindromo(contador)) {
      guardaPrimo.push(contador); // Agregar número primo y palíndromo al array.
      numerosTotales++;
    }
    
  }
  console.log("Números que son a la vez primos y palíndromos hasta 100,000:");
  console.log(guardaPrimo.join(', '));
  console.log(`El total de números que cumplen los criterios son: ${numerosTotales}`);
}


//!Exportamos las funciones necesarias para las solución.
export {
  cadenaCani,
  temporizador,
  solicitarDni,
  mostrarFecha,
  calculaNumeroDni,
  calculaNumerosPrimos
};
