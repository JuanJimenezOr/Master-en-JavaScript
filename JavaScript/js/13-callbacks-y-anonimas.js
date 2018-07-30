'use strict'

//funcion anonima.- Una funcion que no tiene nombre

function sumas(n1,n2,muestraSuma,sumaPorDos){

	var suma = n1 + n2;
	muestraSuma(suma);
	sumaPorDos(suma);
}

//funciones callback.- funcion anonima que se le pasa como parametro a otra funcion
sumas(2,6,function(dato){
	console.log(dato);
},function(dato){
	console.log(dato*2)
});

//ejemplo de funciones arrow(flecha)
sumas(2,6, dato => {
	console.log("con funciones arrow "+ dato);
}, dato => {
	console.log("confunciones arrow " + (dato*2));
});