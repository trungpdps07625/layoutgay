// Main
$(document).ready(function() {
    console.log('FullStack Vietnam!')


    $('.home-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    ///////////////////////
    $('.home-banner .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
                dots: true,
            },
            1000: {
                items: 1,
                dots: true,
            }
        }
    })

    $('.home-clients .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            250: {
                items: 2,
            },
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});