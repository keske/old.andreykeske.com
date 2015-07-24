SOUNDS = ["1", "2"]

myAudioContext = []
myAudioAnalyser = []
myBuffers = {}
mySpectrum = undefined
sampleIsPlaying = false
globalElement = undefined

windowWidth = $(window).width()
windowHeight = $(window).height()

canvas = []
ctx = []
freqByteData = []

SAMPLEPATH = "_test"

colorScheme = [
	# Test
	["red", "green"]
]

$(document).ready ->
  len = $("canvas").length
  i = 0

  while i < len
    myAudioContext.push new webkitAudioContext()
    myAudioAnalyser.push myAudioContext[i].createAnalyser()
    myAudioAnalyser[i].connect myAudioContext[i].destination

    request = []
    request[i] = new XMLHttpRequest()
    request[i]._soundName = SOUNDS[i]
    request[i].open "GET", "assets/sounds/" + SAMPLEPATH + "/" + SOUNDS[i] + ".wav", true
    request[i].responseType = "arraybuffer"
    request[i].addEventListener "load", bufferSound, false
    request[i].send()

    $("canvas:eq(" + i + ")").attr("width", $(window).width()).attr "height", $(window).height()

    globalElement = i
    i++

  $("canvas").each (index) ->
    $this = $(this)
    $this[0].getContext("2d").fillStyle = colorScheme[0][index]

bufferSound = (event) ->
  request = event.target
  buffer = myAudioContext[globalElement].createBuffer(event.target.response, false)
  myBuffers[request._soundName] = myAudioContext[globalElement].createBuffer(request.response, false)


playSound = (sampleNum) ->
  source = myAudioContext[sampleNum].createBufferSource()
  source.buffer = myBuffers[SOUNDS[sampleNum]]
  source.loop = false
  source.connect myAudioAnalyser[sampleNum]
  source.connect myAudioContext[sampleNum].destination
  myAudioAnalyser[sampleNum].smoothingTimeConstant = 0.9
  source.noteOn 0
  drawSpectrum sampleNum

drawSpectrum = (sampleNum) ->
  if sampleIsPlaying is false
    canvas = $("canvas:eq(" + sampleNum + ")")[0]
    ctx[sampleNum] = canvas.getContext("2d")
    webkitRequestAnimationFrame ->
      drawSpectrum sampleNum

    freqByteData[sampleNum] = new Uint8Array(myAudioAnalyser[sampleNum].frequencyBinCount)
    myAudioAnalyser[sampleNum].getByteFrequencyData freqByteData[sampleNum]
    ctx[sampleNum].clearRect 0, 0, windowWidth, windowHeight

    i = 0
    while i < freqByteData[sampleNum].length
      ctx[sampleNum].fillRect i, windowHeight - (freqByteData[sampleNum][i] * (windowHeight / 255)), 1, windowHeight
      i++

$(document).keydown (event) ->
  switch event.keyCode
    when 65
      sampleIsPlaying = true
      setTimeout (->
        sampleIsPlaying = false
        playSound 0
      ), 10
    when 83
      sampleIsPlaying = true
      setTimeout (->
        sampleIsPlaying = false
        playSound 1
      ), 10
