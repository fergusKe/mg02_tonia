$(function() {

	$(window).resize(function() {
		bgAlign(1100, 700);
	}).resize();

	$('.scrollbar1').tinyscrollbar();

	// hover後其他li加上透明度
	 var j_list_li = $('.list-box .list li');
	 j_list_li.mouseover(function() {
	 	j_list_li.not( $(this) ).css({
	 		opacity: .6,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
	 	});
	 });
	 j_list_li.mouseout(function() {
	 	j_list_li.css({
	 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
	 });

	j_list_li.click(function() {
		$('.content.step0').fadeOut();
		$('.content.step1').css({top: 0, display: 'none'});
		$('.content.step1').fadeIn();
	});
	$('.close-btn').click(function() {
		$('.content').fadeIn();
		$('.content.step1').fadeOut();
	});

	// slider
	var slider_index = 0;
	var slider_li_width = $('.list li').outerWidth(true);
	var slider_li_length = $('.list li').length;
	var slider_show_length = 2;
	var slider_index_max = Math.floor(slider_li_length / slider_show_length);
	var moveX = slider_li_width * slider_show_length * slider_index;
	$('.content .right').click(function() {
		slider_index++;
		$('.content .left').css({
		 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
		if (slider_index >= slider_index_max) {
			$('.content .right').css({
		 		opacity: .6,
		 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
		 	});
		}
		if (slider_index > slider_index_max) {
			slider_index--;
			return;
		}
		moveX = slider_li_width * slider_show_length * slider_index;
		$('.list').animate({left: -moveX});
	});
	$('.content .left').click(function() {
		slider_index--;
		$('.content .right').css({
		 		opacity: 1,
	 		filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
	 	});
		if (slider_index <= 0) {
			$('.content .left').css({
		 		opacity: .6,
		 		filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
		 	});
		}
		if (slider_index < 0) {
			slider_index++;
			return;
		}
		moveX = slider_li_width * slider_show_length * slider_index;
		$('.list').animate({left: -moveX});
	});

});

