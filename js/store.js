$(function() {
	var win_H, header_H, nav_H, slider_H, footer_H;
	var minWidth = 1320;

	$(window).resize(function() {
		bgAlign(1320, 700);
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

	// slider
	var moveY = 0;
	var total_height = $('.text-content').height();
	$('.content .bottom').click(function() {
		moveY -= 190;
		$('.content .top').css({
	 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
		if (moveY <= -total_height+190) {
			console.log('over');
			$('.content .bottom').css({
		 		opacity: .6,
		 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
		 	});
		}
		if (moveY < -total_height) {
			moveY += 190;
			return;
		}
		$('.text-content').animate({top: moveY});
	});
	$('.content .top').click(function() {
		moveY += 190;
		$('.content .bottom').css({
		 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
		if (moveY >= 0) {
			$('.content .top').css({
		 		opacity: .6,
		 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
		 	});
		}
		if (moveY > 0) {
			moveY -= 190;
			return;
		}
		$('.text-content').animate({top: moveY});
	});

});

