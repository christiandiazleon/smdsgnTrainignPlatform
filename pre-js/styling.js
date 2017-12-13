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

    // ancho dinamico del contenido principal de la pantalla de escena para poner el aside
    function sceneMainResize () {
        if ($(window).width() > 1000) {
            $(".scene .main").width(function () {
                return $(".main-cont").width() - $(".scene .aside").width() - 20;
            });
            $(".scene .aside").css("margin-top", $(".scene .main .scene-title").height() + 30);
        } else {
            $(".scene .main").width("auto");
            $(".scene .aside").css("margin-top", 0);
        }
    }sceneMainResize ();

    // resize precio del contenido extra en pagina de escena
    function scenePriceResize () {
        if ($(window).width() < 1000) {

            $(".dlc-cont .dlc .price").width(function () {
                return $(this).parent().width() - (40.2 + 14);
            });

        } else {

            $(".dlc-cont .dlc .price").width("initial");

        }
    }scenePriceResize ();

    // reposicionar el aside antes de main
    function asidePosChange () {
        if ($(window).width() < 1000) {
            $(".main-cont .aside").insertAfter($(".main-cont .main .scene-title"));
         } else {
            $(".main-cont .aside").insertAfter($(".main-cont .main"));
         }
    }asidePosChange ();
    
    // registrar el cambio de tamaño de la pantalla
    $(window).resize(function () {
        mainContResize ();
        scenePriceResize ();
        asidePosChange ();
        sceneMainResize ();
    });

});