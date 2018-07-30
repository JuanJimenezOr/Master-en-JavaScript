'use strict'

var numero = 2; //variable global

function imprime (dato){
	var texto = 'variable local';
	console.log(dato); //imprime variables gloables
	console.log(texto);//imprime variable local
}

imprime(numero);