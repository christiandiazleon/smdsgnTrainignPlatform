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