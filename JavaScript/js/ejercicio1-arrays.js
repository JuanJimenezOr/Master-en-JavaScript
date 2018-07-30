'use strict'

/*
Pedir 6 numeros por pantalla y almacenarlos en un array
	1.-mostrar el array en el cuerpo de la pagina y en la consola
	2.-ordenarlo y mostrarlo
	3.-Invertir su orden y mostrarlo
	4.- Mostrar cuantos elementos tiene el array
	5.- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
	(se valorara el uso de funciones)
*/

var array = [];
var contador = 0;

do {
	var numero = Number(prompt("introduce numero"));
	array.push(numero);
	contador ++; 
}while(contador <6){

}
//mostrarlos
mostrar(array);
mostrarBody();

//ordenarlo y mostrarlo
array.sort();
console.log("****************************************");
mostrar(array);

//revertirlo y mostrarlo
array.reverse();
console.log("****************************************");
mostrar(array);

//mostrar elementos del array
var elementos = array.length;
console.log("****************************************");
console.log(elementos);

//busqueda del valor por el usuario
var valor = Number(prompt("introduce el valor a buscar"));

var busqueda = array.find(dato => dato == valor);
var indice = array.findIndex(dato => dato == valor);
console.log("****************************************");
console.log("valor: "+busqueda+" indice: "+indice);

//funciones
function mostrarBody(){
	array.forEach(elemento => {
		document.write(elemento + "<br/>");
	});
}

function mostrar(arreglo){
	for(let dato in arreglo){
		console.log(array[dato]);
	}
}


