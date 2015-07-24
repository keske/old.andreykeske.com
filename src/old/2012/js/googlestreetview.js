/*

    Google Street View From Car.

    Andrey Keske. 2012

 */

$(document).ready(function() {

    $('.map')
        .css('width', $(window).width())
        .css('height', $(window).height());

    $('.car-up')
        .css('top', $(window).height()-466)
        .css('left', 0);


    $('.car-down')
        .css('top', $(window).height()-200)

});

/*$('.open-w').bind({
		click: function(){

			$('.w-back')
					.css('width', $(window).width())
					.css('height', $(window).height()+100)
					.show();

			$('#window')
					.css('left', $(window).width()*0.5-470)
					.show();

			CURPHOTO = this.id * 1;

			changeImg();
		}
	}); */

