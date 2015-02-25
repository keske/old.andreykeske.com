/*

	Andrey Keske 2012
	
	Thnx: http://anoru.com
	
*/



_shadow_openShadowWindows = function() {
	
	for (var w = 1; w < _windows.length; w++) {	
	
		_obj.push('_obj'+w);
		
		_obj[w] = window.open("index.html", "windows"+w, "width="+_windows[w][0]+", height="+_windows[w][1]+", left="+_windows[w][2]+", top="+_windows[w][3]+", status=no, toolbar=no, menubar=no");
		
		_obj[w].resizeTo(_windows[w][0] - _v, _windows[w][1] - _v + 50);
    	_obj[w].moveTo((screen.width / 2) - ((_windows[w][0] - _v) / 2), (screen.height / 2) - ((_windows[w][1] - _v + 45) / 2));
	}
	
	_obj.push('_obj'+_windows.length + 1);
	
	_obj[w] = window.open("index.html", "windows"+_windows.length + 1, "width="+_windows[0][0]+", height="+_windows[0][1]+", left="+_windows[0][2]+", top="+_windows[0][3]+", status=no, toolbar=no, menubar=no");
	
	$('p').fadeIn(700);
	$('#slider').fadeIn(700);
		
}	




