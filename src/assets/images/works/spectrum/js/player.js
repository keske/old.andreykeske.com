(function () {

  var
    AUDIO_FILE = '/assets/images/works/spectrum/Drawl',
    fft = document.getElementById( 'fft' ),
    ctx = fft.getContext( '2d' ),
    dancer, kick;

  /*
   * Dancer.js magic
   */
  Dancer.setOptions({
    flashSWF : 'js/soundmanager2.swf',
    flashJS  : 'js/soundmanager2.js'
  });

  dancer = new Dancer();
  kick = dancer.createKick({
    onKick: function () {
    },
    offKick: function () {
    }
  }).on();

  dancer
    //.fft( fft, { fillStyle: '#666' })
    .load({ src: AUDIO_FILE, codecs: [ 'ogg', 'mp3' ]});

  Dancer.isSupported() || loaded();
  !dancer.isLoaded() ? dancer.bind( 'loaded', loaded ) : loaded();

  /*
   * Loading
   */
  function loaded() {

	_main();

  }

  // For debugging
  window.dancer = dancer;


})();
