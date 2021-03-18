$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('.page__btn').fadeIn();
        }
        else{
            $('.page__btn').fadeOut();
        }
    });

    $('.page__btn').click(function(){
        $('html, body').animate({scrollTop : 0}, 800)
    });
});