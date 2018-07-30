'use strict'

//DOM.- DOCUMENT OBJECT MODEL


//conseguir elementos con un id o clase en concreto
var id = document.querySelector('#content'); //otra forma de buscar por id o clase
//var id = document.getElementById('content');
console.log(id);

id.innerHTML = "cambio de texto";
id.style.background = "red";
console.log(id);

//conseguir elemento por etiqueta

var elementos = document.getElementsByTagName('div');
var seccion = document.querySelector('#seccion');
for(var valor in elementos){
	if(typeof elementos[valor].textContent == 'string'){
	var parrafo = document.createElement('p');
	var texto = document.createTextNode(elementos[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);
	}
}
console.log(elementos);

//conseguir elementos por su clase css

var divRojos = document.getElementsByClassName('rojo');
for (var valor in divRojos){
	if(divRojos[valor].ClassName = "rojo"){
		divRojos[valor].style.background = "red";
	}
}
console.log(divRojos);