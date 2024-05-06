// hero-section //

$(".slider-1").owlCarousel({
    slideBy: 2,
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    nav: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        991: {
            items: 3,
        },
    },
});

//  top button  //

$(document).ready(function () {
    $('.top').hide(0)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(300);
        }
    });
    $('.top').click(function () {
        event.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        }, 500);
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// sticky menu bar //

function menuSticky() {
    if ($(".is-sticky-on").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('.is-sticky-on').addClass('is-sticky-menu');
            } else {
                $('.is-sticky-on').removeClass('is-sticky-menu');
            }
        });
    }
}
menuSticky()


// counter //
$(document).ready(function () {
    $('.counter-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


$('.tilt').tilt();


// hero-section //

$(".slider-2").owlCarousel({
    slideBy: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    nav: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        },
        991: {
            items: 1,
        },
    },
});


// sponsor-section //

$(".slider-3").owlCarousel({
    slideBy: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        },
    },
});