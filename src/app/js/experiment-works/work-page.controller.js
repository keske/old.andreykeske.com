'use strict';

angular.module('whenihave.controllers')
  .controller('WorkCtrl', function($rootScope, $scope, $routeParams, $route, Works) {

    // Current work
    $scope.file = $routeParams.file;

    // Get all works
    $scope.works = Works.get();

    // Current page index
    var getWorkIndex = function() {
      for (var i = 0; i < $scope.works.length; i++) {
        if ($scope.works[i].link === $scope.file) {
          return i;
        }
      }
    }
    $scope.workIndex = getWorkIndex();

    if ($scope.workIndex !== 0) {
      $scope.prevWork = {
        "title": $scope.works[$scope.workIndex - 1].title,
        "link": $scope.works[$scope.workIndex - 1].link,
        "img": $scope.works[$scope.workIndex - 1].img,
        "info": $scope.works[$scope.workIndex - 1].info,
      }
    }

    if ($scope.workIndex < ($scope.works.length - 1)) {
      $scope.nextWork = {
        "title": $scope.works[$scope.workIndex + 1].title,
        "link": $scope.works[$scope.workIndex + 1].link,
        "img": $scope.works[$scope.workIndex + 1].img,
        "info": $scope.works[$scope.workIndex + 1].info,
      }
    }

  });