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
});