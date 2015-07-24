var coloursArray = [ 'red', 'blue', 'black', 'white', 'green', 'Turquoise', 'RoyalBlue' ]
var shapesArray = [ 'line', 'square', 'circle' ]

var linePosition = 1;

var currentCanvas = 0;

$(document).ready(function() {
    var search_url = 'http://search.twitter.com/search.json?q=obama';

    var fileref = document.createElement('script');

    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", "http://search.twitter.com/search.json?q=&tag=andreykeske_canvas&callback=showResults&rpp=9999999");
    // Setting its src to the search API URL; We provide TweetTick as a callback

    document.getElementsByTagName("head")[0].appendChild(fileref);

});

function showResults(data) {
    var container=$('#tweets');

    $(data.results).each(function(el){

        var top = '';
		var left = '';
		var width = '';
		var height = '';
		var colour = '';
		var shape = '';

		linePosition = 1;

		var str = this.text.replace('#andreykeske_canvas', '') + '<br />';
		var _str = this.text;


		for ( var pos = 0; pos < _str.length; pos++ ) {

			if ( _str.charAt(pos) != ' ' ) { 

				switch (linePosition) {

				 	case 1: 	top += _str.charAt(pos); 		break

				  	case 2: 	left += _str.charAt(pos); 		break

				  	case 3: 	width += _str.charAt(pos); 		break

					case 4:		height += _str.charAt(pos); 	break

				}

			} else if ( _str.charAt(pos) == ' ' ) { linePosition += 1; }

		}

		for ( var i = 0; i < coloursArray.length; i++ ) {

			if ( _str.indexOf(coloursArray[i]) !== -1 ) {

				colour = coloursArray[i];

			}
		}

		for ( var i = 0; i < shapesArray.length; i++ ) {

			if ( _str.indexOf(shapesArray[i]) !== -1 ) {

				shape = shapesArray[i];

			}

		}

		var borderRadius;

		if ( shape == 'square' ) {
			borderRadius = 0;
		}

		if ( shape == 'circle' ) {
			borderRadius = '50%'
		}

		if ( (typeof(parseInt(top)) && typeof(parseInt(left)) && typeof(parseInt(width)) && typeof(parseInt(height))) == 'number') {

			$('.canvas:eq(' + currentCanvas + ')').html($('.canvas').html() + '<div style="position: absolute; zIndex: 7; \
				top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; height: ' + height + 'px; \
				background: ' + colour + '; border-radius: ' + borderRadius + '"></div>');

			$('.authors').append('<a href="http://twitter.com/' + this.from_user + '">' + this.from_user + '</a>');

		}
		
        /* var str = ' <div class="tweet">\
        <div class="avatar"><a href="http://twitter.com/'+this.from_user+'" target="_blank"><img src="'+this.profile_image_url+'" alt="'+this.from_user+'" /></a></div>\
        <div class="user"><a href="http://twitter.com/'+this.from_user+'" target="_blank">'+this.from_user+'</a></div>\
        <div class="txt">'+this.text+'</div>\
        </div>';

        container.append(str); */
		
	
    });
}