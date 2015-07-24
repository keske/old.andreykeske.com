/* 

	Andrey Keske 2012
	
	Last update 16 aug 2012
	
*/


var _effect = 'blur';
var _site = 1;
var _scroll = 0;


$(document).ready(function() {
	
	$('.content')
		.css('marginLeft', ($(window).width() / 2) - ($('.grid-one').width() / 2 + 40));
		
	$('.effect')
			.css('marginLeft', ($(window).width() / 2) - ($('.grid-one').width() / 2 + 40));
			
			
	// Blur Effect. In future i'm be use a css, but today easy way using an image with blur effect
		$('.effect')
			.html($('.main').html())
			.find('.grid-elem')
			.css('box-shadow', '0 0 10px #F1F1F2, inset 0 0 10px #F1F1F2');
		
		// Blur layer
		// How many img's in .effect?
		var _max_img = $('.effect').find('img').length;
		
		// For each img...
		for ( var i = 0; i < _max_img; i++ ) {
			// ... replace .png --> -_effect.png
			$('.effect')
				.find('img:eq('+i+')')
					.attr('src', $('.effect').find('img:eq('+i+')').attr('src').replace(/\.png/g, "-"+_effect+".png"));
		}
	
	
	// Navigate 
	
		$('.allworks-in-project_open').bind('click', function() {
			
			
			
			$('.allworks-in-project_open')
				.html('')
				.css(
					{ height: 25 }
				)
			
			$('.allworks-in-project').fadeIn(400);
			//alert($(window).height() / ($('.__active').offset().top * 0.1) * 400)
			$('html, body').animate({
				scrollTop: $('.__active').offset().top - 65
			}, 1700);
			
		});
	
	
	// About on main page
	
		$('.me_text')
			.bind('mouseover', function() {
				$(this).animate(
					{ opacity: 0 }, { queue:false, duration: 300 }
				)
			})
			.bind('mouseout', function() {
				$(this).animate(
					{ opacity: 1}, { queue: false, duration: 300 }
				)
			});
		
	
	// Projects 
			
			// Action
			$('.double_city').mousemove(function(e) {
				var _x_city = e.pageX-$(this).offset().left;
				
				$('.double_city-two')
					.css('marginLeft', _x_city)
					.css('width', 900-_x_city);
				
				$('.double_city-two img').css('marginLeft', _x_city* -1)	
			});


		// Keyhole
		
		$('.keyhole').mousemove(function(e) {
			
		    var x = (e.pageX - $(this).offset().left) / ($(this).innerWidth()) * 100;
			var y = (e.pageY - $(this).offset().top) / ($(this).innerHeight()) * 100;
			
		 	$('.keyhole-girl img')
				.css('marginLeft', x * -1.7)
				.css('marginTop', y * -1.0);
				
		});

});

$(window).load(function() {
	
	// Double City
	
		// Position
		$('.double_city-two')
			.css('marginTop', $('.double_city-two').height() * -1)
			.css('marginLeft', $('.double_city-two').width() * 0.5)
			.css('width', 450);

});

$(document).scroll(function() {
	
	$('.effect')
		.css('marginTop', ($(window).scrollTop() * -1) + 35);
		
	$('body')
		.css('visibility', 'hidden').css('visibility', 'visible');
	
});

/*
$('.logo').bind('click', function() { 
	
	if ( _site != 0 ) {	
		
		$('.effect').hide();
		
		$('.header').hide();
		
		$('.allsite')
			.css('-moz-transform', 'rotate(0deg) translateX(0) translateY(0px) scale(0.8)')
			.css('-o-transform', 'rotate(0deg) translateX(0) translateY(0px) scale(0.8)')
			.css('-webkit-transform', 'rotate(0deg) translateX(0) translateY(0px) scale(0.8)')
			.css('transform', 'rotate(0deg) translateX(0) translateY(0px) scale(0.8)')
			.css('width', 980)
			.css('marginTop', $('.allsite').height() - $('.allsite').height() - ($('.allsite').height() * 0.1) + 120) //200
			.css('marginLeft', $(window).width() / 2 - 490);
				
		$('.header')
			.show()
			.css('background', 'none');
			
		$('.inside').show();
		
		_scroll = $(document).scrollTop();
		$('html, body').animate({ scrollTop: 0 }, 300);
		
		_site = 0;
	} 
		else
	{			
		$('.effect').show();
		
		$('.allsite')
			.css('-moz-transform', 'none')
			.css('-o-transform', 'none')
			.css('-webkit-transform', 'none')
			.css('transform', 'none')
			.css('width', $(window).width())
			.css('marginTop', 10) 
			.css('marginLeft', 0);
			
		$('body').css('height', $(document).height() - 100)
		
		$('.header').css('background', '#FFF')
		
		$('.effect').css('marginTop', ($(window).scrollTop() * -1) + 35);
		
		$('.inside').hide();
		
		$('html, body').animate({ scrollTop: _scroll }, 300);
		
		_site = 1;
		
	}
	
}); */

