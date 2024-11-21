"use strict";

import {nombreAleatorios} from "../BibliotecaJS/script.js";

//! Ejercicio 1
//? Variables

document.addEventListener("DOMContentLoaded", () => {
    // const nombres = ["Pedro", "Yuyu", "Miguel", "ian", "Cuyita"];
    // var arrayNombresAlreves = []
    // // nombres.map((nombres) => console.log(nombres.toUpperCase()))
    // arrayNombresAlreves = [...nombres].sort().reverse()
    // // console.log(arrayNombresAlreves)

    // var objetoJSON = nombres.map((nombre, index) => ({
    //     id: index,
    //     nombre: nombre
    // }));

    // objetoJSON.map((objetoNombre) => 
    // console.log(`El id del objeto es ${objetoNombre.id} => ${objetoNombre.nombre}`))
    




    // Ejercicio 2 - Filtrando objetos
    // Genera tres arrays de diez números (del 1 al 10) generados de forma aleatoria (crea o
    // reutiliza una función para esta tarea). Con esos arrays, crea uno nuevo con los números
    // que sean mayor a 5 y múestralo por consola debidamente formateado.


    // const funcionDeArrayAleatorio = (numeroMaximoArray, numeroAleatorio) => {
    //     var arrayNumerosAleatorios = [];
    //     for (let contador = 0; contador < numeroMaximoArray; contador++) {
    //         arrayNumerosAleatorios[contador] = Math.floor((Math.random()* numeroAleatorio) +1);
    //     }
    //     return arrayNumerosAleatorios;
    // };

    // var arrayNumero1 = funcionDeArrayAleatorio(10,10);
    // console.log(arrayNumero1)
    // var arrayNumero2 = funcionDeArrayAleatorio(10,10);
    // console.log(arrayNumero2)
    // var arrayNumero3 = funcionDeArrayAleatorio(10,10);
    // console.log(arrayNumero3)

    // const unirTresArrays = (arrayNumero1, arrayNumero2, arrayNumero3) => {
    //     var unionArrayMayorA5= [];

    //     var arrays = [arrayNumero1,arrayNumero2,arrayNumero3];

    //     for (let contador1 = 0; contador1 < arrays.length; contador1++) {
    //         for (let contador = 0; contador < arrays[contador1].length; contador++) { 
    //            if(arrays[contador1][contador] > 5){
    //             unionArrayMayorA5 = [...unionArrayMayorA5, arrays[contador1][contador]]
    //             console.log("Estoy dentro")
    //            }
    //            else{
    //             console.log("Numero quitado", arrays[contador1][contador])
    //            }
    //         }
            
    //     }
    //     for (let contador = 0; contador < unionArrayMayorA5.length; contador++) {
    //         console.log(unionArrayMayorA5[contador])
    //     }
    // };
    // unirTresArrays(arrayNumero1, arrayNumero2, arrayNumero3)



    const usuarios = [
        {
          nombre: "Luis",
          preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
          contacto: {
            direccion: {
              calle: "Calle falsa, 666",
              localidad: "Elda",
              pais: "España",
            },
            correoelectronico: "correofalso@yahoo.com",
            telefono: "123456789",
          },
        },
        {
          nombre: "Marta",
          preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
          contacto: {
            direccion: {
              calle: "Calle también falsa, 123",
              localidad: "Andorra la Vella",
              pais: "Andorra",
            },
            correoelectronico: "correoandorrano@gmail.com",
            telefono: "",
          },
        },
        {
          nombre: "Alberto",
          preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
          contacto: {
            direccion: {
              calle: "Elm Street, 666",
              localidad: "Petrer",
              pais: "España",
            },
            correoelectronico: "correonulo@yahoo.com",
            telefono: "548632478",
          },
        },
        {
          nombre: "Jacinto",
          preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
          contacto: {
            direccion: {
              calle: "Elm Street, 667",
              localidad: "Elda",
              pais: "España",
            },
            correoelectronico: "correofalso@gmail.com",
            telefono: "",
          },
        },
        {
          nombre: "Rigoberta",
          preferencias: { tema: "claro", idioma: "francés", edad: 34 },
          contacto: {
            direccion: {
              calle: "Calle inexistente, 6",
              localidad: "Burdeos",
              pais: "España",
            },
            correoelectronico: "correofalso@gmail.com",
            telefono: "232547859",
          },
        },
        {
          nombre: "Sandra",
          preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
          contacto: {
            direccion: {
              calle: "Calle de mentira, s/n",
              localidad: "Petrer",
              pais: "España",
            },
            correoelectronico: "estecorreonoexiste@gmail.com",
            telefono: "452158697",
          },
        },
        {
          nombre: "Sandra",
          preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
          contacto: {
            direccion: {
              calle: "Calle existente, 34",
              localidad: "Petrer",
              pais: "España",
            },
            correoelectronico: "correoinexistente@yahoo.com",
            telefono: "",
          },
        },
      ];

      var usuarioNuevo = {
        nombre: "YUYU EL GORDITO",
        preferencias: { tema: "claro", idioma: "cuyo", edad: 5 },
        contacto: {
          direccion: {
            calle: "Calle cuyita, 34",
            localidad: "Murcia",
            pais: "España",
          },
          correoelectronico: "yuyuelgordito@gmail.com",
          telefono: "634533956",
        }
    }

    //!Función
    const añadirUsuario = (usuarioNuevo) => {
    return [...usuarios, usuarioNuevo]
    };
    
      //?Solución
      var usuariosNuevos = añadirUsuario(usuarioNuevo)
    //   console.log(usuariosNuevos)

    //!Función
      const arrayMayoresDeEdad = (usuariosMayores) => {
       return usuariosMayores.filter(usuario=> usuario.preferencias.edad >= 18)
      };

    //?Solución
      var arrayMayores = arrayMayoresDeEdad(usuarios)
    //   console.log(arrayMayores)

    //!Función
    const arrayYahooCorreo = (usuarioCorreo) =>{
        return usuarioCorreo.filter(usuario => usuario.contacto.correoelectronico.includes("yahoo"))
    }
    //?Solución
    var arrayYahoo = arrayYahooCorreo(usuarios)
    // console.log(arrayYahoo)
    

    //!Función
    const arrayEspanaMayoresEdad = (usuarioEspanaMayores) => {
        return usuarioEspanaMayores
        .filter(
            usuario =>
                usuario.preferencias.tema === "claro" &&
                usuario.contacto.direccion.pais === "España" &&
                usuario.preferencias.edad >= 18
        )
    };
    //?Solución
    var arrayEspaniaMayores = arrayEspanaMayoresEdad(usuarios)
    console.log(arrayEspaniaMayores)

     //!Función
     const arrayFaltaDatos = (usuarioDatosFaltantes) => {
        return usuarioDatosFaltantes
        .filter(
            usuario =>{
                const { nombre, preferencias, contacto } = usuario;

                // Verificar campos de nivel superior
                if (!nombre || !preferencias || !contacto) return true;
        
                // Verificar campos en `preferencias`
                const { tema, idioma, edad } = preferencias;
                if (!tema || !idioma || !edad) return true;
        
                // Verificar campos en `contacto`
                const { direccion, correoelectronico, telefono } = contacto;
                if (!direccion || !correoelectronico || !telefono) return true;
        
                // Verificar campos en `direccion`
                const { calle, localidad, pais } = direccion;
                if (!calle || !localidad || !pais) return true;
        
                // Si todo está completo, el usuario no falta ningún dato
                return false;
            }
        )
    };
    //?Solución
    var arrayDatosFaltantes = arrayFaltaDatos(usuarios)
    console.log(arrayDatosFaltantes)

    const añadirCodigoADireccion = (usuarios) => {
        return usuarios.map(usuario => {
            // Verificar si el usuario tiene una dirección
            if (usuario.contacto && usuario.contacto.direccion) {
                // Añadir el campo "codigo" con valor por defecto si no existe
                return {
                    ...usuario,
                    contacto: {
                        ...usuario.contacto,
                        direccion: {
                            ...usuario.contacto.direccion,
                            codigo: usuario.contacto.direccion.codigo || "00000",
                        },
                    },
                };
            }
            // Si no tiene dirección, devolver el usuario sin cambios
            return usuario;
        });
    };
    
    // Solución
    const usuariosConCodigo = añadirCodigoADireccion(usuarios);
    console.log(usuariosConCodigo);

    // var numeroDeDiv = document.getElementsByTagName("div");
    // var resultado = document.getElementById("resultado");
    
    // var parrafo = document.createElement("p");
    // parrafo.innerText = `El número de divs de la página son :${numeroDeDiv.length}`
    // resultado.insertAdjacentElement("afterbegin", parrafo)


    var divResultado = document.getElementById("resultado");
    var lista = document.getElementsByTagName("ul")[0];

    const numeroAleatorioF = () =>{
            return Math.floor((Math.random() * 1000) +1);
    };

    const agregarLista = (cadenaAMostrar) => {
        lista.innerHTML += `<li>${numeroAleatorioF()}</li>`
    }; 


    var idIntervalo = setInterval(() => {
        agregarLista('Soy una muestra fea')
    }, 2000);

    var idTimeOut = setTimeout(() => {
        clearInterval(idIntervalo)
        clearTimeout(idTimeOut)
        lista.innerHTML += `<li>Intervalo Terminado Gracias</li>`
    }, 7000);
},false)

  