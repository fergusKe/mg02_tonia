$(function() {

	setCommonButton();
	setHeader();
	setHamburger();
	// mobile_option();
	slider();

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	Fun.eleFadeIn($(".slider > ul"));
}