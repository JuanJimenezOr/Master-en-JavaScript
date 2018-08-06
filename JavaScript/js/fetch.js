'use strict'

    var datos = document.getElementById('datos');
    var usuario = document.getElementById('usuario');
    var info =  document.getElementById('info')

    getUsuarios()
        .then(data => data.json())
        .then(users => {

        mostrarUsuarios(users.data);

        return getInfo();
        }).then(data => {
            info.innerHTML = data;

            return getUsuario();
        }).
        then(data => data.json())
        .then(user => {
        mostrarUsuario(user.data);
    }).catch (error => {
       console.log(error);
    });

    function getUsuarios(){
        return fetch("https://reqres.in/api/users");
    }

    function getUsuario() {
        return fetch("https://reqres.in/api/users/2")
    }

    function mostrarUsuarios(usuarios) {
        usuarios.forEach((elemento,indice) => {
            var p = document.createElement('p');
            p.innerHTML = elemento.first_name;
            datos.appendChild(p);
        });

    }

    function mostrarUsuario(valor) {
        var p = document.createElement('p');
        p.innerHTML = valor.first_name;
        usuario.appendChild(p);
        console.log(p);
    }
    
    function getInfo() {
        var datos_usuario = {
            nombre: "Daniel",
            apellidos: "Jimenez",
            curso: "Master en JavaScript"
        };

        return new Promise((resolve, reject) =>{

            var datos_string = ""

            setTimeout(function () {
                datos_string = JSON.stringify(datos_usuario);

                if( typeof datos_string != 'string' || datos_string == '') return reject('error');
                return resolve(datos_string);
            })

        });
    }