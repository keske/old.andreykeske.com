var _windowWidth = 400;
var _windowHeight = 300;

var _size = 0;
var _side = 0;

var _windowTop = (screen.height / 2) - (_windowHeight / 2);
var _windowLeft = (screen.width / 2) - (_windowWidth / 2);
var _v = 15;
var _obj = [];

var _windows = [

	[
		_windowWidth,
		_windowHeight,
		(screen.width / 2) - ((_windowWidth) / 2),
		(screen.height / 2) - ((_windowHeight) / 2)
	],
	
	[
		_windowWidth - 2,
		_windowHeight - 2,
		(screen.width / 2) - ((_windowWidth - 2) / 2),
		(screen.height / 2) - ((_windowHeight - 2) / 2)
	],
	

	[
		_windowWidth - 4,
		_windowHeight - 4,
		(screen.width / 2) - ((_windowWidth - 4) / 2),
		(screen.height / 2) - ((_windowHeight - 4) / 2)
	],
	
	/*
	[
		_windowWidth - 6,
		_windowHeight - 6,
		(screen.width / 2) - ((_windowWidth - 6) / 2),
		(screen.height / 2) - ((_windowHeight - 6) / 2)
	],
	
	
	[
		_windowWidth - 8,
		_windowHeight - 8,
		(screen.width / 2) - ((_windowWidth - 8) / 2),
		(screen.height / 2) - ((_windowHeight - 8) / 2)
	],
	
	[
		_windowWidth - 4,
		_windowHeight - 4,
		($(window).width() / 2) - ((_windowWidth - 4) / 2),
		($(window).height() / 2) - ((_windowHeight - 4) / 2)
	],
	
	[
		_windowWidth - 6,
		_windowHeight - 6,
		($(window).width() / 2) - ((_windowWidth - 6) / 2),
		($(window).height() / 2) - ((_windowHeight - 6) / 2)
	],
	
	[
		_windowWidth - 8,
		_windowHeight - 8,
		($(window).width() / 2) - ((_windowWidth - 8) / 2),
		($(window).height() / 2) - ((_windowHeight - 8) / 2)
	],
	
	[
		_windowWidth - 10,
		_windowHeight - 10,
		($(window).width() / 2) - ((_windowWidth - 10) / 2),
		($(window).height() / 2) - ((_windowHeight - 10) / 2)
	] */

]