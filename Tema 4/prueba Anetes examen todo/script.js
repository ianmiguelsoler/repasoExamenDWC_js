"use strict";

/*
Comprobar que los datos introducidos son correctos y sino, mostrar los errores y no esten vacíos.
Añadir clase a los inputs incorrectos
El año debe de tener 4 digitos
la localización tenga más de 5 caracteres
Guardar y mostrar
*/

window.onload = () => {

  const formulario =  document.getElementById("formDiscos");

  var botonEs = document.getElementsByClassName("botones")[0];
  var listadoDiscos = [];

  botonEs.addEventListener("click", (evento)=> {
   
    if(evento.target.id === "guardar"){
        if(comprobarFormulario(formulario)){
           console.log("esta correcto")
           listadoDiscos = [...listadoDiscos, guardarDisco(formulario)];
           formulario.reset()
        }
        else{
            // errores
        }
    }
    else if(evento.target.id === "mostrar"){
        console.log(listadoDiscos)
        mostrarDiscos(listadoDiscos)
    }
  },false)


  const mostrarDiscos = (arrayFormulario) => {
    let listadoDisco = document.getElementById("listadoDiscos");
    for (let i = 0; i < arrayFormulario.length; i++) {
    for (const clave in arrayFormulario[i]) {
        if (Object.prototype.hasOwnProperty.call(arrayFormulario[i], clave)) {
            listadoDisco.innerHTML += `<p>${clave} => ${arrayFormulario[i][clave]}</p>`;
        }
    }
}
  }


  const comprobarFormulario = (formulario) => {
    var erroresDiv = document.getElementById("errores");
    erroresDiv.innerHTML = ""
    let errores = []
    let variableDevolver = false;
    for (let i = 0; i < formulario.length; i++) {
    //    console.log(formulario.elements[i])
    let valor = formulario.elements[i].value
    let name = formulario.elements[i].name

       if(name === "nombre"){
            if(valor.trim() === ""){
                errores = [...errores, "Nombre no tiene valor"]
                formulario.elements[i].classList.add("errorInput")
            }else{
                formulario.elements[i].classList.remove("errorInput")
            }
       }
       else if(name === "grupo"){
        if(valor.trim() === ""){
            errores = [...errores, "El Grupo no tiene valor"]
            formulario.elements[i].classList.add("errorInput")
        }else{
            formulario.elements[i].classList.remove("errorInput")
        }
       }
       else if(name ==="anio"){
        if(valor.trim() === ""){
            errores = [...errores, "El año no tiene valor"]
            formulario.elements[i].classList.add("errorInput")
        }else{
            formulario.elements[i].classList.remove("errorInput")
        }
       }
    }
    if(errores.length === 0){
        variableDevolver = true;
        erroresDiv.classList.add("errores")
    }
    else{
        mostrarArray(errores)
    }
    return variableDevolver
  }


  const mostrarArray = (arrayErrores) => {
    var erroresDiv = document.getElementById("errores");
    erroresDiv.classList.remove("errores")
    for (let i = 0; i < arrayErrores.length; i++) {
        erroresDiv.innerHTML += `<p>${arrayErrores[i]}</p>`
    }
  }





  const guardarDisco = (formulario) => {
    var arrayFormulario = {};
    for (let i = 0; i < formulario.length; i++) {
        //    console.log(formulario.elements[i])
        let valor = formulario.elements[i].value
        let name = formulario.elements[i].name

        arrayFormulario = {...arrayFormulario, [name] : valor}
    }
    return arrayFormulario;
  }





//Primer paso
var arrastrar = document.getElementsByClassName("arrastrable")[0].setAttribute("draggable",true)


//segundo paso

document.getElementById("zona_arrastrar").addEventListener("dragstart", (evento) => {

    evento.dataTransfer.setData("identificador", evento.target.id)
})

document.getElementById("zona_arrastrar").addEventListener("dragover", (evento) =>{

    evento.preventDefault();
})


document.getElementById("zona_arrastrar").addEventListener("drop", (evento) =>{

    evento.preventDefault();
    if(evento.target.classList.contains("soltable")){
        evento.target.appendChild(
            document.getElementById(evento.dataTransfer.getData("identificador"))
        );
    }
})














}





