"use strict";

document.addEventListener("DOMContentLoaded", () => {

    var body = document.getElementsByTagName("body")[0];

    const contenidoBloqueado = (fraseParaCambiar) => {
        return `<span style="color: red; font-weight: bold; font-style: italic;">${fraseParaCambiar}</span>`;

    };

    for (let contador = 0; contador < body.innerText.length; contador++) {
        
        body.innerHTML = body.innerHTML.replace('sexo', contenidoBloqueado("Contenido Bloqueado"));
        
    }
    // body.innerHTML = body.innerHTML.replace(/sexo/g, contenidoBloqueado("Contenido Bloqueado"));  esto sin utilizar for

   
},false); //Termina el dom