'use strict'

//arreglos

var array = ["daniel","oscar","jose"];

var array2 = new Array("php","JavaScript","java");

var elemento = Number(prompt("introduce el indice"));
if(elemento >= array.length){
	alert("numero mayor al arreglo")
}else{
	console.log(array[elemento]);
}

for(var i = 0; i<array.length; i++){
	document.write(array[i]+"<br/>");
}

//otra forma de recorrer el array

/*array.forEach((elemento,indice,array) =>{
	console.log(elemento);
});

//otra forma de recorrer un array
for(let indice in array2){
	console.log(array2[indice]);
}*/

//busqueda
var busqueda = array2.find(function(dato){
	return dato == "JavaScript";
});

console.log(busqueda)

//busqueda con funciones flechas
var busqueda = array2.find(dato => dato == "java");
console.log(busqueda);

//sacar el indice por medio de la busqueda
var busqueda = array2.findIndex(dato => dato == "java");
console.log(busqueda);