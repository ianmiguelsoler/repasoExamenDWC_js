"use strinct";

document.addEventListener("DOMContentLoaded", () => {

    var arrastrable = document.getElementsByClassName("arrastrable");
    const tablero = document.getElementById("zona_con_arrastrar");
    var elementoArrastrado;
    var idDataTransfer;

    for (let contador = 0; contador < arrastrable.length; contador++) {
        arrastrable[contador].setAttribute("draggable",true);
    }


    tablero.addEventListener("dragstart", (evento) => {
        elementoArrastrado = evento.target
        evento.dataTransfer.setData("identificador", elementoArrastrado.id); //ID
        evento.dataTransfer.setData("nombre", elementoArrastrado.localName); //Div
    },false);


    tablero.addEventListener("dragover", (evento) => {
        evento.preventDefault();
    },false);


    tablero.addEventListener("drop", (evento) => {
        evento.preventDefault();
        idDataTransfer = evento.dataTransfer.getData("identificador")
        elementoArrastrado = evento.target

        if(elementoArrastrado.classList.contains("soltable")){
            elementoArrastrado.appendChild(
                document.getElementById(idDataTransfer)
            )
        }
    },false);

},false);//Terminado el evento del documento.