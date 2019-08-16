// $(function(){
	function bgAlign(pWidth, pHeight) {
	    var options = {
			minWidth: pWidth,
			minHeight: pWidth
		}
		var bg = $('.bg'),
			bgImg = bg.find('img');
		var win_W = $(window).innerWidth(),
			win_H = $(window).innerHeight(),
			bgImg_W = bgImg.width() || 1350,
			bgImg_H = bgImg.height() || 700,
			scale = Math.max( win_W / bgImg_W, win_H / bgImg_H ),
			scale_W = Math.floor( bgImg_W * scale ),
			scale_H = Math.floor( bgImg_H * scale ),
			move_X = Math.floor( (win_W - scale_W) / 2 ),
			move_Y = Math.floor( (win_H - scale_H) / 2 );
		// console.log('bgImg_W = ', bgImg_W);
		// console.log('bgImg_H = ', bgImg_H);
		// console.log('scale_W = ', scale_W);
		// console.log('scale_H = ', scale_H);
		if (bgImg_H == 0) {
			// console.log('true');
			bgImg_H = win_H;
			scale = Math.max( win_W / bgImg_W, win_H / bgImg_H );
			scale_W = Math.floor( bgImg_W * scale );
			scale_H = Math.floor( bgImg_H * scale );
			move_X = Math.floor( (win_W - scale_W) / 2 );
			move_Y = Math.floor( (win_H - scale_H) / 2 );
		}

		// if ( scale_W < options.minWidth ) {
		// 	scale_W = options.minWidth;
		// 	move_X = 0;
		// }
		// if ( scale_H < options.minHeight ) {
		// 	scale_H = options.minHeight;
		// 	move_Y = 0;
		// }

		bgImg.css({
			width: scale_W,
			height: scale_H,
			left: move_X,
			top: move_Y
		});
	} 
// });