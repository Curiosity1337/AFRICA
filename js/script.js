$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.toggle-menu').slideToggle();
    });
    $('.slider').slick({
        dots: true,
        arrows: false
    });
});