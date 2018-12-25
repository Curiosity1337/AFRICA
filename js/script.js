$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.toggle-menu').slideToggle();
    });
    $('.slider').slick({
        dots: true,
        arrows: false
    });

    $('#price1').click(function () {
        $('.price1').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });

    $('#price2').click(function () {
        $('.price2').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });

    $('#price3').click(function () {
        $('.price3').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });

    $('#price4').click(function () {
        $('.price4').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });

    $('#price5').click(function () {
        $('.price5').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });

    $('.calling').click(function () {
        $('#calling').fadeIn();
        $('html').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('html').removeClass("noscroll")
    });
});