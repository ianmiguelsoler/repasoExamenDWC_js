"use strict";

//!Ejercicio 1.
//?Solución:
document.addEventListener("DOMContentLoaded", () => {
    const comenzar = document.getElementById("comenzar");
    const detener = document.getElementById("detener");
   const saludos = document.getElementById("saludos");
  
   var id= null;
    comenzar.addEventListener(
    "click", 
    (event) => {
      id = setInterval(() => {
        saludos.innerHTML += `<h1>¡Hola Feos!</h1>`
      },1000);
    },false);
  
    detener.addEventListener(
        "click",
        (event)=>{
            clearInterval(id);
        },
        false
    )
  });//Fin del content Loader
  

