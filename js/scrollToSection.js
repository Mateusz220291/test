$(".banner__btn").on('click', function(){
    $('body, html').animate({
        scrollTop: $(".start").offset().top
    }, 500)
})

$(".start__button").on('click', function(){
    $('body, html').animate({
        scrollTop: $(".contact").offset().top
    }, 500)
})