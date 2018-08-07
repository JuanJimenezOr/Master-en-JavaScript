$(document).ready(function() {

   /*
    //mouseover y mouseout
    $('#caja') .mouseover( function() {
       $(this).css('background','green');
   });


    $('#caja') .mouseout( function() {
        $(this).css('background','blue');
    });

    */

    //hover
    function cambiaVerde() {
        $(this).css('background','green');
    }

    function cambiaAzul() {
        $(this).css('background','blue');
    }

    $('#caja').hover(cambiaVerde,cambiaAzul);

    //click y doble click
    
    $('#caja').click(function () {
        $(this).css('background','yellow');
    });

    $('#caja').dblclick(function () {
        $(this).css('background','black');
    });


    //focus y blur
    var nombre = $('#nombre');
    var datos = $("#datos");

    nombre.focus(function () {
        $(this).css('border','2px solid green');
    });

    nombre.blur(function () {
        $(this).css('border','1px solid #ccc');
        $('#datos').text($(this).val()).show();
    });

    // Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    // Mousemove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
            .css("top", event.clientY);
    });



});