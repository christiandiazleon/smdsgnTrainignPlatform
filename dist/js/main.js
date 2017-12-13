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
$(document).ready(function($) {
    // Carousel normal
    var carouselRowsNum;
    // Numero de columnas que debe tener el carousel en los diferentes tamaños de pantalla
    if ($(window).width() < 768 ) {
        carouselRowsNum = 1;
    } else if ($(window).width() < 992 ) {
        carouselRowsNum = 2;
    } else {
        carouselRowsNum = 3;
    }
    
    // ajustar el ancho de las escenas
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
$(document).ready(function($) {
    
    // toggle del menu
    $('.menu-btn').on('click', function () {
        $(this).next().slideToggle(240);
        $('.pull-right').delay(60).slideToggle(240);
    });
    
    // toggle de la libreria lateral
    $('.side-library h3').on('click', function () {
        $(this).siblings('.main-library').slideToggle(500);
        $(this).siblings('.search-icon').slideToggle(200);
        $(this).siblings('.filter').slideToggle(200);
    });
    
    // evitar que los elementos a que no tengan link refresquen la pagina
    $("a[href='#'], a[href='']").on('click', function (e) {
        e.preventDefault();
    });
    
    // Expandir los curriculos en la side-library
    $('.curriculum h5').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).children().toggleClass("rotated");
    });
    $('.curriculum h5 img').toggleClass("rotated");
    
    // Botón de leer mas en los comentarios de escena
    $(".comment .read-more").on("click", function () {
        $(this).parent().parent().siblings(".content").toggleClass("show-all-content");
    });

});
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