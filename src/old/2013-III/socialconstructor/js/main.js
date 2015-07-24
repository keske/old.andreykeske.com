/*
	
	On September 13, 2013, New Holland will serve as a platform for Radius, 
	an experimental laboratory that unites the world of contemporary art and 
	the world of information technology, introducing exact figures and formulas 
	into a space of sensory perception and artistic subjectivity. 
	Visitors to the island will be able to create Suprematist paintings through their 
	Twitter feeds; find themselves within the information funnel of an art project; 
	receive messages from communication theorist Marshall McLuhan through the flying machines, 
	quadrocopters; or end up in a physical space of infinite data streams and art still 
	in its formative stage. In this way, the Radius Experimental Laboratory attempts to bring 
	its audience in close contact with contemporary art, through the now familiar mass 
	medium of information technology. 
	
	Andrey Keske
	http://www.andreykeske.com/
	2013
	
	Thanks: Maxim Anoru
	
	Radius — Experimental Laboratory
	http://www.newhollandsp.ru/en/

*/

var coloursArray = [ 'red', 'black', 'white' ]
var trueColours = [ '#D71920', '#252C2D', '#FFFFFF' ]

var shapesArray = [ 'line', 'square', 'circle' ]

var currentCanvas = -1

var linePosition = 1

var totalTweets

$(document).ready(function() {	
	page()
	$('h1').bind('click', function() {
		// $('.tweets').html('')
twitterFetcher.fetch('378404361333768192', '', 9999, true, true, true, '', false, handleTweets, false);
		draw()
	})
})

$(window).load(function() {
	draw()
})

$(window).resize(function() {
	page()
})


var timer
function draw() {
	
twitterFetcher.fetch('378404361333768192', '', 9999, true, true, true, '', false, handleTweets, false);

	$('.canvases').html('')
	
	totalTweets = $('.tweets ul li').length
	removeLink = '<a href="https://twitter.com/search?q=%23rad_us&amp;src=hash">#rad_us</a>'
	// alert($('.user').html())
	// $('.user').find('span:eq(0)').remove() // remove name
	$('.tweet a').remove() // remove link
	$('.timePosted').remove() // remove post time

	zIndex = 999999

	b = 10;
	maxCanvas = Math.ceil(totalTweets / 10) - 1;
	
	$('.total-canvases').html((maxCanvas))
	$('.total-authors').html(totalTweets)
	
	currentCanvas = -1

	for ( var i = 1; i < totalTweets; i++ ) {
		
		b++;
		i_ = totalTweets - i - 1;
		if (b >= 11) {	      	
			b = 1    		              	        
			currentCanvas++
			currentCanvas_ = maxCanvas - currentCanvas       
			top_ = (currentCanvas_) * 900
			
			top_authors = (currentCanvas_+1) * 800 + (100 * currentCanvas_)       
			$('.canvases').append('<div class="canvas" style="margin-top: ' + top_ + 'px"></div><div class="border" style="margin-top: ' + top_ + 'px"></div><div class="autors" style="margin-top: ' + top_authors + 'px">authors: <div class="autors-list"></div></div>')	        	        	     
		}	      	      	      	      
		tweetText = $('.tweets ul li').eq(i_).find('.tweet').html() // get tweet text
		$('.autors-list:eq(' + currentCanvas + ')').html($('.user:eq(' + i_ + ')').html() + $('.autors-list:eq(' + currentCanvas + ')').html()) // add user
		$('.autors img').remove() // userpics remove	  
		// alert(tweetText)  
		showResults(tweetText)
	}
	$('.space').css('height', currentCanvas * 1000)
	
}

function page() {
	// $('.col').css('height', $(window).height())
}

function showResults(data) {

	zIndex = 9999
	
	var top = ''
	var left = ''
	var width = ''
	var height = ''
	var colour = ''
	var shape = ''

	linePosition = 1

	var _str = data

	for ( var pos = 0; pos < _str.length; pos++ ) {
		if ( _str.charAt(pos) != ' ' ) { 
			switch (linePosition) {
				case 1: 	top += _str.charAt(pos); 			break
				case 2: 	left += _str.charAt(pos); 		break
				case 3: 	width += _str.charAt(pos); 		break
				case 4:		height += _str.charAt(pos); 	break
			}
		} else if ( _str.charAt(pos) == ' ' ) { 
			linePosition += 1
		}
	}

	// what color to use
	for ( var i = 0; i < coloursArray.length; i++ ) {
		if ( _str.indexOf(coloursArray[i]) !== -1 ) {
			colour = trueColours[i]
		}
	}

	// what figure to use
	for ( var i = 0; i < shapesArray.length; i++ ) {
		if ( _str.indexOf(shapesArray[i]) !== -1 ) {
			shape = shapesArray[i]
		}

	}

	var borderRadius = 0

	if ( shape == 'square' ) {
		borderRadius = 0; // draw square
	}
	if ( shape == 'circle' ) {
		borderRadius = '50%' // draw circle
	}

	// Draw
	if ( (typeof(parseInt(top)) && typeof(parseInt(left)) && typeof(parseInt(width)) && typeof(parseInt(height))) == 'number') {			
		zIndex = zIndex - 1			
		$('.canvas:eq(' + currentCanvas + ')').html($('.canvas:eq(' + currentCanvas + ')').html() + '<div style="position: absolute; z-index: ' + zIndex + '; \
		top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; height: ' + height + 'px; \
		background: ' + colour + '; border-radius: ' + borderRadius + '"></div>')
	}
	
	clearTimeout(timer)
	timer = setTimeout(draw, 60000)

}