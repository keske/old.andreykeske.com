/*
	Andrey Keske
	2013
	
*/

(function() {

	$(document).ready(function() {
		
		toScreen('1')
		
		$('input').keypress(function(e) {
			
		        if (e.which == 13) {
			
					var command = $(this).val();
					command = command.replace(/(\w+)((\s+)?(\w+)?(\d+)?(\s+)?)+?/img, '$1');
		
					switch (command) {
						case 'clear':
							clear();
							
					   	case 'screen':
					   		var screenNum = $(this).val().replace(/(\w+)((\s+)?(\w+)?(\d+)?(\s+)?)+?/img, '$2');
							if ( screenNum != '' ) {
								toScreen(screenNum);
							} else {
								toScreenHelp();
							}
							break
				
						case 'brightness':
					   		var brightnessValue = $(this).val().replace(/(\w+)((\s+)?(\w+)?(\d+)?(\s+)?)+?/img, '$2');
							if ( brightnessValue != '' ) {
								changeBrightness(brightnessValue);
							} else {
								changeBrightnessHelp();
							}
							break
							
						default:
							show('<div class="unknowCommand">Unknow command</div>');
					}
					
		            $(this).val('');
		
		        }
		
		    });
	});
	
	show = function(command) {
		
		$('.terminal').append(command);
		
	};
	
	refresh = function() {
		$('.screen')
			.html('')
			.append(statusBar());
	};
	
	clear = function() {
		$('.terminal').html('');
	};
	
	statusBar = function() {
		bar = '<div class="statusBar">time</div>'
		return bar;
	}
	
}).call(this);
