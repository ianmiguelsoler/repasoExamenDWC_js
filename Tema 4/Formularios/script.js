"use strict";
// previousElementSibling
// nextElementSibling

window.onload = () => {

    console.log(document.forms);

    let radioButton = document.getElementById("radioBoton");

    radioButton.addEventListener("change", 
        (evento) => {
        let radios = document.getElementsByName("pregunta");
        for (let contador = 0; contador < radios.length; contador++) {
            if(radios[contador].checked === true){
                console.log(`El valor que has seleccionado en el radio es ${radios[contador].value}`)
            }
        }
    },false)


      // CheckBox (múltiple selección).
  let checkBox = document.getElementById("cajaBoton");
  checkBox.addEventListener(
    "change",
    (evento) => {
      let check = document.getElementsByName("preguntaC");
      var marcados = "";
      for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
          marcados += `${check[i].value} `;
        }
      }
      console.log(`Valores del elemento marcados ${marcados}`);
    },
    false
  );

    var seleccion = document.getElementById("selectAprobar");

    seleccion.addEventListener(
        "change",
        (evento) => {
            console.log(evento.target.options.selectedIndex)
            var seleccionado = evento.target.options.selectedIndex
            console.log(`El valor de la opción seleccionada => ${evento.target.options[seleccionado].value} y el texto es ${evento.target.options[seleccionado].text}`)
        }
    )
    
} //Termianado la ventana