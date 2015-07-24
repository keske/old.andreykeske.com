angular.module("CityChatApp.controllers", ["ionic"]);
angular.module("CityChatApp.services", []);

angular.module("CityChatApp", [
  "ionic",
  "CityChatApp.controllers",
  "CityChatApp.services",
  "pascalprecht.translate"
])

.run(function($ionicPlatform, $rootScope, $window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Check internet connection
  $rootScope.online = navigator.onLine;
  $window.addEventListener("offline", function() {
    $rootScope.$apply(function() {
      $rootScope.online = false;
    });
  }, false);
  $window.addEventListener("online", function() {
    $rootScope.$apply(function() {
      $rootScope.online = true;
    });
  }, false);
})

/** 
 * States, pages, router
 */
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("tabs", {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

  // Home
  .state("tabs.home", {
    url: "/home",
    views: {
      "home-tab": {
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
      }
    }
  })

  $urlRouterProvider.otherwise("/tab/home");

})

/** 
 * Application translate
 *
 * English, Russian
 */
.config(["$translateProvider", function($translateProvider) {

  // english
  $translateProvider.translations("en", {

    "Offline": "You're offline",

    "Searching": "Searching...",
    "CurrentCity": "Your current city is",
    "Coordinates": "Coordinates",

    "Play": "Play",
    "Pause": "Pause",

    // how it works?
    "HowItWorks": "How it works?",
    "Description": "The principle of operation is to create the chords based on the current geo-position, so at the beginning of the received latitude and longitude of the current geo-position, approximately so: lat: lng: 40.7127, 74.0059 are the coordinates of new York by the way.",

    // other cities
    "OtherCities": "Other cities",
    "WannaToKnow": "If you want to know how sounds other cities this list has a several examples",

    "Berlin": "Berlin",
    "Paris": "Paris",
    "Moscow": "Moscow",
    "London": "London",
    "Tokyo": "Tokyo",
    "SanFrancisco": "San Francisco",
    "SaintPetersburg": "Saint Petersburg",
    "NewYork": "New York",

    "ShowMoreCities": "Show more cities",

    "Author": "Development by Andrey Keske",
  });

  // russian
  $translateProvider.translations("ru", {

    "Offline": "Нет инет соединения :(",

    "Searching": "Поиск...",
    "CurrentCity": "Текущий город",
    "Coordinates": "Координаты",

    "Play": "Играть",
    "Pause": "Пауза",

    "HowItWorks": "Как это работает?",
    "Description": "Принцип работы — это создать аккорды на основе текущего гео-положения, итак, в самом начале получаем latitude и longitude текущего гео-положения, примерно будет так: lat: lng: 40.7127, 74.0059 — это координаты Нью Йорка кстати.",

    // how it works?
    "OtherCities": "Другие города",
    "WannaToKnow": "Хотите узнать как звучат другие города, вот несколько примеров",

    "Berlin": "Берлин",
    "Paris": "Париж",
    "Moscow": "Москва",
    "London": "Лондон",
    "Tokyo": "Токио",
    "SanFrancisco": "Сан Франциско",
    "SaintPetersburg": "Санкт-Петербург",
    "NewYork": "Нью Йорк",

    "ShowMoreCities": "Еще города",

    "Author": "Разработка Андрей Кеске",
  });

  // set app language
  // where `APPLICATION_LANGUAGE` is a global var in config/main.js
  $translateProvider.preferredLanguage(APPLICATION_LANGUAGE);

}]);