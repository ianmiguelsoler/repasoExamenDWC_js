"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //Primero le damos el atributo draggable a todos los que tengan la clase arrastable

    const arrastrables = document.getElementsByClassName("arrastrable");
    
    for (let contador = 0; contador < arrastrables.length; contador++) {
        arrastrables[contador].setAttribute("draggable",true); 
    };

    //Segundo Con DataTransfer podemos pasar el div de uno a otro
    var elementoArrastrado;

    document.getElementById("zona_arrastrar").addEventListener("dragstart", (evento) => {
        console.log(evento.target);
        elementoArrastrado = evento.target
        // evento.dataTransfer.setData("identificador", evento.target.id) // Guarda el id
        // evento.dataTransfer.setData("nombre", evento.target.localName) //Guarda el nombre 
        console.log("Elemento id", evento.target.id)
        console.log("Elemento localName", evento.target.localName)
        evento.dataTransfer.setData("id", elementoArrastrado.id) // Guarda el id
        evento.dataTransfer.setData("nombre", elementoArrastrado.localName) //Guarda el nombre 
    },false);

    //Tercer Paso ponemos otro evento para evitar que el funcionamento por defecto nos impida moverlo
    document.getElementById("zona_arrastrar").addEventListener(
        "dragover", (evento) =>{
            evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
        },
        false
    );

    //Cuarto añadimos el drop que nos deja añadir el nuevo objeto al sitio designado por nosotros

    document.getElementById("zona_arrastrar").addEventListener(
        "drop", (evento) =>{
            elementoArrastrado = evento.target
            evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
            if(elementoArrastrado.classList.contains("soltable")){
                elementoArrastrado.appendChild(
                    document.getElementById(evento.dataTransfer.getData("id"))
                )
            }
        },
        false
    );





}, false); //Terminado el documento