$(document).ready(function($) {

    // centrar verticalmente las flechas dell carousel full width
    $(".car-control-prev, .car-control-next").css("top", function () {
        var value = ($(this).parent().height() + $(this).height() + 80) /2 ;
        return value - value * 2;
    });
    
    // registrar el cambio de tamaño de la pantalla
    $(window).resize(function () {


        if ($(window).width() > 200) {

        } else {

        }
    });

});