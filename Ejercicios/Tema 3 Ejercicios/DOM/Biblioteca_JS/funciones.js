"use strict";
import { quijoteFrases } from "./quijoteFrases.js";
import { imagenes } from "./imagenes.js";

//!-------------------------------Ejercicio 1-----------------------------------
//* Funciones
//Función que se utiliza para realizar un conteo de las etiquetas html del documento.

const contadorElementosDom = () => {
  var parrafos = document.getElementsByTagName("p");
  var infoDiv = document.getElementById("info"); // Selecciona el div con id info.

  // Función flecha para agregar texto al div.
  const agregarTextoAlDiv = (texto) => {
    const parrafo = document.createElement("p"); // Crea un nuevo párrafo.
    parrafo.textContent = texto; // Asigna el texto.
    infoDiv.appendChild(parrafo); // Agrega el párrafo al div.
  };

  agregarTextoAlDiv(
    `El número de párrafos encontrados son => ${parrafos.length}`
  );

  //Al tener la propiedad innerHTML podemos mostrar hasta las etiquetas del html de manera literal para ver su estructura.
  const segundoParrafoHTML = parrafos[1].innerHTML;
  agregarTextoAlDiv(
    `El segundo párrafo de la página se encuentra a continuación:\n ${segundoParrafoHTML}`
  );

  // Selecciona todos los elementos <a> del documento.
  const enlaces = document.querySelectorAll("a");

  // Muestra el número total de enlaces encontrados.
  agregarTextoAlDiv(`El número de enlaces encontrados es => ${enlaces.length}`);

  // Accede al primer enlace.
  const primerEnlace = enlaces[0];
  const primerEnlaceHref = primerEnlace.getAttribute("href");
  const primerChild = primerEnlace.firstElementChild;

  agregarTextoAlDiv(`El primer enlace es => ${primerEnlaceHref}`);
  if (primerChild) {
    agregarTextoAlDiv(
      `El primer child del primer enlace es => ${primerChild.tagName}`
    );
  }

  // Accede al penúltimo enlace.
  const penultimoEnlace = enlaces[enlaces.length - 2];
  const penultimoEnlaceHref = penultimoEnlace.getAttribute("href");
  agregarTextoAlDiv(`El penúltimo enlace es => ${penultimoEnlaceHref}`);
};

//!-------------------------------Ejercicio 2-----------------------------------

const temporizador = () => {
  let temporizadorId = setInterval(() => {
    agregaLista();
  }, 2000);
};
const agregaLista = () => {
  // Seleccionamos el primer <ul> en el documento al igual que lo hacemos con los arrays añadiendo [0] para la primera posición.
  var mainLista = document.getElementsByTagName("ul")[0];
  //Al menos comprobamos que exista un "ul".
  if (mainLista) {
    const lista = document.createElement("li");
    let numero = Math.floor(Math.random() * 1000) + 1; //Convertimos el número a entero.
    lista.innerText = numero;
    mainLista.appendChild(lista);
  } else {
    console.error("No se encontró ninguna lista <ul> en el documento.");
  }
};

//!-------------------------------Ejercicio 3-----------------------------------

const temporizadorCani = () => {
  let temporizadorIdCani = setInterval(() => {
    volverCani();
  }, 2000);
};

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

//Como es un array podemos utilizar un math random y cambiar el numero para que escoja una frase u otra.
const volverCani = () => {
  var mainCadena = document.getElementsByTagName("tbody")[0];
  if (mainCadena) {
    let numero = Math.floor(Math.random() * quijoteFrases.length);

    const listatr = document.createElement("tr");
    const listatdOriginal = document.createElement("td");
    listatdOriginal.innerText = quijoteFrases[numero];
    listatr.appendChild(listatdOriginal);

    // Crear la segunda celda (frase caniada).
    const listatdCani = document.createElement("td");
    listatdCani.innerText = cadenaCani(quijoteFrases[numero]);
    listatr.appendChild(listatdCani);

    // Añadir la fila completa al tbody.
    mainCadena.appendChild(listatr);
  } else {
    console.error("No se encontró ninguna etiqueta <tr> en el documento.");
  }
};

