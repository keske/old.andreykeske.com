'use strict';

angular.module('whenihave.controllers')

.filter('startFrom', function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	}
});