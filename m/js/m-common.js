function setCommonButton() {
	$('.nav .app, .nav .coupon').click(function() {
		alert('敬請期待');
	});
	$('.next').click(function() {
		next( $(this).parent() );
	});
	$('.prev').click(function() {
		prev( $(this).parent() );
	});
}

function setHamburger() {
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
}
var index, j_slider, j_slider_ul, j_slider_li, j_slider_li_widt, j_slider_li_length, tmp;
function slider(pOther) {
	pOther = pOther || $('.slider');
	// console.log('pOther = ', pOther);
	// index = 0;
	j_slider = pOther;
	j_slider_ul = j_slider.find('ul');
	j_slider_li = j_slider_ul.find('li');
	j_slider_li_width = j_slider.width();
	j_slider_li_length = j_slider_li.length;
	tmp = true;

	$(window).resize(function() {
		// j_slider_li = $('.slider ul li');  // 取得後來才加入的li
		j_slider_li_width = j_slider.width();
		j_slider_li.width( j_slider_li_width );
		j_slider_ul.width( j_slider_li_width * (j_slider_li_length + 2) );
	}).resize();

	// j_slider_ul.css({left: -j_slider_li_width});

	j_slider_ul.append(j_slider_li.eq(0).clone());
	// j_slider_ul.append(j_slider_li.eq(1).clone());

	// j_slider_ul.prepend(j_slider_li.eq(j_slider_li_length-1).clone());
	// j_slider_ul.prepend(j_slider_li.eq(j_slider_li_length-2).clone());

	
	// console.log('index = ', index);
	// console.log('j_slider_li_length = ', j_slider_li_length);
}

var index = 0,
	slider1_index = 0,
	slider2_index = 0;
function next(pSlider) {
	var slider = pSlider;
	var slider_ul = slider.find('ul');
	if ( slider.hasClass('slider2') ) {
		slider2_index++;
		if (slider2_index > j_slider_li_length) {
			slider2_index = 1;
			slider_ul.css({left: 0});
			tmp = true;
		}
		index = slider2_index;
		console.log('slider2_index = ', slider2_index);
	} else {
		slider1_index++;
		if (slider1_index > j_slider_li_length) {
			slider1_index = 1;
			slider_ul.css({left: 0});
			tmp = true;
		}
		index = slider1_index;
		console.log('slider1_index = ', slider1_index);
	}
	tmp = false;
	// index++;

	if (index > j_slider_li_length) {
		// index = 1;
		// slider1_index = 1;
		// slider2_index = 1;
		// slider_ul.css({left: 0});
		// tmp = true;
	}

	if (index >= j_slider_li_length) {
		slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
		});
	} else {
		slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
			tmp = true;
		});
	}
	console.log('index = ', index);
	
}
function prev(pSlider) {
	var slider = pSlider;
	var slider_ul = slider.find('ul');
	tmp = false;
	// if (index <= 0) {
	// 	index = j_slider_li_length;
	// 	slider_ul.css({left: -index * j_slider_li_width });
	// }
	// index--;
	
	
	if ( slider.hasClass('slider2') ) {
		if (slider2_index <= 0) {
			slider2_index = j_slider_li_length
			index = j_slider_li_length;
			slider_ul.css({left: -index * j_slider_li_width });
		}
		slider2_index--;
		index = slider2_index;
		console.log('slider2_index = ', slider2_index);
	} else {
		if (slider1_index <= 0) {
			slider1_index = j_slider_li_length
			index = j_slider_li_length;
			slider_ul.css({left: -index * j_slider_li_width });
		}
		slider1_index--;
		index = slider1_index;
		console.log('slider1_index = ', slider1_index);
	}
	slider_ul.stop().animate({left: -index * j_slider_li_width }, 500, 'easeOutQuart', function() {
		tmp = true;
	});
}

function mobile_option() {
	var win_W;
	$('.list-title').click(function() {
		$('.list-sub').slideUp();
		$('.list-title').find('span').css('transform','rotate(0deg)'); 
		if ( $(this).next().css('display') == 'none' ) {
			$(this).next().slideDown();
			$(this).find('span').css('transform','rotate(90deg)'); 
		}
	});
	$('.list-sub li').click(function() {
		win_W = $('.wrapper').width();
		$('.main-content').animate({left: -win_W});
		$('.footer').css({
		    height: 279,
		    'margin-top': -65
		});
	});
	$('.back-btn').click(function() {
		$('.main-content').animate({left: 0});
		$('.footer').css({
		    height: 180,
		    'margin-top': 0
		});
	});
}

function mobile_option2() {
	var win_W;
	$('.list-title').click(function() {
		$('.list-sub').slideUp();
		$('.list-title').find('span').css('transform','rotate(0deg)'); 
		if ( $(this).next().css('display') == 'none' ) {
			$(this).next().slideDown();
			$(this).find('span').css('transform','rotate(90deg)'); 
		}
	});
	$('.back-btn').click(function() {
		$('.main-content').animate({left: 0});
		$('.footer').css({
		    height: 180,
		    'margin-top': 0
		});
	});
}
function mobile_option3() {
	$('.list-title').click(function() {
		if ( $(this).next().css('display') == 'none' ) {
			$(this).next().slideDown();
			$(this).find('span').css('transform','rotate(90deg)'); 
		} else {
			$(this).next().slideUp();
			$(this).find('span').css('transform','rotate(0deg)'); 
		}
	});
}
function mobile_option_media() {
	var win_W;
	// $('.list-title').click(function() {
	// 	$('.list-sub').slideUp();
	// 	$('.list-title').find('span').css('transform','rotate(0deg)'); 
	// 	if ( $(this).next().css('display') == 'none' ) {
	// 		$(this).next().slideDown();
	// 		$(this).find('span').css('transform','rotate(90deg)'); 
	// 	}
	// });
	$('.list-title').click(function() {
		win_W = $('.wrapper').width();
		$('.main-content').animate({left: -win_W});
		$('.footer').css({
		    height: 279,
		    'margin-top': -65
		});
	});
	$('.back-btn').click(function() {
		$('.main-content').animate({left: 0});
		$('.footer').css({
		    height: 180,
		    'margin-top': 0
		});
	});
}

function setHeader() {
	$('.nav-btn').click(function() {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			var nav_W = $('.nav').width();
			$('.nav-mask').fadeOut(300, function() {
				$('.wrapper-content').animate({left: 0});
			});
		} else {
			$(this).addClass('active');
			var nav_W = $('.nav').width();
			$('.wrapper-content').animate({left: nav_W}, function() {
				$('.nav-mask').fadeIn(500);
			});
		}
	});
	$('.nav-mask').click(function() {
		$('.nav-btn .hamburger').click();
	});
	$('.search').click(function() {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$('.search-area').animate({top: 0});
		} else {
			$(this).addClass('active');
			$('.search-area').animate({top: 99});
		}
	});
}