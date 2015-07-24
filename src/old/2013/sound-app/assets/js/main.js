var
		myAudioContext = [],
		myAudioAnalyser = [],
        sampleIsPlaying = [],
    myBuffers = {},
        mySpectrum,
        sampleIsPlaying_ = false,
        globalElement,
		windowWidth = $(window).width(),
	 	windowHeight = $(window).height(),

		canvas = [],
		ctx = [],
		freqByteData = [],

		SAMPLEPATH = [
			'_test'
		]

		CURRENTSAMPLE = 0;

		colorScheme = [
			// Тестовая схема
			[
				'red',
				'green',
				'blue',
				'orange'
			]
		]

$(document).ready(function() {
    for (i = 0; i <= 3; i++)
        sampleIsPlaying[1] = false;

	$('canvas').each(function(i) {
		// Работаем с массивами
		myAudioContext[i] = new webkitAudioContext()
    myAudioAnalyser[i] = myAudioContext[i].createAnalyser();
    myAudioAnalyser[i].connect(myAudioContext[i].destination);

		// Запрос на семпл
    var request = [];
		request[i] = new XMLHttpRequest();
    request[i]._soundName = i + 1;
		request[i].open('GET', 'assets/sounds/' + SAMPLEPATH[CURRENTSAMPLE] + '/' + (i + 1) + '.wav', true);
    request[i].responseType = 'arraybuffer';
    request[i].addEventListener('load', bufferSound, false);
    request[i].send();

		// Нужная переменная для bufferSound(event)
		globalElement = i;

		// Размеры канваса
		$('canvas:eq(' + i + ')')
			.attr('width', $(window).width())
			.attr('height', $(window).height())
		// Применяем цветовую палитру
		$('canvas:eq(' + i + ')')[0].getContext('2d').fillStyle = colorScheme[0][i];
	})
})

function bufferSound(event) {
    var request = event.target;
    var buffer = myAudioContext[globalElement].createBuffer(event.target.response, false);
    myBuffers[request._soundName] = myAudioContext[globalElement].createBuffer(request.response, false);
}

function playSound(sampleNum) {
    var source = myAudioContext[sampleNum].createBufferSource();
    source.buffer = myBuffers[sampleNum + 1];
    source.loop = false;
    source.connect(myAudioAnalyser[sampleNum])
    source.connect(myAudioContext[sampleNum].destination)
		// Анимация "спада" спетра
    myAudioAnalyser[sampleNum].smoothingTimeConstant = 0.85;
		// Проиграть с первой ноты
    source.noteOn(0);

		// Рисуем спектр к определенному звуку
    drawSpectrum(sampleNum);
}

function drawSpectrum(sampleNum) {
	if ( sampleIsPlaying[sampleNum] == false ) {
		freqByteData[sampleNum] = new Uint8Array(myAudioAnalyser[sampleNum].frequencyBinCount);
    myAudioAnalyser[sampleNum].getByteFrequencyData(freqByteData[sampleNum]);

		// Отправляем запрос с текущим сепмлом
		webkitRequestAnimationFrame(function() {
		    drawSpectrum(sampleNum);
		})

		// Выбираем нужный нам канвас под текущий семпл
		canvas = $('canvas:eq(' + sampleNum + ')')[0];
		// Получаем его контекст
		ctx[sampleNum] = canvas.getContext('2d');
		// Стираем...
		ctx[sampleNum].clearRect(0, 0, windowWidth, windowHeight);
		// ... И рисуем спектр
		for ( var i = 0; i < freqByteData[sampleNum].length; i++ ) {
        ctx[sampleNum].fillRect(i, windowHeight - (freqByteData[sampleNum][i] * (windowHeight / 255)), 1, windowHeight);
    }
	}
}

$(document).keydown(function (event) {
	document.title = event.keyCode
	switch (event.keyCode) {
    case 65: {
	 		sampleIsPlaying[0] = true;
        setTimeout(function() {
					sampleIsPlaying[0] = false;
					playSound(0);
				}, 10);
      }
    break;
		case 83: {
	 		sampleIsPlaying[1] = true;
        setTimeout(function() {
					sampleIsPlaying[1] = false;
					playSound(1);
				}, 10);
      }
		break;
		case 68: {
	 		sampleIsPlaying[2] = true;
        setTimeout(function() {
					sampleIsPlaying[2] = false;
					playSound(2);
				}, 10);
      }
    break;
		case 70: {
	 		sampleIsPlaying[3] = true;
        setTimeout(function() {
					sampleIsPlaying[3] = false;
					playSound(3);
				}, 10);
      }
    break;
	}
});
