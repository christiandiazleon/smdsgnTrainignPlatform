$(document).ready(function($) {
    // Carousel normal

    //mover ultima imagen al primer lugar
    $('.carousel-normal .carousel-scenes').each(function () {
        $(this).children(".scene:last").insertBefore($(this).children(".scene:first"));
    });
    //mostrar la primera imagen con un margen de -100%
    $('.carousel-normal .carousel-scenes').each(function () {
        $(this).css('margin-left', '-' + 25 + '%');
    })
    
    
    // mover hacia adelante
    $('.carousel-normal .controls .next').on('click', function () {

        $(this).parent().siblings(".carousel-scenes").animate({
            marginLeft: '-50%'
        }, 700, function () {
            $(this).children(".scene:first").insertAfter($(this).children(".scene:last"));
            $(this).css('margin-left', '-25%');
        });

    });

    // mover hacia atras
    $('.carousel-normal .controls .prev').on('click', function () {

        $(this).parent().siblings(".carousel-scenes").animate({
            marginLeft: 0
        }, 700, function () {
            $(this).children(".scene:last").insertBefore($(this).children(".scene:first"));
            $(this).css('margin-left', '-25%');
        });

    });


    
});