"use strict";

//!-------------------------------Ejercicio 1-----------------------------------
//* Funciones
//Funcion que crea checkbox con un valor aleatorio.
const crearCheckBox = (cantidadNumerosAleatorios,form) => {
  for (let contador = 0; contador < cantidadNumerosAleatorios; contador++) {
    const numeroAleatorio = numerosAleatorios();
    form.insertAdjacentHTML("afterbegin", `<label>${numeroAleatorio}</label>`)
    form.insertAdjacentHTML("afterbegin", `<input type='checkbox' name='checkbox' value='${numeroAleatorio}'>`)
  }
};
//Función que comprueba los pares y le añade checked para que se marque.
const agregarCheckPares = (seleccionCheckBox) => {
  seleccionCheckBox.forEach((checkbox) => {
    // Verificamos si el valor es par (para marcar solo los pares).
    if (checkbox.value % 2 === 0) {
        checkbox.checked = true; // Marca el checkbox.
    }
});
};
//Función que desmarca todos los checks.
const desmarcarChecks = (seleccionCheckBox) =>{
  seleccionCheckBox.forEach((checkbox) => {
  checkbox.checked = false;
});
}

//Generador de números aleatorios.
const numerosAleatorios = () =>{
  return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
};




//!-------------------------------Ejercicio 2-----------------------------------


const crearParrafo = (textArea, divResultado, formato) => {
  
  divResultado.insertAdjacentHTML("afterbegin", `<p class='${formato}'>${textArea}</p>`);
};

//!-------------------------------Ejercicio 3-----------------------------------

// Función para obtener los datos del formulario y devolver un objeto con los datos ingresados.
const obtenerDatosFormulario = (formulario) => {
  return {
      nombre: formulario.nom.value.trim(),
      grupo: formulario.grupo.value.trim(),
      fecha: formulario.fecha.value,
      tipoMusica: document.getElementById("seleccionMusica").value,
      localizacion: formulario.texto.value.trim(),
      prestado: formulario.querySelector("input[type='checkbox']").checked
  };
};

// Función para validar que todos los campos esenciales del disco están completos.
const validarDisco = (disco) => {
  // Retorna true si todos los campos requeridos contienen datos.
  return disco.nombre && disco.grupo && disco.fecha && disco.tipoMusica && disco.localizacion;
};

// Función para guardar el disco en formato JSON dentro de localStorage.
const guardarDiscoEnJSON = (disco, divResultado) => {
  const discosGuardados = JSON.parse(localStorage.getItem("discos")) || []; // Obtiene discos guardados o inicializa un array vacío.
  discosGuardados.push(disco); // Añade el nuevo disco al array de discos guardados.
  localStorage.setItem("discos", JSON.stringify(discosGuardados)); // Guarda el array actualizado en localStorage.
  divResultado.innerText = "El disco ha sido guardado exitosamente en JSON."; // Mensaje de éxito en el contenedor de resultado.
};

// Función para mostrar los discos almacenados en localStorage.
const mostrarDiscos = (divResultado) => {
  const discosGuardados = JSON.parse(localStorage.getItem("discos")); // Obtiene los discos guardados en localStorage.

  // Si no hay discos guardados, muestra un mensaje en el contenedor y sale de la función.
  if (!discosGuardados || discosGuardados.length === 0) {
      divResultado.innerText = "No se ha encontrado ningún disco.";
      return;
  }

  // Crea una lista HTML con los detalles de cada disco guardado.
  let contenido = "<ul>";
  discosGuardados.forEach((disco, index) => {
      contenido += `<li>
          <strong>Disco ${index + 1}:</strong> ${disco.nombre} - ${disco.grupo} 
          (${disco.fecha}) - ${disco.tipoMusica}, Localización: ${disco.localizacion} 
          ${disco.prestado ? "(Prestado)" : ""}
      </li>`;
  });
  contenido += "</ul>";
  
  divResultado.innerHTML = contenido; // Inserta la lista generada en el contenedor de resultado.
};

//!-------------------------------Ejercicio 4-----------------------------------


const filtrarPoblacionPorProvincia = (provinciaSeleccionada, seleccionPueblo) => {
  // Determina el valor "name" correspondiente para cada provincia seleccionada.
  let nombreProvincia;
  if (provinciaSeleccionada === "alicante") {
    nombreProvincia = "alc";
  } else if (provinciaSeleccionada === "valencia") {
    nombreProvincia = "val";
  } else if (provinciaSeleccionada === "castellon") {
    nombreProvincia = "cast";
  }

  // Oculta todos los <optgroup> y <option> inicialmente.
  Array.from(seleccionPueblo.getElementsByTagName("optgroup")).forEach(optgroup => {
    optgroup.classList.add("ocultar");
  });

  Array.from(seleccionPueblo.options).forEach(option => {
    option.classList.add("ocultar");
  });

  // Muestra solo el <optgroup> y las <option> correspondientes a la provincia seleccionada.
  Array.from(seleccionPueblo.getElementsByTagName("optgroup")).forEach(optgroup => {
    if (optgroup.getAttribute("name") === nombreProvincia) {
      optgroup.classList.remove("ocultar"); // Muestra el optgroup que corresponde a la provincia seleccionada.
    }
  });

  Array.from(seleccionPueblo.options).forEach(option => {
    if (option.getAttribute("name") === nombreProvincia) {
      option.classList.remove("ocultar"); // Muestra las options que corresponden a la provincia seleccionada.
    }
  });
};


