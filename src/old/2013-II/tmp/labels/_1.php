<?php 
	//system('open ./spe/SPS.app/Contents/MacOS/SPS');
	//exec('open ./spe/SPS.app/Contents/MacOS/SPS');
	//system('echo passthru("open ./spe/SPS.app/Contents/MacOS/SPS")>spe/res');
	

	shell_exec('sh label.sh Red spe/1');
	shell_exec('sh label.sh Green spe/2');
	shell_exec('sh label.sh Green spe/3');
	shell_exec('sh label.sh Green spe/4');

	
	//system('open label.sh Red spe/1');
	//proc_open("open", "./spe/SPS.app/Contents/MacOS/SPS");
	//fopen("open ./spe/SPS.app/Contents/MacOS/SPS", "r");
	//echo $_POST['spectrum'];
	//system('echo ' . $_POST['spectrum'] . '>spe/res');
?>