//!-------------------------------Ejercicio 4-----------------------------------
const insertAfter = (nuevoElemento, existenteElemento) => {
  // Obtenemos el padre del elemento existente.
  const padre = existenteElemento.parentNode;

  if (existenteElemento.nextSibling) {
    // Si tiene un siguiente hermano, insertamos el nuevo elemento antes de ese hermano.
    padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
  } else {
    // Si no tiene un siguiente hermano, lo insertamos al final del padre.
    padre.appendChild(nuevoElemento);
  }
};

//?----------------------------------------------------------------------------
//?-------------------------------Práctica 2-----------------------------------
//?----------------------------------------------------------------------------

//!-------------------------------Ejercicio 1-----------------------------------
// Palabra a buscar y palabra por la que se va a reemplazar.
const palabraBuscar = "sexo";
const palabraReemplazar = "Contenido Bloqueado";


const temporizadorEj1 = () => {
  let temporizadorIdCani = setTimeout(() => {
    censorDom();
  }, 2000);
};

const censorDom = () => {
  // Recorrer todos los nodos dentro de body.
  document.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Si el nodo es de tipo texto, verificar si contiene la palabra a buscar.
      const textoOriginal = node.nodeValue;
      if (textoOriginal.toLowerCase().includes(palabraBuscar.toLowerCase())) {
        // Crear un nuevo span para cada ocurrencia de la palabra reemplazada.
        const fragmento = document.createDocumentFragment();
        const partes = textoOriginal.split(new RegExp(`(${palabraBuscar})`, "gi")); //Se añade gi para buscar de manera global.

        partes.forEach((parte) => {
          if (parte.toLowerCase() === palabraBuscar.toLowerCase()) {
            // Si es la palabra que estamos buscando, la reemplazamos y le aplicamos el estilo.
            const nuevoElemento = document.createElement("span");
            nuevoElemento.textContent = palabraReemplazar;
            nuevoElemento.classList.add("prohibido"); // Aplicar clase CSS prohibido.
            fragmento.appendChild(nuevoElemento);
          } else {
            // Para las otras partes del texto, las añadimos sin modificar.
            fragmento.appendChild(document.createTextNode(parte));
          }
        });

        // Reemplazar el nodo de texto con el fragmento modificado.
        node.parentNode.replaceChild(fragmento, node);
      }
    } else {
      // Si no es un nodo de texto, llamar la función recursiva.
      censorDomRecursivo(node);
    }
  });
};

// Función recursiva para recorrer todos los nodos hijos
const censorDomRecursivo = (element) => {
  element.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textoOriginal = node.nodeValue;
      if (textoOriginal.toLowerCase().includes(palabraBuscar.toLowerCase())) {
        const fragmento = document.createDocumentFragment();
        const partes = textoOriginal.split(new RegExp(`(${palabraBuscar})`, "gi"));

        partes.forEach((parte) => {
          if (parte.toLowerCase() === palabraBuscar.toLowerCase()) {
            const nuevoElemento = document.createElement("span");
            nuevoElemento.textContent = palabraReemplazar;
            nuevoElemento.classList.add("prohibido");
            fragmento.appendChild(nuevoElemento);
          } else {
            fragmento.appendChild(document.createTextNode(parte));
          }
        });

        node.parentNode.replaceChild(fragmento, node);
      }
    } else {
      // Recursión en nodos no de texto
      censorDomRecursivo(node);
    }
  });
};

//!-------------------------------Ejercicio 2-----------------------------------

