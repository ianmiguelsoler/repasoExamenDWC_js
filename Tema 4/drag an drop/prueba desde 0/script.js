"use strict";


document.addEventListener("DOMContentLoaded", () => {


    //Primero añado la propiedad draggable
    var arr = document.getElementsByClassName("soltable");
    for (let contador = 0; contador < arr.length; contador++) {
        arr[contador].setAttribute("draggable",true)  
    }


    //Segundo el dragstart guardamos la información
    document.getElementById("zona_arrastrable_guapa").addEventListener("dragstart", (evento) => {
        // console.log(evento.target)
        evento.dataTransfer.setData("id", evento.target.id)
        evento.dataTransfer.setData("nombre", evento.target.localName)
    },false);

    document.getElementById("zona_arrastrable_guapa").addEventListener("dragover", (evento) => {
        evento.preventDefault();
    },false);

    document.getElementById("zona_arrastrable_guapa").addEventListener("drop", (evento) =>{
        
        evento.preventDefault();
        if(evento.target.classList.contains("soltable")){
            evento.target.appendChild(
                document.getElementById(evento.dataTransfer.getData("id"))
            )
        }

    }, false);



},false);