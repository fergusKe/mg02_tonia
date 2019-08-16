$(function() {

	setCommonButton();
	setHeader();
	setHamburger();
	mobile_option2();
	listClick();

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
}

function listClick() {
	$('.list-content > ul > li').click(function() {
		if ( !$(this).hasClass('mylogo') ) {
			$(this).addClass('active').siblings().removeClass('active');
		}
		
	});
}