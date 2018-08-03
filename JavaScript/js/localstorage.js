'use strict'

if(typeof (Storage) !== 'undefined'){
    console.log('localstorage libre');
}

//guardar en el localstorage
localStorage.setItem('pelicula' , 'capitan america');

//obtener valor del local storage con getItem

document.querySelector('#peliculas').innerHTML = localStorage.getItem('pelicula');

var directores = {
    nombre: "pedro",
    peliculas : "2"
}

localStorage.setItem('directores', JSON.stringify(directores));

var datos = JSON.parse(localStorage.getItem('directores'));

document.querySelector('#datos').innerHTML = datos.peliculas;

console.log(datos);

