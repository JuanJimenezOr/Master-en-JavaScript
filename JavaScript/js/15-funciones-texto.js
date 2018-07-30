'use strict'

//transformacion de texto
var n1 = 5555;
var texto1 = "ejemplo txt1 busqueda del txt1";
var texto2 =  "ejemplo Txt2";

var dato = n1.toString(); //convierte a texto
dato = texto1.toUpperCase(); //convertir a mayusucla
var dato2 = texto2.toLowerCase();//convierte a minusculas
var dato3 = texto1.length;//saca la longitud de un string o array
var dato4 = texto1.concat(" "+texto2); //concatenar texto
/*console.log(dato);
console.log(dato2);
console.log(dato3);
console.log(dato4);
*/
//Busqueda
//var busqueda = texto1.indexOf("busqueda"); //busca la palabra "busqueda " en un texto
//var busqueda = texto1.lastIndexOf("txt1"); //busca la ultima coincidencia de la palabra "txt1" en un texto
//var busqueda = texto1.search("txt1");//igual que indexof
//var busqueda = texto1.match("txt1");//nos devuelve una coleccion de los resultados que encuentra
//var busqueda = texto1.match(/txt1/gi);//se pone entre // y se le agrega gi para que busque la palabra en todo el texto
//var busqueda = texto1.substr(8,4);// saca apartir del caracter 8, las cuatro letras siguientes
//var busqueda = texto1.chartAt(7);//nos saca el caracter que se le pasa por el indice
//var busqueda = texto1.startsWith("ejem")//busca al inicio de la cadena y si concuerda arroja un true, si no un else;
//var busqueda = texto1.includes("txt1");//busca en el texto una palabra y si concuerda arroja un true, si no un else;


//var busqueda = texto1.replace("txt1","texto1"); //remplaza el texto por otro, en este caso se va actualizar a texto1
//var busqueda = texto1.slice(5);// corta hasta el indice que se le asigna en un texto
//var busqueda = texto1.slice(5,12);//corta un rango de caracteres ya definido 
//var busqueda = texto1.split();//convierte en arreglo, la cadena de texto
//var busqueda = texto1.split(" ");//con parametros convierte la cadena en arreglo pero separadas por indices gracias al parametro
var busqueda = texto1.trim();//quita los espacion iniciales y finales de la cadena


console.log(busqueda);