'use strict';

angular.module('whenihave.filters')

.filter('capitalize', function() {
	return function(input, scope) {
		return input.substring(0, 1).toUpperCase() + input.substring(1);
	}
});