$(document).ready(function () {


    reload();

    $('#add_button').click(function () {
        var new_enlace = $('#add_link').val();
        $('#menu').append('<li><a href = "'+new_enlace+'"></a></li>');

        $('#add_link').val('');
        reload();
    });

    function reload() {
        $('a').each(function (index) {
            var enlace = $(this).attr('href');
            $(this).text(enlace);
            $(this).attr('target','blank');
        })
    }
});