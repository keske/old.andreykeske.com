'use strict';

angular.module('whenihave.controllers')
  .controller('TallinInAugust2015Ctrl', ['$scope', 'Places', function($scope, Places) {

    var MULTIPLIER = 4;

    var getAllImagesHeight = function() {
      var height = 0;

      $('img').each(function() {
        height = height + $(this).height();
      });

      return height;
    };

    $scope.init = function() {
      $(window)
        .load(function() {
          var height = getAllImagesHeight();

          $('.slow-scroll-page-height').css('height', height * MULTIPLIER);
          console.log(height * MULTIPLIER);
        })
        .scroll(function() {
          $('.slow-scroll-page').css('margin-top', $(window).scrollTop() / (MULTIPLIER / 2));
          // console.log($(window).scrollTop())
        });
    }

  }]);