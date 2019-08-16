$(function() {

	setCommonButton();
	setHeader();
	setHamburger();
	slider();
	mobile_option();

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	Fun.eleFadeIn($(".slider > ul"));
}
