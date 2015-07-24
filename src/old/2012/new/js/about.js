/* 

	Andrey Keske 2012
	
*/


// Window width
var _w_width;	

// Windw height
var _w_height;	


var _scroll_blur;
var __scroll_blur = 20;


$(window).load(function() {
	
	$('body').css('visibility', 'visible')
	
	_make_about();
	
	_draw();
	
	_about_blur();

});

$(window).resize(function() {
	
	_make_about();
	
	_draw();
	
});

function _make_about() {
	
	_w_width = $(window).width();
	_w_height = $(window).height();
	
	$('.me_photo').css(
		{ width: _w_width },
		{ height: _w_height }
	);
	
	$('.me_photo img').css(
		{ width: _w_width },
		{ height: _w_height }
	);
		
	$('#me_photo-blur').css(
		{ width: _w_width + 50 },
		{ height: _w_height + 50 }
	);

	$('#me_photo-blur img').css(
		{ width: _w_width },
		{ height: 'auto' }
	);
	
	$('.me_info')
		.css('width', _w_width - 270)
		.css('top', (_w_height / 2) - ($('.me_info').height() / 2)); 

	$('body').css(
		{ height: _w_height * 2 }
	);
	
	$('.scrolldown')
		.css('left', _w_width - ($('.scrolldown').width() + 30))
		.css('top', _w_height - ($('.scrolldown').height() + 30));
	
}

function _draw() {

	var _about_canvas = $('#me_photo-blur')[0];
	
	var _about_canvas_context = _about_canvas.getContext('2d');
	
	_about_canvas.width = _w_width;
	_about_canvas.height = _w_height;

	var _about_canvas_image = new Image();
	
	_about_canvas_image.src = $('.me_photo')
									.find('img')
										.attr('src');
	
	_about_canvas_context.drawImage(_about_canvas_image, 0, 0, _w_width, $('.me_photo').find('img').height());
	
}


function _about_blur() {
	
	integralBlurCanvasRGB('me_photo-blur', 0, 0, _w_width, $('.me_photo').find('img').height(), __scroll_blur, 1);
	
	if (window.navigator.userAgent.indexOf("Chrome") >= 0) {
        _about_blur_in_chrome();
    }

}


function _about_blur_in_chrome() {
	
	$('#me_photo-blur').css(
		{ webkitFilter: 'blur('+__scroll_blur+'px)' },
		{ filter: 'url(#blur-effect-1)' }
	);
	
}


$(document).scroll(function() {
	
	$('.scrolldown').fadeOut(1000);
	
	 _scroll_blur = (($(window).scrollTop() / _w_height * 100).toFixed(0) / 10).toFixed(0) * 2;
	
	__scroll_blur = 20 - _scroll_blur;
	
	_scroll_opacity = (($(window).scrollTop() / _w_height * 100).toFixed(0) / 10).toFixed(0) * 0.1;
	
	$('.me_info').css(
		{ opacity: 1 - _scroll_opacity }
	);
	
	if ( __scroll_blur > 1 ) {
		_draw();
		_about_blur();
	} 
	else 
	if ( __scroll_blur == 0 ) { 
		_draw(); 
		
		if (window.navigator.userAgent.indexOf("Chrome") >= 0) {
	        _about_blur_in_chrome();
	    }
	}	
	
});
