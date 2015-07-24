/*

	Andrey Keske
	http://www.andreykeske.com/
	2013

*/

$(function () {

	// animate speed
	var speed = 333

	// Get margin
	var margin = $('.site').css('top').replace('px', '') * 2

	$(document).ready(function () {
		makeSite()
	})

	$(window).load(function () {
		// hide load icon
		$('.loading').fadeOut(333)
		// show menu icon
		$('.blocks').fadeIn(777)
		// copy images to border
		copyImg()
		//
		$('.menu').show()
		//
		blur()
	})

	function makeSite() {
		// create works from json
		for (var i = 0; i < data.works.length; i++) {
			// append one project
			$('.site').append($('._blank').html())
			onework = $('.site .onework').eq(i + 1)
			// set link to work
			onework.find('a').attr('href', data.works[i].link)
			// set cover image
			onework.find('img').attr('src', data.works[i].img)
			//set title
			onework.find('.name').html(data.works[i].title)
			//add info
			onework.find('p').html(data.works[i].info)

			if (data.works[i].count != '') {
				onework.find('.fresh').show()
			}

			// add to menu
			var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).replace('.html', '')

			if (filename == 'index') {
				$('.workslist').append('<a href="' + data.works[i].link + '"><p>' + data.works[i].title + '</p></a>')
			} else {
				$('.workslist').append('<a href="../' + data.works[i].link + '"><p>' + data.works[i].title + '</p></a>')
			}


			// create navigation
			page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
			jpage = data.works[i].link.replace('pages/', '')
			if (page == jpage) {
				if (i > 0) {
					$('.navigation .col-md-5:eq(0) a')
						.attr('href', '../' + data.works[(i - 1)].link)
						.html('<div class="symb float">☜</div><div class="float">' + data.works[(i - 1)].title + '</div>')
				}
				if ((i + 1) < data.works.length) {
					$('.navigation .col-md-5:eq(1) a')
						.attr('href', '../' + data.works[(i + 1)].link)
						.html('<div class="symb float-right">☞</div><div class="float-right">' + data.works[(i + 1)].title + '</div>')
				}
			}
		}

		// add offset class
		var rows = $('.site .row').length // total works
		for (var i = 0; i < rows; i++) {
			var newclass = 'col-md-offset-' + getRnd(1, 2) // new class col-md-offset-X where X rand form 1 to 3
			$('.site .row').eq(i).find('div:eq(0)').addClass(newclass) // add new class
		}
	}

	/* Copy images from site to border */
	function copyImg() {
		var photos = $('.photo').length // total images
		for (var i = 0; i < photos; i++) {
			var filename = $('.photo').eq(i).find('img').attr('src') // img filename
			$('.border').append('<div class="bg blur"><img src="' + filename + '"></div>') // append div with image
		}
	}

	function isText() {
		if ($('.white').length > 0) {
			if (isScrolledIntoView($('.white'))) { // white?
				$('.border').hide()
			} else {
				$('.border').show()
			}
		}
	}

	function isVideo() {
		if ($('.responsive-container').length > 0) {
			if (isScrolledIntoView($('.responsive-container'))) { // video?
				$('.border img').hide()
			}
		}
	}

	function isImage() {
		if ($('.photo').length > 0) {
			if (isScrolledIntoView($('.photo'))) { // video?
				$('.border img').show()
			}
		}
	}


	/* Menu position */
	$(window).scroll(function () {
		// menu position
		var top = Math.floor($('.menu').offset().top) // get menu top
		var bottom = (top + $('.menu').height()) - $(window).scrollTop() // and menu bottom
		if (top < bottom) {
			$('.menu .wrap').css('marginTop', $(window).scrollTop() * -0.3) // stop scrolling
		}
		// parallax
		$('.parallax').each(function () {
			var scrollPos = $(window).scrollTop() // scroll top pos
			var elTop = $(this).offset().top // scurrent div top
			if (scrollPos < 0) {
				$(this).find('img').css('top', Math.round((0 + $(window).scrollTop()) * 12.7))
				// $(this).css('backgroundPosition', '0 ' + Math.round((elTop - scrollPos) * -0.7) + 'px')
			}
		})
	})

	$('.site').each(function () {
		$(document).ready(function () {
			setSize()
		})
		$(window).resize(function () {
			setSize()
		})

		function setSize() {
			$('.site').css('width', $(window).width() - margin) //.css('height', $(window).height() - margin)
			$('.topimage').css('width', $(window).width() - margin)
			$('.topimage img').css('width', $(window).width() - margin)
		}
	})

	$('.border').each(function () {
		$(document).ready(function () {
			setImgSize()
			isText()
			isVideo()
			isImage()
		})
		$(window).resize(function () {
			setImgSize()
		})
		/* Border background fullscreen */
		function setImgSize() {
			if ($(window).width() > 479) {
				$('.border img').height($(window).width())
			} else {
				$('.border img').height($(window).height())
			}
		}
		$(window).scroll(function () {
			blur()
		})
	})

	function blur() {
		var photos = $('.site img').length // Total photos
		for (var i = 0; i < photos; i++) {
			isText() // check if only text
			isVideo() // video iframe?
			isImage() // show img again
			//isTopImage()

			if ($('.site img').eq(i).parent().parent().parent().parent().parent().attr('class') != '_blank') {
				if (isScrolledIntoView($('.site img').eq(i))) { // img on page?
					// alert($('.site img').eq(i).parent().attr('class'))

					$('.border .bg').eq(i)
						.addClass('blur')
						.animate({
							opacity: 1
						}, {
							duration: 0,
							queue: false
						})

					$('.border .bg:gt(' + i + ')')
						.removeClass('blur')
						.animate({
							opacity: 0
						}, {
							duration: 0,
							queue: false
						})

					$('.border .bg:lt(' + i + ')')
						.removeClass('blur')
						.animate({
							opacity: 0
						}, {
							duration: 0,
							queue: false
						})

					if ($('.site img').eq(i).parent().hasClass('topimage')) {
						$('.border .bg').eq(0)
							.addClass('blur')
							.animate({
								opacity: 1
							}, {
								duration: 0,
								queue: false
							})
					}
				}
				// refresh
				if ($('.photo').length == 1) {
					$('.border .bg').eq(0)
						.addClass('blur')
						.animate({
							opacity: 0
						}, {
							duration: 0,
							queue: false
						})
						.animate({
							opacity: 1
						}, {
							duration: 0,
							queue: false
						})
				}
			}
		}
	}

	/* Show and hide menu */
	$('header .menu-icon').each(function () {
		$(this).bind('click', function () {
			if ($('.site').css('marginLeft').replace('px', '') == 0) {
				$('.site')
					.animate({
						marginLeft: ($('.menu').width() + 100)
					}, {
						duration: speed,
						queue: false
					})
					.css('box-shadow', '-2px 0px 2px rgba(50, 50, 50, 0.05)')
			} else {
				hideMenu()
			}
		})
		$('.site').bind('click', function () {
			if ($('.site').css('marginLeft').replace('px', '') != 0) {
				hideMenu()
			}
		})

		function hideMenu() {
			$('.site').animate({
				marginLeft: ''
			}, {
				duration: speed,
				queue: false
			})
		}
	})

	// Rand
	function getRnd(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Check elem on page (http://stackoverflow.com/)
	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop() - margin // Add margin
		var docViewBottom = docViewTop + $(window).height()
		var elemTop = $(elem).offset().top
		var elemBottom
			// need for pad/phone
		if ($(elem).height() < $(elem).width()) {
			elemBottom = elemTop //+ $(elem).height() / 2
		} else {
			elemBottom = elemTop
		}
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
	}

	// look at me
	$('.gas').each(function () {
		$('.gas').animate({
			marginTop: ($('.dymamic-gas').height() / 2),
			marginLeft: ($('.dymamic-gas').width() / 2)
		}, {
			duration: 0,
			queue: false
		})
		gasAnimation()

		function gasAnimation() {
			var min = -20
			var max = 20
			for (e = 0; e < $('.gas').length; e++) {
				$('.gas').eq(e)
					.animate({
						marginTop: '+=' + getRnd(min, max),
						marginLeft: '+=' + getRnd(min, max)
					}, {
						duration: 111,
						queue: true
					})
			}
			setTimeout(gasAnimation, 1111)
		}
	})
	$('.refresh').bind('click', function () {
		$('.dymamic-gas').html('')
		$('.dymamic-gas').html('<div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div><div class="gas"></div>')
		$('.gas').animate({
			marginTop: ($('.dymamic-gas').height() / 2),
			marginLeft: ($('.dymamic-gas').width() / 2)
		}, {
			duration: 0,
			queue: false
		})
	})

}).call(this)