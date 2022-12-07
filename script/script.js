$(window).scroll(function(){
    if ($(this).scrollTop()<500) {
        $(".product__li").fadeOut();
        $(".gold__img").slideUp();
        $(".orange__icon").slideUp();
    } else if ($(this).scrollTop()<1500) {
        $(".product__li").fadeIn(3000);
    } else if ($(this).scrollTop()<1600) {
        $(".gold__img").slideDown(3000);
        $(".orange__icon").slideDown(3000);
    }
});