<?php 
	
	//echo 'Alt+Tab to Finder with open "Police Folder"';
	//echo 'color = ' . $_POST['color'];
	//system("./label.sh Green police/,,,,,,,,,,, ; ./label.sh Green police/,,,,,,,,,,");
	//system("./label.sh Gray police/,,,,,,,,,,");
	
	if ( $_POST['color'] == 'red' ) {
		//system("./label.sh Gray police/,,,,,,,,,,,");
		//system("./label.sh Red police/,,,,,,,,,,");
		system("./label.sh Gray police/,,,,,,,,,,, ; ./label.sh Red police/,,,,,,,,,, ; killall label.sh");
	}
	
	if ( $_POST['color'] == 'blue' ) {
		//system("./label.sh Blue police/,,,,,,,,,,,");
		//system("./label.sh Gray police/,,,,,,,,,,");
		system("./label.sh Gray police/,,,,,,,,,, ; ./label.sh Blue police/,,,,,,,,,,, ; killall label.sh");
	}
	
	//exit();
	
	//system("./label.sh Red wave/");
	//system("./label.sh Green wave/" . $_POST['elem']);
?>