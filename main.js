$(document).ready(function () {
    setTimeout(function () {
        $('body').toggleClass('loaded');
        $('h2').css('color', '#222222');
    }, 3000);
});