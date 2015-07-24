/*
	Andrey Keske
	2013
	
*/

var brightness = 1;

(function() {

	changeBrightness = function(n) {

		n = n.replace(/(\s)?/img, '');

		if ( n > 0 && n < 10) {
			n = n * 0.1;
			$('.terminal').css('opacity', n);
		}
		
	};
	
	changeBrightnessHelp = function(n) {
		
		$('.terminal').append('<br />brightness [n] <br /> n -- screen brightness from 1 to 10 <br /> Current brightness is ' + brightness);
		
	};	
	
}).call(this);
