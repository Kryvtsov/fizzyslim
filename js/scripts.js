$(function(){


    $('.form-sel').select2({
        minimumResultsForSearch: Infinity
    });


    /* Открытие меню */
    var main = function() {

        $('.icon-menu').click(function() {
            $('.menu').animate({
                right: '0px'
            }, 1000, function() {$('.blackout').css('display', 'block')});
            
        });
        /* Закрытие меню */
        $('.icon-close').click(function() {
            $('.menu').animate({
                right: '-470px'
            }, 1000, function() {$('.blackout').css('display', 'none')});
            
        });
        $('.blackout').click(function() {
            $('.menu').animate({
                right: '-470px'
            }, 1000, function() {$('.blackout').css('display', 'none')});
            
        });
    };

    $(document).ready(main);
});