/*===============================
        P R E L O A D E R
===============================*/
$(document).ready(function () {
    setTimeout(function () {
        $('body').toggleClass('loaded');
        $('h2').css('color', '#222222');
    }, 1000);

    $('#client-list').owlCarousel({
        loop: true,
        items: 6,
        margin: 10,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
    });

    $('#testimonial-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 2,
        margin: 10,
        autoplay: true,
        smartSpeed: 600,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
    });
});

/*===============================
    P R O G R E S S  B A R       
===============================*/
$(function () {

    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*===============================
    RESPONSIVE TABS       
===============================*/

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*===============================
            PORTFOLIO       
===============================*/
$(function () {
    var selectedClass = "";
    $('.fil-cat').click(function () {
        selectedClass = $(this).attr("data-rel");
        $('#portfolio-wrapper').fadeTo(100, 1);
        $('#portfolio-wrapper div').not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);
    });
});


/*===============================
           ZOOM EFFECT       
===============================*/
$(function () {
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            },
            gallery: {
                enabled: true
            }
        }
    });
});


/*===============================
           Counter Up       
===============================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});


/*===============================
           M A P A       
===============================*/
/*
$(window).on('load', function () {
    var addresString = '98 Shakespeare, Ciudad de México, Ciudad de México 11300, México';
    var myLating = {
        lat: 19.436649,
        lng: -99.181315
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLating
    });
    var marker = new google.maps.Marker({
        position: myLating,
        map: map,
        title: 'Da click en el icono para ver la dirección'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: addresString
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
});
*/
/*===============================
           NAVIGATION       
===============================*/
$(function () {

    smoothScroll();
    smoothScrollTop();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 20) {
            $('nav').addClass('white-nav-top');
            $('.navbar-brand img').attr('src', 'images/logo/logo-dark.png');

            //Show the back to top button
            $('#back-to-top').fadeIn();
        } else {
            $('nav').removeClass('white-nav-top');
            $('.navbar-brand img').attr('src', 'images/logo/logo.png');
            $('#back-to-top').fadeOut();
        }
    }

    function smoothScroll() {
        $('#myNavbar a').on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    };

    function smoothScrollTop() {
        $('#back-to-top').on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    }
    
    function smoothScrollDown() {
        $('#arrow-down').on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    }
});

/*=========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});