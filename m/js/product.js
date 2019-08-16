$(function() {

	$(window).resize(function() {
		bgAlign(1100, 700);
	}).resize();

	$('.mask li').click(function() {
		$('.content').fadeOut();
		$('.content.step1').fadeIn();
	});
	$('.info-back').click(function() {
		$('.content').fadeIn();
		$('.content.step1').fadeOut(500, function() {
			slider_index = 0;
			$('.info-img').css({left: 0});
		});
	});

	// slider
	var slider_index = 0;
	var slider_li_width = $('.info-img li').outerWidth(true);
	var slider_li_length = $('.info-img li').length;
	var slider_show_length = 1;
	var slider_index_max = Math.floor(slider_li_length / slider_show_length);
	var moveX = slider_li_width * slider_show_length * slider_index;
	$('.content.step1 .right').click(function() {
		slider_index++;
		if (slider_index > slider_index_max - 1) {
			slider_index--;
			return;
		}
		moveX = slider_li_width * slider_show_length * slider_index;
		$('.info-img').animate({left: -moveX});
	});
	$('.content.step1 .left').click(function() {
		slider_index--;
		if (slider_index < 0) {
			slider_index++;
			return;
		}
		moveX = slider_li_width * slider_show_length * slider_index;
		$('.info-img').animate({left: -moveX});
	});

});

