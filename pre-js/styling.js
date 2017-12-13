$(document).ready(function($) {
    
    // centrar verticalmente las flechas dell carousel full width
    $(".car-control-prev, .car-control-next").css("top", function () {
        var value = ($(this).parent().height() + $(this).height() + 80) /2 ;
        return value - value * 2;
    });

    function mainContResize () {
        if ($(window).width() > 1000) {
            $(".main-cont").width(function () {
                return $(".wrapper").width() - $(".side-library").width() - 30;
            });
        } else {
            $(".main-cont").width(function () {
                return "auto";
            }); 
        }
    }mainContResize ();

    // resize precio del contenido extra en pagina de escena
    function extraPriceResize () {
        if ($(window).width() > 1000) {
           
        } else {
            $(".dlc-cont .dlc .price").width(function () {
                return $(this).parent().width() - (40.2 + 14);
            });
        }
    }extraPriceResize ();
    
    // registrar el cambio de tamaño de la pantalla
    $(window).resize(function () {
        mainContResize ();
        extraPriceResize ();
    });
    
});