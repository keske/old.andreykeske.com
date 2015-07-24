/* 
	Andrey Keske 2011
*/

$(document).ready(function() {

    $('.action_menu').html(
        
        '<a href="http://www.andreykeske.com" class="to-home">'+
            '<span class="andreykeske">Andrey Keske</span>'+
        '</a>'+
        '<div class="projects">'+
            '<p><a href="ipad-invisible-icons.html">iPad Invisible Icons</a></p>'+
            '<p><a href="mac-os-x-ui-games.html">Mac OS UI Games</a></p>'+
            '<p><a href="city.html">City | City</a></p>'+
            '<p><a href="experiments.html">Lab 2011&mdash;2012</a></p>'+
            '<div class="about">'+
                '<p><a href="hello.html">Hello</a></p>'+
                '<a href="about.html">About</a>'+
            '</div>'+
        '</div>');

    $('.background-image img')
            .css('width', $(window).width());

    $('.background-image')
            .fadeIn(1000);

    $('.trash')
            .css('top', $(window).height() - 35);

    var curSlideiPad = 0;

    $('.slide-ipad').bind('click', function() {
        if (curSlideiPad < $('.slide-ipad-stream img').length - 1) {
            curSlideiPad = curSlideiPad + 1;
            $('.slide-ipad-stream').animate({marginLeft: -768 * curSlideiPad}, 600)
        } else {
            $('.slide-ipad-stream').animate({marginLeft: 0}, 600);
            curSlideiPad = 0;
        }
    });

    $('.browserBackground').bind('click', function() {
       $('.browserBackgroundBlock').show(300);
    });
});

$(window).resize(function() {
    $('.background-image img')
            .css('width', $(window).width());

    $('.background-image')
            .fadeIn(1000);
});
