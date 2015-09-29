'use strict';

angular.module('whenihave.services')
	.factory('Works', function() {

		var works = [

			{
				"title": "Black hole",
				"link": "black-hole.html",
				"img": "assets/images/works/black-hole/cover.png",
				"info": "In the space of my Desktop was noticed a black hole where the any information or object will be removed forever.",
				"count": "New"
			},

			{
				"title": "The Shell Game",
				"link": "the-shell-game.html",
				"img": "assets/images/works/the-shell-game/cover.png",
				"info": "My vision on the shell game.",
				"count": "New"
			},

			{
				"title": "The hairpin",
				"link": "the-hairpin.html",
				"img": "assets/images/works/the-hairpin/cover.jpg",
				"info": "Surreal scene about the real hairpin which holds the window in OS X.",
				"count": ""
			},

			{
				"title": "Football fans trolling",
				"link": "football-fans-trolling.html",
				"img": "assets/images/works/football-fans-trolling/cover.jpg",
				"info": "I took several emblems of my native football clubs and deliberately mingled their colors between them.",
				"count": ""
			},

			// {
			// 	"title": "Poetry of the streets ",
			// 	"link": "street-poetics.html",
			// 	"img": "assets/images/works/selection/cover.jpg",
			// 	"info": "Lead text",
			// 	"count": "New"
			// },

			// {
			// 	"title": "Hidden meaning",
			// 	"link": "selection.html",
			// 	"img": "assets/images/works/selection/cover.jpg",
			// 	"info": "Disable text selection highlighting",
			// 	"count": "New"
			// },

			{
				"title": "Tell me what you want",
				"link": "money.html",
				"img": "assets/images/works/money/cover.jpg",
				"info": "My work for online exhibition from M0US310n.net featuring Digital & Net.Art on the subject of Money & Error, put together by an anonymous curator «Vasily Zaitsev».",
				"count": ""
			},

			{
				"title": "Browser tabs as the piano keys",
				"link": "tabs-piano.html",
				"img": "assets/images/works/tabs-piano/img/screen.jpg",
				"info": "Once I woke up in the middle of night cause I got an idea: what if tabs in browser were like the piano keys?. I wrote the thought down in Asana and got back to sleep.",
				"count": ""
			},

			// {
			// 	"title": "Motivation",
			// 	"link": "motivation.html",
			// 	"img": "assets/images/works/motivation/cover.png",
			// 	"info": "Motivation icons for Photoshop & Illustrator",
			// 	"count": ""
			// },

			{
				"title": "Censorship in the iOS 7",
				"link": "censorship-in-ios7.html",
				"img": "assets/images/works/censorship-in-ios7/cover.jpg",
				"info": "The blur effect in the interface os iOS7 as censorship. And small bonus with Mac OS X.",
				"count": ""
			},

			{
				"title": "Hedgehog in the Fog",
				"link": "hedgehog-in-the-fog.html",
				"img": "assets/images/works/hedgehog-in-the-fog/cover.jpg",
				"info": "Adventure of hedgehog in web.",
				"count": ""
			},


			{
				"title": "Police siren alarm animation in OS X Finder",
				"link": "police.html",
				"img": "assets/images/works/police-car/cover.jpg",
				"info": "As you know the OS X gives the opportunity to set image folder as background and set colour labels for folders and files. Also that can be done from Terminal. What if we make animation from this labels?",
				"count": ""
			},

			{
				"title": "The catch",
				"link": "catch.html",
				"img": "assets/images/works/catch/cover.jpg",
				"info": "Window minimization represents a scene from the movie of catching a ghost. ",
				"count": ""
			},

			{
				"title": "Graphic works",
				"link": "graphics.html",
				"img": "assets/images/works/graphics/cover.jpg",
				"info": "Selected graphics works and photos.",
				"count": ""
			},

			{
				"title": "Spectrum at the browser bar",
				"link": "spectrum.html",
				"img": "assets/images/works/spectrum/cover.jpg",
				"info": "I try to show how typical browser bar will visualize sound spectrum.",
				"count": ""
			},

			{
				"title": "Mac OS UI Games",
				"link": "mac-os-ui-games.html",
				"img": "assets/images/works/mac-os-ui-games/cover.jpg",
				"info": "Two rather simple games, but based on the Mac OS X Interface.",
				"count": ""
			},

			{
				"title": "Invisible icons on the iPad",
				"link": "ipad-invisible-icons.html",
				"img": "assets/images/works/invisible-icons/cover.jpg",
				"info": "Imitation transparency of the icons.",
				"count": ""
			},

			{
				"title": "Friday dock",
				"link": "friday-dock.html",
				"img": "assets/images/works/research/friday-dock/cover.png",
				"info": "My dock on Friday.",
				"count": ""
			},

			{
				"title": "The shadows of the window",
				"link": "shadows.html",
				"img": "assets/images/works/research/shadow/cover.jpg",
				"info": "The slider controls the size of the shadow.",
				"count": ""
			},

			{
				"title": "I found the water on  the Mars",
				"link": "mars.html",
				"img": "assets/images/works/research/water-on-mars/water-on-mars.jpg",
				"info": "The windows composition",
				"count": ""
			},

			{
				"title": "Like",
				"link": "like.html",
				"img": "assets/images/works/research/like/cover.png",
				"info": "Drawing with the buttons.",
				"count": ""
			},

			{
				"title": "The key hole",
				"link": "keyhole.html",
				"img": "assets/images/works/research/keyhole/cover.png",
				"info": "I really love snooping and you?",
				"count": ""
			},

			{
				"title": "Volume experiments",
				"link": "volume.html",
				"img": "assets/images/works/research/volume/cover.png",
				"info": "Changing the volume level according to the provisions of window scrollbar or window size.",
				"count": ""
			},

			{
				"title": "Desktop background in the browser",
				"link": "background.html",
				"img": "assets/images/works/research/chrome/cover.jpg",
				"info": "Imitation that window having a hole. ",
				"count": ""
			}
		]

		return {
			get: function() {
				return works;
			},
		}

	});