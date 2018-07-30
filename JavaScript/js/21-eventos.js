'use stric'

//eventos .- son metodos que se ejecutan al hacer una accion



//eveto load
window.addEventListener('load', () => {

    var boton = document.getElementById('boton');
    //evento click
    boton.addEventListener('click',function(){
        boton.style.background = "red";
        boton.innerHTML = "TEXTO";
    });

//evento mouse over(al pasar el cursor por el boton)

    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";
    });

//evento mouse out(al sacar el cursor del boton)
    boton.addEventListener('mouseout',function(){
        boton.style.background = "#ccc";
    });

    var input = document.getElementById("prueba")

    input.addEventListener("focus",function(){
        console.log("[focus] dentro del input")
    });

    input.addEventListener("blur",function(){
        console.log("[blur] fuera del input");
    });

    input.addEventListener("keydown",function(event){
        console.log("[keydown]pulsando tecla", String.fromCharCode(event.keyCode));
    });

    input.addEventListener("keypress",function(event){
        console.log("[keypress] tecla presionada",String.fromCharCode(event.keyCode));
    });

    input.addEventListener("keyup",function(event){
        console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
    });

});

