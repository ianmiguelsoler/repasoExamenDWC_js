"use strict";

// Función para añadir un nuevo botón dinámico al contenedor.
function anadirBoton(contenedor) {
  // const nuevoBoton = document.createElement("button");
  // nuevoBoton.textContent = `Botón ${contenedor.children.length + 1}`;
  // nuevoBoton.className = "boton";
  // nuevoBoton.id = contenedor.children.length + 1
  // nuevoBoton.innerHTML = ``;
  // contenedor.appendChild(nuevoBoton);
  var div = document.getElementById("contenedor")
  div.insertAdjacentHTML("beforeend",`<button id='5' class='boton'>Botón ${div.children.length + 1}</button>`);

}

// Función principal ejecutada al cargar la página.
window.onload = () => {
  const contenedor = document.getElementById("contenedor");
  const botonNuevo = document.getElementById("nuevo");

  // Añade un nuevo botón al contenedor cuando se hace clic en "nuevo".
  botonNuevo.addEventListener("click", () => {
    anadirBoton(contenedor);
  });

  // Delegación de eventos para manejar clics en los botones dentro del contenedor.
  contenedor.addEventListener("click", (evento) => {
    if (evento.target.tagName === "BUTTON") {
      console.log(`Has hecho clic en: ${evento.target.textContent}`);
    }
  });

  contenedor.addEventListener("click", (evento) => {
    if (evento.target.tagName === "BUTTON"){
        var cont = document.getElementById(evento.target.id)
        if(cont){
            cont.remove()
        }
    }
  })
};
