'use strict'

window.addEventListener('load',() => {

    var componente = document.querySelector('h1');

    var tiempo;

function temporizador () {
    tiempo = setInterval(() => {
        if (componente.style.fontSize == "50px") {
            componente.style.fontSize = "15px";
        } else {
            componente.style.fontSize = "50";
        }

    }, 1000);

   // return tiempo;

}

var start = document.getElementById('start');

var stop = document.getElementById('stop');

start.addEventListener('click',() => {
    temporizador();
});

stop.addEventListener('click', function(){
   clearInterval(tiempo);
});

});