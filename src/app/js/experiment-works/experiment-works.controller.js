'use strict';

angular.module('whenihave.controllers')
	.controller('WorksCtrl', ['$scope', 'Works', function($scope, Works) {

		// Get works list
		$scope.works = Works.get();

		$scope.getOffset = function() {
			// return Math.floor(Math.random() * (4 - 1)) + 1;
			return 2;
		}

	}]);