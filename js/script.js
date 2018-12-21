$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.toggle-menu').slideToggle();
    });
    $('.slider').slick({
        dots: true,
        arrows: false
    });
    $('.prices__button').click(function () {
        $('.layout').fadeIn();
        $('body').addClass("noscroll")
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
        $('body').removeClass("noscroll")
    });
});