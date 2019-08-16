$(function() {

	setCommonButton();
	setHeader();
	setHamburger();
	slider();
	mobile_option();

	$('.content.step0 li').click(function() {
		$('.content.step0').fadeOut(700);
		$('.content.step1').fadeIn(700, function() {
			$('html, body').animate({
				'scrollTop': 0
			}, 0);
		});
	});
	$('.content.step1 .news-back-btn').click(function() {
		$('.content.step1').fadeOut(700);
		$('.content.step0').delay(700).fadeIn(700);
		$('html, body').animate({
			'scrollTop': 0
		}, 0);
	});

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	// Fun.eleFadeIn($(".slider > ul"));
}
