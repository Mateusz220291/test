$(document).on('scroll', function () {
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    const $a1 = $('.a1');
    const a1FromTop = $a1.offset().top
    const a1Height = $a1.outerHeight()


    const $a2 = $('.a2');
    const a2FromTop = $a2.offset().top
    const a2Height = $a2.outerHeight()


    const $a3 = $('.a3');
    const a3FromTop = $a3.offset().top
    const a3Height = $a3.outerHeight()

    if (scrollValue > a1FromTop + a1Height - windowHeight) {
        $a1.addClass('on')
    }
    if (scrollValue > a2FromTop + a2Height - windowHeight) {
        $a2.addClass('on')
    }
    if (scrollValue > a3FromTop + a3Height - windowHeight) {
        $a3.addClass('on')
    }
    if (scrollValue < 100) {
        $("div").removeClass('on');
    }

})