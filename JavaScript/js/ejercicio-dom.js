'use strict'

window.addEventListener('load', () => {
    console.log("DOM cargado");



    var mostrarDatos = document.querySelector('#seccion');
    mostrarDatos.style.visibility = "hidden";

    var boton = document.getElementById('boton');


    formulario.addEventListener('submit', () =>{
        console.log(formulario);

        /*function mostrar(id){

            for (var valor in datos) {
                var parrafo = document.createElement('p');
                var texto = document.createTextNode(datos[valor]);
                parrafo.append(texto);
                id.append(parrafo);
            }
        }*/

        mostrarDatos.style.visibility = "visible";

            var nombre = document.getElementById('nombre').value;
            var apellidos = document.getElementById('apellidos').value;
            var edad = document.getElementById('edad').value;

            var datos = [nombre,apellidos,edad];
            console.log(datos);

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


    })


})