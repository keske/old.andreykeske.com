<?php 
	echo 'folder = ' . $_POST['folder'] . ', elem = ' . $_POST['elem'];
	system("./label.sh Red wave/");
	system("./label.sh Green wave/" . $_POST['elem']);
?>