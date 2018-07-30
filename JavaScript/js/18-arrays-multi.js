'use strict'

var arreglo = ["perro","gato","pez"];
var array = ["casa","carro","puerta"];

var cosas = [arreglo,array];

console.log(cosas[0][1]);

//agregar elementos a un arreglo
arreglo.push("loro");
arreglo.push("foca");
console.log(arreglo);
//quitar el ultimo elemento del arreglo
arreglo.pop();
console.log(arreglo);

//quitar elementos apartir de un indice
arreglo.splice(2,1);
console.log(arreglo);

//convertir a string un arreglo
var string = arreglo.join();
console.log(string);

//convertir una cadena a arreglo
var cadena = "coca,sabritas,galletas";
var array_cadena = cadena.split(",");
console.log(array_cadena);

//ordenar un arreglo
array_cadena.sort();
console.log(array_cadena);

//dar la vuelta a un arreglo
array_cadena.reverse();
console.log(array_cadena);