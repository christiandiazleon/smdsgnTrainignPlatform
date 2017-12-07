$(document).ready(function($) {

    $('.menu-btn').on('click', function () {
        $(this).next().slideToggle(240);
        $('.pull-right').delay(60).slideToggle(240);
    });

});