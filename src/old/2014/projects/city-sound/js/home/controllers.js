angular.module('CityChatApp.controllers')

.controller('HomeCtrl', ['$scope', '$ionicActionSheet', '$timeout',
	function($scope, $ionicActionSheet, $timeout) {

		var canvas = $("canvas")[0];
		var renderer = new Vex.Flow.Renderer(canvas,
			Vex.Flow.Renderer.Backends.CANVAS);

		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(10, 0, 500);
		stave.addClef("treble").setContext(ctx).draw();

		// limit
		$scope.limit = 13;

		// cities names and location JSON
		var ref = "";

		if (isEnglishVersionOfApp) {
			ref = "js/home/cities-location.js";
		} else {
			ref = "js/home/cities-location-rus.js";
		}

		console.log(ref);

		requirejs(['js/home/cities-location.js'], function() {
			$scope.cities = getCities();
		});

		// location digits to midi numbers
		// [coordinate, midi note, note name]
		requirejs(['js/home/accordance-notes.js'], function() {
			$scope.accordanceArray = getNotes();
		});

		$scope.show = function() {

			// Show the action sheet
			var hideSheet = $ionicActionSheet.show({

				buttons: [{
					text: 'Visit site'
				}, {
					text: 'Write email'
				}],

				titleText: 'Andrey Keske',
				cancelText: 'Cancel',

				cancel: function() {
					// add cancel code..
				},

				buttonClicked: function(index) {
					if (index === 0) {
						var ref = window.open('http://www.andreykeske.com', '_system', 'location=yes');

						ref.addEventListener('loadstart', false);
						ref.removeEventListener('loadstart', false);
					} else if (index === 1) {
						window.open("mailto:hello@andreykeske.com", "_self");
					}

					return true;
				}
			});

		};

		var city = '',
			country = '',
			loc = '';

		$scope.nowPlaying = false;

		// get current location
		$.get("http://ipinfo.io", function(response) {
			$scope.$apply(function() {

				// english version of app
				if (isEnglishVersionOfApp) {
					// get english city name
					$scope.currentCity = response.city;

					// get english country name
					country = response.country;
				} else {
					// russian version of app
					// get russian city name
					$scope.currentCitycity = ymaps.geolocation.city;
				}

				// get latitude and longitude
				$scope.currentLoc = response.loc;

				// set location depending application language
				$scope.setLocation(country, $scope.currentCity, $scope.currentLoc);

				// hide "searching..." 
				// and show location details
				$scope.ready = true;
			})
		}, "jsonp");

		$scope.setLocation = function(country, city, loc) {
			$scope.location = {
				"country": country,
				"city": city,
				"loc": loc
			};
		}

		$scope.selectCity = function(index) {
			T.pause();
			$scope.nowPlaying = false;

			if ($scope.cityNum == index) {
				$scope.cityNum = -1;
			} else {
				$scope.cityNum = index;
				play();
			}
		}

		var getLatitude = function() {
			return loc.split(/,/)[0];
		}

		var getLongitude = function() {
			return loc.split(/,/)[1];
		}

		var getLatLng = function(setlatlng) {

			var latlng = $scope.location.loc;

			latlng = $scope.location.loc;

			latlng = latlng.replace('.', '');
			latlng = latlng.replace('.', '');
			latlng = latlng.replace(',', '');
			latlng = latlng.replace('-', '');

			return latlng.match(/.{1,3}/g);
		}

		var getChords = function() {

			var len = getLatLng('').length,
				chords = [],
				_a = [];

			for (var i = 0; i < len; i++) {

				// one chord three notes
				_a = [
					$scope.accordanceArray[+getLatLng()[i].charAt(0)][1],
					$scope.accordanceArray[+getLatLng()[i].charAt(1)][1],
					$scope.accordanceArray[+getLatLng()[i].charAt(2)][1]
				];
				// _a = [+getLatLng()[i].charAt(0), +getLatLng()[i].charAt(1), +getLatLng()[i].charAt(2)];
				chords.push(_a)
			}

			return chords;
		}

		sc.use("prototype");

		timbre.setup({
			f64: true
		});

		if (timbre.envmobile) {
			timbre.setup({
				samplerate: timbre.samplerate * 0.5
			});
		}

		var onreset = function() {
			$scope.nowPlaying = true;
		};

		timbre.on("pause", onreset).on("reset", onreset).amp = 0.6;

		/**
		 * Get BPM
		 *
		 * @return integer BPM
		 */
		var getBPM = function() {

			var BPM = 3,
				date = new Date,
				hour = Math.floor(date.getHours());

			if (hour === 12 || hour > 12 && hour < 15) {
				BPM = 80;
			} else if (hour === 15 || hour > 15 && hour < 17) {
				BPM = 100;
			} else if (hour === 17 || hour > 17 && hour < 19) {
				BPM = 120;
			} else if (hour === 18 || hour > 18 && hour < 22) {
				BPM = 140;
			} else if (hour === 22 || hour > 22 && hour < 0) {
				BPM = 120;
			} else if (hour === 23 || hour > 23 && hour < 2) {
				BPM = 100;
			} else if (hour === 0 || hour > 0 && hour < 4) {
				BPM = 80;
			} else if (hour === 4 || hour > 4 && hour < 7) {
				BPM = 40;
			} else if (hour === 7 || hour > 7 && hour < 11) {
				BPM = 60;
			} else if (hour === 11 || hour > 11 && hour < 12) {
				BPM = 80;
			}

			return BPM;
		}

		function play() {

			if (timbre.isPlaying) {
				timbre.reset();
				timbre.pause();
			} else {
				timbre.reset();

				var pattern = new sc.Pshuf(sc.series(12), Infinity);

				var scale = new sc.Scale.major();

				var chords = getChords();

				var bpm = getBPM();
				var msec = timbre.timevalue('BPM' + bpm + ' L16');

				var osc = T('saw');

				var env = T('env', {
					table: [0.3, [1, msec * 48],
						[0.2, msec * 16]
					]
				});

				var gen = T('OscGen', {
					osc: osc,
					env: env,
					mul: 0.5
				});

				var pan = T('pan', gen);
				var synth = pan;

				synth = T('+saw', {
					freq: (msec * 2) + 'ms',
					add: 0.5,
					mul: 0.85
				}, synth);

				synth = T('lpf', {
					// todo:
					cutoff: 800,
					// todo:
					Q: 12
				}, synth);

				synth = T('reverb', {
					// todo:
					room: 0.95,
					damp: 0.1,
					mix: 0.75
				}, synth);

				T('interval', {
					interval: msec * 64
				}, function() {
					var root = pattern.next();
					chords.choose().forEach(function(i) {
						gen.noteOn(scale.wrapAt(root + i) + 60, 80);
						// gen.noteOn(scale.wrapAt(root + i) + 60, 80);
						console.log('octave ok')
					});
					pan.pos.value = Math.random() * 2 - 1;
				}).set({
					buddies: synth
				}).start();
			}
		}

		// play current location
		$scope.play = function() {
			if (!$scope.nowPlaying) {
				play();
			} else {
				T.pause();
				$scope.nowPlaying = false;
			}
		}

		// play other city
		$scope.playOtherCity = function() {
			// play();
		}

		$scope.pause = function() {
			T.pause();
		}

	}
]);