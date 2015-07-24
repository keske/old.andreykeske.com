// 0 for En and 1 for Ru
var language = 0;

var rand;

// Phrases
var phrases = [
	
	// En
	[	
		'Money'
	]
	
];


$(document).ready(function() {
	
  $('body').find('input[type="text"]').val('').focus()

  letter = 0;

	var length = phrases[language].length - 1;
	
	rand = getRandomArbitary(0, length);

  	$('body').find('input[type="text"]').bind('keydown', function(e) {
	
       	if (letter < phrases[language][rand].length)  {
	
         	$('body').find('input[type="text"]').val($('body').find('input[type="text"]').val()+phrases[language][rand].charAt(letter));

         	letter++;

       	}

      	return false;

  	});

  	$('body').find('input[type="text"]').bind('keypress', function(e) {
	
		return false;

  	});

});

getRandomArbitary = function(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1)) + min;

}

