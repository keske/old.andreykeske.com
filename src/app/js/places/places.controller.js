'use strict';

angular.module('whenihave.controllers')
	.controller('TravelCtrl', ['$scope', 'Places', function($scope, Places) {

		// Default card view style
		$scope.mode = 'card';

		// Default order by year
		$scope.order = '-year';

		// All get all places
		var places = Places.get();
		// And set to $scope.places
		$scope.places = places;

		// Get most frequent value from array
		Array.prototype.most = function() {
			var L = this.length,
				freq = [],
				unique = [],
				tem, max = 1,
				index, count;
			while (L >= max) {
				tem = this[--L];
				if (unique.indexOf(tem) == -1) {
					unique.push(tem);
					index = -1, count = 0;
					while ((index = this.indexOf(tem, index + 1)) != -1) {
						++count;
					}
					if (count > max) {
						freq = [tem];
						max = count;
					} else if (count == max) freq.push(tem);
				}
			}
			return [freq, max];
		}

		// Get uniq values aka remove dublicated values
		Array.prototype.unique = function() {
			return Object.keys(this.reduce(function(r, v) {
				return r[v] = 1, r;
			}, {}));
		}

		// Visited info
		$scope.visitedCitiesList = [];
		$scope.visitedCountryList = [];

		for (var i = 0; i < places.length; i++) {
			$scope.visitedCitiesList.push(places[i].city);
			$scope.visitedCountryList.push(places[i].country);
		}

		// Get most visited citi and how many times I visited this city
		var visitedCities = function() {
			var uniqueList = _.uniq($scope.visitedCitiesList, function(item, key, a) {
				return item.a;
			});
		}

		// Sort array by name
		// [b, a, c] -> [a, b, c]
		var sortByName = function(array) {
			return _.sortBy(array, function(s) {
				return s.charCodeAt() * 1;
			})
		}

		// Most visited city
		$scope.mostVisitedCity = $scope.visitedCitiesList.most()[0];
		// How times I visited this city
		$scope.mostVisitedCityTimes = $scope.visitedCitiesList.most()[1];

		// Total cities add...
		$scope.visitedCitiesLength = $scope.visitedCitiesList.unique().length;
		// ... total countries I visited
		$scope.visitedCountriesLength = $scope.visitedCountryList.unique().length;

		// Full list of visited cities and...
		$scope.visitedCitiesList = sortByName($scope.visitedCitiesList.unique());
		// ... countries
		$scope.visitedCountryList = sortByName($scope.visitedCountryList.unique());

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

		// Year header
		$scope.createHeader = function(role) {
			var showHeader = (role != $scope.currentRole);

			$scope.currentRole = role;

			if ($scope.order === '-year' && $scope.mode !== 'card') {
				return showHeader;
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

		// Lazy load places
		$scope.loadLimit = 2;
		$scope.loadMorePlaces = function() {
			$scope.loadLimit = $scope.loadLimit + 2;
		}

	}]);