'use strict'

// SELECTOR ID

$('#rojo ').css('background','red').css('color','white');

$('#amarillo ').css('background','yellow').css('color','white');

$('#verde ').css('background','green').css('color','white');


//SELECTOR POR CLASE

var clase_borde = $('.borde').css('border','dashed').css('color','black');

$('.sin_borde').click(function(){
    console.log("Click dado!!");
    $(this).addClass('borde');
});


// Selectores de etiqueta
var parrafos = $('p').css("cursor", "pointer");

parrafos.click(function(){
    var that = $(this);

    if(!that.hasClass('nuevo')){
        that.addClass('nuevo');
    }else{
        that.removeClass('nuevo');
    }
});

// Selectores de atributo
$('[title="google"]').css('background', '#ccc');
$('[title="facebook"]').css('background', 'blue');