const primosDom = () =>{

  const creaTabla = (longitud) => {
    // Obtener la referencia del elemento body.
    var body = document.getElementsByTagName("body")[0];
    var contador = 1;
    // Crea un elemento <table> y un elemento <tbody>.
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas.
    for (var i = 0; i < longitud; i++) {
      // Crea las hileras de la tabla.
      var hilera = document.createElement("tr");

      for (var j = 0; j < longitud; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(contador);
        celda.appendChild(textoCelda);
        
        // Asigna un id único a cada celda para luego manipularla.
        celda.setAttribute("id", `celda-${contador}`);

        // Agrega la celda a la hilera
        hilera.appendChild(celda);
        contador++;
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody).
      tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>.
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  };

  const aplicarEstilosPrimos = () => {
    // Recorre todas las celdas y aplica el estilo a los primos.
    for (let i = 1; i <= 100; i++) {
      if (esPrimo(i)) {
        let celda = document.getElementById(`celda-${i}`);
        if (celda) {
          celda.classList.add("primo");
        }
      }
    }
  };

  function esPrimo(numero) {
    if (numero < 2) return false; // 0 y 1 no son primos.
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Encontramos un divisor, no es primo.
      }
    }
    return true;
  }

  creaTabla(10);

  // Aplica el estilo después de 2 segundos.
  setTimeout(aplicarEstilosPrimos, 2000);
};

//!-------------------------------Ejercicio 3-----------------------------------
const temporizadorocultarDom = () => {
  let temporizadorId = setInterval(() => {
    ocultarDom();
  }, 2000);
};

const generarColorAleatorio =() => {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

const numeroAleatorio = (longitud) =>{
return Math.floor(Math.random() * longitud);
}
const ocultarDom = () =>{
  //Como es un array vamos a calcular un numero aleatorio dependiendo su longitud.
  var parrafo = document.getElementsByTagName("p");
  if(parrafo.length != 0){
    parrafo[numeroAleatorio(parrafo.length)].style.backgroundColor = generarColorAleatorio();
  }
  else{
    console.log("El documento no tiene etiquetas p")
  }
}

//!-------------------------------Ejercicio 4-----------------------------------
//Función que crea las fotos.
const creaFoto = (numero) => {
  var body = document.getElementsByTagName("body")[0];
  var div = document.createElement("div");

  div.classList.add("carrusel-imagen");
  body.appendChild(div);

  var img = document.createElement("img");
  img.setAttribute("src", `${imagenes[numero]}`);
  div.appendChild(img);

  // Establecer la posición inicial fuera de la pantalla (a la derecha).
  div.style.position = "absolute";
  div.style.right = "100%"; // Comienza fuera de la pantalla.
  div.style.opacity = "0";   // Comienza invisible.

  // Centrando la imagen.
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)"; // Centrar tanto horizontal como verticalmente.

  // Iniciar animación de movimiento y opacidad mediante JavaScript.
  let tiempoInicial = null;
  const duracion = 1000; // Duración de la animación en milisegundos.

  const animacion = (tiempo) => {
    if (!tiempoInicial) tiempoInicial = tiempo;
    const tiempoTranscurrido = tiempo - tiempoInicial;

    // Calcular el progreso de la animación (entre 0 y 1).
    const progress = Math.min(tiempoTranscurrido / duracion, 1);

    // Cambiar la opacidad de 0 a 1.
    div.style.opacity = progress;

    if (progress < 1) {
      requestAnimationFrame(animacion); // Continuar la animación.
    }
  };

  // Iniciar la animación.
  requestAnimationFrame(animacion);
}

const carruselDOM = () => {
  var contador = 0;
  creaFoto(contador);
  let temporizadorId = setInterval(() => {
    contador++;
    // Si se ha alcanzado el final del array, reiniciar el contador.
    if (contador >= imagenes.length) {
      contador = 0;
    }
    // Crear una nueva imagen y aplicarle el efecto de transición.
    creaFoto(contador);

    // Eliminar las imágenes anteriores cuando ya no son visibles.
    let imagenesPrevias = document.querySelectorAll(".carrusel-imagen");
    if (imagenesPrevias.length > 1) {
      setTimeout(() => {
        imagenesPrevias[0].remove(); // Elimina la imagen anterior.
      }, 1000); // Tiempo de espera para la animación antes de eliminar.
    }
  }, 2000); // Cambiar de imagen cada 2 segundos.
}



//!Exportamos las funciones necesarias para las solución.
export {
  contadorElementosDom,
  temporizador,
  temporizadorCani,
  insertAfter,
  temporizadorEj1,
  primosDom,
  temporizadorocultarDom,
  carruselDOM
};
