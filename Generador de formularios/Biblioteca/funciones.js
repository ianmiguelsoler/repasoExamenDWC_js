"use strict";

// Verificar si un ID ya existe en el DOM
const idExiste = (id) => document.getElementById(id) !== null;

/**
 * Crea un <label> asociado a un elemento
 * @param {string} id - El ID del elemento
 * @param {string} texto - Texto descriptivo del label
 */
const crearLabelPara = (id, texto) => {
  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = texto;
  document.getElementById("formularioDinamico").appendChild(label);
};

/**
 * Crea un <input> de tipo texto con su label
 */
const crearInputTexto = () => {
  const id = prompt("Introduce el id del input de texto:");
  if (idExiste(id)) {
    alert("El id ya está en uso. Introduce uno diferente.");
    return;
  }
  crearLabelPara(id, "Texto:");
  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.name = id;
  document.getElementById("formularioDinamico").appendChild(input);
  alert("Input de texto creado con éxito.");
};

/**
 * Crea un <input> de tipo contraseña con su label
 */
const crearInputPassword = () => {
  const id = prompt("Introduce el id del input de contraseña:");
  if (idExiste(id)) {
    alert("El id ya está en uso. Introduce uno diferente.");
    return;
  }
  crearLabelPara(id, "Contraseña:");
  const input = document.createElement("input");
  input.type = "password";
  input.id = id;
  input.name = id;
  document.getElementById("formularioDinamico").appendChild(input);
  alert("Input de contraseña creado con éxito.");
};

/**
 * Crea un <textarea> con su label
 */
const crearTextarea = () => {
  const id = prompt("Introduce el id del textarea:");
  if (idExiste(id)) {
    alert("El id ya está en uso. Introduce uno diferente.");
    return;
  }
  crearLabelPara(id, "Área de texto:");
  const textarea = document.createElement("textarea");
  textarea.id = id;
  textarea.name = id;
  textarea.cols = 40;
  textarea.rows = 5;
  document.getElementById("formularioDinamico").appendChild(textarea);
  alert("Textarea creado con éxito.");
};

/**
 * Crea un checkbox con su label
 */
const crearCheckbox = () => {
  const name = prompt("Introduce el nombre del checkbox:");
  const value = prompt("Introduce el valor del checkbox:");
  crearLabelPara(name, `Opción (${value}):`);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = name;
  checkbox.value = value;
  document.getElementById("formularioDinamico").appendChild(checkbox);
  alert("Checkbox creado con éxito.");
};

/**
 * Crea un radio button con su label
 */
const crearRadio = () => {
  const name = prompt("Introduce el nombre del radio:");
  const value = prompt("Introduce el valor del radio:");
  crearLabelPara(name, `Opción (${value}):`);
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  document.getElementById("formularioDinamico").appendChild(radio);
  alert("Radio creado con éxito.");
};

/**
 * Crea un botón con su label
 */
const crearBoton = () => {
  const id = prompt("Introduce el id del botón:");
  if (idExiste(id)) {
    alert("El id ya está en uso. Introduce uno diferente.");
    return;
  }
  const value = prompt("Introduce el valor del botón:");
  crearLabelPara(id, "Botón:");
  const button = document.createElement("button");
  button.type = "submit";
  button.id = id;
  button.textContent = value;
  document.getElementById("formularioDinamico").appendChild(button);
  alert("Botón creado con éxito.");
};

/**
 * Crea una imagen con su label
 */
const crearImagen = () => {
  const id = prompt("Introduce el id de la imagen:");
  if (idExiste(id)) {
    alert("El id ya está en uso. Introduce uno diferente.");
    return;
  }
  const src = prompt("Introduce la ruta de la imagen:");
  crearLabelPara(id, "Imagen:");
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  document.getElementById("formularioDinamico").appendChild(img);
  alert("Imagen creada con éxito.");
};

// Exportar todas las funciones
export {
  crearInputTexto,
  crearInputPassword,
  crearTextarea,
  crearCheckbox,
  crearRadio,
  crearBoton,
  crearImagen,
};
