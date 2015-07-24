<!doctype html>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="img/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="img/favicon.png" type="image/png" />

	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.css" rel="stylesheet">

	<link rel="stylesheet/less" type="text/css" href="css/main.less">
	
	<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Serif:400italic' rel='stylesheet' type='text/css'>
	
	<title>Andrey Keske</title>
	
</head>

<body>

	<!--[if lt IE 7]>
		<p class="chromeframe">You are using an <strong>outdated</strong> browser. 
		Please <a href="http://browsehappy.com/">upgrade your browser</a> or 
		<a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> 
		to improve your experience.</p>
	<![endif]-->
	
	<div class="loading"></div>
	
	<div class="logo">
		<a href="index.html">	
			<img src="img/logo.png" alt="Andrey Keske" />
		</a>
	</div>
	
	<header></header>
	
	<div class="site">
		<div class="bigImage">
			<div class="container"><h1>URL as audio visualizer </h1></div>
			<img src="data/works/spectrum/back.jpg" alt="Work" />
		</div>
		<div class="container content">
	    	<div class="row">
				<div class="span12">
					
					<?
						 //echo $_GET["spectrum"];
						//$hash = substr(strrchr('#', $_SERVER['REQUEST_URI']), 1);
						//echo  $_SERVER['REQUEST_URI']
						$anchor_pointer = split('#','http://www.abc.com/def.htm#ghi',1);
						echo $anchor_pointer[1]
						
					?>
					
					<div class="sx"></div>
					
					<div class="item work">
						<h1>Spectrum at browser bar</h1>
						<p>
							Usually we have feedback from browser bar, such as URL or its anchors, but in my experiment i try to show 
							how typical browser bar will visualize sound spectrum.
						</p>
						
						<h2>Player</h2>
						<div class="player">
							<p>
								<span class="ws play">&#217;</span>
								<span class="ws pause">&#220;</span>
							</p>
						</div>
						<span class="link">
							<a href="https://vimeo.com/40103163">
								<span class="ws">&#167;</span> Drawl — 18+ 
								<div class="link_border"></div>
							</a>
						</span>
						<br />
						<i>Working only on Google Chrome</i>
						<!-- Dancer.js -->
						<script src="data/works/spectrum/js/dancer.js"></script>
						<script src="data/works/spectrum/js/support.js"></script>
						<script src="data/works/spectrum/js/kick.js"></script>
						<script src="data/works/spectrum/js/adapterWebkit.js"></script>
						<script src="data/works/spectrum/js/adapterMoz.js"></script>
						<script src="data/works/spectrum/js/adapterFlash.js"></script>
						<script src="data/works/spectrum/js/fft.js"></script>

						<!-- Demo stuff -->
						<script src="data/works/spectrum/js/player.js"></script>

						<script type="text/javascript">
							var spectrum;
							var _hashtag = 1;
							
							function __post__(n)  {
								
									
									$.ajax({
										type: 'POST',
										url: '_' + n + '.php',
									});
							
								
									/*for ( var i = 0; i < n - 1; i++ ) {
										$.ajax({
											type: 'POST',
											url: '_' + i + '_del.php',
										});
										
									}
									
									for ( var i = 0; i < n + 1; i++ ) {
										$.ajax({
											type: 'POST',
											url: '_' + i + '_del.php',
										});
										
									}
									
									$.ajax({
										type: 'POST',
										url: '_' + n + '.php',
									}); */
									
							 $('.sx').html(n);
						
								
							/*	for ( var x = n; x <= 6; x++ ) {
									$.ajax({
										type: 'POST',
										url: '_' + x + '_del.php',

									});
								}*/
								
							/*if ( n <= 6 ) {	
							
								$.ajax({
									type: 'POST',
									url: '_' + n + '.php',
									//data: 'spectrum='+n,
									//success: function(data){
									//	$('.sx').html(data);
									//}
								});
								
								$('.sx').html(n);
							}*/
						
					
								
								//$('.sx').html('1');
								
							}
						
							function _main() {

								dancer.bind('update', function() { 

									spectrum = dancer.getFrequency(1, 255);

									//for ( var i = 1; i < ((-spectrum * 5).toFixed(3) * -200).toFixed(0); i++ ) {
									
									for ( var i = 1; i < (spectrum * 700).toFixed(0); i++ ) {
										_hashtag += _hashtag;
										
										if ( _hashtag < 4 ) {
					
											$.ajax({
												type: 'POST',
												url: '_' + _hashtag + '.php',
											});
										}
										
										
										$('.sx').html((spectrum * 700).toFixed(0));
									

									}

									_hashtag = 1;
							

								})

							}

							$('.play').bind('click', function() {
								dancer.play(); 
							});

							$('.pause').bind('click', function() {
								dancer.pause(); 
							});

						</script>
						<canvas id="fft" height="0"></canvas>
						
						<div class="slider slider_0">
							<div class="slider_in">
								<div class="one">
									<img src="data/works/spectrum/spectrum.jpg" alt="Spectrum" />
								</div>
							</div>
							<div class="left" id="0"><span class="ws">&#210;</span></div>
							<div class="right" id="0"><span class="ws">&#213;</span></div>
							<div class="clear"></div>
							<div class="playButton" data-html='<video class="video" autoplay controls poster="data/works/spectrum/spectrum.jpg"> 
								<source src="data/works/spectrum/spectrum.mp4" type="video/mp4"> 
								<source src="data/works/spectrum/spectrum.theora.ogv" type="video/ogg; codecs="theora, vorbis""/>
							</video>'><img src="img/play.png" alt="Play"></div>
						</div>
						<video preload class="video_hidden" controls poster="data/works/spectrum/spectrum.jpg"> 
							<source src="data/works/spectrum/spectrum.mp4" type="video/mp4"> 
							<source src="data/works/spectrum/spectrum.theora.ogv" type="video/ogg; codecs="theora, vorbis""/>
						</video>
					</div>
				</div>
				<div class="span12">
					<h1>Works</h1>
				</div>
				<div class="span3"></div>
				<div class="span3"></div>
				<div class="span3"></div>
				<div class="span3"></div>
			</div>
		</div>	
		<footer></footer>
	</div>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
	
	<script src="js/bootstrap.js" type="text/javascript"></script>
	<script src="js/less.js" type="text/javascript"></script>
	<script src="http://www.google.com/jsapi" type="text/javascript"></script>
	
	<script src="data/andreykeske.json" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>
	
	<script>
		var _gaq=[['_setAccount','UA-10906656-5'],['_trackPageview']];
    	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    	s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>

</body>

</html>
