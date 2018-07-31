'use strict'

//JSON .- JSON OBJECT NOTATION

var pelicula =  {
    titulo : "Nemo",
    year: "2008",
    genero: "infantil"
};

var peliculas = [
    {
        titulo: "Avengers",
        year: "2012",
        genero: "ciencia ficción"
    },
    pelicula
];

//mostrando el arreglo de peliculas
var mostrar = document.getElementById('peliculas');

peliculas.forEach((elemento) => {
    var p = document.createElement('p');
    p.append(elemento.titulo +" - " +  elemento.year);
    mostrar.append(p);
    console.log(elemento);

})