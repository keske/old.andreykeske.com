angular.module('whenihave.controllers', []);
angular.module('whenihave.services', []);
angular.module('whenihave.directives', []);
angular.module('whenihave.filters', []);

angular.module('whenihave', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute',
    'ui.bootstrap', 'whenihave.controllers', 'whenihave.services', 'whenihave.directives', 'whenihave.filters',
    'infinite-scroll'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
      templateUrl: 'components/index.html',
      controller: 'MainCtrl'
    })

    // Experiment works
    .when('/experiment-works', {
      templateUrl: 'components/experiments.html',
      controller: 'WorksCtrl'
    })

    // Experiment work page
    .when('/experiment-works/:file', {
      templateUrl: function(params) {
        return "components/experiments/" + params.file;
      },
      controller: 'WorkCtrl'
    })

    // Travel
    .when('/travel', {
      templateUrl: 'components/places.html',
      controller: 'TravelCtrl'
    })

    // Visited city
    .when('/places/:year/:month/:city', {
      templateUrl: function(params) {
        return "components/places/" + params.year + '/' + params.month + '/' + params.city + '/index.html';
      },
      controller: 'PageCtrl'
    })

    // About
    .when('/about', {
      templateUrl: 'components/about.html',
      controller: 'AboutCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });

  }]);