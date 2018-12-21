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
    });
    $('.close').click(function () {
        $('.layout').fadeOut();
    });
});