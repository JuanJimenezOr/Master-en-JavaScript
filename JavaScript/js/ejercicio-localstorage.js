'use strict'

var formulario = document.querySelector('#peliculas');


formulario.addEventListener('submit', () =>{

    var NomPelicula = document.getElementById('nombre').value;


    localStorage.setItem(NomPelicula,NomPelicula);


});

var mostrar = document.querySelector('#lista');

for(var i in localStorage){

    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        mostrar.append(li);
    }

}
var FormBorrar = document.getElementById('FormBorrar');

FormBorrar.addEventListener('submit', () => {
    var valor = document.getElementById('valor').value;

    localStorage.removeItem(valor);
});


