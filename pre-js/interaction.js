$(document).ready(function($) {

    $('.menu-btn').on('click', function () {
        $(this).next().slideToggle(240);
        $('.pull-right').delay(60).slideToggle(240);
    });

    $('.side-library h3').on('click', function () {
        $(this).siblings('.main-library').slideToggle(500);
        $(this).siblings('.search-icon').slideToggle(200);
        $(this).siblings('.filter').slideToggle(200);
    });

    $("a[href='#']").on('click', function (e) {
        e.preventDefault();
    });

});