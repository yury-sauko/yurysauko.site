// Initialization WOW.js
new WOW().init();

// jQuery
$(document).ready(function(){

    // Menu hidden-visible
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.menu').fadeIn('slow');
        } else {
            $('.menu').fadeOut('slow');
        }
    });

// End of $(document).ready(function(){
});