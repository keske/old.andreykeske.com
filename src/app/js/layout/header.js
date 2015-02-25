+(function() {

  var header = {

    $elem: $('header'),

    smoothOpacityWhenScrolling: function() {
      "use strict";

      var opacity = 1 - ($(window).scrollTop() / 50).toFixed(1);

      this.$elem.css('opacity', opacity);
    },

    bind: (function() {
      "use strict";

      $(window).scroll(function() {
        header.smoothOpacityWhenScrolling();
      })
    }())

  }

}())