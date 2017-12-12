$(document).ready(function($) {
    
    // centrar verticalmente las flechas dell carousel full width
    $(".car-control-prev, .car-control-next").css("top", function () {
        var value = ($(this).parent().height() + $(this).height() + 80) /2 ;
        return value - value * 2;
    });


    function shopResize () {
        if ($(window).width() > 1000) {
            $(".shop").width(function () {
                return $(".wrapper").width() - $(".side-library").width() - 30;
            });
        } else {
            $(".shop").width(function () {
                return "auto";
            }); 
        }
    }shopResize ();
    
    // registrar el cambio de tamaño de la pantalla
    $(window).resize(function () {
        shopResize ();
    });
    
});