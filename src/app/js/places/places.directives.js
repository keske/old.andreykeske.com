'use strict';

angular.module('whenihave.services')

.directive('filter', function() {
	return {
		templateUrl: "./components/layouts/filter.html"
	}
})

.directive('placeWithCover', function() {
	return {
		templateUrl: "./components/layouts/place-with-cover.html"
	}
})

.directive('placeWithoutCover', function() {
	return {
		templateUrl: "./components/layouts/place-without-cover.html"
	}
});