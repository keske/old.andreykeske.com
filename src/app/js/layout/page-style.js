+(function() {

  var page = {

    applyStyles: function($elem) {
      "use strict";

      var bgcolor = $elem.attr('data-bgcolor') || '#FFF';

      $('body').css('background-color', bgcolor);

      console.log(bgcolor)
    },

    bind: (function() {
      "use strict";

      $(window).load(function() {
        $('.page-style').each(function() {
          page.applyStyles($(this));
        });
      })
    }())

  }

}())