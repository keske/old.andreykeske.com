/*
	Andrey Keske
	2013
	
*/

(function() {

	$(document).ready(function() {
		
		$('.result').css('marginTop', ($(window).height() / 2) - ($('.result').height()  / 2))
		
		var meny = Meny.create({
			menuElement: document.querySelector('.leftSide'),
			contentsElement: document.querySelector('.content'),
			position: Meny.getQuery().p || 'left',
			height: 200,
			width: 200,
			threshold: 40
		});
		
		document.ontouchmove = function(e){
	    	e.preventDefault();
	    }

		window.addEventListener('shake', shakeEventDidOccur, false);

		function shakeEventDidOccur() {
			shakeTimes = shakeTimes + 1;
			if ( shakeTimes == 3) {
				shakeTimes = 0;
				show(rand(1, 9));
			}
			 document.title = shakeTimes;
		}
		
	});
	
	show = function(i) {
		var _i = 0;

		if ( i == 1 || i == 3 || i == 9 ) { _i = 1; }
		if ( i == 2 || i == 6 || i == 8 ) { _i = 2; }
		if ( i == 4 || i == 5 || i == 7 ) { _i = 3; }

		// $('.figure img').attr('src', 'img/' + _i + '.png')
	}

	rand = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
}).call(this);
