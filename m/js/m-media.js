$(function() {

	setCommonButton();
	setHeader();
	setHamburger();

    $('.back-btn').click(function() {
        $('.step1').fadeOut(500, function() {
            $('.step0').delay(500).fadeIn(500);
        });
        // $('.content .item-area .item-title').text('');
        $('.content .item-play iframe').attr('src', '');
        // $('.content.report .item-area .item-title .year').text('');
        // $('.content.report .item-area .item-title .name').text('');
        // $('.content.report .item-play img').attr('src', '');

        setMainHeight( $('.content.step0') );
    });
    $('.list-content .movies').click(function() {
        $('.step0').fadeOut(500, function() {
            $('.step1.movies').fadeIn(500);
        });
        $('.step1.movies .item-bar li').eq(0).click();
        setMainHeight( $('.step1.movies') );
    });
    $('.list-content .tvc').click(function() {
        $('.step0').fadeOut(500, function() {
            $('.step1.tvc').fadeIn(500);
        });
        $('.step1.tvc .item-bar li').eq(0).click();
        setMainHeight( $('.step1.tvc') );
    });
    $('.list-content .report').click(function() {
        $('.step0').fadeOut(500, function() {
            $('.step1.report').fadeIn(500);
        });
        $('.step1.report .item-bar li').eq(0).click();
        setMainHeight( $('.step1.report') );
    });
    function setMainHeight(pArea) {
        var newHeight = pArea.outerHeight(true);
        var originHeight = $('.content.step0').outerHeight(true);
        var areaHeight = newHeight > originHeight ? newHeight : originHeight;
        $('.main').animate({
            height: areaHeight
        }, 700);
        if ( $('.content.step0').is(":hidden") == false ) {
            $('.footer').css({
                height: 279
            });
        } else {
            $('.footer').css({
                height: 180
            });
        }
        
    }

    var options = {};
    options.movies = [
        {
            'name': '春天篇',
            'link': 'https://www.youtube.com/embed/umJnXh2MX9Y?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'name': '夏天篇',
            'link': 'https://www.youtube.com/embed/1EpBJ4w1-A0?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'name': '秋天篇',
            'link': 'https://www.youtube.com/embed/leiYJ9n9hsc?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'name': '冬天篇',
            'link': 'https://www.youtube.com/embed/kuakZx-SGJw?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        }
    ];
    options.tvc = [
        {
            'year': '2014',
            'name': '超熱感羊毛被',
            'link': 'https://www.youtube.com/embed/umJnXh2MX9Y?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '天絲緹花',
            'link': 'https://www.youtube.com/embed/1EpBJ4w1-A0?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '歌舞篇',
            'link': 'https://www.youtube.com/embed/leiYJ9n9hsc?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '超熱感羊毛被',
            'link': 'https://www.youtube.com/embed/umJnXh2MX9Y?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '天絲緹花',
            'link': 'https://www.youtube.com/embed/1EpBJ4w1-A0?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '歌舞篇',
            'link': 'https://www.youtube.com/embed/leiYJ9n9hsc?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '超熱感羊毛被',
            'link': 'https://www.youtube.com/embed/umJnXh2MX9Y?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        },
        {
            'year': '2014',
            'name': '天絲緹花',
            'link': 'https://www.youtube.com/embed/1EpBJ4w1-A0?autoplay=1&autohide=2&wmode=opaque&rel=0&controls=2&showinfo=1&widget_referrer=http%3A%2F%2Fwww.tonianicole.com.tw%2Findex.html&enablejsapi=1&origin=http%3A%2F%2Fwww.tonianicole.com.tw'
        }
    ];
    options.report = [
        {
            'year': '2015.03',
            'name': '自由時報',
            'link': 'images/m-media/report/media-report-tabimg01.jpg'
        },
        {
            'year': '2015.02',
            'name': '蘋果日報',
            'link': 'images/m-media/tvc/media-tvc-tabimg02.jpg'
        },
        {
            'year': '2014.12',
            'name': '東森新聞',
            'link': 'images/m-media/tvc/media-tvc-tabimg03.jpg'
        },
        {
            'year': '2015.03',
            'name': '自由時報',
            'link': 'images/m-media/report/media-report-tabimg01.jpg'
        },
        {
            'year': '2015.02',
            'name': '蘋果日報',
            'link': 'images/m-media/tvc/media-tvc-tabimg02.jpg'
        },
        {
            'year': '2014.12',
            'name': '東森新聞',
            'link': 'images/m-media/tvc/media-tvc-tabimg03.jpg'
        },
        {
            'year': '2015.02',
            'name': '蘋果日報',
            'link': 'images/m-media/tvc/media-tvc-tabimg02.jpg'
        },
        {
            'year': '2014.12',
            'name': '東森新聞',
            'link': 'images/m-media/tvc/media-tvc-tabimg03.jpg'
        }
    ];

    // movies
    $('.content.movies .item-bar li').click(function() {
        var index = $(this).index();
        $('.content.movies .item-area .item-title').text(options.movies[index].name);
        $('.content.movies .item-play iframe').attr('src', options.movies[index].link);
        
    });
    

    // tvc
    var item_bar_index = 0;
    var bar_tvc_length = $('.content.tvc .item-bar li').length;
    var bar_show_length = 3;
    var item_bar_tvc_max = Math.floor(bar_tvc_length/3);
    $('.content.tvc .item-bar-btn.up').click(function() {
        item_bar_index--;
        $('.content.tvc .item-bar-btn.down').css({
                opacity: 1,
            filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
        });
        if (item_bar_index <= 0) {
            $('.content.tvc .item-bar-btn.up').css({
                opacity: .6,
                filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
            });
        }
        if (item_bar_index < 0) {
            item_bar_index++;
            return;
        }
        var moveY = $('.content.tvc .item-bar li').outerWidth(true) * bar_show_length * item_bar_index;
        $('.content.tvc .item-bar').animate({left: -moveY});
    });
    $('.content.tvc .item-bar-btn.down').click(function() {
        item_bar_index++;
        $('.content.tvc .item-bar-btn.up').css({
                opacity: 1,
            filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
        });
        if (item_bar_index >= item_bar_tvc_max) {
            $('.content.tvc .item-bar-btn.down').css({
                opacity: .6,
                filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
            });
        }
        if (item_bar_index > item_bar_tvc_max) {
            item_bar_index--;
            return;
        }
        var moveY = $('.content.tvc .item-bar li').outerWidth(true) * bar_show_length * item_bar_index;
        $('.content.tvc .item-bar').animate({left: -moveY});
    });
    $('.content.tvc .item-bar li').click(function() {
        var index = $(this).index();
        $('.content.tvc .item-area .item-title .year').text(options.tvc[index].year);
        $('.content.tvc .item-area .item-title .name').text(options.tvc[index].name);
        $('.content.tvc .item-play iframe').attr('src', options.tvc[index].link);
    });

    // report
    var bar_report_length = $('.content.report .item-bar li').length;
    var item_bar_report_max = Math.floor(bar_report_length/3);
    $('.content.report .item-bar-btn.up').click(function() {
        item_bar_index--;
        $('.content.report .item-bar-btn.down').css({
                opacity: 1,
            filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
        });
        if (item_bar_index <= 0) {
            $('.content.report .item-bar-btn.up').css({
                opacity: .6,
                filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
            });
        }
        if (item_bar_index < 0) {
            item_bar_index++;
            return;
        }
        var moveY = $('.content.report .item-bar li').outerWidth(true) * bar_show_length * item_bar_index;
        $('.content.report .item-bar').animate({left: -moveY});

        
    });
    $('.content.report .item-bar-btn.down').click(function() {
        item_bar_index++;
        $('.content.report .item-bar-btn.up').css({
                opacity: 1,
            filter: 'progid:DXImageTransform.Microsoft.Alpha(enabled=false)'
        });
        if (item_bar_index >= item_bar_tvc_max) {
            $('.content.report .item-bar-btn.down').css({
                opacity: .6,
                filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)'
            });
        }
        if (item_bar_index > item_bar_report_max) {
            item_bar_index--;
            return;
        }
        var moveY = $('.content.report .item-bar li').outerWidth(true) * bar_show_length * item_bar_index;
        $('.content.report .item-bar').animate({left: -moveY});
    });
    $('.content.report .item-bar li').click(function() {
        var index = $(this).index();
        $('.content.report .item-area .item-title .year').text(options.report[index].year);
        $('.content.report .item-area .item-title .name').text(options.report[index].name);
        $('.content.report .item-play img').attr('src', options.report[index].link);
    });

});

function pageLoadStart() {
	// body...
	Fun.eleFadeOut(_page_loading);
	Fun.eleFadeIn($(".slider > ul"));
}
