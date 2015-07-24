/* 

	Andrey Keske 2012
	
	Last update 24 march 2013
	
*/


var _effect = 'blur';
var _blur_radius = 7;

var _max_video = $('.video').length;

var _video_arr = []			
var _canvas_arr = [];
var _ctx_arr = [];
	
var _cWidth_arr = [];
var _cHeight_arr = [];

var _image_arr = [];

var num;
var _num;


_apply_blur = function(i) {
	
	integralBlurCanvasRGB('canvas-'+(i+1), 0, 0, _cWidth_arr[i], _cHeight_arr[i], _blur_radius, 1);

	if (window.navigator.userAgent.indexOf("Chrome") >= 0) {
        _blur_in_chrome();
    }

}


_blur_in_chrome = function() {
	
	$('canvas').css(
		{ webkitFilter: 'blur('+3+'px)' },
		{ filter: 'url(#blur-effect-1)' }
	);
		
}


videoLoad = function() {
	
	if ( $('._can').length > 1 ) {
		
		$('.video').css('width', $('.content').width());
		
		for (var i = 0; i < (_max_video + 2); i++) {

			var _di = i + 1;

			// Rewrite clone div
			$('header')
				.find('.for-canvas-'+_di)
					.html('<canvas class="canvas" id="canvas-'+
						+_di+'" width="'+$('.video').width()+'" height="'+$('.video').height()+'"></canvas>');

			// Add video to Array
			_video_arr.push($('#video-'+_di)[0]);

			_canvas_arr.push($('header').find('#canvas-'+_di)[0]);

			_ctx_arr.push(_canvas_arr[i].getContext('2d'));

			_cWidth_arr.push($('#video-'+_di).width());
		 	_cHeight_arr.push($('#video-'+_di).height());

			_canvas_arr[i].width = $('.video').width();
			_canvas_arr[i].height = $('.video').height();

			// Poster
			_image_arr.push(new Image());
			_image_arr[i].src = $(_video_arr[i]).attr('poster');

			// Draw poster (image, left, top, width, height)	
			_ctx_arr[i].drawImage(_image_arr[i], 0, 0, _cWidth_arr[i], _cHeight_arr[i]);

			_apply_blur(i);

			$('.helpCanvas').hide();
			$('header').find('canvas').hide();
			$('header').find('.helpCanvas').show();
			
			slider();
			
			var video = $('.video')[0];

			_video_arr[i].addEventListener('play', function() {
				_num = (this.id.replace('video-', '') * 1) - 1;
				
				$('.helpCanvas').hide();
				$('header').find('canvas').show();
				
				draw(this, _ctx_arr[_num], _cWidth_arr[_num], _cHeight_arr[_num]);
			}, false);
			
			function draw(video, canvas, width, height) {
				if ( video.paused || video.ended ) return false;

				canvas.drawImage(video, 0, 0, width, height);

				_apply_blur(_num);

				setTimeout(draw, 50, video, canvas, width, height);		
			}
			
		}
		
	}

}