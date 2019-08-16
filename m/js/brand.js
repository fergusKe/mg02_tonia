$(function() {

	$(window).resize(function() {
		bgAlign(1100, 700);
	}).resize();

	// slider
	var moveY = 0;
	var total_height = $('.content .text img').height();
	$('.content .bottom').click(function() {
		moveY -= 190;
		$('.content .top').css({
	 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
		if (moveY <= -total_height+190) {
			$('.content .bottom').css({
		 		opacity: .6,
		 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
		 	});
		}
		if (moveY < -total_height) {
			moveY += 190;
			return;
		}
		$('.content .text img').animate({top: moveY});
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
		$('.content .text img').animate({top: moveY});
	});

});

