'use strict'

var nombre = prompt("Nombre");
var apellido = prompt("apellid0");

//var texto = "mi nombre es: "+nombre+"<br/>"+"mi apellido es: "+apellido;// forma mas comun
//document.write(texto);

//usando platillas
var texto = `
	<p>mi nombre es: ${nombre}</p>
	<p>mi apellido es : ${apellido}</p>
`;

document.write(texto);