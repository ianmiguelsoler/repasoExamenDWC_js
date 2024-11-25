"use strict";

// Importar funciones desde funciones.js.
import {
  crearInputTexto,
  crearInputPassword,
  crearTextarea,
  crearCheckbox,
  crearRadio,
  crearBoton,
  crearImagen,
} from "./Biblioteca/funciones.js";

document.addEventListener("DOMContentLoaded", () => {

  const actionsContainer = document.querySelector(".actions");

  // Delegación de eventos en el contenedor de botones.
  actionsContainer.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return; // Ignorar clics fuera de botones.

    const buttonId = event.target.id; // Obtener el ID del botón clickeado.

    switch (buttonId) {
      case "btn-texto":
        crearInputTexto();
        break;
      case "btn-password":
        crearInputPassword();
        break;
      case "btn-textarea":
        crearTextarea();
        break;
      case "btn-checkbox":
        crearCheckbox();
        break;
      case "btn-radio":
        crearRadio();
        break;
      case "btn-boton":
        crearBoton();
        break;
      case "btn-imagen":
        crearImagen();
        break;
      default:
        console.warn("Acción no reconocida:", buttonId);
    }
  });
});
