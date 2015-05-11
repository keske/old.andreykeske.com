'use strict';

angular.module('whenihave.controllers')
	.controller('PageCtrl', function($rootScope, $scope, $routeParams, $route, Places) {

		// Current city...
		$scope.city = $routeParams.city;
		// ... year ...
		$scope.year = $routeParams.year;
		// ... and month
		$scope.month = $routeParams.month;

		// I use to insert images to the page
		// write every time like this: <img src="assets/images/2015/january/Prague/1.jpg"> isn't cool
		// <img src="{{url}}/4.jpg"> is realy cool and easy, yeah?
		$scope.url = "assets/images/" + $scope.year + "/" + $scope.month + "/" + $scope.city;

		// All get all places
		var places = _.where(Places.get(), {
			cover: true
		});
		
		// And set to $scope.place
		$scope.navPlaces = _.reduceRight(places, function(a, b) {
			return a.concat(b);
		}, []);

		for (var i = 0; i < $scope.navPlaces.length; i++) {
			if ($scope.navPlaces[i].city === $scope.city &&
				$scope.navPlaces[i].month === $scope.month &&
				$scope.navPlaces[i].year === parseInt($scope.year)) {
				$scope.indexOf = i;
			}
		}

		// Nav footer with cities
		if ($scope.indexOf >= 2) {
			$scope.min = $scope.indexOf - 1;
			$scope.max = places.length;
		} else if ($scope.indexOf === 1) {
			$scope.min = $scope.indexOf - 1;
			$scope.max = $scope.indexOf + 5;
		} else if ($scope.indexOf === 0) {
			$scope.min = $scope.indexOf;
		}

		if ((places.length - $scope.indexOf) === 4) {
			$scope.min = $scope.min - 1;			
		} else if ((places.length - $scope.indexOf) === 3) {
			$scope.min = $scope.min - 2;			
		} else if ((places.length - $scope.indexOf) === 2) {
			$scope.min = $scope.min - 3;			
		} else if ((places.length - $scope.indexOf) === 1) {
			$scope.min = $scope.min - 4;			
		}

		// Show date
		// if sart date month and end date month are different
		// ex: 11 Sep -- 2 Oct
		// or if months same
		// ex: 11 -- 12 Sep
		$scope.showStartDateMonth = function(start, end) {
			var splitStart = start.split(' '),
				splitEnd = end.split(' ');

			if (splitStart[1] === splitEnd[1]) {
				return splitStart[0];
			} else {
				return start;
			}

		}

		// If card date = current month
		// then show label
		$scope.showNewLabel = function(date) {
			var
				// Current date
				today = new Date(),
				year = today.getFullYear(),
				month = today.getMonth() + 1,
				day = today.getDate(),

				// From $scope
				_month = date.getMonth() + 1,
				_year = date.getFullYear();

			// Show label if month and year
			if (_month === month && _year === year) {
				return true;
			} else {
				return false;
			}
		}

	});