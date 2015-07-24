/*
	Andrey Keske
	2013
*/

(function() {
	
	// Pagename
	var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1).replace('.html', '');
	
	var acceleration_x,
			acceleration_y,
			acceleration_z;
	
	$(document).ready(function() {
		
		/* About img rotate */
		/*
if (window.DeviceMotionEvent != undefined) {
			window.ondevicemotion = function(e) {
				acceleration_x = e.accelerationIncludingGravity.x.toFixed(0);
				acceleration_y = e.accelerationIncludingGravity.y.toFixed(0);
				acceleration_z = e.accelerationIncludingGravity.z.toFixed(0);
			
				$('.keskePhoto').css('-webkit-transform', 'rotate(' + acceleration_x / 3 + 'deg)');
				$('h1').html(acceleration_x);
			}
		}
*/
		
		
		// $('.hover').each(function() {
		// 			$(this).hover(function() {
		// 				if ( $(this).hasClass('flip') == 0) {
		// 					$(this).addClass('flip');
		// 				} else {
		// 					$(this).removeClass('flip');
		// 				}
		// 			})
		// 			// $(document).ready(function() {
		// 			// 				$('.back')
		// 			// 					.css('width', $('.front').width())
		// 			// 					.css('height', $('.front').height())
		// 			// 			})
		// 			// 			$(window).resize(function() {
		// 			// 				$('.back')
		// 			// 					.css('width', $('.front').width())
		// 			// 					.css('height', $('.front').height())
		// 			// 			})
		// 		})

		/* Create content (JSON) */
		$('.menu-works')
			.append('<a href="/">Home</a><br />')
		for ( var i = 0; i < data.works.length; i++ ) {
			$(document).find('.works').find('.row').append('<div class="span3">' + previewWork(data.works[i].title, data.works[i].link, data.works[i].img, data.works[i].count) + '</span>')
			$('.menu-works')
				.append('<a href="' + data.works[i].link + '">' + data.works[i].title + '</a><br />')
		}
		//for ( var c = 0; c < data.works.length; c++ ) {
		//	for ( var w = 0; w < data.works[c].length; w++ ) {
		//		if ( $(document).find('.works').find('.span3').length != 0 ) { 
		//			$('.works').find('.span3:eq(' + c + ')')
		//			.append(previewWork(data.works[c][w].title, data.works[c][w].link, data.works[c][w].img, data.works[c][w].count));
		//		}
		//		$('.menu-works')
		//			.append('<a href="' + data.works[c][w].link + '">' + data.works[c][w].title + '</a><br />')
		//	}
		//}
		
		$('body').animate({opacity: 1}, 111)
		
		/* Create footer */
		if ( filename != 'about' ) {
			$('footer').html(getFooter());
		} else {
			$('footer').html(getFooterInAbout());
		}
	
		/* Clone content -> footer */
		$('header').html('<div class="hsite"></div>')
		$('header').find('.hsite').html($('.site').html());
		
		/* Replace all image in header (blur effect) */
		for ( var i = 0; i < $('header').find('img').length; i++ ) {
			// path-/file.jpg(or .png) = > path/file.jpg(or .png)
			var imgfile = $('header').find('img:eq(' + i + ')').attr('src').replace(/-/img, '');
			// path/file.jpg(or .png) => file.jpg(or .png) => .jpg(or .png)
			imgfile = imgfile.replace(/(\w+)\//img, '').replace(/\w+(?=\.)/img, '');
			if ( imgfile == '.jpg' ) {
				$('header')
					.find('img:eq(' + i + ')')
					.attr('src', ($('header').find('img:eq(' + i + ')').attr('src')).replace('.jpg', '') + '-blur.jpg');
			} else 
			if ( imgfile == '.png' ){
				$('header')
					.find('img:eq(' + i + ')')
					.attr('src', ($('header').find('img:eq(' + i + ')').attr('src')).replace('.png', '') + '-blur.png');	
			}
		}
		
		/* For fast move content in header on devices (I tested on iPhone and iPad) */
		document.addEventListener("touchmove", headerMove, false);
		document.addEventListener("scroll", headerMove, false);
		
		/* .bigImage size/resize */
		$('.bigImage').each(function() {
			$(window).resize(function() {
				bigImageSize();
			});
			$(window).load(function() {
				bigImageSize();
			});
			bigImageSize = function() {
				$('.bigImage').find('img')
					.css('width', $(window).width());

				if ( $('.bigImage').html() == '' ) {
					$('.bigImage').css('height', 80)
				}
			}
		});

		/* Slider Width */
		$('.slider').each(function() {
			$(window).resize(function() {
				slider();
			});
			$(window).load(function() {
				slider();
			});
			slider = function() {
				for ( var i = 0; i < $('.slider').length / 2; i++ ) {
					// Left & Right
					if ( ($('.slider_' + i).find('.slider_in').find('.one').length / 2)  > 1 ) {
						if ( ($('.slider_' + i).find('.slider_in').find('.one').length / 2 - 1 ) > 0 ) {	
							$('.slider_' + i).find('.left').show();
							$('.slider_' + i).find('.right').show();
						}
					}
					// Pos/Size
					$('.slider_' + i).find('.slider_in').find('div').css('width', $('.slider_' + i).width());

					if ( $('.slider_' + i).find('.playButton').length > 0 ) {
						$('.slider_' + i).find('.left')
							.css('marginTop', $('.slider_' + i).height() / 2 * -1 + 65)
							.css('marginLeft', 20);

						$('.slider_' + i).find('.right')
							.css('marginTop', $('.slider_' + i).height() / 2 * -1 + 65)
							.css('marginLeft', $('.slider_' + i).width() - $('.slider_' + i).find('.right').width() - 20);

					} else {
						$('.slider_' + i).find('.left')
							.css('marginTop', $('.slider_' + i).height() / 2 * -1 -20)
							.css('marginLeft', 20);

						$('.slider_' + i).find('.right')
							.css('marginTop', $('.slider_' + i).height() / 2 * -1 - 20)
							.css('marginLeft', $('.slider_' + i).width() - $('.slider_' + i).find('.right').width() - 20);
					}

					$('.slider_' + i).find('.playButton')
						.css('marginTop', $('.slider_' + i).height() / 2 * -1 - ($('.playButton').height() / 2))
						.css('marginLeft', ($('.slider_' + i).width() / 2) - ($('.slider_' + i).find('.playButton').width() / 2));
				}
			}
		});
		
		/* Play video */
		$('body').append('<div class="openWindow"></div><div class="backWindow"></div>');
		
		$('.playButton').bind('click', function() {
			playVideo($(this).attr('data-html'));
		});
		
		$('.backWindow').bind('click', function() {
			$('.openWindow').fadeOut(333);
			$('.backWindow').fadeOut(333);	
			$('.openWindow').html('empty')
		});
		
		/* Slider action */
		currentImage = new Array();
		currentImage = [0, 0, 0, 0, 0, 0]
		
		$('.right').bind('click', function() {
			var imgLength = $('.slider_in:eq(' + this.id + ')').find('.one').length;
			if ( currentImage[this.id] < imgLength - 1) {
				currentImage[this.id] = currentImage[this.id] + 1;
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id] * -1
				}, {duration: 700, queue: false});
			} else 
			if ( currentImage[this.id] == imgLength - 1) {
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id] * -1 - 10
				}, {duration: 300, queue: true});
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id] * -1
				}, {duration: 100, queue: true});
			}
		});
		
		$('.left').bind('click', function() {
			if ( currentImage[this.id] > 0) {
				currentImage[this.id] = currentImage[this.id] - 1;
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id] * -1
				}, {duration: 700, queue: false});
			} else 
			if ( currentImage[this.id] == 0) {
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id] + 20
				}, {duration: 300, queue: true});
				$('.slider_' + this.id).find('.slider_in').animate({
					marginLeft: $('.slider').width() * currentImage[this.id]
				}, {duration: 100, queue: true});
			}
		});	
		
		/* Anchor */
		$('.anchor').bind('click', function() {
			window.location.href = $(this).attr('href');
			goToAnchor();
		});
		
		/* Projects */
		keyholePosition();
		
		$('.site').animate({ opacity: 1 }, 100);
		$('.logo').animate({ opacity: 1 }, 100);
		$('header').animate({ opacity: 1 }, 100);
		
		/* Loading */
		$('.loading').html('&#0033;');
		if ( filename == 'index' ) {
			$('.loading').css('color', '#000');
		}	
		
		/* Menu screen */
		$('.menu').each(function() {
			$this = $(this)
			$(window).resize(function() {
				$this
					.css('left', $(window).width())
				$('.menu-scroll').css('max-height', $(window).height() - 99)
			})
			$this
				.css('left', $(window).width())
				.css('height', $(document).height())
			$('body').append('<div class="menu-back"></div>')
		})
		
		$('.icon-menu').each(function() {
			$this = $(this)
			$this.bind('click', function() {
				$('.menu').fadeIn(333)
				menuPosition()
				$('.menu-back')
					.fadeIn(333)
				$('.menu').css('height', $(document).height())
				$('.menu-back')
					.css('width', $(window).width() - 33)
					.css('height', $(document).height())
				$('.site').animate({opacity: 0.5}, 777)
				$('header')
					.animate({height: 55}, {duration: 333, queue: false})
					.animate({opacity: 0}, {duration: 333, queue: false})
				$('.like-all').fadeOut(777)
				//$('html').css('overflow', 'hidden')
				$('.menu-scroll').css('max-height', $(window).height() - 99)
			})
			
			$(window).resize(function() {
				$('.menu')
					.css('left', $(window).width() - $('.menu').width() - 46)
			})
		});
		
		menuPosition = function() {
			$('.menu')
				.animate({left: $(window).width() - $('.menu').width() - 46}, 333)
		}
		
		$('.menu-back, .menu-close').bind('click', function() {
			$('.menu')
				.animate({left: $(window).width()}, 333)
				.fadeOut(111)
			$('.site').animate({opacity: 1}, 333)
			$('.menu-back').fadeOut()
			
			$('header')
				.animate({opacity: 1}, {duration: 333, queue: false})
				.animate({height: 55}, {duration: 333, queue: false})
			$('.site')
				.animate({opacity: 1}, {duration: 333, queue: false})
			$('.menu-back').fadeOut()
			$('.like-all').fadeOut()
			$('html').css('overflow-y', 'scroll')
		})
		
		/* Like screen */
		$('.like-all').each(function() {
			likeAllPos()
			$(window).resize(function() {
				$('.menu-back')
					.css('width', $(window).width())
					.css('height', $(document).height())
				likeAllPos()
			})
		})
		
		$('.icon-like').bind('click', function() {
			if ( $('.like-all').css('display') == 'none' ) {
				$('header')
					.animate({height: $(document).height()}, {duration: 777, queue: false})
				$('.site')
					.animate({opacity: 0.3}, {duration: 777, queue: false})
				$('.hsite')
					.animate({height: $(document).height()}, {duration: 777, queue: false})
				$('.like-all').fadeIn(777)
				$('.menu-back')
					.fadeIn(777)
					.css('width', $(window).width())
					.css('height', $(document).height())
			} else {
				$('header')
					.animate({opacity: 1}, {duration: 333, queue: false})
					.animate({height: 55}, {duration: 333, queue: false})
				$('.site')
					.animate({opacity: 1}, {duration: 333, queue: false})
				$('.menu-back').fadeOut()
				$('.like-all').fadeOut()
			}
		});
	});
	
	likeAllPos = function() {
		$('.like-all')
			.css('left', ($(window).width() / 2) - ($('.like-all').width() / 2))
			.css('top', ($(window).height() / 2) - ($('.like-all').height() / 2 + 33))
	}
	
	$(window).load(function() {
		headerMove();
		$('.slider').animate({opacity: 1}, 700);
		$('.only_img').animate({opacity: 1}, 700);
		$('.loading').fadeOut(300);
		goToAnchor();
		playVideoPosition();
	});
	
	$(window).resize(function() {
		playVideoPosition();
		
		//$('.video').css('width', $('.content').width());
		$('canvas').css('width', $('.content').width());
		
		/* Projects */
		keyholePosition();
	})
	
  	$(window).scroll(function() {
		/* Header Move */
		headerMove();

		/* Header shadow */
		var headerShadow = ($(document).scrollTop() / 10).toFixed(0) / 10 * 10;
		if ( $(document).scrollTop() > 10 && $(document).scrollTop() < 70 ) { 
			$('header').css('box-shadow', '0 ' + headerShadow + 'px 7px rgba(0, 0, 0, 0.07)');
			// $('.site-title').css('opacity', 1 - headerShadow * 0.1 - 0.3)
		} else
		if ( $(document).scrollTop() < 10 ) {
			headerShadow = 0;
			$('header').css('box-shadow', '0 1px 7px rgba(0, 0, 0, 0.07)');
			// $('.site-title').css('opacity', 1)
		} else
		if ( $(document).scrollTop() > 70 ) {
			$('header').css('box-shadow', '0 7px 7px rgba(0, 0, 0, 0.07)');
			//$('.site-title').css('opacity', 0)
		}
		
		/* Change loading color */
		if ( $(document).scrollTop() > $('.bigImage').height() ) {
			$('.loading').css('color', '#000');
		} else {
			$('.loading').css('color', '#FFF');
		}
		
		/* Work with anchors. Change browserbar */
		if ( $('.anchor').length > 1 ) {
			if ( $(window).scrollTop() == 0 ) {
				//window.location.hash = '';
			} else {
				for ( var i = $('.anchorOffsetTop').length / 2; i < $('.anchorOffsetTop').length; i++ ) {
					if ( isScrolledIntoView('.anchorOffsetTop:eq(' + i + ')') == true 
							&& isScrolledIntoView('.anchorOffsetTop:eq(' + (i - 1) + ')') == false ) {
						if ( window.location.hash != $('.anchorOffsetTop:eq(' + i + ')').find('a').attr('href')) {
							window.location.hash = $('.anchorOffsetTop:eq(' + i + ')').find('a').attr('href');
						}
					}
				}
			}
		}
		
  	});
	
	/* Play video / Open window */
	playVideo = function(code) {

		setTimeout(playVideoPosition, 7);
		
		$('.openWindow')
			.html(code)
			.fadeIn(777);
		
		$('.backWindow')
			.fadeIn(777)
			.css('top', 0);
			
		setTimeout(playVideoPosition, 777);
	};
	
	playVideoPosition = function() {
		$('.openWindow')
			.css('width', $('.content').width())
			.css('top', ($(window).height() - $('.openWindow').height()) / 2)
			.css('left', ($(window).width() / 2) - ($('.openWindow').width() / 2));
		
		$('.backWindow')
			.css('width', $(window).width())
			.css('height', $(window).height());
	};
	
	isScrolledIntoView = function(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	
	/* Anchors */
	goToAnchor = function() {
		if ( window.location.hash ) {
			var hash = window.location.hash.replace('#', '');	
			$(document).scrollTop($('.name_' + hash).offset().top - 80);
		}
	}

	/* Move content in header */
	var bigImageHeader__marginTop = $('.bigImage').find('h1').offset().top;
	headerMove = function() {
		
		$('header').find('.hsite').css('marginTop', $(document).scrollTop() * -1);
		$('.bigImage').find('img').css('marginTop', $(document).scrollTop() * 0.7);
		
		// Speed of h1 in about and other pages
		if ( filename != 'about' ) {
			speed = 0.4;
		} else {
			speed = 0.48;
		} 
		
		$('.bigImage').find('h1').css('marginTop', $(document).scrollTop() * speed + bigImageHeader__marginTop);
		$('.bigImage').find('p').css('marginTop', $(document).scrollTop() * speed + bigImageHeader__marginTop + 40);
	}
	
	/* Create works preview */
	previewWork = function(title, link, img, count) {
		var preview = '\
		<div class="item index"> \
			<div class="preview"> \
				<a href="' + link + '"> \
					<img src="' + img + '" alt="' + title + '" /> \
				</a> \
			</div> \
			<div class="name"> \
				<a href="' + link + '">' + title;
				
		if ( count != '' ) {
			preview = preview + '<sup class="count">' + count + '</sup>'
		}
			preview = preview + '<div class="link_border"></div></a> \
			</div> \
		</div>';
		return preview;
	}
	
	/* Footer */
	
	var partOfFooter = '<br /> \
	<span class="name"><!-- Facebook --> \
		<a href="http://www.facebook.com/andrey.keske"> \
			<span class="ws">&#228;</span> \
			<div class="link_border"></div> \
		</a> \
	</span> \
	<!-- <span class="name"> \
		<a href="http://twitter.com/superkeske"> \
			<span class="ws">&#229;</span> \
			<div class="link_border"></div> \
		</a> \
	</span> \
	<span class="name"> \
		<a href="https://vimeo.com/superkeske"> \
			<span class="ws">&#238;</span> \
			<div class="link_border"></div> \
		</a> \
	</span> --> \
	<span class="name"><!-- Instagram --> \
		<a href="http://instagram.com/andreykeske"> \
			<span class="ws">&#235;</span> \
			<div class="link_border"></div> \
		</a> \
	</span> \
	<!-- <span class="name"> \
		<a href="https://github.com/keske/andreykeske"> \
			<span class="ws">&#0082;</span> \
			<div class="link_border"></div> \
		</a> \
	</span> --> \
	<br /><br />';
	
	getFooter = function() {
		var footer = ' \
		<span class="name"> \
			<a href="about.html"> \
				About me \
				<div class="link_border"></div> \
			</a> \
		</span>' //+ partOfFooter;
		return '' //footer;
	}
	
	getFooterInAbout = function() {
		var footer = ' \
		<span class="name"> \
			<a href="index.html"> \
				Home \
				<div class="link_border"></div> \
			</a> \
		</span>' //+ partOfFooter;
		return '' //footer;
	}
	
	/*
		
		Works
		
	*/
	
	// Keyhole pos
	keyholePosition = function() {
		$('.keyhole-girl').css('marginLeft', $('.container').width() / 2 - $('.keyhole-girl').width() / 2 - 18);
		$('.keyhole').css('marginLeft', $('.container').width() / 2 - $('.keyhole').width() / 2 - 18);
	}
	$('.keyhole').mousemove(function(e) {
		
	    var x = (e.pageX - $(this).offset().left) / ($(this).innerWidth()) * 100;
		var y = (e.pageY - $(this).offset().top) / ($(this).innerHeight()) * 100;
		
	 	$('.keyhole-girl img')
			.css('marginLeft', x * -0.7)
			.css('marginTop', y * -0.1);
			
	});
	
}).call(this);