"use strict";

//!-------------------------------Ejercicio 1-----------------------------------
//* Funciones
//Función que se utiliza para realizar una lista y ocultar o desocultar.
const mostrarOcultarAcordeon = (elemento) => {
  // Selecciona el siguiente hermano (contenido) y cambia su visibilidad.
  const contenido = elemento.nextElementSibling;
  contenido.classList.toggle('contenido-visible');
};




//!-------------------------------Ejercicio 2-----------------------------------
//* Funciones
//Función que se utiliza para recorrer un boton y un div y quitarle una clase de css o añadirle al div un none.

const mostrarOcultarPestanyas = (botonSeleccionado, botonesP, contenidoDiv, index) => {
  // Eliminar la clase 'activa' de todos los botones.
  botonesP.forEach((btn) => btn.classList.remove("activa"));
  // Ocultar todos los contenidos.
  contenidoDiv.forEach((panel) => (panel.style.display = "none"));
  // Agregar la clase 'activa' a la pestaña seleccionada y mostrar el panel correspondiente.
  botonSeleccionado.classList.add("activa");
  contenidoDiv[index].style.display = "block";
}

//!Exportamos las funciones necesarias para las solución.
export {
  mostrarOcultarAcordeon,
  mostrarOcultarPestanyas
};
