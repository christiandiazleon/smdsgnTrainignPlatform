$(document).ready(function($) {
    // Carousel full-width
    
    //almacenar slider en una variable
    var slider = $('.carousel-full-width .carousel-images');
    //almacenar botones
    var siguiente = $('.carousel-full-width .car-control-next');
    var anterior = $('.carousel-full-width .car-control-prev');
    
    //mover ultima imagen al primer lugar
    $('.carousel-full-width .carousel-images div:last').insertBefore('.carousel-full-width .carousel-images div:first');
    //mostrar la primera imagen con un margen de -100%
    slider.css('margin-left', '-' + 100 + '%');
    
    function moverD() {
        slider.animate({
            marginLeft: '-' + 200 + '%'
        }, 700, function () {
            $('.carousel-full-width .carousel-images div:first').insertAfter('.carousel-full-width .carousel-images div:last');
            slider.css('margin-left', '-' + 100 + '%');
        });
    }
    
    function moverI() {
        slider.animate({
            marginLeft: 0
        }, 700, function () {
            $('.carousel-full-width .carousel-images div:last').insertBefore('.carousel-full-width .carousel-images div:first');
            slider.css('margin-left', '-' + 100 + '%');
        });
    }
    
    function autoplay() {
        interval = setInterval(function () {
            moverD();
        }, 5000);
    }
    siguiente.on('click', function () {
        moverD();
        clearInterval(interval);
        autoplay();
    });
    
    anterior.on('click', function () {
        moverI();
        clearInterval(interval);
        autoplay();
    });
    
    autoplay();
    
});