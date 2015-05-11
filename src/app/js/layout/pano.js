+(function() {

  var pano = {

    move: function(e, $elem) {
      var width = $elem.width(),
          x = e.pageX;

      // $elem.css('margin-left', width / x / 2 * -1);
    },

    bind: (function() {
      "use strict";

      $(window).load(function() {
        $('.pano').mousemove(function(e) {
          pano.move(e, $(this));
        });
      })

    }())

  }

}())
