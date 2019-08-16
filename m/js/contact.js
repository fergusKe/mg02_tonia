$(function() {
	var win_H, header_H, nav_H, slider_H, footer_H;
	var minWidth = 1100;

	$(window).resize(function() {
		bgAlign(1100, 700);
		mapPosition();
	}).resize();

	function mapPosition() {
		win_W = $(window).width();
		main_W = $('.main').width();
		nav_W = $('.nav').outerWidth(true)
		slider_H = $('.slider').height();
		footer_H = $('.footer').outerHeight(true);
		if (win_W > minWidth) {
			$('.map-box').css({
				'width': win_W - main_W - nav_W,
			    'margin-left': main_W
			});
		} else {
			$('.map-box').css({
				'width': 640,
			    'margin-left': 515
			});
		}
	}

});

