/*

	Andrey Keske
	http://www.andreykeske.com/
	2014

*/

$(function () {
  
  /*
    replace images accordin window width
  */
  
  getPath = function() {
    var w = $(window).width();   
    if ( w <= 640 ) {
      return 'small';
    } else if ( w <= 1280 && w >= 640 ) {
      return 'middle';
    } else if ( w >= 1280 ) {
      if ( e.hasClas('full-width') ) {
        return('large')
      } else {
        return 'middle';
      }
    }
  }
  
  imgSetSize = function(e) {
    var o = e.data('src');
    var p = getPath();
    var n = o.replace('size', p);
        
    e.find('img').attr('src', n);
  }

  $('.replace-img').each(function() {
    imgSetSize($(this));
  });
  
  /*
    fixed header text
  */
  
  $('.fixed-head').each(function() {
    $(window).scroll(function() {
      var total = $('.fixed-header-show').length;
      
      for ( var i = 0; i < total; i++ ) {
        var elem = $('.fixed-header-show').eq(i); 
    		var elemTop = $(elem).offset().top;
        var scrollTop = $(window).scrollTop() + 33;
        
        var firstTop = $('.fixed-header-show').eq(0).offset().top;
        
        var lastTop = $('.fixed-header-show').eq(total - 1).offset().top;
        var lastHeight = $('.fixed-header-show').eq(total - 1).height();
        var lastBottom = lastTop + lastHeight;
        
        if ( elemTop < scrollTop) {
          var text = elem.data('fixed-header')
          $('.fixed-head').show();
          $('.fixed-head p').html(text);
    	  }
        
        if ( firstTop < scrollTop ) {
          $('.fixed-head').show();
        } else {
          $('.fixed-head').hide();
        }
        
        if ( lastBottom < scrollTop ) {
    	    $('.fixed-head').hide();
    	  }
      }
      
    });


  });
  
  /*
    to do
  */
  
  $('.tallinn-slow').each(function() {
    $('.wrap')
      .css('width', $(window).width())
      // .css('height', $(window).height());
  });
  
  $(document).ready(function() {
    // var h = $('body').height();
    // $('body').height(h * 3);
  });
  
  $(window).scroll(function() {
    // document.title = ($('body').height() / ($(window).scrollTop())
    // $('.wrap').css('top', $(window).scrollTop() / $(window).heigth() * 0.00003)
  });
  
  
});

