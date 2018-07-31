'use strict'

window.addEventListener('load', () => {
    console.log("DOM cargado");



    var mostrarDatos = document.querySelector('#seccion');
    mostrarDatos.style.visibility = "hidden";

    var boton = document.getElementById('boton');


    formulario.addEventListener('submit', () =>{
        console.log(formulario);


        mostrarDatos.style.visibility = "visible";

            var nombre = document.getElementById('nombre').value;
            var apellidos = document.getElementById('apellidos').value;
            var edad = document.getElementById('edad').value;

            if(nombre.trim().length == 0 || !isNaN(nombre)){
                alert('Nombre no valido');
                return false;
            }else if (apellidos.trim().length == 0){
                alert('apellidos no validos');
                return false;
            } else if (edad <= 0 || isNaN(edad)){
                alert('edad no valida');
                return false;
            }

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