$(function() {

	setCommonButton();
	setHeader();
	setHamburger();
	mobile_option();
	slider( $('.slider1') );
    slider( $('.slider2') );

	var scrollTop, hash;
    if (location.hash) {
        goToAnchor(location.hash.substr(1));
    }

    function goToAnchor(pThis) {
    	hash = $('.list-content > ul > li').eq(pThis);
    	hash.children('a').click();
        scrollTop = hash.offset().top
        console.log('hash = ', hash);
        console.log('scrollTop = ', scrollTop);
        $('html, body').animate({
            scrollTop: scrollTop | 0
        }, 1000, 'easeInOutCubic');
    }

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	Fun.eleFadeIn($(".slider > ul"));
}
