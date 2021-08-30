jQuery(function($) {
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()) {
              $('.navbar').removeClass("navbar-transparent");
        }
        else {
	      $('.navbar').addClass("navbar-transparent");
	}
    });
});
