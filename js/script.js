
jQuery("document").ready(function($){
    
    var nav = $('header');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 25) {
            nav.addClass("f-header");
        } else {
            nav.removeClass("f-header");
        }
    });
 
});