//!-------------------------------Ejercicio 5 Validación-----------------------------------

// Función principal que llama a las validaciones individuales
const validarFormularioDiscosMejorado = (formulario) => {
  const nombreDisco = formulario.nom;
  const grupoMusica = formulario.grupo;
  const anoPublicacion = formulario.fecha;
  const tipoMusica = document.getElementById("seleccionMusica");
  const localizacion = formulario.texto;

  // Llamada a las funciones de validación de cada campo y acumulación del resultado
  const esNombreValido = validarNombreDisco(nombreDisco);
  const esGrupoValido = validarGrupoMusica(grupoMusica);
  const esAnoValido = validarAnoPublicacion(anoPublicacion);
  const esTipoMusicaValido = validarTipoMusica(tipoMusica);
  const esLocalizacionValida = validarLocalizacion(localizacion);

  // Retorna true solo si todas las validaciones son exitosas
  return esNombreValido && esGrupoValido && esAnoValido && esTipoMusicaValido && esLocalizacionValida;
};

// Validación del nombre del disco
const validarNombreDisco = (campo) => {
  const mensajeError = campo.nextElementSibling;
  if (campo.value.trim().length < 5) {
      campo.classList.add("error-campo");
      campo.previousElementSibling.classList.add("error-label");
      mensajeError.textContent = "Debe tener al menos 5 caracteres.";
      return false;
  } else {
      campo.classList.remove("error-campo");
      campo.previousElementSibling.classList.remove("error-label");
      mensajeError.textContent = "";
      return true;
  }
};

// Validación del grupo de música o intérprete
const validarGrupoMusica = (campo) => {
  const mensajeError = campo.nextElementSibling;
  if (campo.value.trim().length < 5) {
      campo.classList.add("error-campo");
      campo.previousElementSibling.classList.add("error-label");
      mensajeError.textContent = "Debe tener al menos 5 caracteres.";
      return false;
  } else {
      campo.classList.remove("error-campo");
      campo.previousElementSibling.classList.remove("error-label");
      mensajeError.textContent = "";
      return true;
  }
};

// Validación del año de publicación
const validarAnoPublicacion = (campo) => {
  const mensajeError = campo.nextElementSibling;
  if (!/^\d{4}$/.test(campo.value)) {
      campo.classList.add("error-campo");
      campo.previousElementSibling.classList.add("error-label");
      mensajeError.textContent = "Debe ser un año de 4 dígitos.";
      return false;
  } else {
      campo.classList.remove("error-campo");
      campo.previousElementSibling.classList.remove("error-label");
      mensajeError.textContent = "";
      return true;
  }
};

// Validación del tipo de música
const validarTipoMusica = (campo) => {
  const mensajeError = campo.nextElementSibling;
  if (campo.value === "") {
      campo.classList.add("error-campo");
      campo.previousElementSibling.classList.add("error-label");
      mensajeError.textContent = "Debes seleccionar un tipo de música.";
      return false;
  } else {
      campo.classList.remove("error-campo");
      campo.previousElementSibling.classList.remove("error-label");
      mensajeError.textContent = "";
      return true;
  }
};

// Validación de la localización
const validarLocalizacion = (campo) => {
  const mensajeError = campo.nextElementSibling;
  if (!/^ES-\d{3}[A-Z]{2}$/.test(campo.value)) {
      campo.classList.add("error-campo");
      campo.previousElementSibling.classList.add("error-label");
      mensajeError.textContent = "Debe seguir el formato ES-001AA.";
      return false;
  } else {
      campo.classList.remove("error-campo");
      campo.previousElementSibling.classList.remove("error-label");
      mensajeError.textContent = "";
      return true;
  }
};


 
//!Exportamos las funciones necesarias para las solución.
export {
  crearCheckBox,
  agregarCheckPares,
  desmarcarChecks,
  crearParrafo,
  obtenerDatosFormulario,
  validarDisco,
  guardarDiscoEnJSON,
  mostrarDiscos,
  filtrarPoblacionPorProvincia,
  validarFormularioDiscosMejorado
};
