"use strict";



document.addEventListener("DOMContentLoaded", () => {

    var acordeon = document.getElementById("acordeon");
    var elementoSeleccionado = document.getElementsByClassName("elementoDivDentro");


    acordeon.addEventListener("click",
        (evento) => {
            // console.log("El evento es", evento.target.textContent)
            if(evento.target.classList.contains("elementoDivDentro")){
                evento.target.nextElementSibling.classList.toggle("contenidoOculto")
            }
        }
    )

},false);


const esPrimo = (numero) => {
    if(numero<= 1) return false
    for (let contador = 2; contador <= Math.sqrt(numero);contador++) {
        if (numero % contador === 0) return false
        
    }
    return true
};