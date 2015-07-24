/*
	Andrey Keske
	2013
	
*/

var currentScreen = 1;
var maxScreens;

(function() {
	
	toScreen = function(n) {

		n = n.toString().replace(/(\s)?/img, '');
		
		var screens = [
			[''],
			['Mail', 'Contacts', 'Settings', 'Skype', 'Pixel People', 'Calc', 'Vine', 'Rando', 'VK', 'Facebook', 'Twitter', 'Clock'],
			['Calendar']
		];
		
		maxScreens = screens.length - 1;
		
		refresh();
		
		if ( n == 'left' ) {
			if ( currentScreen == 0 ) {
				currentScreen = currentScreen - 1;	
				toScreen(currentScreen);
				
			} else {
				$('.terminal').append('First screen');	
			}
		} else 
		if ( n == 'right' ) {
			if ( currentScreen < (screens.length - 1)) {
				currentScreen = currentScreen + 1;
				toScreen(currentScreen);
			} else {
				$('.terminal').append('Last screen');
			}
		} else {
			if ( n < screens.length ) {
				currentScreen = n;	
			} else {
				$('.terminal').append('Big num');
			}
		}
		
		for ( var i = 0; i < screens[currentScreen].length; i++ ) {	
			$('.screen').append('<div class="num float">' + (i + 1) + '</div><div class="app float">' + screens[currentScreen][i] + '</div><div class="clear"></div>');
		}
		
		$('.screen').append(screenBar());
		
	};
	
	toScreenHelp = function(n) {
		help = '\
		<span class="help_command">screen</span> \
		<span class="help_options">[n]</span> <br /> \
		<span class="help_list">n -- screen number</span> <br /> \
		<span class="help_current">Current screen is ' + currentScreen + '</span>';
		$('.terminal').append(help);
		
	};
	
	screenBar = function() {

		screen = '<div class="screenBar">';
		
		for ( var i = 1; i < (maxScreens + 1); i++ ) {
			if ( i != currentScreen ) {
				screen = screen + '<div class="screenDot float">•</div>';
			} else {
				screen = screen + '<div class="screenDotActive float">•</div>';
			}
		}
		
		screen = screen + '<div class="clear"></div>';

		return screen;
	}
		
		
	
}).call(this);
