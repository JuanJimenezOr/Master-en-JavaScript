'use strict'


console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(screen.width);
console.log(screen.height);

function getUrl(){
	var url = window.location.href;
	console.log(url);
}

function redirectUrl(url){
	window.location.href = url;
}

function openUrl(url){
	window.open(url);
}

openUrl("https://www.google.com");