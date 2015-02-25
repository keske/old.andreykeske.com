/*

	Andrey Keske
	http://www.andreykeske.com
	
	2013
	
*/

$(function() {

	// get file name and use for note
	filename = location.pathname.substr(location.pathname.lastIndexOf("/") + 1, location.pathname.length).replace('.html', '')

	$(window).keydown(function(e) {
		if ((e.which === 49 && e.metaKey) && (filename == 'do') // cmd or ctrl + 1
			|| (e.which === 50 && e.metaKey) && (filename == 're') // cmd or ctrl + 2
			|| (e.which === 51 && e.metaKey) && (filename == 'mi') // cmd or ctrl + 3
			|| (e.which === 52 && e.metaKey) && (filename == 'fa') // cmd or ctrl + 4
			|| (e.which === 53 && e.metaKey) && (filename == 'sol') // cmd or ctrl + 5
			|| (e.which === 54 && e.metaKey) && (filename == 'la') // cmd or ctrl + 6
			|| (e.which === 55 && e.metaKey) && (filename == 'si') // cmd or ctrl + 7
		) {
			playNote() // play
		}
	})

	play = 0
	$(window)
		.focus(function() { // window focus and play
			if (play == 0) { // play one time
				play = 1
				playNote()
			}
		}).blur(function() {
			play = 0
		})

	// add audio element
	$(window).load(function() {
		$('body').append('<audio id="player" src="sounds/' + filename + '.wav"></audio>') // file name is a note
	})

	function playNote() {
		document.getElementById('player').play()
	}

})