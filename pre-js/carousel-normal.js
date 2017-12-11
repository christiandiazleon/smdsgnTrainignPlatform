$(document).ready(function($) {

    // Carousel normal
    // Numero de columnas que debe tener el carousel
    var carouselRowsNum = 3;
    var normalSceneWidth = 100 / carouselRowsNum;
    // Ajustar el ancho de las esceenas a la cantidad de estas 
    $(".carousel-normal .carousel-scenes").each(function () {
        $(this).children().width(function () {
           return normalSceneWidth + "%";
        });
    });

    // Ajustar el ancho de la flex a la cantidad de imagenes
    $(".carousel-normal .carousel-scenes").width(function() {
        var sceneAmount = $(this).children().length;
        return normalSceneWidth * sceneAmount + "%";
    });

    //mover ultima imagen al primer lugar
    $('.carousel-normal .carousel-scenes').each(function () {
        $(this).children(".scene:last").insertBefore($(this).children(".scene:first"));
    });
    //mostrar la primera imagen con un margen de -100%
    $('.carousel-normal .carousel-scenes').each(function () {
        $(this).css('margin-left', '-' + normalSceneWidth + '%');
    });
    
    
    // mover hacia adelante
    $('.carousel-normal .controls .next').on('click', function () {

        $(this).parent().siblings(".carousel-scenes").animate({
            marginLeft: '-' + normalSceneWidth*2 + '%'
        }, 700, function () {
            $(this).children(".scene:first").insertAfter($(this).children(".scene:last"));
            $(this).css('margin-left', '-' + normalSceneWidth + '%');
        });

    });

    // mover hacia atras
    $('.carousel-normal .controls .prev').on('click', function () {

        $(this).parent().siblings(".carousel-scenes").animate({
            marginLeft: 0
        }, 700, function () {
            $(this).children(".scene:last").insertBefore($(this).children(".scene:first"));
            $(this).css('margin-left', '-' + normalSceneWidth + '%');
        });

    });


    
});