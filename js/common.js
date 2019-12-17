$(document).ready(function () {
    // STICKY HEADER
    (function () {
        var a = document.querySelector('.header__fixsect'), b = null;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            if (a.getBoundingClientRect().top <= 0) {
                b.className = 'sticky';
            } else {
                b.className = '';
            }
            window.addEventListener('resize', function () {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        }
    })()

    var $status = $('.pagingInfo-slider');
    var $slickElement = $('.slider-for');

    // ALL SLIDERS
    // MAIN SLIDER
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' /' + slick.slideCount);
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav',
        // autoplay: true,
        autoplaySpeed: 4000
        // dots: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // propozition sliders
    $('.hottour').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.exktour').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // REVIEWS SLIDER
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // SERTIFICATION SLIDER
    $('.sectification__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // TOUR SLIDERS
    $('.tourmain-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        asNavFor: '.tourlitt-slider',
        // autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    $('.tourlitt-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.tourmain-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '0px',
        vertical: true,
    });
    $('.hottour-tour').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.ourteam__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // ALL SLIDERS END

    // BURGER MENU
    $('.burgermenu > img').click(function () {
        $('.header__nav').show(300);
    });

    $('.closemenu-btn').click(function () {
        $('.header__nav').hide(300);
    });

    if ($(window).width() < 992) {
        $('.submparr > a').click(function () {
            $(this).next().toggle();
        });
    }

    // scroll to

    $(".slider__scroll-to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    // 404
    if ($(window).width() > 991) {
        let windowHeight = $(window).innerHeight(),
            headerHeight = $('header').innerHeight(),
            footerHeight = $('footer').innerHeight(),
            errorPageHeight = windowHeight - (headerHeight + footerHeight);

        $('.error-sect').css('min-height', errorPageHeight);

    }


    // messenger
    $('.messenger-fixicon').hide();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.messenger-fixicon').fadeIn('slow');
        }
        else {
            $('.messenger-fixicon').fadeOut('slow');
        }
    });




















    // INPUT MASK========================================================================
    if ($('*').is('.form-section')) {
        $('.email-input').inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    casing: "lower"
                }
            }
        });

        $(".phone-input").inputmask({ "mask": "(999) 999-9999" });
    }


});

$(window).resize(function () {
    if ($(window).width() > 991) {
        let windowHeight = $(window).innerHeight(),
            headerHeight = $('header').innerHeight(),
            footerHeight = $('footer').innerHeight(),
            errorPageHeight = windowHeight - (headerHeight + footerHeight);

        $('.error-sect').css('min-height', errorPageHeight);

    }
});
