$(function() {
	var win_H, header_H, nav_H, slider_H, footer_H;

	setButton();
	// slider();

	$(window).resize(function() {
		bgAlign(1100, 700);
		sliderPosition();
	}).resize();

	var index = 0;
	var j_slider = $('.slider');
	var j_slider_ul = $('.slider ul');
	var j_slider_li = $('.slider ul li');
	var j_slider_li_width = $('.slider li').width();
	var j_slider_li_length = $('.slider li').length;
	var tmp = true;
	j_slider_ul.width( j_slider_li_width * (j_slider_li_length + 4) );

	j_slider_ul.append(j_slider_li.eq(0).clone());
	j_slider_ul.append(j_slider_li.eq(1).clone());

	j_slider_ul.prepend(j_slider_li.eq(j_slider_li_length-1).clone());
	j_slider_ul.prepend(j_slider_li.eq(j_slider_li_length-2).clone());


	function next() {
		// if (tmp == false) {
		// 	return;
		// }
		tmp = false;
		index++;

		if (index > j_slider_li_length) {
			index = 1;
			j_slider_ul.css({left: 0});
			tmp = true;
			console.log('>>>>>');
		}

		if (index >= j_slider_li_length) {
			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
				// index = 0;
				// j_slider_ul.css({left: 0});
				// tmp = true;
			});
		} else {
			j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
				tmp = true;
			});
		}
		console.log('j_slider_li_length = ', j_slider_li_length);
		console.log('index = ', index);
		
	}
	function prev() {
		// if (tmp == false) {
		// 	return;
		// }
		tmp = false;
		if (index <= 0) {
			index = j_slider_li_length;
			j_slider_ul.css({left: -index * j_slider_li_width });
		}
		index--;
		j_slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
			tmp = true;
		});
		
		// console.log('index = ', index);
	}


	$('.next').click(function() {
		next();
	});
	$('.prev').click(function() {
		prev();
	})

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	Fun.eleFadeIn($(".slider"));
}

function setButton() {
	
}

function sliderPosition() {
	win_H = $(window).innerHeight();
	header_H = $('.header').outerHeight(true);
	nav_H = $('.nav').outerHeight(true);
	slider_H = $('.slider').height();
	footer_H = $('.footer').outerHeight(true);
	if (win_H > 700) {
		$('.slider').css({
			'top': (win_H - header_H - nav_H - slider_H - footer_H) / 2
		});
	} else {
		$('.slider').css({
			'top': 40
		});
	}
}





