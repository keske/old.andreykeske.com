'use strict';

angular.module('whenihave.services')
	.factory('Places', function() {

		var places = [{
				"city": "Prague",
				"country": "Czech Republic",
				"start": "4 Jan",
				"end": "6 Jan",

				"month": "january",
				"year": 2015,

				"date": new Date('2/4/2015'),

				"class": "",

				"cover": true,
			}, {
				"city": "Munich",
				"country": "Germany",
				"start": "2 Jan",
				"end": "3 Jan",

				"month": "january",
				"year": 2015,

				"date": new Date('1/2/2015'),

				"class": "white",

				"cover": true,
			},
			// 2014
			{
				"city": "Špindlerŭv Mlýn",
				"country": "Czech Republic",
				"start": "26 Dec",
				"end": "28 Dec",

				"month": "december",
				"year": 2014,

				"date": new Date('12/26/2014'),

				"class": "white",

				"cover": true,
			}, {
				"city": "Budapest",
				"country": "Hungry",
				"start": "9 Sep",
				"end": "10 Sep",

				"month": "september",
				"year": 2014,

				"date": new Date('9/9/2014'),

				"class": "",

				"cover": true,
			}, {
				"city": "Prague",
				"country": "Czech Republic",
				"start": "7 Sep",
				"end": "18 Sep",

				"month": "september",
				"year": 2014,

				"date": new Date('9/7/2014'),

				"class": "pink",

				"cover": true,
			}, {
				"city": "Berlin",
				"country": "Germany",
				"start": "13 Sep",
				"end": "14 Sep",

				"month": "september",
				"year": 2014,

				"date": new Date('9/13/2014'),

				"class": "",

				"cover": true,
			}, {
				"city": "Helsinki",
				"country": "Finland",
				"start": "17 Oct",
				"end": "",

				"month": "october",
				"year": 2014,

				"date": new Date('10/17/2014'),

				"class": "pink",

				"cover": true,
			}, {
				"city": "Riga",
				"country": "Latvia",
				"start": "1 May",
				"end": "1 May",

				"month": "may",
				"year": 2014,

				"date": new Date('5/1/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Prague",
				"country": "Czech Republic",
				"start": "9 Mar",
				"end": "10 Mar",

				"date": new Date('5/3/2014'),

				"month": "may",
				"year": 2014,

				"class": "",

				"cover": false,
			}, {
				"city": "Karlovy Vary",
				"country": "Czech Republic",
				"start": "9 Mar",
				"end": "10 Mar",

				"month": "may",
				"year": 2014,

				"date": new Date('5/5/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Viena",
				"country": "Austria",
				"start": "9 Mar",
				"end": "10 Mar",

				"month": "may",
				"year": 2014,

				"date": new Date('5/8/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Tallin",
				"country": "Estonia",
				"start": "9 Mar",
				"end": "10 Mar",

				"month": "march",
				"year": 2014,

				"date": new Date('3/9/2014'),

				"class": "",

				"cover": true,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "13 Jul",
				"end": "13 Jul",

				"month": "july",
				"year": 2014,

				"date": new Date('6/13/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "21 Jul",
				"end": "23 Jul",

				"month": "july",
				"year": 2014,

				"date": new Date('7/21/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "4 Aug",
				"end": "6 Aug",

				"month": "august",
				"year": 2014,

				"date": new Date('8/4/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "18 Aug",
				"end": "20 Aug",

				"month": "august",
				"year": 2014,

				"date": new Date('8/18/2014'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "29 Sep",
				"end": "2 Oct",

				"month": "october",
				"year": 2014,

				"date": new Date('10/29/2014'),

				"class": "",

				"cover": false,
			},
			// 2013
			{
				"city": "Yekaterinburg",
				"country": "Russia",
				"start": "1 Jan",
				"end": "12 Apr",

				"month": "january",
				"year": 2013,

				"date": new Date('1/1/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "21 may",
				"end": "23 may",

				"month": "may",
				"year": 2013,

				"date": new Date('5/21/2013'),

				"class": "",

				"cover": false,
			},
			// 2012
			{
				"city": "Kronstadt",
				"country": "Russia",
				"start": "29 Aug",
				"end": "29 Aug",

				"month": "august",
				"year": 2012,

				"date": new Date('8/29/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Yekaterinburg",
				"country": "Russia",
				"start": "19 Sep",
				"end": "25 Sep",

				"month": "september",
				"year": 2012,

				"date": new Date('19/10/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "25 Jan",
				"end": "28 Jan",

				"month": "january",
				"year": 2013,

				"date": new Date('1/25/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Wrocław",
				"country": "Poland",
				"start": "21 April",
				"end": "21 April",

				"month": "april",
				"year": 2012,

				"date": new Date('4/21/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Prague",
				"country": "Czech Republic",
				"start": "24 April",
				"end": "30 April",

				"date": new Date('4/24/2013'),

				"month": "april",
				"year": 2012,

				"class": "",

				"cover": false,
			}, {
				"city": "Yekaterinburg",
				"country": "Russia",
				"start": "8 May",
				"end": "15 June",

				"month": "may",
				"year": 2012,

				"date": new Date('5/8/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "6 may",
				"end": "7 may",

				"month": "may",
				"year": 2012,

				"date": new Date('5/6/2013'),

				"class": "",

				"cover": false,
			}, {
				"city": "Astrakhan",
				"country": "Russia",
				"start": "4 may",
				"end": "5 may",

				"month": "may",
				"year": 2012,

				"date": new Date('5/4/2013'),

				"class": "",

				"cover": false,
			},
			// 2011
			{
				"city": "Amsterdam",
				"country": "Netherlands",
				"start": "Autumn",
				"end": "",

				"month": "September",
				"year": 2011,

				"date": new Date('9/4/2011'),

				"class": "",

				"cover": true,
			}, {
				"city": "Helsinki",
				"country": "Finland",
				"start": "Autumn",
				"end": "",

				"month": "September",
				"year": 2011,

				"date": new Date('9/4/2011'),

				"class": "white",

				"cover": true,
			}, {
				"city": "Stockholm",
				"country": "Sweden",
				"start": "Autumn",
				"end": "",

				"month": "September",
				"year": 2011,

				"date": new Date('9/4/2011'),

				"class": "",

				"cover": true,
			}, {
				"city": "Paris",
				"country": "France",
				"start": "Autumn",
				"end": "",

				"month": "September",
				"year": 2011,

				"date": new Date('9/4/2011'),

				"class": "white",

				"cover": true,
			}, {
				"city": "Tunis",
				"country": "Tunis",
				"start": "Autumn",
				"end": "",

				"month": "September",
				"year": 2011,

				"date": new Date('9/4/2011'),

				"class": "white",

				"cover": true,
			},
			// 2010
			{
				"city": "Tumen",
				"country": "Russia",
				"start": "1 Jan",
				"end": "2 Jan",

				"month": "january",
				"year": 2010,

				"date": new Date('1/1/2010'),

				"class": "",

				"cover": false,
			}, {
				"city": "Sukhoy Log",
				"country": "Russia",
				"start": "Winter",
				"end": "",

				"month": "january",
				"year": 2010,

				"date": new Date('1/1/2010'),

				"class": "",

				"cover": false,
			}, {
				"city": "Moscow",
				"country": "Russia",
				"start": "Winter",
				"end": "",

				"month": "january",
				"year": 2010,

				"date": new Date('1/1/2010'),

				"class": "",

				"cover": false,
			},
			// 2009
			{
				"city": "Moscow",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Tobolsk",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Tumen",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Kurgan",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Krasnoufimsk",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Asbest",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Nevyansk",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Nizhny Tagil",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			}, {
				"city": "Mias",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2009,

				"date": new Date('6/6/2009'),

				"class": "",

				"cover": false,
			},
			// 2008
			{
				"city": "Ivdel",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			}, {
				"city": "Krasnoturinsk",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			}, {
				"city": "Yaroslavl",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			}, {
				"city": "Shadrinsk",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			}, {
				"city": "Polevskoy",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			}, {
				"city": "Serov",
				"country": "Russia",
				"start": "Summer",
				"end": "",

				"month": "june",
				"year": 2008,

				"date": new Date('6/6/2008'),

				"class": "",

				"cover": false,
			},
		];

		return {
			get: function() {
				return places;
			},
		}

	});