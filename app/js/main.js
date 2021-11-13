//menu mobile
$(document).ready(function() {
    $(".nav__mobile-icon_link").click(function() {
        $(this).toggleClass("active");
        $('.mobile__nav').slideToggle(300, function() {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });

    //slider-main
    $('.block-1__slider-bg').slick({
        arrows: false,
        infinite: true,
    });
    //block-2 
    var $target = $('.block-2__animal');
    var hold = 500;
    $.each($target, function(i, t) {
        var $this = $(t);
        setTimeout(function() { $this.show('normal'); }, i * hold);
    });
    //block-3
    $('.block-3__slider').slick({
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    $('.block-3__list-items').on('click', '.block-3__list-item', function() {
        var lindex = $(this).index();
        $(".block-3__slider").slick('slickGoTo', parseInt(lindex)); // меняем слад на нужный индекс
        $('.block-3__list-item').removeClass('block-3__active'); // change class
        $(this).addClass('block-3__active');
    });
    $('.block-3__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var slideIndex = $(this).index();
        $('.block-3__list-item').removeClass('block-3__active');
        $('.block-3__list-item').eq(currentSlide).addClass('block-3__active')
    });
    //block-3 mobile slider
    $('.block-3__mobile-slider_1').slick({
        asNavFor: '.block-3__mobile-slider_2, .block-3__mobile-slider_3',
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.block-3__mobile-slider_2').slick({
        asNavFor: '.block-3__mobile-slider_1, .block-3__mobile-slider_3',
        arrows: true,
        appendArrows: $('.block-3__slider-arrows'),
        prevArrow: '<div class="block-3__arrow-prev"></div>',
        nextArrow: '<div class="block-3__arrow-next"></div>',
        infinite: true,
        dots: true,
        dotsClass: 'block-3__appendDots',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.block-3__mobile-slider_3').slick({
        asNavFor: '.block-3__mobile-slider_2, .block-3__mobile-slider_1',
        arrows: false,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

//support 

    $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : true,
        // Close other sections.(data-close-other)
        closeOther  : true,
        // Animation Speed.(data-slide-speed)
        slideSpeed  : 150,
        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,
    });

    $('.accordion__title').on('click', function(e) {
        e.preventDefault();
        $('.accordion__title').removeClass('accordion__title-active');
        $('.accordionjs li').children().removeClass('accordion__title-active');
        // $('.accordion__title').removeClass('accordion__title-active');
        $(this).toggleClass('accordion__title-active');
    });

});